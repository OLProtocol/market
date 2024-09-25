import { WIFWallet, toXOnly } from '@/lib/inscribe/WIFWallet';
import { bitcoin } from '@/lib/wallet/bitcoin';
import { toPsbtNetwork, NetworkType } from '@/lib/wallet/network';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';

interface MintRuneParams {
  secret: string;
  network: string;
  opReturnScript: string;
  files: any[];
  toAddress: string;
  feeRate: number;
  utxo: { txid: string; vout: number; value: number };
}

export async function mintRune({
  secret,
  network,
  opReturnScript,
  files,
  toAddress,
  feeRate,
  utxo,
}: MintRuneParams): Promise<string | undefined> {
  console.log(
    'mintRune',
    secret,
    network,
    opReturnScript,
    files,
    toAddress,
    feeRate,
    utxo,
  );

  const wallet = new WIFWallet({ network, privateKey: secret });
  const fee = Math.ceil(180 * feeRate);
  const btcNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const txHexs: { psbtHex: string; hex: string; id: string }[] = [];

  const createPsbt = (
    inputUtxo: typeof utxo,
    outputAddress: string,
    outputValue: number,
  ) => {
    const psbt = new bitcoin.Psbt({ network: btcNetwork });
    psbt.addInput({
      hash: inputUtxo.txid,
      index: inputUtxo.vout,
      witnessUtxo: { value: inputUtxo.value, script: wallet.output! },
      tapInternalKey: toXOnly(wallet.ecPair.publicKey as Buffer),
    } as any);
    psbt.addOutput({ script: Buffer.from(opReturnScript, 'hex'), value: 0 });
    psbt.addOutput({ address: outputAddress, value: outputValue });
    return psbt;
  };

  if (files.length === 1) {
    const psbt = createPsbt(utxo, toAddress, 546);
    const signedPsbt = wallet.signPsbt(psbt);
    const tx = signedPsbt.extractTransaction();
    txHexs.push({
      psbtHex: signedPsbt.toHex(),
      hex: tx.toHex(),
      id: tx.getId(),
    });
  } else {
    let parentUtxo = utxo;
    for (let i = 0; i < files.length; i++) {
      const psbt = createPsbt(parentUtxo, toAddress, 546);
      const balance = parentUtxo.value - fee - 546;
      if (i !== files.length - 1) {
        psbt.addOutput({ address: wallet.address, value: balance });
      }
      const signedPsbt = wallet.signPsbt(psbt);
      const tx = signedPsbt.extractTransaction();
      parentUtxo = { txid: tx.getId(), vout: 2, value: balance };
      txHexs.push({
        psbtHex: signedPsbt.toHex(),
        hex: tx.toHex(),
        id: tx.getId(),
      });
    }
  }
  console.log('txHexs', txHexs);

  const { btcWallet } = useReactWalletStore.getState();
  if (!btcWallet) throw new Error('No wallet connected');

  const txids = await Promise.all(
    txHexs.map(({ psbtHex }) => btcWallet.pushPsbt(psbtHex)),
  );
  return txids[txids.length - 1];
}
