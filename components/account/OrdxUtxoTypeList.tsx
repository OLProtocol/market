'use client';

import useSWR from 'swr';
import { Tabs, Tab } from '@nextui-org/react';
import { getAddressOrdxList } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

interface OrdxUtxoTypeListProps {
  onChange?: (ticker: string) => void;
}
export const OrdxUtxoTypeList = ({ onChange }: OrdxUtxoTypeListProps) => {
  const { address, network } = useReactWalletStore((state) => state);

  const [selected, setSelected] = useState<string>();

  const swrKey = useMemo(() => {
    return `/ordx/getAddressOrdxList-${address}-${network}`;
  }, [address, network]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressOrdxList({ address }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  const list = useMemo(() => {
    if (!data?.data) {
      return [];
    }
    let ret = data?.data;
    return ret;
  }, [data]);
  useEffect(() => {
    console.log('list changed', list);
    if (list.length > 0) {
      setSelected(list[0].assert);
      onChange?.(list[0].assert);
    }
  }, [list]);

  const changeHandler = (k: any) => {
    if (selected === k) {
      return;
    }
    setSelected(k);
    onChange?.(k);
  };

  return (
    <div className="">
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        color="warning"
        radius="full"
        size="lg"
        selectedKey={selected}
        classNames={{
          tabList: 'flex-wrap rounded-none',
          tab: 'w-min',
        }}
        onSelectionChange={changeHandler}
      >
        {list?.map((item) => (
          <Tab
            key={item.assets_name}
            title={`${item.assets_name}${!!item.balance ? `(${item.balance})` : ''}`}
          />
        ))}
      </Tabs>
    </div>
  );
};
