import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { runInNewContext } from 'node:vm'
import test from 'node:test'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const marketRoot = resolve(scriptDir, '../..')
const workspaceRoot = resolve(marketRoot, '..')
const pwaRoot = resolve(workspaceRoot, 'sat20wallet/pwa')
const require = createRequire(resolve(marketRoot, 'package.json'))
const ts = require('typescript')
const sourceRoot = resolve(process.env.MARKET_RGB_LOCK_FILTER_SOURCE || marketRoot)
const INDEXER_URL = 'http://regtest-indexer.local'
const ADDRESS = 'bcrt1q-test-account'
const OTHER_ADDRESS = 'bcrt1q-other-account'
const TXID_LOCKED_RGB = 'ba79c58d5475dd9da6be600789b473b2482c48f43d00256f874e73ec0bc06fd6'
const TXID_LOCKED_OTHER = '12'.repeat(32)
const TXID_UNLOCKED = '34'.repeat(32)
const TARGET_VALUE = 77_069_404
const MIN_VALUE = 1

const compileTypeScript = (source) => ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2022,
    esModuleInterop: true,
  },
}).outputText

function loadGetUtxoByValue(runtime) {
  const source = readFileSync(resolve(sourceRoot, 'api/request.ts'), 'utf8')
  const start = source.indexOf('export const getUtxoByValue = async ({')
  const end = source.indexOf('// export const fetchChainFeeRate', start)
  assert.ok(start >= 0 && end > start, 'real getUtxoByValue source boundary exists')
  const module = { exports: {} }
  runInNewContext(compileTypeScript(source.slice(start, end)), {
    module,
    exports: module.exports,
    process: { env: {
      NEXT_PUBLIC_REGTEST_L1_INDEXER_URL: INDEXER_URL,
      NEXT_PUBLIC_ORDX_HOST: 'http://main-indexer.local',
    } },
    fetch: runtime.fetch,
    useReactWalletStore: runtime.store,
    isPwaWallet: (wallet) => !!wallet?.isSat20Pwa,
    Error,
  })
  return module.exports.getUtxoByValue
}

function indexerResponse() {
  return {
    code: 0,
    data: [
      { txid: TXID_LOCKED_RGB, vout: 2, value: TARGET_VALUE },
      { txid: TXID_LOCKED_OTHER, vout: 1, value: 90_000_000 },
      { txid: TXID_UNLOCKED, vout: 0, value: 100_000_000 },
    ],
    network: 'regtest',
  }
}

function createApiHarness({
  pwa = true,
  locked = {
    [`${TXID_LOCKED_RGB}:2`]: JSON.stringify({ reason: 'rgb' }),
    [`${TXID_LOCKED_OTHER}:1`]: JSON.stringify({ reason: 'reservation' }),
  },
  response = indexerResponse(),
  beforeJson,
  getAllLockedUtxo,
} = {}) {
  const calls = { urls: [], lockedAddresses: [] }
  const state = {
    connected: true,
    address: ADDRESS,
    publicKey: 'test-public-key-a',
    network: 'regtest',
    btcWallet: pwa ? { isSat20Pwa: true } : { isSat20Pwa: false },
  }
  if (pwa) {
    state.btcWallet.getAllLockedUtxo = async (address) => {
      calls.lockedAddresses.push(address)
      if (getAllLockedUtxo) return getAllLockedUtxo({ state, address, calls })
      return locked
    }
  }
  const runtime = {
    store: { getState: () => state },
    fetch: async (url) => {
      calls.urls.push(url)
      return {
        json: async () => {
          beforeJson?.(state)
          return response
        },
      }
    },
  }
  return {
    getUtxoByValue: loadGetUtxoByValue(runtime),
    state,
    calls,
    response,
  }
}

const outpoints = (response) => response.data.map((utxo) => `${utxo.txid}:${utxo.vout}`)
const asPlainJson = (value) => JSON.parse(JSON.stringify(value))

function createPollingHarness(getUtxoByValue) {
  const source = readFileSync(resolve(sourceRoot, 'lib/hooks/useUtxoPolling.ts'), 'utf8')
  const module = { exports: {} }
  let list = []
  let poll
  const imports = {
    // Exercise the production fetcher and cache callback without mounting UI
    // or starting background polling timers.
    react: {
      useEffect() {},
      useRef: () => ({ current: null }),
      useState: (value) => [value, () => {}],
      useCallback: (callback) => callback,
    },
    'swr/mutation': (_key, fetcher, options) => {
      poll = async () => options.onSuccess(await fetcher())
      return { trigger: poll }
    },
    '@/api': { getUtxoByValue },
    '@/store/utxo': { useUtxoStore: () => ({ setList: (next) => { list = next } }) },
  }
  runInNewContext(compileTypeScript(source), {
    module,
    exports: module.exports,
    require: (name) => {
      assert.ok(name in imports, `unexpected polling import: ${name}`)
      return imports[name]
    },
  })
  module.exports.useUtxoPolling(ADDRESS, 'regtest')
  return { poll, get list() { return list } }
}

