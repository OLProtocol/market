import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import test from 'node:test'

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const sourceRoot = resolve(process.env.MARKET_ORDER_NETWORK_SOURCE || repoRoot)
const require = createRequire(resolve(repoRoot, 'package.json'))
const bitcoin = require('bitcoinjs-lib')
bitcoin.initEccLib(require('@bitcoin-js/tiny-secp256k1-asmjs'))
const ts = require('typescript')
const quietConsole = { log() {}, error() {} }
const compile = (source) => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText

function loadFunction(startMarker, endMarker, dependencies) {
  const source = readFileSync(resolve(sourceRoot, 'lib/utils/order.ts'), 'utf8')
  const start = source.indexOf(startMarker)
  const end = endMarker ? source.indexOf(endMarker, start) : source.length
  assert.ok(start >= 0 && end > start, `real function boundary missing: ${startMarker}`)
  const context = { exports: {}, console: quietConsole, Buffer, ...dependencies }
  vm.runInNewContext(compile(source.slice(start, end)), context)
  return context.exports
}

const NetworkType = { MAINNET: 0, TESTNET: 1, REGTEST: 2 }
const networkNames = ['mainnet', 'testnet', 'regtest']
const networkByName = {
  mainnet: bitcoin.networks.bitcoin,
  testnet: bitcoin.networks.testnet,
  regtest: bitcoin.networks.regtest,
}
const networkByType = [networkByName.mainnet, networkByName.testnet, networkByName.regtest]
const serviceProgram = Buffer.from('79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', 'hex')
const walletProgram = Buffer.alloc(32, 0x12)
const addressFor = (program, name) => bitcoin.address.toBech32(program, 1, networkByName[name].bech32)
const serviceAddress = Object.fromEntries(networkNames.map((name) => [name, addressFor(serviceProgram, name)]))
const walletAddress = Object.fromEntries(networkNames.map((name) => [name, addressFor(walletProgram, name)]))
const SERVICE_FEE = 1234
const FEE_CALCULATION_MARKER = 777
const STOP_BEFORE_SIGN = Object.freeze({ code: 'STOP_BEFORE_SIGN' })
const runtime = {
  env: {}, wallet: null, network: null, recorder: null,
  transactionConstructions: 0, signCalls: 0, signedPsbt: null, feeCalculationCalls: 0,
}

class TransactionRecorder {
  constructor({ network }) {
    runtime.transactionConstructions += 1
    runtime.recorder = this
    this.networkType = network
    this.psbtNetwork = networkByType[network]
    this.psbt = new bitcoin.Psbt({ network: this.psbtNetwork })
    this.outputs = []
  }

  setEnableRBF() {}

  addPsbtInput(input) {
    this.psbt.addInput(input)
  }

  addOutput(address, value, script) {
    const output = script ? { script, value } : { address, value }
    this.psbt.addOutput(output)
    this.outputs.push({ address, value })
  }

  async addSufficientUtxosForFee() {
    // Fee input selection is outside this address-routing check.
  }

  toPsbt() {
    return this.psbt
  }

  async calNetworkFee() {
    runtime.feeCalculationCalls += 1
    return FEE_CALCULATION_MARKER
  }
}

const dependencies = {
  bitcoin,
  NetworkType,
  toPsbtNetwork: (type) => networkByType[type],
  Transaction: TransactionRecorder,
  DUMMY_UTXO_VALUE: 546,
  convertUtxosToBtcUtxos: () => [],
  addresToScriptPublicKey: (address) => bitcoin.address.toOutputScript(address, runtime.network).toString('hex'),
  useReactWalletStore: { getState: () => runtime.wallet },
  process: { env: runtime.env },
}

const { buildBuyOrder } = loadFunction(
  'export const buildBuyOrder = async (',
  'export const generateBuyInputsAndOutputs = async (',
  dependencies,
)
const { calcBuyOrderFee } = loadFunction(
  'export const calcBuyOrderFee = async (',
  null,
  dependencies,
)

function prepare(networkName, envOverrides = {}) {
  runtime.network = networkByName[networkName]
  for (const key of Object.keys(runtime.env)) delete runtime.env[key]
  Object.assign(runtime.env, {
    NEXT_PUBLIC_SERVICE_FEE: '1',
    NEXT_PUBLIC_SERVICE_ADDRESS: serviceAddress.mainnet,
    NEXT_PUBLIC_SERVICE_TESTNET_ADDRESS: serviceAddress.testnet,
    NEXT_PUBLIC_REGTEST_SERVICE_ADDRESS: serviceAddress.regtest,
    ...envOverrides,
  })
  runtime.wallet = {
    network: networkName,
    address: walletAddress[networkName],
    publicKey: '02'.padEnd(66, '1'),
    btcWallet: {
      async signPsbt(hex) {
        runtime.signCalls += 1
        runtime.signedPsbt = bitcoin.Psbt.fromHex(hex, { network: runtime.network })
        throw STOP_BEFORE_SIGN
      },
    },
  }
  runtime.recorder = null
  runtime.transactionConstructions = 0
  runtime.signCalls = 0
  runtime.signedPsbt = null
  runtime.feeCalculationCalls = 0
}

