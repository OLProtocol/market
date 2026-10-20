import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { runInNewContext } from 'node:vm'

const testDir = dirname(fileURLToPath(import.meta.url))
const marketRoot = resolve(testDir, '../..')
const workspaceRoot = resolve(marketRoot, '..')
const pwaRoot = resolve(workspaceRoot, 'sat20wallet/pwa')
const marketRequire = createRequire(resolve(marketRoot, 'package.json'))
const pwaRequire = createRequire(resolve(pwaRoot, 'package.json'))
const ts = marketRequire('typescript')
const { transformSync } = pwaRequire('esbuild')


function compileTypeScript(source) {
  return ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  }).outputText
}

function buildPwaSignedPayload() {
  const source = readFileSync(resolve(pwaRoot, 'lib/wallet-message-domain.ts'), 'utf8')
  const compiled = compileTypeScript(source)
  const module = { exports: {} }
  runInNewContext(compiled, {
    module,
    exports: module.exports,
    TextEncoder,
    URL,
    BigInt,
  })
  return module.exports.buildWalletMessagePayload({
    network: 'regtest',
    origin: 'http://127.0.0.1:3001',
    timestamp: '1792325795757',
    nonce: '41dbb6553be4afabfe52da45a12a3152',
    message: 'ordx-marketplace',
  }, 1792325795757)
}

function createComponentApproval({ domainPayload, signResult }) {
  const path = resolve(pwaRoot, 'components/approve/SignMessage.vue')
  const component = readFileSync(path, 'utf8')
  const match = component.match(/<script setup lang="ts">([\s\S]*?)<\/script>/)
  assert.ok(match, 'SignMessage.vue script setup should exist')
  const script = match[1].replace(/^import .*$/gm, '')
  const compiled = transformSync(script, { loader: 'ts', target: 'es2022', format: 'cjs' }).code
  const events = []
  const props = {
    data: {
      message: 'ordx-marketplace',
      domainPayload,
      digest: 'a'.repeat(64),
      origin: 'http://127.0.0.1:3001',
      network: 'regtest',
      timestamp: '1792325795757',
      nonce: '41dbb6553be4afabfe52da45a12a3152',
    },
    metadata: { identityGeneration: 1 },
  }
  const module = { exports: {} }
  runInNewContext(`${compiled}\nmodule.exports = { confirm, canSign };`, {
    module,
    exports: module.exports,
    defineProps: () => props,
    defineEmits: () => (...args) => events.push(args),
    computed: (fn) => ({ get value() { return fn() } }),
    walletManager: {
      signMessage: async (payload) => {
        assert.equal(payload, domainPayload)
        return [undefined, signResult]
      },
    },
    assertWalletIdentityReady: () => 1,
    Error,
  })
  return { ...module.exports, events }
}

test('PWA approval returns the unchanged compact signature with its exact signed payload', async () => {
  const signedPayload = buildPwaSignedPayload()
  assert.equal(signedPayload, 'SAT20 Wallet Message\nversion:1\nnetwork:regtest\norigin:http://127.0.0.1:3001\ntimestamp:1792325795757\nnonce:41dbb6553be4afabfe52da45a12a3152\nmessage-length:16\n\nordx-marketplace')
  const approval = createComponentApproval({
    domainPayload: signedPayload,
    signResult: { signature: 'compact-signature-vector' },
  })
  assert.equal(approval.canSign.value, true)
  await approval.confirm()
  assert.deepEqual(JSON.parse(JSON.stringify(approval.events)), [[
    'confirm',
    { signature: 'compact-signature-vector', domainPayload: signedPayload },
  ]])
})

