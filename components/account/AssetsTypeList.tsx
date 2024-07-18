'use client';

import useSWR from 'swr';
import { Tabs, Tab } from '@nextui-org/react';
import { getAddressAssetsList } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

interface AssetsTypeListProps {
  onChange?: (ticker: string) => void;
  assets_type: string;
}
export const AssetsTypeList = ({
  onChange,
  assets_type,
}: AssetsTypeListProps) => {
  const { address, network } = useReactWalletStore((state) => state);
  console.log(address);
  const [selected, setSelected] = useState<string>();

  const swrKey = useMemo(() => {
    return `/ordx/getAddressAssetsList-${address}-${network}-${assets_type}`;
  }, [address, network, assets_type]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressAssetsList(address, assets_type),
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
    if (list.length > 0) {
      setSelected(list[0].assets_name);
      onChange?.(list[0].assets_name);
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
    <div className="mb-4">
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
