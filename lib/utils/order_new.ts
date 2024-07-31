import { classicToPsbt, estimateBtcFee, networks } from '@okxweb3/coin-bitcoin';
import { Psbt } from '@okxweb3/coin-bitcoin/dist/bitcoinjs-lib/psbt.js';

export const generateBuyInputsAndOutputs = async ({
  raws,
  dummyUtxos,
  network,
  address,
}: any) => {
  const psbtNetwork =
    network === 'testnet' ? networks.testnet : networks.bitcoin;
  const dummyInputs: any[] = dummyUtxos.map((v) => {
    return {
      hash: v.txid,
      index: v.vout,
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
