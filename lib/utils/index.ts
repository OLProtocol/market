export * from "./order";
export * from "./btc";

export const hideStr = (
  str?: string,
  num: number = 10,
  placeholder = "*****"
) => {
  if (typeof str === "string" && str) {
    return `${str?.substring(0, num)}${placeholder}${str?.substring(
      str?.length - num
    )}`;
  }
  return "";
};
export const removeObjectEmptyValue = (obj: any) => {
  const _obj = { ...obj };
  Object.keys(_obj).forEach((key) => {
    if (
      _obj[key] === "" ||
      _obj[key] === undefined ||
      _obj[key] === null ||
      _obj[key] === "null" ||
      _obj[key] === "undefined" ||
      _obj[key] === "NaN" ||
      (isNaN(_obj[key]) && typeof _obj[key] === "number")
    ) {
      delete _obj[key];
    }
  });
  return _obj;
};

export const resolveMempoolTxLink = (txid: string, network: string) => {
  const href =
    network === "testnet"
      ? `https://mempool.space/testnet/tx/${txid}`
      : `https://mempool.space/tx/${txid}`;
  return href;
};

export const thousandSeparator = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}