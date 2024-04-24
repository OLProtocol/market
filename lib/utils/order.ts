import * as ecc from '@bitcoin-js/tiny-secp256k1-asmjs';
import { Address, Script } from '@cmdcode/tapscript';
import { btcToSats } from '@/lib/utils';
import { parseUtxo } from './btc';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { SIGHASH_SINGLE_ANYONECANPAY, DUMMY_UTXO_VALUE } from '@/lib/constants';
import {
  bitcoin,
  toPsbtNetwork,
  NetworkType,
  buildTransaction,
  Transaction,
  convertUtxosToBtcUtxos,
  PsbtInput,
} from '../wallet';
import { UtxoAssetItem } from '@/store';
import { getTxHex, lockOrder, unlockOrder } from '@/api';
interface SellOrderProps {
  inscriptionUtxo: {
    txid: string;
    vout: number;
    value: number;
  };
  total: number;
  amount: number;
  network: string;
  address: string;
}
export const addresToScriptPublicKey = (address: string) => {
  const scriptPublicKey = Script.fmt.toAsm(
    Address.toScriptPubKey(address),
  )?.[0];
  return scriptPublicKey;
};
export const buildSellOrder = async ({
  inscriptionUtxo,
  total,
  network,
  address,
}: SellOrderProps) => {
  console.log(
    'build sell order params',
    inscriptionUtxo,
    total,
    network,
    address,
  );
  const { btcWallet } = useReactWalletStore.getState();
  const rawTx = await getTxHex(inscriptionUtxo.txid, network);
  const ordinalPreTx = bitcoin.Transaction.fromHex(rawTx);
  console.log(ordinalPreTx);
  const utxoInput = {
    hash: inscriptionUtxo.txid,
    index: inscriptionUtxo.vout,
    witnessUtxo: ordinalPreTx.outs[inscriptionUtxo.vout],
    sighashType: SIGHASH_SINGLE_ANYONECANPAY,
  };
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const sell = new bitcoin.Psbt({
    network: psbtNetwork,
  });

  sell.addInput(utxoInput);
  sell.addOutput({
    address,
    value: total,
  });
  if (!btcWallet) {
    throw new Error('Wallet not initialized');
  }
  console.log(sell);
  return sell.toHex();
  // const tx = sell.extractTransaction();
  // console.log(tx);
  // const signed = await btcWallet.signPsbt(sell.toHex());
  // return signed;
};
interface BatchSellOrderProps {
  inscriptionUtxos: UtxoAssetItem[];
  network: string;
  address: string;
}
export const buildBatchSellOrder = async ({
  inscriptionUtxos,
  network,
  address,
}: BatchSellOrderProps) => {
  console.log(
    'build batch sell order params',
    inscriptionUtxos,
    network,
    address,
  );
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const batchSell = new bitcoin.Psbt({
    network: psbtNetwork,
  });
  for (let i = 0; i < inscriptionUtxos.length; i++) {
    const { utxo, price } = inscriptionUtxos[i];
    const { txid, vout } = parseUtxo(utxo);
    const rawTx = await getTxHex(txid, network);
    const ordinalPreTx = bitcoin.Transaction.fromHex(rawTx);
    console.log(ordinalPreTx);
    const utxoInput = {
      hash: txid,
      index: vout,
      witnessUtxo: ordinalPreTx.outs[vout],
      sighashType: SIGHASH_SINGLE_ANYONECANPAY,
    };
    batchSell.addInput(utxoInput);
    batchSell.addOutput({
      address,
      value: btcToSats(Number(price)),
    });
  }
  return batchSell.toHex();
};

export const splitBatchSignedPsbt = (signedHex: string, network: string) => {
  console.log('split batch signed psbt', signedHex);
  const psbt = bitcoin.Psbt.fromHex(signedHex);
  console.log(psbt);
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const { inputCount } = psbt;
  const newPsbts: string[] = [];
  for (let i = 0; i < inputCount; i++) {
    const newPsbt = new bitcoin.Psbt({
      network: psbtNetwork,
    });
    const batchInput = {
      hash: psbt.txInputs[i].hash as any,
      index: psbt.txInputs[i].index,
      witnessUtxo: psbt.data.inputs[i].witnessUtxo as any,
      finalScriptWitness: psbt.data.inputs[i].finalScriptWitness,
    };
    const batchOutput = psbt.txOutputs[i];
    newPsbt.addInput(batchInput);
    newPsbt.addOutput(batchOutput);
    newPsbts.push(newPsbt.toHex());
  }
  return newPsbts;
};

