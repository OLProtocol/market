import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'
const source = await readFile(new URL('../../lib/marketNavigation.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ES2022 } })
const { marketNavigation } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
const detail = new URL(marketNavigation('/ordx/ticker', 'network=testnet&type=ticker&filter=x&filter=y', 'testnet', { ticker: 'a&b +?', assets_type: 'ticker' }), 'https://app.ordx.market')
assert.equal(detail.pathname, '/ordx/ticker')
assert.equal(detail.searchParams.get('network'), 'testnet')
assert.equal(detail.searchParams.get('ticker'), 'a&b +?')
assert.deepEqual(detail.searchParams.getAll('filter'), ['x', 'y'])
const back = new URL(marketNavigation('/market', detail.search, 'testnet'), detail)
assert.equal(back.pathname, '/market')
assert.equal(back.search, detail.search)
assert.equal(new URL(marketNavigation('/market', 'network=testnet&ticker=dogcoin', 'livenet'), detail).searchParams.get('network'), 'mainnet')
assert.equal(new URL(marketNavigation('/market', '', 'mainnet'), detail).searchParams.get('network'), 'mainnet')
console.log('Market navigation query checks passed')
