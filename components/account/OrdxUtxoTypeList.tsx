'use client';

import useSWR from 'swr';
import { Tabs, Tab } from '@nextui-org/react';
import { notification, Empty } from 'antd';
import { getAddressOrdxList } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { use, useEffect, useMemo, useRef, useState } from 'react';
import { useSellStore } from '@/store';
import { Pagination } from '@/components/Pagination';
import { Content } from '@/components/Content';
import { OrdxFtAssetsItem } from '@/components/OrdxFtAssetsItem';
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
        classNames={{
          tabList: 'flex-wrap',
          tab: 'w-min',
        }}
        aria-label="Tabs variants"
        onSelectionChange={changeHandler}
      >
        {list?.map((item: any) => (
          <Tab key={item.ticker} title={`${item.ticker}(${item.balance})`} />
        ))}
      </Tabs>
    </div>
  );
};