test('polling clears cached spendable inputs when all remaining UTXOs become locked', async () => {
  let locked = {}
  const api = createApiHarness({ getAllLockedUtxo: async () => locked })
  const polling = createPollingHarness(api.getUtxoByValue)

  await polling.poll()
  assert.deepEqual(outpoints({ data: polling.list }), [
    `${TXID_LOCKED_RGB}:2`, `${TXID_LOCKED_OTHER}:1`, `${TXID_UNLOCKED}:0`,
  ])
  assert.ok(polling.list.every((utxo) => utxo.status === 'unspend' && utxo.location === 'remote'))

  locked = Object.fromEntries(api.response.data.map((utxo) => [
    `${utxo.txid}:${utxo.vout}`, JSON.stringify({ reason: 'rgb' }),
  ]))
  await polling.poll()
  assert.equal(polling.list.length, 0, 'locked inputs must disappear from the consumer cache')

  locked = {}
  await polling.poll()
  assert.equal(polling.list.length, 3, 'unlocked inputs become available again on the next poll')
})

test('PWA getUtxoByValue excludes RGB-locked and other locked inputs while retaining unlocked inputs and response shape', async () => {
  const harness = createApiHarness()
  const result = await harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE })
  assert.deepEqual(outpoints(result), [`${TXID_UNLOCKED}:0`])
  assert.equal(result.code, 0)
  assert.equal(result.network, 'regtest')
  assert.deepEqual(harness.calls.lockedAddresses, [ADDRESS])
  assert.deepEqual(harness.calls.urls, [`${INDEXER_URL}/utxo/address/${ADDRESS}/${MIN_VALUE}`])
})

test('non-PWA getUtxoByValue keeps the public indexer response and does not require a lock provider', async () => {
  const harness = createApiHarness({ pwa: false })
  const result = await harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE })
  assert.equal(result, harness.response)
  assert.equal(harness.calls.lockedAddresses.length, 0)
  assert.deepEqual(outpoints(result), [
    `${TXID_LOCKED_RGB}:2`,
    `${TXID_LOCKED_OTHER}:1`,
    `${TXID_UNLOCKED}:0`,
  ])
})

test('PWA with an empty lock map preserves the minvalue route, all returned UTXOs, and response fields', async () => {
  const response = {
    code: 0,
    data: [{ txid: TXID_UNLOCKED, vout: 0, value: TARGET_VALUE }],
    cursor: 'fixture-cursor',
  }
  const harness = createApiHarness({ locked: {}, response })
  const result = await harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: TARGET_VALUE })
  assert.deepEqual(asPlainJson(result), asPlainJson(response))
  assert.deepEqual(harness.calls.urls, [`${INDEXER_URL}/utxo/address/${ADDRESS}/${TARGET_VALUE}`])
})

test('PWA preserves an indexer error response that contains no UTXO list', async () => {
  const response = { code: -1, msg: 'indexer unavailable' }
  const harness = createApiHarness({ locked: {}, response })
  const result = await harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE })
  assert.equal(result, response)
})

test('PWA refuses to use public UTXOs when locked-UTXO reading fails', async () => {
  const harness = createApiHarness({
    getAllLockedUtxo: async () => { throw new Error('locked UTXO read failed') },
  })
  await assert.rejects(
    harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE }),
    /locked UTXO read failed/,
  )
  assert.equal(harness.calls.urls.length, 1)
})

test('PWA rejects a non-object locked-UTXO response', async () => {
  const harness = createApiHarness({ locked: null })
  await assert.rejects(
    harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE }),
    /locked UTXO response/i,
  )
  assert.equal(harness.calls.urls.length, 1)
})

test('PWA rejects malformed locked-UTXO entries instead of treating them as an empty lock set', async () => {
  const harness = createApiHarness({
    locked: { [`${TXID_LOCKED_RGB}:2`]: { reason: 'unexpected object' } },
  })
  await assert.rejects(
    harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE }),
    /locked UTXO response/i,
  )
  assert.equal(harness.calls.urls.length, 1)
})

test('PWA refuses to use public UTXOs if the wallet provider lacks the locked-UTXO method', async () => {
  const harness = createApiHarness({ pwa: false })
  harness.state.btcWallet = { isSat20Pwa: true }
  await assert.rejects(
    harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE }),
    /locked UTXO provider/i,
  )
  assert.equal(harness.calls.urls.length, 0)
})

test('PWA rejects the candidates when account identity changes during locked-UTXO reading', async () => {
  const harness = createApiHarness({
    getAllLockedUtxo: async ({ state }) => {
      state.address = OTHER_ADDRESS
      state.publicKey = 'test-public-key-b'
      return {}
    },
  })
  await assert.rejects(
    harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE }),
    /wallet identity or network changed/i,
  )
  assert.equal(harness.calls.urls.length, 1)
})

