'use client';

const getTxHex = async (txId: string, network: string) => {
  const url = `https://mempool.space${
    network === 'testnet' ? '/testnet4' : ''
  }/api/tx/${txId}/hex`;
  const txHex: string = await fetch(url)
    .then((res) => res.text())
    .then((txHex: string) => {
      if (txHex === 'Transaction not found') {
        throw new Error(
          'Some error happened when finding BTC to pay. Please try again later.',
        );
      }
      return txHex;
    });

  return txHex;
};

const pushTx = async (txHex: string, network: string) => {
  const url = `https://mempool.space${
    network === 'testnet' ? '/testnet4' : ''
  }/api/tx`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ hex: txHex }),
  });
  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data.txid;
};

export default { getTxHex, pushTx };
