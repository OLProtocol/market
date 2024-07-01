import useSWRMutation from 'swr/mutation';
import { ordx } from '@/api';
import { useState } from 'react';
import { useEffect, useMemo } from 'react';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Spin } from 'antd';
import { generateOrdUrl } from '@/lib/utils';
import { generateSeed } from '@/lib/utils';

interface UtxoContentProps {
  inscriptionId: string;
  utxo?: string;
  ranges?: any[];
  delay?: number;
}
export function UtxoContent({
  inscriptionId,
  utxo,
  delay = 0,
}: UtxoContentProps) {
  const { network } = useReactWalletStore();
  const [seed, setSeed] = useState('');
  const [delayLoading, setDelayLoading] = useState(false);
  const { data, trigger, isMutating } = useSWRMutation(
    `utxo-content-seed-${network}-${utxo}`,
    () =>
      ordx.getSeedByUtxo({
        utxo: utxo,
        network,
      }),
    {
      populateCache: true,
      revalidate: false,
    },
  );
  const getSeedByUtxo = async () => {
    // 检查 sessionStorage 中是否已经存在 seed
    const key = `utxo-content-seed-${network}-${utxo}`;
    const cachedSeed = sessionStorage.getItem(key);
    if (cachedSeed) {
      setSeed(cachedSeed);
      return;
    }

    const res = await ordx.getSeedByUtxo({
      utxo: utxo,
      network,
    });
    console.log(res);
    const seed = res?.data?.[0]?.seed;
    if (seed) {
      setSeed(seed);
      // 将 seed 存储在 sessionStorage 中
      sessionStorage.setItem(key, seed);
    }
  };
  useEffect(() => {
    if (delay && delay > 0) {
      setDelayLoading(true);
      setTimeout(() => {
        setDelayLoading(false);
      }, delay);
    }
  }, [delay, trigger]);
  // const seed = useMemo(() => data?.data?.[0]?.seed, [data]);
  // const seed = useMemo(
  //   () => (ranges.length > 0 ? generateSeed(ranges) : 0),
  //   [ranges],
  // );
  const contentSrc = useMemo(() => {
    if (inscriptionId && seed) {
      return generateOrdUrl({
        network,
        path: `content/${inscriptionId}?seed=${seed}`,
      });
    } else {
      return generateOrdUrl({
        network,
        path: `content/${inscriptionId}`,
      });
    }
  }, [network, inscriptionId, seed]);
  useEffect(() => {
    if (utxo && network) {
      getSeedByUtxo();
    }
  }, [utxo, network]);

  return (
    <div className="h-full w-full flex justify-center items-center">
      {delayLoading || isMutating ? (
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
