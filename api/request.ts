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
    throw (res as any).msg;
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
  sort?: number; // 0: 不排序 1: 价格升序 2: 价格降序 3: 时间升序 4: 时间降序
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
export const submitBatchOrders = async ({ address, raws }: any) => {
  const res = await request('/ordx/SubmitBatchOrders', {
    method: 'POST',
    data: { address, raw: raws },
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
export const bulkBuyOrder = async ({ address, order_ids, raw }: any) => {
  const res = await request('/ordx/BulkBuyOrder', {
    method: 'POST',
    data: { address, order_ids, raw },
  });
  return res;
};

export const getUtxoByValue = async ({
  address,
  value = 600,
  network,
}: any) => {
  // const res = await fetch(
  //   `https://apidev.ordx.space/testnet/utxo/address/${address}/${value}`,
  // );
  return {
    code: 0,
    msg: 'ok',
    data: [
      {
        txid: '273fac36d936bfa89f86b717cd62cd6bbf0d7444d6fd4c7ebf2f90db8b487a2b',
        vout: 6,
        value: 298580,
      },
      {
        txid: '4798dd02fbe71c724ee9c6f008d57acbe5e124dafb8091950b2957ac9caa6fa4',
        vout: 1,
        value: 29339,
      },
      {
        txid: 'c4527904d27dd033111093a8b5ac6ff78c3528b8622dce1f0cb48b05ec692c15',
        vout: 1,
        value: 23696,
      },
      {
        txid: 'b69736f1bb23782d523a856bba90c712fa01482a66acb53ece001f7a28df8a62',
        vout: 1,
        value: 21592,
      },
      {
        txid: '273fac36d936bfa89f86b717cd62cd6bbf0d7444d6fd4c7ebf2f90db8b487a2b',
        vout: 0,
        value: 1200,
      },
      {
        txid: '273fac36d936bfa89f86b717cd62cd6bbf0d7444d6fd4c7ebf2f90db8b487a2b',
        vout: 5,
        value: 600,
      },
      {
        txid: '273fac36d936bfa89f86b717cd62cd6bbf0d7444d6fd4c7ebf2f90db8b487a2b',
        vout: 4,
        value: 600,
      },
      {
        txid: '9c1cfadfcd0416dd4eb1720b3177159950b793bf5f33bf3e5db3c91dc2678b8b',
        vout: 1,
        value: 600,
      },
      {
        txid: 'dc9db9a39d37bee128b653427b3711c8701f641442758f60284baedde653a487',
        vout: 4,
        value: 600,
      },
      {
        txid: 'dc9db9a39d37bee128b653427b3711c8701f641442758f60284baedde653a487',
        vout: 5,
        value: 600,
      },
      {
        txid: 'b12d5843226fea207a1eb6dd41989200927db5c1610948c23db208a4ea01942f',
        vout: 1,
        value: 569,
      },
      {
        txid: '8d53405f2b9b5cd863f5d45b6b92aa440c2d755cff51783abde1ec1724c4d6f4',
        vout: 0,
        value: 546,
      },
      {
        txid: 'ccf7d4450d0224b57a86a2a578353463fdb96928632013b7e51417d2a4431433',
        vout: 0,
        value: 546,
      },
      {
        txid: 'c26b468f969daf45fbd83ae3905d3463c4ea8274528d8a864daa349534dc71f0',
        vout: 0,
        value: 546,
      },
      {
        txid: '181fd31a0f6cec71daa7c2fa9b4724e56d5bb10fc1d66032aca752156932101f',
        vout: 0,
        value: 546,
      },
      {
        txid: 'f075491a907de557db6d35cde9a12d9e7c22dbb06920afd78f9bd79d240e12ae',
        vout: 0,
        value: 546,
      },
      {
        txid: '3fd0a5b345eb99eeab041c17a009682dd75d5aac0e0cf04d6d7a90cc911d341e',
        vout: 0,
        value: 546,
      },
      {
        txid: 'a8df01d5a894e551d4b7b7802d55384dae5da66e06eb7dcfcef680908d5fad84',
        vout: 0,
        value: 546,
      },
      {
        txid: '1ec07b3899e718101b8ea036f1bb7afa7641c5e8458c613ecd1ff09634422bf8',
        vout: 0,
        value: 546,
      },
      {
        txid: 'a222b8270474b48048069ccf244aaeed23dcb1c696c1a05651dc18a04c2e841c',
        vout: 0,
        value: 546,
      },
      {
        txid: 'eb5873052335b114f4a93f9e768a0e3c3b9fe01b230c383c92008433959d128b',
        vout: 0,
        value: 546,
      },
      {
        txid: 'c10080c962610037daeb20d1c9b6e481a979a9edbb44a52079c52e75619c5a01',
        vout: 0,
        value: 546,
      },
      {
        txid: 'd04caef867ed1cd82893de78115abc76425b7cff8c1e8003863e810be13945bc',
        vout: 0,
        value: 546,
      },
      {
        txid: '5fe9c8aea5a7dee4b141eb4d779b36974d192c128f0ddcba453ef9bb858eb2f6',
        vout: 0,
        value: 546,
      },
      {
        txid: '04a85de9cd24dd622ec44713a536e24f61fae6a511b6463722c815cb6a5696bd',
        vout: 0,
        value: 546,
      },
      {
        txid: '483d9f8a0326d2e4855f708510097a73069da4fe2ff6b8ce0a5c0a293db9a082',
        vout: 0,
        value: 546,
      },
      {
        txid: '7c46763960ebc7e62ec52d469d95003a1ddf1510fcd7359d5653c2864e732e90',
        vout: 0,
        value: 546,
      },
      {
        txid: '05276fa96b9e4944f72522d67e2f32db15e685442717ccd1a3807faf8e8186b9',
        vout: 0,
        value: 546,
      },
      {
        txid: '100af18c1fd33eacf56adbbee34d6e7dc4639689911c6472a44cbdcc32bae568',
        vout: 0,
        value: 546,
      },
      {
        txid: '66fa9ecee23c346b4db8f51025787bb0795043a01af3051c90e486dead7b3c12',
        vout: 0,
        value: 546,
      },
      {
        txid: '2e05e8f64955ecf31e2ba411af16cbb3d47cb225f2cd45039955c96282612006',
        vout: 0,
        value: 546,
      },
      {
        txid: '08c27b39c87c6858de8d485ee186b1ac96b63e14966c08b773a004e448d46c2b',
        vout: 0,
        value: 546,
      },
      {
        txid: '8fab7731b02b2f10cf1e0442ba65bc52fa9a122f817b47f153fc093c56172199',
        vout: 0,
        value: 546,
      },
      {
        txid: 'e454f6a87b060803ea1f9b1f6cb6756544d2e53307f850f24d287c53dd699f67',
        vout: 0,
        value: 546,
      },
      {
        txid: '59e1c23e860945702b2b38f6e7293cdca2950b2c9f22edda6822645067059998',
        vout: 0,
        value: 546,
      },
      {
        txid: 'c4d71d2a47df8b2e99979db297c68bdd69ef0264213384ab838827f53dc6bc1a',
        vout: 0,
        value: 546,
      },
      {
        txid: 'c66d2aa048c71f397386cb3c3d52434509bb0b804fc23e745b7fa31a7b516958',
        vout: 0,
        value: 546,
      },
      {
        txid: '07fc5404bbb2cb7a81d3cc175fa22eda971aa921c33068892a79bf918b65a071',
        vout: 0,
        value: 546,
      },
      {
        txid: '1a06445378589f38078d4121811a71549377935b39074864f482467961e14727',
        vout: 0,
        value: 546,
      },
      {
        txid: '5ca2b53b16cddbd6827cf022dfdd91ff6d9eb24bc8c8f3e5d1fdc7d0c07bb4a0',
        vout: 0,
        value: 546,
      },
      {
        txid: '137ead23adc617893df2dbde686c88c98ccfb0028bce68e1efbe4c5013ceda6c',
        vout: 0,
        value: 546,
      },
      {
        txid: '94e3ba4279b3c360ee31e4ddcad046819c38eb37a5d2edd384c5dd40e49531c8',
        vout: 0,
        value: 546,
      },
      {
        txid: 'b11a74cef1cc432428e953c879b733dd744d9ff500b4e0abe5bc8d2326aba224',
        vout: 0,
        value: 546,
      },
      {
        txid: '0333c8616daf44787e7a734c247092afdce7cd75b0c0b9fae18eda75881d8085',
        vout: 0,
        value: 546,
      },
      {
        txid: '63576af80c3e545076e513d897397f89382c85c2ff4e8b166894034354c7d275',
        vout: 0,
        value: 546,
      },
      {
        txid: '20bd733ba549bf53152a1e7817dabf2f48aa9cab879c79739d0661f7f7f71182',
        vout: 0,
        value: 546,
      },
      {
        txid: 'c44e92b35b53ca207057111ef72633bb5e95630dd68811394095fd6397869a20',
        vout: 0,
        value: 546,
      },
      {
        txid: 'a6c9d34e6989d846cf536a0afd68d267a663686e8b2f65fc8f4ac739e604865d',
        vout: 0,
        value: 546,
      },
      {
        txid: '8facc2b67d81111464890a99c0fd4890a2fbf9bcda64a69ba9907b13c5b6cdef',
        vout: 0,
        value: 546,
      },
      {
        txid: '9019ada034b97711882c5bb40c66c3df75e955c597c7261fe3265204b8bf827a',
        vout: 0,
        value: 546,
      },
      {
        txid: 'a33c27e6f07f78f88c980dba220b8aa3f652be4f793915faa95e34ea19cf43bb',
        vout: 0,
        value: 546,
      },
      {
        txid: '273fac36d936bfa89f86b717cd62cd6bbf0d7444d6fd4c7ebf2f90db8b487a2b',
        vout: 1,
        value: 546,
      },
      {
        txid: '4d6c6d5ceb65ac8b16d505a5fa95bc52fa594c0632a239028aa73c8f6c5ce33d',
        vout: 0,
        value: 546,
      },
      {
        txid: '2c12dbb38e586ad0cc6d337eb02113440ffc769f616406d288b2a4e471681ff9',
        vout: 0,
        value: 546,
      },
      {
        txid: '5bec918d6386ad0253beec3ed058e1b0b4bea391b72137cd3f4b4a50b47696a5',
        vout: 0,
        value: 546,
      },
      {
        txid: '156bd3ae07988aab69c7a6481a91c8f1d21d23e9a7c9e98562bbf0b13c27eec6',
        vout: 0,
        value: 546,
      },
      {
        txid: '8001999914f8d9be64888c2432e2dffb0f7e8ed8ec2341be5a50dc5fb0a805e7',
        vout: 0,
        value: 546,
      },
      {
        txid: '4b5f289e4007c2be0477d7d7d4574aa8310aa0cf3134c99467410a84a9629e4e',
        vout: 0,
        value: 546,
      },
      {
        txid: '6a4905f98dfe60f0f5d64c924af0fb07b1ec84e42ece246965edde0bd8847026',
        vout: 0,
        value: 546,
      },
      {
        txid: 'ff4f972be3860528a663c18a0fcd78560438c264f6d8d46e2addb44136181568',
        vout: 0,
        value: 546,
      },
      {
        txid: 'a5838c2759697999a4e03f0c2f91b3544ad6e25493de0890168e4bd9f1e088d2',
        vout: 0,
        value: 546,
      },
      {
        txid: '5b5db2594d0797f07d29381beb720902c27156c8320436e79ddd322d4d913ac8',
        vout: 0,
        value: 546,
      },
      {
        txid: 'f42efd74c520faf580261fade92c5f7572947cf16dca74f34259cc6560dc91a3',
        vout: 0,
        value: 546,
      },
      {
        txid: 'f6bde099c42c120f35ba67e64f43c1d7aab66355fb999a690d07cdd81d0d84a8',
        vout: 0,
        value: 546,
      },
    ],
  };
  // return res.json();
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
