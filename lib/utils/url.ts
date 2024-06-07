export const generateMempoolUrl = ({
  network,
  path,
  locale,
}: {
  network: string;
  path?: string;
  locale?: string;
}) => {
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
