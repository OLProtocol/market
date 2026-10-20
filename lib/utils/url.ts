export const generateOrdUrl = ({
  network,
  path,
  locale,
}: {
  network: string;
  path?: string;
  locale?: string;
}) => {
  const base =
    network === 'testnet'
      ? 'https://ord-testnet4.sat20.org'
      : 'https://ord-mainnet.sat20.org';
  let url = base;
  if (locale) {
    url += `/${locale}`;
  }
  if (path) {
    url += `/${path}`;
  }
  return url;
};

export const generateMempoolUrl = ({
  network,
  path,
  locale,
}: {
  network: string;
  path?: string;
  locale?: string;
}) => {
  if (network === 'regtest') {
    const base = process.env.NEXT_PUBLIC_REGTEST_L1_MEMPOOL_URL;
    if (!base) throw new Error('Regtest explorer URL is not configured');
    return `${base.replace(/\/$/, '')}${path ? '/' + path : ''}`;
  }
  const base = 'https://mempool.space';
  let url = base;
  if (locale) {
    url += `/${locale}`;
  }
  if (network === 'testnet') {
    url += '/testnet4';
  }
  if (path) {
    url += `/${path}`;
  }
  return url;
};

export const resolveMempoolTxLink = (txid: string, network: string) => {
  const href = generateMempoolUrl({ network, path: `tx/${txid}` });
  return href;
};