test('PWA rejects the candidates when wallet identity changes during the indexer request', async () => {
  const harness = createApiHarness({
    locked: {},
    beforeJson: (state) => {
      state.address = OTHER_ADDRESS
      state.publicKey = 'test-public-key-b'
    },
  })
  await assert.rejects(
    harness.getUtxoByValue({ address: ADDRESS, network: 'regtest', value: MIN_VALUE }),
    /wallet identity or network changed/i,
  )
  assert.equal(harness.calls.urls.length, 1)
  assert.equal(harness.calls.lockedAddresses.length, 0)
})

test('provider issues the existing locked-UTXO read action accepted by the production DApp policy and request guard', async () => {
  const providerSource = readFileSync(resolve(sourceRoot, 'lib/sat20PwaProvider.ts'), 'utf8')
  const module = { exports: {} }
  const posted = []
  const listeners = new Map()
  const parent = { postMessage: (message, targetOrigin) => posted.push({ message, targetOrigin }) }
  const window = {
    parent,
    location: { origin: 'http://127.0.0.1:3001', href: 'http://127.0.0.1:3001/market/?network=regtest' },
    history: { pushState() {}, replaceState() {} },
    addEventListener: (name, listener) => listeners.set(name, listener),
  }
  runInNewContext(compileTypeScript(providerSource), {
    module,
    exports: module.exports,
    window,
    crypto: { getRandomValues: (bytes) => { bytes.fill(1); return bytes } },
    setTimeout,
    clearTimeout,
  })
  const provider = module.exports.installSat20PwaProvider()
  const onMessage = listeners.get('message')
  onMessage({
    source: parent,
    origin: 'http://wallet.local',
    data: { type: 'SAT20_DAPP_EVENT', protocol: 'sat20-dapp-connect', event: 'ready', payload: {} },
  })
  assert.equal(typeof provider.getAllLockedUtxo, 'function')
  const lockedMap = { [`${TXID_LOCKED_RGB}:2`]: JSON.stringify({ reason: 'rgb' }) }
  const resultPromise = provider.getAllLockedUtxo(ADDRESS)
  const request = posted.map(({ message }) => message)
    .filter((message) => message.type === 'SAT20_DAPP_REQUEST')
    .at(-1)
  assert.ok(request)
  assert.equal(request.action, 'GET_ALL_LOCKED_UTXO')
  assert.deepEqual(asPlainJson(request.params), { address: ADDRESS })

  const bridgeSource = readFileSync(resolve(pwaRoot, 'composables/usePwaDappBridge.ts'), 'utf8')
  const bridgeStart = bridgeSource.indexOf('const MESSAGE_ACTION_BY_KEY =')
  const bridgeEnd = bridgeSource.indexOf('const unwrapTuple =', bridgeStart)
  assert.ok(bridgeStart >= 0 && bridgeEnd > bridgeStart, 'production DApp action-normalizer boundary exists')
  const bridgeModule = { exports: {} }
  runInNewContext(
    `${compileTypeScript(bridgeSource.slice(bridgeStart, bridgeEnd))}\nmodule.exports = { normaliseAction, asParamsObject };`,
    {
      module: bridgeModule,
      exports: bridgeModule.exports,
      ACTION_ALIASES: {},
      Message: { MessageAction: { GET_ALL_LOCKED_UTXO: 'GET_ALL_LOCKED_UTXO' } },
    },
  )
  const action = bridgeModule.exports.normaliseAction(request.action)
  assert.equal(action, 'GET_ALL_LOCKED_UTXO')
  assert.deepEqual(asPlainJson(bridgeModule.exports.asParamsObject(action, request.params)), { address: ADDRESS })

  const policySource = readFileSync(resolve(pwaRoot, 'lib/dapp-policy.ts'), 'utf8')
    .replace(/^import \{ Message \} from '@\/types\/message'\s*$/m, '')
  const policyModule = { exports: {} }
  runInNewContext(compileTypeScript(policySource), {
    module: policyModule,
    exports: policyModule.exports,
    Message: { MessageAction: { GET_ALL_LOCKED_UTXO: 'GET_ALL_LOCKED_UTXO' } },
  })
  assert.deepEqual(asPlainJson(policyModule.exports.getDappActionPolicy(action)), {
    capability: 'utxo:read',
    approval: 'none',
  })

  const guardSource = readFileSync(resolve(pwaRoot, 'lib/dapp-request-guard.ts'), 'utf8')
  const guardModule = { exports: {} }
  runInNewContext(compileTypeScript(guardSource), {
    module: guardModule,
    exports: guardModule.exports,
    Date,
    Map,
  })
  const finish = new guardModule.exports.DappRequestGuard().begin(
    request.origin,
    request.requestId,
    request.nonce,
    request.expiresAt,
  )
  finish()

  onMessage({
    source: parent,
    origin: 'http://wallet.local',
    data: {
      type: 'SAT20_DAPP_RESPONSE',
      protocol: 'sat20-dapp-connect',
      requestId: request.requestId,
      success: true,
      result: lockedMap,
    },
  })
  assert.deepEqual(asPlainJson(await resultPromise), lockedMap)
})
