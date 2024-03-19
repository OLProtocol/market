import { removeObjectEmptyValue } from "@/lib/utils";

export const request = async (path: string, options: any = {}) => {
  const { headers = {}, method = "GET", data } = options;
  let url = `http://39.108.147.241:7801${path}`;
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

interface GetTopTickers {
  interval?: number;
  top_count?: number;
  top_list?: "recommend" | "tx_count" | "tx_amount" | "tx_volume";
}
export const getTopTickers = async ({
  interval = 1,
  top_count = 10,
  top_list = "recommend",
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
