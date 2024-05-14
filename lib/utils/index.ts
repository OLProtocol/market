export * from './order';
export * from './btc';
import { getBlockStatus } from '@/api/blockStream';
import { add, format } from 'date-fns';

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

export const resolveMempoolTxLink = (txid: string, network: string) => {
  const href =
    network === 'testnet'
      ? `https://mempool.space/testnet/tx/${txid}`
      : `https://mempool.space/tx/${txid}`;
  return href;
};

export const thousandSeparator = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getTimeByHeight = async (height: number, network: string) => {
  const key = `height-time-${height}`;
  const lcoalCache = sessionStorage.getItem(key);
  if (lcoalCache) {
    return +lcoalCache;
  }
  const { timestamp } = await getBlockStatus({ height, network });
  const time = timestamp * 1000;
  if (time) {
    sessionStorage.setItem(key, time.toString());
  }
  return time;
};

export const calcTimeBetweenBlocks = async ({
  height,
  start,
  end,
  network,
}: any) => {
  try {
    const now = +new Date();
    let startTime: any = now;
    let endTime: any = now;
    if (start && start < height) {
      startTime = await getTimeByHeight(start, network);
      // console.log('startTime', startTime);
    } else {
      const startDis = start - height;
      startTime = add(now, { minutes: startDis * 10 });
    }

    if (end && end < height) {
      endTime = await getTimeByHeight(end, network);
    } else {
      const endDis = Math.ceil(end - height);
      endTime = add(now, { minutes: endDis * 10 });
    }
    // console.log('startTime', startTime, 'endTime', endTime);
    return {
      start: format(new Date(startTime), 'yyyy-MM-dd HH:mm'),
      end: format(new Date(endTime), 'yyyy-MM-dd HH:mm'),
    };
  } catch (error) {
    console.log(error);
    return {
      start: undefined,
      end: undefined,
    };
  }
};