interface BuyOrderProps {
  orderId: string;
  orderRaw: string;
  feeRate: number;
  serviceFee: number;
  address: string;
  network: string;
  utxos: any[];
  dummyUtxos: any[];
  fee: number;
}
export const buildDummyUtxos = async ({ utxos, feeRate, num = 2 }) => {
  const { btcWallet, publicKey, address, network } =
    useReactWalletStore.getState();
  const outputs: any = [];
  for (let i = 0; i < num; i++) {
    outputs.push({
      address,
      value: DUMMY_UTXO_VALUE,
    });
  }
  const psbt = await buildTransaction({
    utxos,
    outputs,
    feeRate,
    network,
    address,
    publicKey,
  });
  let dummyUtxos: any[] = [];
  let balanceUtxo: any = {};
  const signed = await btcWallet?.signPsbt(psbt.toHex());
  if (signed) {
    const txid = await btcWallet?.pushPsbt(signed);
    dummyUtxos = [
      {
        txid,
        vout: 0,
        value: DUMMY_UTXO_VALUE,
      },
      {
        txid,
        vout: 1,
        value: DUMMY_UTXO_VALUE,
      },
    ];
  }
  return {
    balanceUtxo,
    dummyUtxos,
  };
};
export const buildBuyOrder = async ({
  orders,
  utxos,
  serviceFee,
  feeRate,
  dummyUtxos,
}: any) => {
  const NEXT_PUBLIC_SERVICE_FEE = process.env.NEXT_PUBLIC_SERVICE_FEE;
  const NEXT_PUBLIC_IS_FREE = process.env.NEXT_PUBLIC_IS_FREE;
  const NEXT_PUBLIC_SERVICE_ADDRESS = process.env.NEXT_PUBLIC_SERVICE_ADDRESS;
  const { btcWallet, network, address, publicKey } =
    useReactWalletStore.getState();

  console.log('build buy order params', utxos, serviceFee, dummyUtxos);
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );

  const btcUtxos = convertUtxosToBtcUtxos({
    utxos,
    address,
    publicKey,
  });

  const psbtTx = new Transaction({
    address,
    network: network == 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
    feeRate,
  });
  console.log(btcUtxos);
  psbtTx.setEnableRBF(true);
  dummyUtxos.forEach((v) => {
    psbtTx.addInput(v);
  });

  const sellInputs: PsbtInput[] = [];
  const sellOutputs: any[] = [];
  const buyOutputs: any[] = [];
  for (let i = 0; i < orders.length; i++) {
    const { orderRaw } = orders[i];
    const sellPsbt = bitcoin.Psbt.fromHex(orderRaw, {
      network: psbtNetwork,
    });
    const sellerInput = {
      hash: sellPsbt.txInputs[0].hash as any,
      index: sellPsbt.txInputs[0].index,
      witnessUtxo: sellPsbt.data.inputs[0].witnessUtxo as any,
      finalScriptWitness: sellPsbt.data.inputs[0].finalScriptWitness,
    };
    sellInputs.push(sellerInput);
    const ordValue = sellPsbt.data.inputs[0].witnessUtxo!.value;
    const ordOutput = {
      address,
      value: ordValue,
    };
    const sellerOutput = sellPsbt.txOutputs[0];
    buyOutputs.push(sellerOutput);
    sellOutputs.push(ordOutput);
  }
  sellInputs.forEach((i) => {
    psbtTx.addPsbtInput(i, `${i.hash}:${i.index}`);
  });
  psbtTx.addSufficientUtxosForFee(btcUtxos, {
    suitable: false,
  });

  const dummyTotal = dummyUtxos.reduce((a, b) => a + b.value, 0);
  psbtTx.addOutput(address, dummyTotal);
  sellOutputs.forEach((v) => {
    psbtTx.addOutput(v.address, v.value);
  });
  buyOutputs.forEach((v) => {
    psbtTx.addOutput(v.address, v.value);
  });

  if (serviceFee && NEXT_PUBLIC_SERVICE_FEE && NEXT_PUBLIC_SERVICE_ADDRESS) {
    psbtTx.addOutput(NEXT_PUBLIC_SERVICE_ADDRESS, serviceFee);
  }
  for (let i = 0; i < dummyUtxos.length; i++) {
    psbtTx.addOutput(address, DUMMY_UTXO_VALUE);
  }

  const buyPsbt = psbtTx.toPsbt();
  if (!btcWallet) {
    throw new Error('Wallet not initialized');
  }
  const signed = await btcWallet.signPsbt(buyPsbt.toHex());
  const psbt = bitcoin.Psbt.fromHex(signed, {
    network: psbtNetwork,
  });
  const tx = psbt.extractTransaction();
  const rawTxHex = tx.toHex();
  return rawTxHex;
};
