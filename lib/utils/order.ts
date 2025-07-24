import { addresToScriptPublicKey } from '../wallet/utils';
import { btcToSats } from '@/lib/utils';
import { parseUtxo } from './btc';
import { tryit } from 'radash';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { SIGHASH_SINGLE_ANYONECANPAY, DUMMY_UTXO_VALUE } from '@/lib/constants';
import {
  bitcoin,
  toPsbtNetwork,
  NetworkType,
  buildTransaction,
  Transaction,
  convertUtxosToBtcUtxos,
  generateTransaction,
  PsbtInput,
} from '../wallet';
import { UtxoAssetItem } from '@/store';
import { ordx, bulkBuyingThirdOrder } from '@/api';
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

interface BatchSellOrderProps {
  inscriptionUtxos: UtxoAssetItem[];
  network: string;
  address: string;
  unit: string;
}
export async function buildBatchSellOrder({
  inscriptionUtxos,
  network,
  address,
  unit,
}: BatchSellOrderProps) {
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
    console.log(utxo, price);
    const { txid, vout } = parseUtxo(utxo);
    const [error, rawTx] = await tryit(ordx.getTxHex)({ txid: txid, network });
    if (error) {
      throw error;
    }
    const ordinalPreTx = bitcoin.Transaction.fromHex(rawTx.data);
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
      value: unit === 'btc' ? btcToSats(price) : Number(price),
    });
  }
  console.log(batchSell);
  return batchSell.toHex();
}

