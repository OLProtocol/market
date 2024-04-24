'use client';

import useSWR from 'swr';
import { Tabs, Tab } from '@nextui-org/react';
import { getAddressOrdxList } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useEffect, useMemo, useState } from 'react';
import { useSellStore } from '@/store';
import { useRouter } from 'next/navigation';

interface OrdxUtxoTypeListProps {
  onChange?: (ticker: string) => void;
}
export const OrdxUtxoTypeList = ({ onChange }: OrdxUtxoTypeListProps) => {
  const router = useRouter();
  const { address, network } = useReactWalletStore((state) => state);
  const { add: addSell, reset } = useSellStore((state) => state);
  const [page, setPage] = useState(1);
  // const page = useRef(1);
  const [size, setSize] = useState(12);

  const swrKey = useMemo(() => {
    return `/ordx/getAddressOrdxList-${address}-${network}-${page}-${size}`;
  }, [address, page, size, network]);
  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressOrdxList({ address, offset: (page - 1) * size, size }),
    {
      revalidateOnMount: true,
    },
  );
  console.log(data);
  const list = useMemo(() => data?.data || [], [data]);
  useEffect(() => {
    if (list.length > 0) {
      onChange?.(list[0].ticker);
    }
  }, [list]);
  const changeHandler = (k: any) => {
    onChange?.(k);
  };
  useEffect(() => {
    reset();
  }, []);
  return (
    <div className="py-2 sm:py-4">
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        color='warning'
        radius='full'
        size='lg'
        classNames={{
          tabList: 'flex-wrap',
          tab: 'w-min',
        }}
        
        onSelectionChange={changeHandler}
      >
        {list?.map((item: any) => (
          <Tab key={item.ticker} title={`${item.ticker}(${item.balance})`} />
        ))}
      </Tabs>
    </div>
  );
};
