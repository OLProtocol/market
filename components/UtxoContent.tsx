import useSWRMutation from 'swr/mutation';
import { ordx } from '@/api';
import { useEffect, useMemo } from 'react';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Spin } from 'antd';
import { generateOrdUrl } from '@/lib/utils';
import { generateSeed } from '@/lib/utils';

interface UtxoContentProps {
  inscriptionId: string;
  utxo?: string;
  ranges?: any[];
}
export function UtxoContent({
  inscriptionId,
  utxo,
  ranges = [],
}: UtxoContentProps) {
  const { network } = useReactWalletStore();
  const { data, trigger, isMutating } = useSWRMutation(
    `utxo-content-${network}-${utxo}`,
    () =>
      ordx.getSeedByUtxo({
        utxo: utxo,
        network,
      }),
  );
  const seed = useMemo(() => data?.data?.[0]?.seed, [data]);
  // const seed = useMemo(
  //   () => (ranges.length > 0 ? generateSeed(ranges) : 0),
  //   [ranges],
  // );
  const contentSrc = useMemo(() => {
    if (inscriptionId && seed) {
      return generateOrdUrl({
        network,
        path: `preview/${inscriptionId}?seed=${seed}`,
      });
    } else {
      return generateOrdUrl({
        network,
        path: `preview/${inscriptionId}`,
      });
    }
  }, [network, inscriptionId, seed]);
  useEffect(() => {
    if (utxo) {
      trigger();
    }
  }, [utxo, network]);

  return (
    <div className="h-full w-full">
      {isMutating ? (
        <Spin spinning={isMutating}></Spin>
      ) : contentSrc ? (
        <iframe
          src={contentSrc}
          className="pointer-events-none max-w-full h-full max-h-full"
        ></iframe>
      ) : (
        '-'
      )}
    </div>
  );
}
