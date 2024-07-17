import { Decimal } from 'decimal.js';
import {
  DUST_UTXO_VALUE,
  MS_BRC20_UTXO_VALUE,
  DUMMY_UTXO_VALUE,
} from '@/lib/constants';
import { addresToScriptPublicKey } from '@/lib/utils/order';
import { sortBy, reverse, cloneDeep } from 'lodash';
import { bitcoin, toPsbtNetwork, NetworkType } from '../wallet';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';

export const parseUtxo = (utxo: string) => {
  const [txid, vout] = utxo.split(':');
  return {
    txid,
    vout: parseInt(vout),
  };
};

export const satsToBitcoin = (sats): number => {
  if (typeof sats === 'string') {
    sats = sats.trim();
  }

  if (isNaN(Number(sats))) {
    console.warn('Input is not a valid number, defaulting to 0');
    sats = 0;
  }

  let satoshis = Number(sats);

  // Ensure the number is non-negative
  if (satoshis < 0) {
    console.warn('Input must be a non-negative number, defaulting to 0');
    satoshis = 0;
  }

  // Round to the nearest integer to handle decimal Satoshis
  satoshis = Math.round(satoshis);

  // Convert Satoshis to BTC
  const btc = satoshis / 1e8;

  return btc;
};

export const btcToSats = (btc: string | number): number => {
  if (typeof btc === 'string') {
    btc = btc.trim();
  }

  if (isNaN(Number(btc))) {
    console.warn('Input is not a valid number, defaulting to 0');
    btc = 0;
  }

  let btcAmount = Number(btc);

  // Ensure the number is non-negative
  if (btcAmount < 0) {
    console.warn('Input must be a non-negative number, defaulting to 0');
    btcAmount = 0;
  }

  // Convert BTC to Satoshis and handle precision issues by rounding
  const sats = Math.round(btcAmount * 1e8);

  return sats;
};

export const safeOutputValue = (
  value: number | Decimal,
  isMs = false,
): number => {
  const threshold = isMs ? MS_BRC20_UTXO_VALUE : DUST_UTXO_VALUE;

  // if value is less than 1k sats, throw an error
  if (typeof value === 'number') {
    if (value < threshold) {
      throw new Error(
        `The amount you are trying is too small. Maybe try a larger amount.`,
      );
    }
  } else {
    if (value.lessThan(threshold)) {
      throw new Error(
        `The amount you are trying is too small. Maybe try a larger amount.`,
      );
    }
  }

  // make sure value is a whole number
  if (typeof value === 'number') {
    return Math.round(value);
  }

  return value.round().toNumber();
};

// export const filterUtxosByValue = (
//   utxos: any[],
//   value,
//   reverseStatus = true,
// ) => {
//   const sortUtxos = sortBy(utxos, 'value');
//   console.log('sortUtxos', sortUtxos);
//   const _utxoList = cloneDeep(sortUtxos);
//   if (reverseStatus) {
//     reverse(_utxoList);
//   }
//   const avialableUtxo: any[] = [];
//   let avialableValue = 0;
//   for (let i = 0; i < _utxoList.length; i++) {
//     const utxo = _utxoList[i];
//     avialableUtxo.push(utxo);
//     avialableValue += utxo.value;
//     if (avialableValue >= value) {
//       break;
//     }
//   }
//   const twoUtxos = sortUtxos.slice(0, 2);
//   const smallTwoUtxos: any[] = [];
//   for (let i = 0; i < twoUtxos.length; i++) {
//     if (
//       avialableUtxo.every(
//         (item) =>
//           `${item.txid}:${item.vout}` !==
//           `${twoUtxos[i].txid}:${twoUtxos[i].vout}`,
//       )
//     ) {
//       smallTwoUtxos.push(twoUtxos[i]);
//     }
//   }
//   console.log('smallTwoUtxos', smallTwoUtxos);
//   return {
//     minUtxo: sortUtxos[0],
//     maxUtxo: sortUtxos[sortUtxos.length - 1],
//     utxos: avialableUtxo,
//     smallTwoUtxos,
//     total: avialableValue,
//   };
// };

export const calcPsbtVirtualSize = (psbtHex: string, network: string) => {
  const btccoinNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );
  const psbt = bitcoin.Psbt.fromHex(psbtHex, {
    network: btccoinNetwork,
  });
  // 从 base64 解码为 Buffer
  // const psbtBuffer = Buffer.from(psbtBase64, 'base64');

  // // 解码 PSBT 数据
  // const psbt = bitcoin.Psbt.fromBuffer(psbtBuffer);

  // 获取未签名交易十六进制
  const unsignedTxHex = psbt.data.globalMap.unsignedTx
    .toBuffer()
    .toString('hex');

  // 从十六进制反序列化生成 Transaction 对象
  const tx = bitcoin.Transaction.fromBuffer(Buffer.from(unsignedTxHex, 'hex'));

  // 计算交易虚拟大小 vsize
  const virtualSize = tx.virtualSize();
  console.log('virtualSize', virtualSize);
  return virtualSize;
};

export const calcPsbtVsizeByUtxos = ({ inputs, outputs, network }) => {
  const btccoinNetwork = toPsbtNetwork(
    network === 'testnet' ? NetworkType.TESTNET : NetworkType.MAINNET,
  );

  const virtualPsbt = new bitcoin.Psbt({
    network: btccoinNetwork,
  });

  inputs.forEach((i) => {
    virtualPsbt.addInput(i);
  });
  outputs.forEach((o) => {
    virtualPsbt.addOutput(o);
  });
  console.log('virtualPsbt', virtualPsbt);
  return calcPsbtVirtualSize(virtualPsbt.toHex(), network);
};

export const calcUtxosVirtualGas = ({
  utxos,
  address,
  network,
  estimateFee,
  feeRate,
  outputLenght,
}) => {
  feeRate = Math.max(1.2, 1);
  const inputs: any[] = utxos.map((v) => {
    return {
      hash: v.txid,
      index: v.vout,
      witnessUtxo: {
        script: Buffer.from(addresToScriptPublicKey(address), 'hex'),
        value: v.value,
      },
    };
  });
  const total = utxos.reduce((a, b) => a + b.value, 0);
  const balance = total - DUMMY_UTXO_VALUE * outputLenght - estimateFee;
  console.log('calcDummyUtxosVsize', total, balance);
  const outputs = [
    {
      address,
      value: balance,
    },
  ];
  for (let i = 0; i < outputLenght - 1; i++) {
    outputs.push({
      address,
      value: DUMMY_UTXO_VALUE,
    });
  }
  const vsize = calcPsbtVsizeByUtxos({
    inputs,
    outputs,
    network,
  });
  return estimateFee;
};

export const signAndPushPsbt = async (psbt) => {
  const { btcWallet } = useReactWalletStore.getState();
  if (!btcWallet) {
    throw new Error('No wallet connected');
  }
  const signed = await btcWallet.signPsbt(psbt.toHex());
  const pushedTxId = await btcWallet.pushPsbt(signed);
  console.log('pushedTxId', pushedTxId);
  try {
    return JSON.parse(pushedTxId);
  } catch (error) {
    return pushedTxId;
  }
};
