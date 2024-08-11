'use client';
import { useMemo, useEffect } from 'react';
import { MintingTable } from '@/components/home/MintingTable';
import { ordxSWR } from '@/api';

export default function Home() {
  const { data: rarePizzaData, trigger: getRarePizza } = ordxSWR.useOrdxInfo({
    tick: 'rarepizza',
    network: 'livenet',
  });
  const { data: nsListStatusData } = ordxSWR.useNsListStatus({
    network: 'livenet',
  });
  const rarePizzaDetail = useMemo(
    () => rarePizzaData?.data || {},
    [rarePizzaData],
  );
  const nsDetail = useMemo(
    () => nsListStatusData?.data || {},
    [nsListStatusData],
  );

  const { data: jadesData, trigger: getJades } = ordxSWR.useOrdxInfo({
    tick: 'jades',
    network: 'livenet',
  });
  const jadesDetail = useMemo(() => jadesData?.data || {}, [jadesData]);

  useEffect(() => {
    getRarePizza();
    getJades();
  }, []);
  return (
    <div className="py-4">
      <div className="mb-4 w-full round-lg">
        <MintingTable
          rarepizza={rarePizzaDetail}
          jades={jadesDetail}
          nsDetail={nsDetail}
        />
      </div>
    </div>
  );
}
