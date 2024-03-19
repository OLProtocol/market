import { Decimal } from "decimal.js";
import { DUST_UTXO_VALUE, MS_BRC20_UTXO_VALUE } from "@/lib/constants";

export const parseUtxo = (utxo: string) => {
  const [txid, vout] = utxo.split(":");
  return {
    txid,
    vout: parseInt(vout),
  };
};

export const satsToBitcoin = (sats) => {
  if (sats >= 100000000) sats = sats * 10;
  let string =
    String(sats).padStart(8, '0').slice(0, -9) +
    '.' +
    String(sats).padStart(8, '0').slice(-9);
  if (string.substring(0, 1) == '.') string = '0' + string;
  return string;
};
export const btcToSats = (btc: number) => {
  let [whole, decimal] = btc.toString().split('.');
  if (!decimal) decimal = '0';
  return parseInt(whole) * 100000000 + parseInt(decimal.padEnd(8, '0'));
}
export const safeOutputValue = (
  value: number | Decimal,
  isMs = false
): number => {
  const threshold = isMs ? MS_BRC20_UTXO_VALUE : DUST_UTXO_VALUE;

  // if value is less than 1k sats, throw an error
  if (typeof value === "number") {
    if (value < threshold) {
      throw new Error(
        `The amount you are trying is too small. Maybe try a larger amount.`
      );
    }
  } else {
    if (value.lessThan(threshold)) {
      throw new Error(
        `The amount you are trying is too small. Maybe try a larger amount.`
      );
    }
  }

  // make sure value is a whole number
  if (typeof value === "number") {
    return Math.round(value);
  }

  return value.round().toNumber();
};
