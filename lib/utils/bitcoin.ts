import * as bitcoinjs from 'bitcoinjs-lib';
import * as ecc from '@bitcoin-js/tiny-secp256k1-asmjs';

export const getBitcoinjs = () => {
  bitcoinjs.initEccLib(ecc);
  return bitcoinjs;
};
export const getBitcoinNetwork = (network: string) => {
  return network === 'testnet'
    ? bitcoinjs.networks.testnet
    : bitcoinjs.networks.bitcoin;
};
