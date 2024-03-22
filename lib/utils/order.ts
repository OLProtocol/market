import * as bitcoinjs from "bitcoinjs-lib";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import { Address, Script } from "@cmdcode/tapscript";
import { btcToSats } from "@/lib/utils";
import { env } from "next-runtime-env";
import { SIGHASH_SINGLE_ANYONECANPAY, DUMMY_UTXO_VALUE } from "@/lib/constants";
import { getTxHex, lockOrder, unlockOrder } from "@/api";
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
    Address.toScriptPubKey(address)
  )?.[0];
  return scriptPublicKey;
};
export const buildSellOrder = async ({
  inscriptionUtxo,
  total,
  amount,
  network,
  address,
}: SellOrderProps) => {
  const rawTx = await getTxHex(inscriptionUtxo.txid, network);
  const ordinalPreTx = bitcoinjs.Transaction.fromHex(rawTx);
  console.log(ordinalPreTx);
  const utxoInput = {
    hash: inscriptionUtxo.txid,
    index: inscriptionUtxo.vout,
    witnessUtxo: ordinalPreTx.outs[inscriptionUtxo.vout],
    sighashType: SIGHASH_SINGLE_ANYONECANPAY,
  };
  console.log(utxoInput);
  const sell = new bitcoinjs.Psbt({
    network:
      network === "testnet"
        ? bitcoinjs.networks.testnet
        : bitcoinjs.networks.bitcoin,
  });
  bitcoinjs.initEccLib(ecc);
  console.log(address, total);
  sell.addInput(utxoInput);
  sell.addOutput({
    address,
    value: total,
  });
  const signed = await window.unisat.signPsbt(sell.toHex());
  return signed;
  // txb.addInput(inscriptionUtxo, 0);
  // txb.addOutput(address, amount);
  // txb.addOutput(address, total - amount);
  // const tx = txb.buildIncomplete();
  // const hex = tx.toHex();
  // return hex;
};

interface BuyOrderProps {
  orderId: string;
  feeRate: number;
  serviceFee: number;
  address: string;
  network: string;
  utxos: any[];
  dummyUtxos: any[];
  fee: number;
}
export const buildBuyOrder = async ({
  orderId,
  feeRate,
  network,
  address,
  fee,
  utxos,
  serviceFee,
  dummyUtxos,
}: BuyOrderProps) => {
  const NEXT_PUBLIC_SERVICE_FEE = env("NEXT_PUBLIC_SERVICE_FEE");
  const NEXT_PUBLIC_IS_FREE = env("NEXT_PUBLIC_IS_FREE");
  const NEXT_PUBLIC_SERVICE_ADDRESS = env("NEXT_PUBLIC_SERVICE_ADDRESS");
  // await unlockOrder({ address, order_id: orderId });
  const orderDetail = await lockOrder({ address, order_id: orderId });
  if (!orderDetail?.data?.raw) {
    throw new Error(orderDetail.msg);
  }
  const { raw: orderRaw } = orderDetail.data;
  // console.log(orderDetail);
  // const orderRaw =
  //   "70736274ff01005e02000000012eeca6f14b6778df4dc13f41caf42c3a1bc405ef02b7ef5358993e28665fb0a90000000000ffffffff01d0070000000000002251205971a7e6b181b0cb407ee8cc50330293dc580259ffeda320b8bb94da059ee9ab000000000001012be8030000000000002251205971a7e6b181b0cb407ee8cc50330293dc580259ffeda320b8bb94da059ee9ab0108430141cab0c9b4f4d04fd27afa483df33992f79d7945edc8809ed589e0c5b7826141406d1272f8a52c0683a4c285a606bc92f93827f2b8b710eda74ff06c9186543965830000";

  bitcoinjs.initEccLib(ecc);
  const btccoinNetwork =
    network === "testnet"
      ? bitcoinjs.networks.testnet
      : bitcoinjs.networks.bitcoin;

  const sellPsbt = bitcoinjs.Psbt.fromHex(orderRaw, {
    network: btccoinNetwork,
  });

  const buyPsbt = new bitcoinjs.Psbt({
    network: btccoinNetwork,
  });
  console.log(sellPsbt);
  const totalValue = utxos.reduce((a, b) => a + b.value, 0);
  const buyInputs: any[] = utxos.map((v) => {
    return {
      hash: v.txid,
      index: v.vout,
      witnessUtxo: {
        script: Buffer.from(addresToScriptPublicKey(address), "hex"),
        value: v.value,
      },
    };
  });
  const dummyValue = dummyUtxos.reduce((a, b) => a + b.value, 0);
  const dummyInputs: any[] = dummyUtxos.map((v) => {
    return {
      hash: v.txid,
      index: v.vout,
      witnessUtxo: {
        script: Buffer.from(addresToScriptPublicKey(address), "hex"),
        value: v.value,
      },
      sighashType: bitcoinjs.Transaction.SIGHASH_ALL,
    };
  });
  dummyInputs.forEach((i) => {
    buyPsbt.addInput(i);
  });
  buyPsbt.addOutput({
    address,
    value: dummyValue,
  });

  console.log(buyInputs);
  const sellerInput = {
    hash: sellPsbt.txInputs[0].hash,
    index: sellPsbt.txInputs[0].index,
    witnessUtxo: sellPsbt.data.inputs[0].witnessUtxo,
    finalScriptWitness: sellPsbt.data.inputs[0].finalScriptWitness,
  };

  buyPsbt.addInput(sellerInput);

  buyInputs.forEach((i) => {
    buyPsbt.addInput(i);
  });

  const ordValue = sellPsbt.data.inputs[0].witnessUtxo!.value;
  const ordOutput = {
    address,
    value: ordValue,
  };
  buyPsbt.addOutput(ordOutput);

  const sellAmount = sellPsbt.txOutputs[0].value;
  const sellerOutput = sellPsbt.txOutputs[0];
  buyPsbt.addOutput(sellerOutput);

  const spendValue = sellAmount + fee;
  let changeValue = totalValue - spendValue - DUMMY_UTXO_VALUE * 2;
  if (
    NEXT_PUBLIC_IS_FREE === "0" &&
    serviceFee &&
    NEXT_PUBLIC_SERVICE_ADDRESS
  ) {
    changeValue -= serviceFee;
    buyPsbt.addOutput({
      address: NEXT_PUBLIC_SERVICE_ADDRESS,
      value: serviceFee,
    });
  }
  buyPsbt.addOutput({
    address,
    value: DUMMY_UTXO_VALUE,
  });
  // 145,928
  buyPsbt.addOutput({
    address,
    value: DUMMY_UTXO_VALUE,
  });

  const changeOutput = {
    address,
    value: changeValue,
  };
  buyPsbt.addOutput(changeOutput);

  const signed = await window.unisat.signPsbt(buyPsbt.toHex());
  const psbt = bitcoinjs.Psbt.fromHex(signed, {
    network: btccoinNetwork,
  });
  const tx = psbt.extractTransaction();
  const rawTxHex = tx.toHex();
  return rawTxHex;
};
