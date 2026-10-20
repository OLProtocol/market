import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import vm from 'node:vm'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const require = createRequire(resolve(root, 'package.json'))
const React = require('react')
const ts = require('typescript')
const antdContext = require('antd/lib/config-provider/UnstableContext')
const defaultRenderer = antdContext.unstableSetRender()
const source = readFileSync(process.env.MARKET_ANTD_PROVIDER_SOURCE || resolve(root, 'app/providers.tsx'), 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
}).outputText

// Use Antd's actual registered-renderer API and current React 19 exports. Only
// the React client root is a unit-test recorder; browser notification visibility
// still needs the original real UI reproduction after an approved deployment.
function fixture() {
  antdContext.unstableSetRender(defaultRenderer)
  const calls = { created: [], rendered: [], unmounted: 0 }
  const reactRoot = { render: node => calls.rendered.push(node), unmount: () => { calls.unmounted++ } }
  const testRequire = id => {
    if (id === 'antd') return antdContext
    if (id === 'react-dom/client') return { createRoot: container => { calls.created.push(container); return reactRoot } }
    if (id === '@nextui-org/react') return { NextUIProvider() {} }
    if (id === 'next/navigation') return { useRouter() {} }
    if (id === 'next-themes') return { ThemeProvider() {} }
    return require(id)
  }
  vm.runInNewContext(compiled, { exports: {}, require: testRequire, setTimeout, Promise })
  return { calls, reactRoot, renderer: antdContext.unstableSetRender() }
}
test('static notification renderer creates a React 19 root and renders its node', () => {
  const f = fixture(), container = {}, node = React.createElement('span', null, 'notice')
  f.renderer(node, container)
  assert.equal(f.calls.created.length, 1)
  assert.equal(f.calls.created[0], container)
  assert.equal(f.calls.rendered[0], node)
})
test('repeated static notification renders reuse the same container root', () => {
  const f = fixture(), container = {}
  f.renderer(React.createElement('span', null, 'first'), container)
  f.renderer(React.createElement('span', null, 'second'), container)
  assert.equal(f.calls.created.length, 1)
  assert.equal(f.calls.rendered.length, 2)
})
test('closing the static notification unmounts its React root', async () => {
  const f = fixture(), container = {}
  const cleanup = f.renderer(React.createElement('span', null, 'notice'), container)
  await cleanup()
  assert.equal(f.calls.unmounted, 1)
})
