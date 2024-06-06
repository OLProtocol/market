import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import * as blockStream from './blockStream';
import { ordx } from './ordx';
const useSatTypes = ({ network }: any) => {
  const { data, error, isLoading } = useSWR(
    `ordx-utxo-satstype-${network}`,
    () => ordx.getSatTypes({ network }),
    {
      keepPreviousData: true,
    },
  );
  return {
    data,
    error,
    isLoading: isLoading,
  };
};
export const useBtcHeight = (network: string) => {
  const { data, error, isLoading } = useSWR(
    `height-${network}`,
    () => ordx.getBestHeight({ network }),
    {
      refreshInterval: 1000 * 60 * 5,
    },
  );
  return {
    data,
    error,
    isLoading,
  };
};

export const ordxSWR = {
  useSatTypes,
  useBtcHeight,
};