export async function buildTransferPsbt({
  inscriptionUtxos,
  utxos,
  oneOutput,
  addresses,
  feeRate,
}: any) {
  const { btcWallet, network, address, publicKey } =
    useReactWalletStore.getState();

  const len = inscriptionUtxos.length;
  let toAddress: any[] = [];

  if (addresses.length === 1) {
    toAddress = Array.from({ length: len }).fill(addresses[0]);
  } else {
    toAddress = addresses.slice(0, len);
  }
  const inputUtxoss: any[] = [];
  const outputs: any[] = [];
  let totalValue = 0;
  for (let i = 0; i < len; i++) {
    const item = inscriptionUtxos[i];
    const [txid, vout] = item.utxo.split(':');
    inputUtxoss.push({
      txid,
      vout: parseInt(vout),
      value: item.value,
    });
    totalValue += item.value;
    if (!oneOutput) {
      outputs.push({
        address: toAddress[i],
        value: item.value,
      });
    }
  }
  if (oneOutput) {
    outputs.push({
      address: toAddress[0],
      value: totalValue,
    });
  }

  inputUtxoss.push(...utxos);

  const psbt = await buildTransaction({
    utxos: inputUtxoss,
    outputs,
    feeRate,
    network,
    address,
    publicKey,
    suitable: true,
  });
  return psbt;
}
export async function generateTransferPsbt({
  inscriptionUtxos,
  utxos,
  oneOutput,
  addresses,
  feeRate,
}: any) {
  const { btcWallet, network, address, publicKey } =
    useReactWalletStore.getState();

  const len = inscriptionUtxos.length;
  let toAddress: any[] = [];

  if (addresses.length === 1) {
    toAddress = Array.from({ length: len }).fill(addresses[0]);
  } else {
    toAddress = addresses.slice(0, len);
  }
  const inputUtxoss: any[] = [];
  const outputs: any[] = [];
  let totalValue = 0;
  for (let i = 0; i < len; i++) {
    const item = inscriptionUtxos[i];
    const [txid, vout] = item.utxo.split(':');
    inputUtxoss.push({
      txid,
      vout: parseInt(vout),
      value: item.value,
    });
    totalValue += item.value;
    if (!oneOutput) {
      outputs.push({
        address: toAddress[i],
        value: item.value,
      });
    }
  }
  if (oneOutput) {
    outputs.push({
      address: toAddress[0],
      value: totalValue,
    });
  }

  inputUtxoss.push(...utxos);

  const tx = await generateTransaction({
    utxos: inputUtxoss,
    outputs,
    feeRate,
    network,
    address,
    publicKey,
    suitable: true,
  });
  return tx;
}
export const splitBatchSignedPsbt = (signedHex: string, network: string) => {
  console.log('split batch signed psbt', signedHex);
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const psbt = bitcoin.Psbt.fromHex(signedHex, {
    network: psbtNetwork,
  });
  console.log(psbt);

  const { inputCount } = psbt;
  const newPsbts: string[] = [];
  for (let i = 0; i < inputCount; i++) {
    const newPsbt = new bitcoin.Psbt({
      network: psbtNetwork,
    });
    const batchInput: any = {
      hash: psbt.txInputs[i].hash as any,
      index: psbt.txInputs[i].index,
      witnessUtxo: psbt.data.inputs[i].witnessUtxo as any,
    };
    if (psbt.data.inputs[i].finalScriptWitness) {
      batchInput.finalScriptWitness = psbt.data.inputs[i].finalScriptWitness as any;
    }
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
    let txid = await btcWallet?.pushPsbt(signed);
    if (txid) {
      try {
        txid = JSON.parse(txid);
      } catch (error) {
        console.log(error);
      }
    }
    for (let i = 0; i < num; i++) {
      dummyUtxos.push({
        txid,
        vout: 0,
        value: DUMMY_UTXO_VALUE,
      });
    }
    balanceUtxo = {
      txid,
      vout: psbt.txOutputs.length - 1,
      value: psbt.txOutputs[psbt.txOutputs.length - 1].value,
    };
  }
  console.log(dummyUtxos);
  console.log(balanceUtxo);
  return {
    balanceUtxo,
    dummyUtxos,
  };
};
export const buildBuyThirdOrder = async ({ order_ids, fee_rate_tier }: any) => {
  const { btcWallet, network, address, publicKey } =
    useReactWalletStore.getState();
  const thirdRes = await bulkBuyingThirdOrder({
    address,
    publickey: publicKey,
    order_ids,
    fee_rate_tier,
    receiver_address: address,
  });
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  if (thirdRes?.code === 200 && btcWallet && thirdRes.data) {
    const buyRaw = thirdRes.data;
    const signed = await btcWallet.signPsbt(buyRaw);
    console.log('signed', signed);
    // const txid = await btcWallet.pushPsbt(signed);
    // console.log('buy order txid', txid);
    const psbt = bitcoin.Psbt.fromHex(signed!, {
      network: psbtNetwork,
    });

    const tx = psbt.extractTransaction();
    const rawTxHex = tx.toHex();
    return rawTxHex;
  } else {
    throw new Error(thirdRes?.msg || 'Failed to build third order');
  }
};
export const buildBuyOrder = async ({
  raws,
  utxos,
  serviceFee,
  feeRate,
  dummyUtxos,
}: any) => {
  const { btcWallet, network, address, publicKey } =
    useReactWalletStore.getState();
  const NEXT_PUBLIC_SERVICE_FEE = process.env.NEXT_PUBLIC_SERVICE_FEE;
  const NEXT_PUBLIC_SERVICE_ADDRESS =
    network === 'testnet'
      ? process.env.NEXT_PUBLIC_SERVICE_TESTNET_ADDRESS
      : process.env.NEXT_PUBLIC_SERVICE_ADDRESS;

  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );

  const btcUtxos = convertUtxosToBtcUtxos({
    utxos,
    address,
    publicKey,
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
  for (let i = 0; i < raws.length; i++) {
    const { raw } = raws[i];
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
    suitable: true,
  });
  console.log(psbtTx);
  const buyPsbt = psbtTx.toPsbt();
  console.log(buyPsbt);
  if (!btcWallet) {
    throw new Error('Wallet not initialized');
  }
  const signed = await btcWallet.signPsbt(buyPsbt.toHex());
  console.log('signed', signed);
  // const txid = await btcWallet.pushPsbt(signed);
  // console.log('buy order txid', txid);
  const psbt = bitcoin.Psbt.fromHex(signed!, {
    network: psbtNetwork,
  });

  const tx = psbt.extractTransaction();
  console.log(tx);
  const rawTxHex = tx.toHex();
  return rawTxHex;
};

