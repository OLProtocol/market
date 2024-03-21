import { removeObjectEmptyValue } from "@/lib/utils";

export const request = async (path: string, options: any = {}) => {
  const { headers = {}, method = "GET", data } = options;
  let url = `https://apitest.ordx.market${path}`;
  if (method === "GET") {
    const query = new URLSearchParams(removeObjectEmptyValue(data));
    url += `?${query}`;
  } else if (method === "POST") {
    options.body = JSON.stringify(data);
    headers["Content-Type"] = "application/json";
  }
  delete options.data;
  options.headers = headers;
  const res = await fetch(url, options);
  return res;
};
export const getOrdxAssets = async ({
  address,
  offset,
  size,
  type,
  ticker,
}: any) => {
  const res = await request("/ordx/GetAddressOrdxAssets", {
    data: { address, offset, size, type, ticker },
  });
  return res.json();
};

interface GetTickerSummary {
  ticker: string;
}
export const getTickerSummary = async ({ ticker }: GetTickerSummary) => {
  const res = await request("/ordx/GetTickerSummary", {
    data: { ticker },
  });
  return res.json();
};
interface GetOrders {
  ticker: string;
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
  const res = await request("/ordx/GetOrders", {
    data: { ticker, offset, size, sort, type, address },
  });
  return res.json();
};
export const getHistory = async ({
  ticker,
  offset,
  size,
  sort = 0, // 0: 不排序 1: 价格升序 2: 价格降序 3: 时间升序 4: 时间降序
  address,
}: any) => {
  const res = await request("/ordx/GetHistory", {
    data: { ticker, offset, size, sort, address },
  });
  return res.json();
};

interface GetTopTickers {
  interval?: number;
  top_count?: number;
  top_list?: "recommend" | "tx_count" | "tx_amount" | "tx_volume";
}
export const getTopTickers = async ({
  interval = 1,
  top_count = 10,
  top_list = "tx_amount",
}: GetTopTickers) => {
  const res = await request("/ordx/GetTopTickers", {
    data: { interval, top_count, top_list },
  });
  return res.json();
};
export const submitOrder = async ({ address, raw }: any) => {
  const res = await request("/ordx/SubmitOrder", {
    method: "POST",
    data: { address, raw },
  });
  return res.json();
};
export const cancelOrder = async ({ address, order_id }: any) => {
  const res = await request("/ordx/CancelOrder", {
    method: "POST",
    data: { address, order_id },
  });
  return res.json();
};
export const lockOrder = async ({ address, order_id }: any) => {
  const res = await request("/ordx/LockOrder", {
    method: "POST",
    data: { address, order_id },
  });
  return res.json();
};
export const unlockOrder = async ({ address, order_id }: any) => {
  const res = await request("/ordx/UnlockOrder", {
    method: "POST",
    data: { address, order_id },
  });
  return res.json();
};

export const buyOrder = async ({ address, order_id, raw }: any) => {
  const res = await request("/ordx/BuyOrder", {
    method: "POST",
    data: { address, order_id, raw },
  });
  return res.json();
};

export const getUtxoByValue = async ({
  address,
  value = 600,
  network,
}: any) => {
  const res = await fetch(
    `https://apitest.ordx.space/testnet/utxo/getUtxoByValue`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, value }),
    }
  );
  return res.json();
};

export const fetchChainFeeRate = async (network: "main" | "testnet") => {
  const url =
    network === "testnet"
      ? "https://mempool.space/testnet/api/v1/fees/recommended"
      : "https://mempool.space/api/v1/fees/recommended";
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
