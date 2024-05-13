import axios from 'axios';

const generateUrl = (url: string, network?: string) => {
  return `${process.env.NEXT_PUBLIC_ORDX_HOST}${network === 'testnet' ? '/testnet' : '/mainnet'}/${url}`;
};
const responseParse = async (response) => {
  const { code, msg, data } = response?.data || {};
  if (code === 0) {
    return response?.data;
  } else {
    console.log('error: ' + msg);
  }
};
const getOrdxStatusList = async (params: any): Promise<any> => {
  const { data } = await axios.get(
    generateUrl(
      // `status?start=${params.start}&limit=${params.limit}`,
      `tick/status?start=${params.start}&limit=${params.limit}`,
      params.network,
    ),
  );
  return data;
};

const health = async ({ network }) => {
  const { data } = await axios.get(generateUrl(`health`, network));
  return data;
};

const getOrdxInfo = async ({ tick, network }: any) => {
  const { data } = await axios.get(
    // generateUrl(`v1/indexer/ordx/${tick}/info`, network),
    generateUrl(`tick/info/${tick}`, network),
    {
      timeout: 10000,
    },
  );
  return data;
};

const getOrdxSummary = async ({ address, network }: any) => {
  const { data } = await axios.get(
    // generateUrl(`query-v4/address/${address}/ordx/summary`, network),
    generateUrl(`address/summary/${address}`, network),
  );
  return data;
};
const getOrdxTickHolders = async ({ tick, network, start, limit }) => {
  const { data } = await axios.get(
    generateUrl(`tick/holders/${tick}?start=${start}&limit=${limit}`, network),
  );
  return data;
};

const getOrdxAddressHistory = async ({
  address,
  ticker,
  network,
  start,
  limit,
}: any) => {
  const { data } = await axios.get(
    generateUrl(
      // `query-v4/address/${address}/ordx/${ticker}/history?start=${start}&limit=${limit}`,
      `address/history/${address}/${ticker}?start=${start}&limit=${limit}`,
      network,
    ),
  );
  return data;
};

const getOrdxAddressHolders = async ({
  address,
  ticker,
  network,
  start,
  limit,
}: any) => {
  const { data } = await axios.get(
    generateUrl(
      // `query-v4/address/${address}/ordx/${ticker}/holderlist?start=${start}&limit=${limit}`,
      `address/utxolist/${address}/${ticker}?start=${start}&limit=${limit}`,
      network,
    ),
  );
  return data;
};
const getOrdxTickHistory = async ({ start, limit, ticker, network }: any) => {
  const { data } = await axios.get(
    generateUrl(
      // `query-v4/ordx/${ticker}?start=${start}&limit=${limit}`,
      `tick/history/${ticker}?start=${start}&limit=${limit}`,
      network,
    ),
  );
  return data;
};

const getUtxoByValue = async ({ address, value = 600, network }: any) => {
  const { data } = await axios.get(
    generateUrl(`utxo/address/${address}/${value}`, network),
  );
  return data;
};

// server端无此接口
const savePaidOrder = async ({ key, content, network }: any) => {
  const { data } = await axios.post(
    generateUrl(`v1/indexer/tx/putkv/${key}`, network),
    {
      key,
      content: JSON.stringify(content),
    },
  );
  return data;
};

const getInscriptiontInfo = async ({ inscriptionId, network }: any) => {
  const { data } = await axios.get(
    generateUrl(`mint/details/${inscriptionId}`, network),
  );
  return data;
};

const getAppVersion = async () => {
  const { data } = await axios.get(`/version.txt`);
  return data;
};

const getTxStatus = async ({ txid, network }: any) => {
  const { data } = await axios.get(
    `https://blockstream.info/${
      network === 'testnet' ? 'testnet/' : ''
    }api/tx/${txid}`,
  );
  return data;
};

const getSats = async ({ address, network }: any) => {
  const { data } = await axios.get(
    generateUrl(`exotic/address/${address}`, network),
  );
  return data;
};

const getSplittedSats = async ({ ticker, network }: any) => {
  const { data } = await axios.get(
    // generateUrl(`v1/indexer/ordx/${ticker}/splittedInscriptions`, network),
    generateUrl(`splittedInscriptions/${ticker}`, network),
  );
  return data;
};

const getAssetByUtxo = async ({ utxo, network }: any) => {
  const { data } = await axios.get(
    generateUrl(`utxo/abbrassets/${utxo}`, network),
  );
  return data;
};
const getSeedByUtxo = async ({ utxo, network }: any) => {
  const { data } = await axios.get(generateUrl(`utxo/seed/${utxo}`, network));
  return data;
};

const getUtxoByType = async ({ address, type, network }: any) => {
  const { data } = await axios.get(
    generateUrl(`exotic/address/${address}/${type}`, network),
  );
  return data;
};

const getSatsByAddress = async ({ address, sats, network }: any) => {
  const { data } = await axios.post(
    generateUrl(`sat/FindSatsInAddress`, network),
    {
      address: address,
      sats: sats,
    },
  );
  return data;
};

const getSatsByUtxo = async ({ utxo, network }: any) => {
  const { data } = await axios.get(generateUrl(`exotic/utxo/${utxo}`, network));
  return data;
};

const getSatTypes = async ({ network }: any) => {
  const { data } = await axios.get(generateUrl(`info/satributes`, network));
  return data;
};

const getUtxo = async ({ utxo, network }: any) => {
  const { data } = await axios.get(generateUrl(`utxo/assets/${utxo}`, network));
  return data;
};

async function pollGetTxStatus(
  txid: string,
  network: string,
  delay = 2000,
  retryCount = 30,
) {
  try {
    const result = await getTxStatus({ txid, network });
    if (result?.status) {
      console.log('getTxStatus succeeded, stopping poll.');
      console.log(result);
      return result;
    } else if (retryCount > 0) {
      console.log('getTxStatus returned no result, retrying...');
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(pollGetTxStatus(txid, network, delay, retryCount - 1)),
          delay,
        );
      });
    } else {
      throw new Error('Maximum retry attempts exceeded');
    }
  } catch (error) {
    if (retryCount > 0) {
      console.error('getTxStatus failed, retrying...');
      return new Promise((resolve) => {
        setTimeout(
          () => resolve(pollGetTxStatus(txid, network, delay, retryCount - 1)),
          delay,
        );
      });
    } else {
      throw new Error('Maximum retry attempts exceeded');
    }
  }
}

export const ordx = {
  getOrdxStatusList,
  health,
  getOrdxInfo,
  getOrdxSummary,
  getOrdxTickHolders,
  getOrdxAddressHistory,
  getOrdxAddressHolders,
  getOrdxTickHistory,
  getUtxoByValue,
  savePaidOrder,
  getInscriptiontInfo,
  getAppVersion,
  getTxStatus,
  getSats,
  getSplittedSats,
  getAssetByUtxo,
  getSeedByUtxo,
  getUtxoByType,
  getSatsByAddress,
  getSatsByUtxo,
  getSatTypes,
  getUtxo,
  pollGetTxStatus,
};
