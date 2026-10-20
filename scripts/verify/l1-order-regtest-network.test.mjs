import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import test from 'node:test'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const require = createRequire(resolve(root, 'package.json'))
const bitcoin = require('bitcoinjs-lib')
bitcoin.initEccLib(require('@bitcoin-js/tiny-secp256k1-asmjs'))
const ts = require('typescript')
const sourceRoot = process.env.MARKET_ORDER_NETWORK_SOURCE || root
const quietConsole = { log() {}, error() {} }
const compile = source => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText
function realFunction(path, startMarker, endMarker, dependencies) {
  const source = readFileSync(resolve(sourceRoot, path), 'utf8')
  const start = source.indexOf(startMarker)
  const end = source.indexOf(endMarker, start)
  assert.ok(start >= 0 && end > start, `real function boundary missing: ${path}`)
  const context = { exports: {}, console: quietConsole, ...dependencies }
  vm.runInNewContext(compile(source.slice(start, end)), context)
  return context.exports
}
const { isTaprootAddress } = realFunction('lib/wallet/utils.ts',
  'export function isTaprootAddress(', 'export async function calcNetworkFee(', { bitcoin })
// Public, unfunded witness program. This is a local unit test; no chain or RPC
// fixture is created, no wallet is signed and no transaction is broadcast.
const program = Buffer.from('79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', 'hex')
const networks = [
  ['mainnet', bitcoin.networks.bitcoin],
  ['testnet', bitcoin.networks.testnet],
  ['regtest', bitcoin.networks.regtest],
]
const NetworkType = { MAINNET: 0, TESTNET: 1, REGTEST: 2 }
const { buildBatchSellOrder } = realFunction('lib/utils/order.ts',
  'export async function buildBatchSellOrder(', 'export async function buildTransferPsbt(', {
    bitcoin, NetworkType,
    toPsbtNetwork: type => [bitcoin.networks.bitcoin, bitcoin.networks.testnet, bitcoin.networks.regtest][type],
    parseUtxo: value => ({ txid: value.split(':')[0], vout: Number(value.split(':')[1]) }),
    tryit: fn => async (...args) => { try { return [undefined, await fn(...args)] } catch (error) { return [error] } },
    btcToSats: value => Math.round(Number(value) * 1e8),
    SIGHASH_SINGLE_ANYONECANPAY: bitcoin.Transaction.SIGHASH_SINGLE | bitcoin.Transaction.SIGHASH_ANYONECANPAY,
    ordx: { getTxHex: async () => ({ data: funding.toHex() }) },
  })
const funding = new bitcoin.Transaction()
funding.addInput(Buffer.alloc(32), 0)
funding.addOutput(bitcoin.script.compile([bitcoin.opcodes.OP_1, program]), 1000)

for (const [name, network] of networks) {
  const address = bitcoin.address.toBech32(program, 1, network.bech32)
  test(`address preflight accepts its own ${name} P2TR`, () => {
    assert.equal(isTaprootAddress(address, name), true)
  })
  test(`actual seller PSBT supports ${name} address and amount`, async () => {
    const psbtHex = await buildBatchSellOrder({
      inscriptionUtxos: [{ utxo: `${funding.getId()}:0`, price: '10000' }],
      network: name, address, unit: 'sats',
    })
    const psbt = bitcoin.Psbt.fromHex(psbtHex, { network })
    assert.equal(psbt.inputCount, 1)
    assert.equal(psbt.txOutputs[0].address, address)
    assert.equal(psbt.txOutputs[0].value, 10000)
    assert.deepEqual(psbt.data.inputs[0].witnessUtxo.script, funding.outs[0].script)
  })
}
test('regtest preflight rejects a mainnet address', () => {
  assert.equal(isTaprootAddress(bitcoin.address.toBech32(program, 1, 'bc'), 'regtest'), false)
})
test('mainnet preflight rejects a regtest address', () => {
  assert.equal(isTaprootAddress(bitcoin.address.toBech32(program, 1, 'bcrt'), 'mainnet'), false)
})
test('testnet preflight rejects a regtest address', () => {
  assert.equal(isTaprootAddress(bitcoin.address.toBech32(program, 1, 'bcrt'), 'testnet'), false)
})