test('PWA approval refuses to emit a signature when domain payload context is absent', async () => {
  let signCalls = 0
  const path = resolve(pwaRoot, 'components/approve/SignMessage.vue')
  const component = readFileSync(path, 'utf8')
  const script = component.match(/<script setup lang="ts">([\s\S]*?)<\/script>/)[1].replace(/^import .*$/gm, '')
  const compiled = transformSync(script, { loader: 'ts', target: 'es2022', format: 'cjs' }).code
  const events = []
  const module = { exports: {} }
  runInNewContext(`${compiled}\nmodule.exports = { confirm, canSign };`, {
    module,
    exports: module.exports,
    defineProps: () => ({ data: { message: 'ordx-marketplace', digest: 'a'.repeat(64) }, metadata: { identityGeneration: 1 } }),
    defineEmits: () => (...args) => events.push(args),
    computed: (fn) => ({ get value() { return fn() } }),
    walletManager: { signMessage: async () => { signCalls++; return [undefined, { signature: 'sig' }] } },
    assertWalletIdentityReady: () => 1,
    Error,
  })
  assert.equal(module.exports.canSign.value, false)
  await module.exports.confirm()
  assert.equal(signCalls, 0)
  assert.deepEqual(events, [])
})

function createProviderHarness() {
  const source = readFileSync(resolve(marketRoot, 'lib/sat20PwaProvider.ts'), 'utf8')
  const compiled = compileTypeScript(source)
  const posted = []
  const listeners = new Map()
  const parent = { postMessage: (message) => posted.push(message) }
  const fakeWindow = {
    parent,
    location: { origin: 'http://127.0.0.1:3001', href: 'http://127.0.0.1:3001/market/?network=regtest' },
    history: { pushState() {}, replaceState() {} },
    addEventListener: (name, listener) => listeners.set(name, listener),
  }
  const module = { exports: {} }
  runInNewContext(compiled, {
    module,
    exports: module.exports,
    window: fakeWindow,
    crypto: { getRandomValues: (bytes) => { bytes.fill(1); return bytes } },
    Uint8Array,
    Date,
    Math,
    Map,
    Set,
    Promise,
    Error,
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
  return { provider, posted, onMessage, parent }
}

async function answerSignMessage(harness, result) {
  const request = harness.posted.filter((item) => item.type === 'SAT20_DAPP_REQUEST').at(-1)
  assert.ok(request)
  harness.onMessage({
    source: harness.parent,
    origin: 'http://wallet.local',
    data: {
      type: 'SAT20_DAPP_RESPONSE',
      protocol: 'sat20-dapp-connect',
      requestId: request.requestId,
      success: true,
      result,
    },
  })
}

test('market PWA provider envelopes the exact-purpose signature and leaves ordinary messages compact', async () => {
  const signedPayload = buildPwaSignedPayload()
  const harness = createProviderHarness()
  const marketPromise = harness.provider.signMessage('ordx-marketplace')
  await answerSignMessage(harness, { signature: 'compact-vector', domainPayload: signedPayload })
  const encoded = await marketPromise
  assert.deepEqual(JSON.parse(encoded), {
    format: 'sat20-wallet-message-v1',
    payload: signedPayload,
    signature: 'compact-vector',
  })

  const ordinaryPromise = harness.provider.signMessage('ordinary message')
  await answerSignMessage(harness, { signature: 'ordinary-compact', domainPayload: signedPayload })
  assert.equal(await ordinaryPromise, 'ordinary-compact')
})

test('market PWA provider refuses exact-purpose signatures missing their signed payload', async () => {
  const harness = createProviderHarness()
  const marketPromise = harness.provider.signMessage('ordx-marketplace')
  await answerSignMessage(harness, { signature: 'compact-vector' })
  await assert.rejects(marketPromise, /did not return the signed message context/)
})

function createRequestHarness() {
  const source = readFileSync(resolve(marketRoot, 'api/request.ts'), 'utf8')
  const compiled = compileTypeScript(source)
  const calls = []
  const commonState = { signature: '', setSignature: (signature) => { commonState.signature = signature }, reset: () => {} }
  const axios = async (url, options) => {
    calls.push({ url, headers: { ...(options.headers ?? {}) } })
    return { data: { code: 0, data: [] } }
  }
  const module = { exports: {} }
  const walletState = {
    connected: true,
    publicKey: 'public-a',
    network: 'regtest',
    btcWallet: {
      isSat20Pwa: true,
      signMessage: async () => `proof:${walletState.publicKey}:${walletState.network}`,
    },
  }
  const importMap = {
    '@/lib/utils/format': { removeObjectEmptyValue: (value) => value },
    '@/store/common': { useCommonStore: { getState: () => commonState } },
    axios: axios,
    '@sat20/btc-connect/dist/react': { useReactWalletStore: { getState: () => walletState } },
    '@/lib/wallet-sdk': { message: { verifyMessageOfECDSA: () => false } },
  }
  runInNewContext(compiled, {
    module,
    exports: module.exports,
    require: (name) => {
      if (!(name in importMap)) throw new Error(`unexpected import ${name}`)
      return importMap[name]
    },
    process: { env: { NEXT_PUBLIC_SIGNATURE_TEXT: 'ordx-marketplace', NEXT_PUBLIC_NETWORK: '', NEXT_PUBLIC_HOST: 'https://market.example', NEXT_PUBLIC_REGTEST_L1_INDEXER_URL: 'http://regtest-market.example' } },
    URLSearchParams,
    location: { hostname: 'market.example' },
    console: { log() {}, warn() {}, error() {} },
    Promise,
    Error,
  })
  const request = module.exports.request
  const runRequest = () => request('/ordx/GetOrders', { data: { address: 'test-address' } })
  return { request: runRequest, calls, walletState, commonState }
}

test('PWA proof cache is separated by public key and network', async () => {
  const harness = createRequestHarness()
  await harness.request()
  await harness.request()
  assert.equal(harness.calls.length, 2)
  assert.equal(harness.calls[0].headers.Signature, 'proof:public-a:regtest')
  assert.equal(harness.calls[1].headers.Signature, 'proof:public-a:regtest')
  assert.equal(harness.commonState.signature, '', 'PWA proof remains memory-only')

  harness.walletState.network = 'testnet'
  await harness.request()
  assert.equal(harness.calls[2].headers.Signature, 'proof:public-a:testnet')

  harness.walletState.publicKey = 'public-b'
  await harness.request()
  assert.equal(harness.calls[3].headers.Publickey, 'public-b')
  assert.equal(harness.calls[3].headers.Signature, 'proof:public-b:testnet')
})

test('same-scope signing is shared and stale in-flight proof is rejected after identity change', async () => {
  const shared = createRequestHarness()
  let finishSign
  let signCount = 0
  shared.walletState.btcWallet.signMessage = () => {
    signCount++
    return new Promise((resolve) => { finishSign = resolve })
  }
  const first = shared.request()
  const second = shared.request()
  await new Promise((resolve) => setImmediate(resolve))
  assert.equal(signCount, 1)
  finishSign('shared-proof')
  await Promise.all([first, second])
  assert.equal(shared.calls.length, 2)

  const changed = createRequestHarness()
  let finishOldScope
  let finishNewScope
  let signingCalls = 0
  changed.walletState.btcWallet.signMessage = () => {
    signingCalls++
    return new Promise((resolve) => {
      if (signingCalls === 1) finishOldScope = resolve
      else finishNewScope = resolve
    })
  }
  const oldScope = changed.request()
  await new Promise((resolve) => setImmediate(resolve))
  changed.walletState.publicKey = 'public-b'
  const newScope = changed.request()
  await new Promise((resolve) => setImmediate(resolve))
  assert.equal(signingCalls, 2)
  finishOldScope('stale-proof-for-public-a')
  await assert.rejects(oldScope, /identity or network changed/)
  finishNewScope('proof-for-public-b')
  await newScope
  assert.equal(changed.calls.length, 1)
  assert.equal(changed.calls[0].headers.Publickey, 'public-b')
  assert.equal(changed.calls[0].headers.Signature, 'proof-for-public-b')
})
