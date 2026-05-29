export const getLabelForAssets = (assets_name: string, assets_type: string) => {
  const assetsMap = {
    ns: {
      un: 'Pure Name',
    },
  };
  return assetsMap[assets_type]?.[assets_name] || assets_name;
};

export const getTickLabel = (tick?: string, type?: string) => {
  if (tick === undefined) return undefined;
  const tickMap = {
    btc: 'PN-btc',
  };
  if (type === 'n' && tick === '') {
    return 'Pure Name';
  }
  return tickMap[tick] || tick;
};

export const hideStr = (
  str?: string,
  num: number = 10,
  placeholder = '*****',
) => {
  if (typeof str === 'string' && str) {
    return `${str?.substring(0, num)}${placeholder}${str?.substring(
      str?.length - num,
    )}`;
  }
  return '';
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const removeObjectEmptyValue = (obj: any) => {
  const _obj = { ...obj };
  Object.keys(_obj).forEach((key) => {
    if (
      _obj[key] === '' ||
      _obj[key] === undefined ||
      _obj[key] === null ||
      _obj[key] === 'null' ||
      _obj[key] === 'undefined' ||
      _obj[key] === 'NaN' ||
      (isNaN(_obj[key]) && typeof _obj[key] === 'number')
    ) {
      delete _obj[key];
    }
  });
  return _obj;
};

export function thousandSeparator(num: number) {
  return num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function satsToBitcoin(sats): number {
  if (typeof sats === 'string') {
    sats = sats.trim();
  }

  if (isNaN(Number(sats))) {
    console.warn('Input is not a valid number, defaulting to 0');
    sats = 0;
  }

  let satoshis = Number(sats);
  if (satoshis < 0) {
    console.warn('Input must be a non-negative number, defaulting to 0');
    satoshis = 0;
  }

  satoshis = Math.round(satoshis);
  return satoshis / 1e8;
}

export function btcToSats(btc: string | number): number {
  if (typeof btc === 'string') {
    btc = btc.trim();
  }

  if (isNaN(Number(btc))) {
    console.warn('Input is not a valid number, defaulting to 0');
    btc = 0;
  }

  let btcAmount = Number(btc);
  if (btcAmount < 0) {
    console.warn('Input must be a non-negative number, defaulting to 0');
    btcAmount = 0;
  }

  return Math.round(btcAmount * 1e8);
}