export const generateBuyInputsAndOutputs = async ({
  raws,
  dummyUtxos,
}: any) => {
  const { network, address } = useReactWalletStore.getState();
  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
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
  const sellInputs: PsbtInput[] = [];
  const sellOutputs: any[] = [];
  const buyOutputs: any[] = [];
  for (let i = 0; i < raws.length; i++) {
    const raw = raws[i];
    const sellPsbt = bitcoin.Psbt.fromHex(raw, {
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
    sellOutputs.push(ordOutput);
    const sellerOutput = sellPsbt.txOutputs[0];
    buyOutputs.push(sellerOutput);
  }
  const inputs = [...sellInputs];
  const outputs = [...sellOutputs, ...buyOutputs];
  return {
    inputs,
    outputs,
    dummyInputs,
  };
};
// 70736274ff01005e02000000015e50ac4fd7882bcdbebabe4ed4877cef443a983ebbd74b9f27207b20eafd46f80000000000ffffffff01c0270900000000002251205971a7e6b181b0cb407ee8cc50330293dc580259ffeda320b8bb94da059ee9ab000000000001012b10270000000000002251205971a7e6b181b0cb407ee8cc50330293dc580259ffeda320b8bb94da059ee9ab01084301411b780b4ac11d8549d496f84be733c778d8eae5f07309f2bac64711ab57334880d200850eb5ea45ad6636a7a4a86d6b9c380c857b49fd11b2377d5c4975ea2fd6830000
// 70736274ff01005e02000000015e50ac4fd7882bcdbebabe4ed4877cef443a983ebbd74b9f27207b20eafd46f80000000000ffffffff01c0270900000000002251205971a7e6b181b0cb407ee8cc50330293dc580259ffeda320b8bb94da059ee9ab000000000001012b10270000000000002251205971a7e6b181b0cb407ee8cc50330293dc580259ffeda320b8bb94da059ee9ab01084301411b780b4ac11d8549d496f84be733c778d8eae5f07309f2bac64711ab57334880d200850eb5ea45ad6636a7a4a86d6b9c380c857b49fd11b2377d5c4975ea2fd6830000

export const calcBuyOrderFee = async ({
  raws,
  utxos,
  serviceFee,
  feeRate,
  dummyUtxos,
}: any) => {
  const { btcWallet, network, address, publicKey } =
    useReactWalletStore.getState();
  const NEXT_PUBLIC_SERVICE_FEE = process.env.NEXT_PUBLIC_SERVICE_FEE;
  const NEXT_PUBLIC_SERVICE_ADDRESS =
    network === 'testnet'
      ? process.env.NEXT_PUBLIC_SERVICE_TESTNET_ADDRESS
      : process.env.NEXT_PUBLIC_SERVICE_ADDRESS;

  const psbtNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );

  const btcUtxos = convertUtxosToBtcUtxos({
    utxos,
    address,
    publicKey,
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

  const psbtTx = new Transaction({
    address,
    network: network == 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
    feeRate,
  });
  psbtTx.setEnableRBF(false);
  dummyInputs.forEach((v) => {
    psbtTx.addPsbtInput(v);
  });

  const sellInputs: PsbtInput[] = [];
  const sellOutputs: any[] = [];
  const buyOutputs: any[] = [];
  for (let i = 0; i < raws.length; i++) {
    const { raw } = raws[i];
    const sellPsbt = bitcoin.Psbt.fromHex(raw, {
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
  console.log(psbtTx);
  return await psbtTx.calNetworkFee();
};
