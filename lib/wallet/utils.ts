import { Transaction, NetworkType } from '.';
import { type Utxo, UnspentOutput, PsbtInput, PsbtOutput } from './utxo';
import {
  converUtxosToInputs,
  convertUtxosToBtcUtxos,
  convertBtcUtxosToInputs,
} from './utxo';

export const calcNetworkFee = async ({
  utxos,
  outputs,
  feeRate,
  network,
  address,
  publicKey,
}: {
  utxos: Utxo[];
  outputs: PsbtOutput[];
  feeRate: number;
  network: string;
  address: string;
  publicKey: string;
}) => {
  const btcUtxos = convertUtxosToBtcUtxos({
    utxos,
    address,
    publicKey,
  });
  const tx = new Transaction({
    address,
    network: network == 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
    feeRate,
  });
  tx.setEnableRBF(true);

  outputs.forEach((v) => {
    tx.addOutput(v.address, v.value);
  });
  console.log(btcUtxos);
  await tx.addSufficientUtxosForFee(btcUtxos);
  const fee = await tx.calNetworkFee();
  return fee;
};

export const buildTransaction = async ({
  utxos,
  outputs,
  feeRate,
  network,
  address,
  publicKey,
  suitable,
}: {
  utxos: Utxo[];
  outputs: PsbtOutput[];
  feeRate: number;
  network: string;
  address: string;
  publicKey: string;
  suitable?: boolean;
}) => {
  const btcUtxos = convertUtxosToBtcUtxos({
    utxos,
    address,
    publicKey,
  });

  const tx = new Transaction({
    address,
    network: network == 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
    feeRate,
  });
  console.log(btcUtxos);
  tx.setEnableRBF(true);

  outputs.forEach((v) => {
    tx.addOutput(v.address, v.value);
  });
  await tx.addSufficientUtxosForFee(btcUtxos, {
    suitable,
  });

  const psbt = tx.toPsbt();
  return psbt;
};
