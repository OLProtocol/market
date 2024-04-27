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
  converUtxosToInputs,
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
  console.log(inscriptionUtxos);
  console.log(address);
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const batchSell = new bitcoin.Psbt({
    network: psbtNetwork,
  });
  for (let i = 0; i < inscriptionUtxos.length; i++) {
    const { utxo, price } = inscriptionUtxos[i];
    console.log(utxo, price);
    const { txid, vout } = parseUtxo(utxo);
    const rawTx = await getTxHex(txid, network);
    console.log(rawTx);
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
  console.log(batchSell);
  return batchSell.toHex();
};

export const splitBatchSignedPsbt = (signedHex: string, network: string) => {
  console.log('split batch signed psbt', signedHex);
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const psbt = bitcoin.Psbt.fromHex(signedHex, {
    network: psbtNetwork,
  });
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
  console.log(psbt);
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
    balanceUtxo = {
      txid,
      vout: psbt.txOutputs.length - 1,
      value: psbt.txOutputs[psbt.txOutputs.length - 1].value,
    };
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
  // const btcDummyUtxos = convertUtxosToBtcUtxos({
  //   utxos: dummyUtxos,
  //   address,
  //   publicKey,
  // });
  const dummyInputs: any[] = dummyUtxos.map((v) => {
    return {
      hash: v.txid,
      index: v.vout,
      witnessUtxo: {
        script: Buffer.from(addresToScriptPublicKey(address), 'hex'),
        value: v.value,
      },
      sighashType: bitcoin.Transaction.SIGHASH_ALL,
    };
  });

  const psbtTx = new Transaction({
    address,
    network: network == 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
    feeRate,
  });
  console.log(btcUtxos);
  psbtTx.setEnableRBF(false);
  dummyInputs.forEach((v) => {
    psbtTx.addPsbtInput(v);
  });

  const sellInputs: PsbtInput[] = [];
  const sellOutputs: any[] = [];
  const buyOutputs: any[] = [];
  for (let i = 0; i < orders.length; i++) {
    const { raw } = orders[i];
    const sellPsbt = bitcoin.Psbt.fromHex(raw, {
      network: psbtNetwork,
    });
    const sellerInput = {
      hash: sellPsbt.txInputs[0].hash as any,
      index: sellPsbt.txInputs[0].index,
      witnessUtxo: sellPsbt.data.inputs[0].witnessUtxo as any,
      finalScriptWitness: sellPsbt.data.inputs[0].finalScriptWitness,
    };
    console.log(sellerInput);
    sellInputs.push(sellerInput);
    const ordValue = sellPsbt.data.inputs[0].witnessUtxo!.value;
    const ordOutput = {
      address,
      value: ordValue,
    };
    sellOutputs.push(ordOutput);
    const sellerOutput = sellPsbt.txOutputs[0];
    buyOutputs.push(sellerOutput);
  }
  sellInputs.forEach((i) => {
    psbtTx.addPsbtInput(i);
  });

  const dummyTotal = dummyUtxos.reduce((a, b) => a + b.value, 0);
  psbtTx.addOutput(address, dummyTotal);

  sellOutputs.forEach((v) => {
    psbtTx.addOutput(v.address, v.value);
  });

  buyOutputs.forEach((v) => {
    psbtTx.addOutput(v.address, v.value, v.script);
  });

  if (serviceFee && NEXT_PUBLIC_SERVICE_FEE && NEXT_PUBLIC_SERVICE_ADDRESS) {
    psbtTx.addOutput(NEXT_PUBLIC_SERVICE_ADDRESS, serviceFee);
  }
  for (let i = 0; i < dummyUtxos.length; i++) {
    psbtTx.addOutput(address, DUMMY_UTXO_VALUE);
  }
  await psbtTx.addSufficientUtxosForFee(btcUtxos, {
    suitable: false,
  });
  const buyPsbt = psbtTx.toPsbt();
  console.log(buyPsbt);
  if (!btcWallet) {
    throw new Error('Wallet not initialized');
  }
  const signed = await btcWallet.signPsbt(buyPsbt.toHex());
  console.log('signed', signed);
  const txid = await btcWallet.pushPsbt(signed);
  console.log('buy order txid', txid);
  const psbt = bitcoin.Psbt.fromHex(signed, {
    network: psbtNetwork,
  });

  const tx = psbt.extractTransaction();
  console.log(tx);
  const rawTxHex = tx.toHex();
  return rawTxHex;
};
export const buildBuyOrder11 = async ({
  orders,
  utxos,
  serviceFee,
  feeRate,
  dummyUtxos,
}: any) => {
  console.log('build order b start');
  const bbbuypsbt = await buildBuyOrder({
    orders,
    utxos,
    serviceFee,
    feeRate: 1,
    dummyUtxos,
  });
  console.log('build order b start');
  const NEXT_PUBLIC_SERVICE_FEE = process.env.NEXT_PUBLIC_SERVICE_FEE;
  const NEXT_PUBLIC_IS_FREE = process.env.NEXT_PUBLIC_IS_FREE;
  const NEXT_PUBLIC_SERVICE_ADDRESS = process.env.NEXT_PUBLIC_SERVICE_ADDRESS;
  const { btcWallet, network, address, publicKey } =
    useReactWalletStore.getState();

  console.log('build buy order params', utxos, serviceFee, dummyUtxos);
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );

  const btcInputs = converUtxosToInputs({
    utxos,
    address,
  });
  const dummyInputs: any[] = dummyUtxos.map((v) => {
    return {
      hash: v.txid,
      index: v.vout,
      witnessUtxo: {
        script: Buffer.from(addresToScriptPublicKey(address), 'hex'),
        value: v.value,
      },
      sighashType: bitcoin.Transaction.SIGHASH_ALL,
    };
  });
  const buyPsbt = new bitcoin.Psbt({
    network: psbtNetwork,
  });
  console.log(btcInputs);
  dummyInputs.forEach((v) => {
    buyPsbt.addInput(v);
  });

  const sellInputs: PsbtInput[] = [];
  const sellOutputs: any[] = [];
  const buyOutputs: any[] = [];
  for (let i = 0; i < orders.length; i++) {
    const { raw } = orders[i];
    console.log(raw);
    const sellPsbt = bitcoin.Psbt.fromHex(raw, {
      network: psbtNetwork,
    });
    console.log(sellPsbt);
    const sellerInput = {
      hash: sellPsbt.txInputs[0].hash as any,
      index: sellPsbt.txInputs[0].index,
      witnessUtxo: sellPsbt.data.inputs[0].witnessUtxo as any,
      finalScriptWitness: sellPsbt.data.inputs[0].finalScriptWitness,
    };
    console.log(sellerInput);
    sellInputs.push(sellerInput);
    const ordValue = sellPsbt.data.inputs[0].witnessUtxo!.value;
    const ordOutput = {
      address,
      value: ordValue,
    };
    sellOutputs.push(ordOutput);
    const sellerOutput = sellPsbt.txOutputs[0];
    buyOutputs.push(sellerOutput);
  }
  sellInputs.forEach((i) => {
    buyPsbt.addInput(i);
  });

  btcInputs.forEach((v) => {
    buyPsbt.addInput(v);
  });

  const dummyTotal = dummyUtxos.reduce((a, b) => a + b.value, 0);
  buyPsbt.addOutput({
    address,
    value: dummyTotal,
  });

  sellOutputs.forEach((v) => {
    buyPsbt.addOutput({ address: v.address, value: v.value });
  });

  buyOutputs.forEach((v) => {
    buyPsbt.addOutput({ address: v.address, value: v.value, script: v.script });
  });

  if (serviceFee && NEXT_PUBLIC_SERVICE_FEE && NEXT_PUBLIC_SERVICE_ADDRESS) {
    buyPsbt.addOutput({
      address: NEXT_PUBLIC_SERVICE_ADDRESS,
      value: serviceFee,
    });
  }
  for (let i = 0; i < dummyUtxos.length; i++) {
    buyPsbt.addOutput({ address, value: DUMMY_UTXO_VALUE });
  }
  const fee = 26000;
  const totalValue = btcInputs.reduce((a, b) => a + b.witnessUtxo.value, 0);
  const changeValue =
    totalValue - DUMMY_UTXO_VALUE * dummyUtxos.length - fee - 2220;
  buyPsbt.addOutput({ address, value: 323512 });
  // const psbtTx = new Transaction({
  // const buyPsbt = psbtTx.toPsbt();
  console.log('对比 psbt');
  console.log(buyPsbt);
  // buyPsbt.txInputs.forEach((v, i) => {
  //   console.log(v, bbbuypsbt.txInputs[i]);
  //   if (
  //     v.hash !== bbbuypsbt.txInputs[i].hash ||
  //     v.index !== bbbuypsbt.txInputs[i].index
  //   ) {
  //     console.log('不一致');
  //   }
  // });
  // buyPsbt.txOutputs.forEach((v, i) => {
  //   console.log(v, bbbuypsbt.txOutputs[i]);
  //   if (
  //     v.script !== bbbuypsbt.txOutputs[i].script ||
  //     v.value !== bbbuypsbt.txOutputs[i].value
  //   ) {
  //     console.log('不一致');
  //   }
  // });
  console.log(bbbuypsbt);

  if (!btcWallet) {
    throw new Error('Wallet not initialized');
  }
  const signed1 = await btcWallet.signPsbt(buyPsbt.toHex());
  // const signed2 = await btcWallet.signPsbt(bbbuypsbt.toHex());
  console.log('signed1', signed1);
  // console.log('signed2', signed2);
  // console.log(signed2 === signed1);

  // console.log('signed', signed)
  // // const txid = await btcWallet.pushPsbt(signed);
  // // console.log('buy order txid', txid);
  // const psbt = bitcoin.Psbt.fromHex(signed, {
  //   network: psbtNetwork,
  // });

  // const tx = psbt.extractTransaction();
  // console.log(tx);
  // const rawTxHex = tx.toHex();
  // return rawTxHex;
};
