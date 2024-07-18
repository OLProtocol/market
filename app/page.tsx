'use client';

import { useMemo, useEffect } from 'react';
import BannerTop from '@/components/home/BannerTop';
import { MintingTable } from '@/components/home/MintingTable';
import { ordxSWR } from '@/api';
import NamesTop from '@/components/home/NamesTop';

export default function Home() {
  const { data: rarePizzaData, trigger: getRarePizza } = ordxSWR.useOrdxInfo({
    tick: 'rarepizza',
    network: 'livenet',
  });
  const rarePizzaDetail = useMemo(
    () => rarePizzaData?.data || {},
    [rarePizzaData],
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
      <div>
        <BannerTop detail={rarePizzaDetail} />        
      </div>
      <div>
        <NamesTop/>
      </div>
      <div className="mb-4 w-full round-lg">
        <MintingTable rarepizza={rarePizzaDetail} jades={jadesDetail} />
      </div>
    </div>
  );
}
