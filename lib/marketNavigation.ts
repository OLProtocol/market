// Preserve the current route query while explicitly carrying the effective network.
export function marketNavigation(path: string, query: string, network: string, updates: Record<string, string> = {}): string {
  const params = new URLSearchParams(query)
  for (const [key, value] of Object.entries(updates)) params.set(key, value)
  params.set('network', network === 'testnet' ? 'testnet' : 'mainnet')
  return `${path}?${params.toString()}`
}
