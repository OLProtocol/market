import { removeObjectEmptyValue } from '@/lib/utils';
import { useCommonStore } from '@/store';
import { useReactWalletStore } from 'btc-connect/dist/react';

export const request = async (path: string, options: any = {}) => {
  const { publicKey, connected, network } = useReactWalletStore.getState();
  const { signature } = useCommonStore.getState();
  const { headers = {}, method = 'GET', data } = options;
  let url = `https://apitest.ordx.market${network === 'testnet' ? '/testnet' : ''}${path}`;
  if (method === 'GET') {
    const query = new URLSearchParams(removeObjectEmptyValue(data));
    url += `?${query}`;
  } else if (method === 'POST') {
    options.body = JSON.stringify(data);
    headers['Content-Type'] = 'application/json';
  }
  if (connected && signature) {
    headers['Publickey'] = publicKey;
    headers['Signature'] = signature;
  }
  delete options.data;
  options.headers = headers;
  let res = await fetch(url, options);
  res = await res.json();
  console.log(res);
  if ((res as any).code === -1) {
    throw new Error((res as any).msg);
  }
  return res as any;
};
export const getOrdxAssets = async ({
  address,
  offset,
  size,
  type,
  ticker,
}: any) => {
  const res = await request('/ordx/GetAddressOrdxAssets', {
    data: { address, offset, size, type, ticker },
  });
  return res;
};
export const getAddressOrdxList = async ({
  address,
  offset,
  size,
  type,
  ticker,
}: any) => {
  const res = await request('/ordx/GetAddressOrdxList', {
    data: { address, offset, size, type, ticker },
  });
  return res;
};

interface GetTickerSummary {
  ticker: string;
}
export const getTickerSummary = async ({ ticker }: GetTickerSummary) => {
  const res = await request('/ordx/GetTickerSummary', {
    data: { ticker },
  });
  return res;
};
interface GetOrders {
  ticker?: string;
  address?: string;
  offset: number;
  size: number;
  sort?: 0 | 1 | 2 | 3 | 4; // 0: 不排序 1: 价格升序 2: 价格降序 3: 时间升序 4: 时间降序
  type?: 1 | 2; // 1: 卖出订单 2: 买入订单， 当前只支持1（默认为1）
}
export const getOrders = async ({
  ticker,
  offset,
  size,
  sort = 0,
  type = 1,
  address,
}: GetOrders) => {
  const res = await request('/ordx/GetOrders', {
    data: { ticker, offset, size, sort, type, address },
  });
  return res;
};
export const getHistory = async ({
  ticker,
  offset,
  size,
  sort = 0, // 0: 不排序 1: 价格升序 2: 价格降序 3: 时间升序 4: 时间降序
  address,
}: any) => {
  const res = await request('/ordx/GetHistory', {
    data: { ticker, offset, size, sort, address },
  });
  return res;
};

interface GetTopTickers {
  interval?: number;
  top_count?: number;
  top_list?: 'recommend' | 'tx_count' | 'tx_amount' | 'tx_volume';
}
export const getTopTickers = async ({
  interval = 1,
  top_count = 10,
  top_list = 'tx_amount',
}: GetTopTickers) => {
  const res = await request('/ordx/GetTopTickers', {
    data: { interval, top_count, top_list },
  });
  return res;
};
export const submitOrder = async ({ address, raw }: any) => {
  const res = await request('/ordx/SubmitOrder', {
    method: 'POST',
    data: { address, raw },
  });
  return res;
};
export const cancelOrder = async ({ address, order_id }: any) => {
  const res = await request('/ordx/CancelOrder', {
    method: 'POST',
    data: { address, order_id },
  });
  return res;
};
export const lockOrder = async ({ address, order_id }: any) => {
  const res = await request('/ordx/LockOrder', {
    method: 'POST',
    data: { address, order_id },
  });
  return res;
};
export const unlockOrder = async ({ address, order_id }: any) => {
  const res = await request('/ordx/UnlockOrder', {
    method: 'POST',
    data: { address, order_id },
  });
  return res;
};

export const buyOrder = async ({ address, order_id, raw }: any) => {
  const res = await request('/ordx/BuyOrder', {
    method: 'POST',
    data: { address, order_id, raw },
  });
  return res;
};

export const getUtxoByValue = async ({
  address,
  value = 600,
  network,
}: any) => {
  const res = await fetch(
    `https://apitest.ordx.space/testnet/utxo/getUtxoByValue`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address, value }),
    },
  );
  return res.json();
};

export const fetchChainFeeRate = async (network: 'main' | 'testnet') => {
  const url =
    network === 'testnet'
      ? 'https://mempool.space/testnet/api/v1/fees/recommended'
      : 'https://mempool.space/api/v1/fees/recommended';
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export const getAppVersion = async () => {
  const res = await fetch(`/version.txt?t=${+new Date()}`);
  return res.text();
};
