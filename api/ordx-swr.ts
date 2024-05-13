import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
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

export const ordxSWR = {
  useSatTypes,
};
