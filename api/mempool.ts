"use client";

export const getTxHex = async (txId: string, network: string) => {
  const url = `https://mempool.space${
    network === "testnet" ? "/testnet" : ""
  }/api/tx/${txId}/hex`;
  const txHex: string = await fetch(url)
    .then((res) => res.text())
    .then((txHex: string) => {
      if (txHex === "Transaction not found") {
        throw new Error(
          "Some error happened when finding BTC to pay. Please try again later."
        );
      }
      return txHex;
    });

  return txHex;
};
