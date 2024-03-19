import * as bitcoinjs from "bitcoinjs-lib";
import * as ecc from "@bitcoin-js/tiny-secp256k1-asmjs";
import { Address, Script } from "@cmdcode/tapscript";
import { btcToSats } from "@/lib/utils";
import { SIGHASH_SINGLE_ANYONECANPAY } from "@/lib/constants";
import { getTxHex,  } from "@/api";
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
