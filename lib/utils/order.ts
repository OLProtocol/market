import * as bitcoinjs from "bitcoinjs-lib";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import { Address, Script } from "@cmdcode/tapscript";
import { btcToSats } from "@/lib/utils";
import { useReactWalletStore } from "btc-connect/dist/react";
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
  network,
  address,
}: SellOrderProps) => {
  const { btcWallet } = useReactWalletStore.getState();
  const rawTx = await getTxHex(inscriptionUtxo.txid, network);
  const ordinalPreTx = bitcoinjs.Transaction.fromHex(rawTx);
  const utxoInput = {
    hash: inscriptionUtxo.txid,
    index: inscriptionUtxo.vout,
    witnessUtxo: ordinalPreTx.outs[inscriptionUtxo.vout],
    sighashType: SIGHASH_SINGLE_ANYONECANPAY,
  };
  const sell = new bitcoinjs.Psbt({
    network:
      network === "testnet"
        ? bitcoinjs.networks.testnet
        : bitcoinjs.networks.bitcoin,
  });
  bitcoinjs.initEccLib(ecc);
  sell.addInput(utxoInput);
  sell.addOutput({
    address,
    value: total,
  });
  if (!btcWallet) {
    throw new Error("Wallet not initialized");
  }
  const signed = await btcWallet.signPsbt(sell.toHex());
  return signed;
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
export const buildBuyOrder = async ({
  orderRaw,
  network,
  address,
  fee,
  utxos,
  serviceFee,
  dummyUtxos,
}: BuyOrderProps) => {
  const NEXT_PUBLIC_SERVICE_FEE = process.env.NEXT_PUBLIC_SERVICE_FEE;
  const NEXT_PUBLIC_IS_FREE = process.env.NEXT_PUBLIC_IS_FREE;
  const NEXT_PUBLIC_SERVICE_ADDRESS = process.env.NEXT_PUBLIC_SERVICE_ADDRESS;
  const { btcWallet } = useReactWalletStore.getState();

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
  buyPsbt.addOutput({
    address,
    value: DUMMY_UTXO_VALUE,
  });

  const changeOutput = {
    address,
    value: changeValue,
  };
  buyPsbt.addOutput(changeOutput);

  if (!btcWallet) {
    throw new Error("Wallet not initialized");
  }
  const signed = await btcWallet.signPsbt(buyPsbt.toHex());
  const psbt = bitcoinjs.Psbt.fromHex(signed, {
    network: btccoinNetwork,
  });
  const tx = psbt.extractTransaction();
  const rawTxHex = tx.toHex();
  return rawTxHex;
};
