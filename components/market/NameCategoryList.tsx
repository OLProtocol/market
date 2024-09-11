'use client';

import useSWR from 'swr';
import { Select, SelectItem, Tabs, Tab } from '@nextui-org/react';
import { getNameCategoryList } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useEffect, useMemo, useState } from 'react';

interface NameCategoryListProps {
  onChange?: (ticker: string) => void;
  name: string;
}
export const NameCategoryList = ({ onChange, name }: NameCategoryListProps) => {
  const { address, network } = useReactWalletStore((state) => state);
  const [selectKey, setSelectKey] = useState('');

  const swrKey = useMemo(() => {
    return `/ordx/getNameCategoryList-${name}-${network}`;
  }, [name, network]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getNameCategoryList({ name }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  const list = useMemo(() => {
    return data?.data || [];
  }, [data]);

  const onSelectionChange = (keys: any) => {
    const _v = Array.from(keys.values())[0] as string;
    setSelectKey(_v);
    onChange?.(_v);
  };

  return (
    <Select
      showScrollIndicators={false}
      isLoading={isLoading}
      className="w-60"
      placeholder="Select Name Category"
      selectionMode="single"
      selectedKeys={selectKey ? [selectKey] : undefined}
      onSelectionChange={onSelectionChange}
    >
      {list.map((item) => (
        <SelectItem key={item.category} value={item.category}>
          {item.category}
        </SelectItem>
      ))}
    </Select>
  );
};