function inputs(serviceFee = SERVICE_FEE) {
  return {
    raws: [],
    utxos: [],
    serviceFee,
    feeRate: 1,
    // A single synthetic witness input only lets bitcoinjs serialize a real PSBT.
    // It is never signed or broadcast, and no fee sufficiency is simulated.
    dummyUtxos: [{ txid: '11'.repeat(32), vout: 0, value: 50000 }],
  }
}

function hasServiceOutput(psbt, name, value = SERVICE_FEE) {
  return psbt.txOutputs.some((output) => output.address === serviceAddress[name] && output.value === value)
}

async function stopBuildAtSign(networkName, envOverrides = {}, serviceFee = SERVICE_FEE) {
  prepare(networkName, envOverrides)
  let error
  try {
    await buildBuyOrder(inputs(serviceFee))
  } catch (caught) {
    error = caught
  }
  return { error }
}

async function runFeeCalculation(networkName, envOverrides = {}, serviceFee = SERVICE_FEE) {
  prepare(networkName, envOverrides)
  const value = await calcBuyOrderFee(inputs(serviceFee))
  return { value }
}

for (const name of networkNames) {
  test(`buildBuyOrder routes ${name} service fee through a real ${name} PSBT`, async () => {
    const { error } = await stopBuildAtSign(name)
    assert.equal(error, STOP_BEFORE_SIGN)
    assert.equal(runtime.signCalls, 1)
    assert.equal(runtime.recorder.networkType, NetworkType[name.toUpperCase()])
    assert.equal(runtime.recorder.psbtNetwork, networkByName[name])
    assert.equal(hasServiceOutput(runtime.signedPsbt, name), true)
  })

  test(`calcBuyOrderFee routes ${name} service fee through a real ${name} PSBT`, async () => {
    const { value } = await runFeeCalculation(name)
    assert.equal(value, FEE_CALCULATION_MARKER)
    assert.equal(runtime.recorder.networkType, NetworkType[name.toUpperCase()])
    assert.equal(runtime.recorder.psbtNetwork, networkByName[name])
    assert.equal(hasServiceOutput(runtime.recorder.psbt, name), true)
    assert.equal(runtime.feeCalculationCalls, 1)
  })
}

test('buildBuyOrder rejects nonzero regtest fees without a regtest service address before signing', async () => {
  const { error } = await stopBuildAtSign('regtest', { NEXT_PUBLIC_REGTEST_SERVICE_ADDRESS: '' })
  assert.match(String(error), /Regtest service fee address is not configured/)
  assert.equal(runtime.transactionConstructions, 0)
  assert.equal(runtime.signCalls, 0)
})

test('calcBuyOrderFee rejects nonzero regtest fees without a regtest service address before building', async () => {
  prepare('regtest', { NEXT_PUBLIC_REGTEST_SERVICE_ADDRESS: '' })
  await assert.rejects(calcBuyOrderFee(inputs()), /Regtest service fee address is not configured/)
  assert.equal(runtime.transactionConstructions, 0)
  assert.equal(runtime.feeCalculationCalls, 0)
})

test('buildBuyOrder permits a zero regtest service fee without a service address', async () => {
  const { error } = await stopBuildAtSign('regtest', { NEXT_PUBLIC_REGTEST_SERVICE_ADDRESS: '' }, 0)
  assert.equal(error, STOP_BEFORE_SIGN)
  assert.equal(runtime.signCalls, 1)
  assert.equal(runtime.signedPsbt.txOutputs.some((output) => output.address === serviceAddress.regtest), false)
})

test('calcBuyOrderFee permits a zero regtest service fee without a service address', async () => {
  const { value } = await runFeeCalculation('regtest', { NEXT_PUBLIC_REGTEST_SERVICE_ADDRESS: '' }, 0)
  assert.equal(value, FEE_CALCULATION_MARKER)
  assert.equal(runtime.recorder.psbt.txOutputs.some((output) => output.address === serviceAddress.regtest), false)
})

test('buildBuyOrder rejects a mainnet fee address on regtest in bitcoinjs before signing', async () => {
  prepare('regtest', { NEXT_PUBLIC_REGTEST_SERVICE_ADDRESS: serviceAddress.mainnet })
  await assert.rejects(buildBuyOrder(inputs()), /prefix|network/i)
  assert.equal(runtime.signCalls, 0)
  assert.equal(runtime.recorder.networkType, NetworkType.REGTEST)
  assert.equal(runtime.recorder.psbtNetwork, bitcoin.networks.regtest)
})

test('calcBuyOrderFee rejects a mainnet fee address on regtest in bitcoinjs', async () => {
  prepare('regtest', { NEXT_PUBLIC_REGTEST_SERVICE_ADDRESS: serviceAddress.mainnet })
  await assert.rejects(calcBuyOrderFee(inputs()), /prefix|network/i)
  assert.equal(runtime.feeCalculationCalls, 0)
  assert.equal(runtime.recorder.networkType, NetworkType.REGTEST)
  assert.equal(runtime.recorder.psbtNetwork, bitcoin.networks.regtest)
})
