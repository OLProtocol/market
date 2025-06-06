'use client';

import useSWR from 'swr';
import { Button, SelectItem } from '@nextui-org/react';
import { useEffect, useMemo, useState } from 'react';
import { getOrdxAssets, cancelOrder, ordx } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { notification, Select } from 'antd';
import { useRouter } from 'next/navigation';

interface IBlogNameSelectProps {
  onChange?: (name: string) => void;
  loading?: boolean;
}
export function BlogNameSelect({ onChange, loading }: IBlogNameSelectProps) {
  const nav = useRouter();
  const { address, network } = useReactWalletStore();
  const [selected, setSelected] = useState<string>('');
  const swrKey = useMemo(() => {
    return `/ordx/getNsListByAddress-${address}-{network}`;
  }, [address, network]);

  const { data, isLoading } = useSWR(swrKey, () => {
    return ordx.getNsListByAddress({
      address,
      network,
      limit: 1000,
    });
  });

  const list = useMemo(() => {
    return (
      data?.data?.names?.map((item) => ({
        label: item.name,
        value: item.name,
      })) || []
    );
  }, [data]);

  const empty = useMemo(() => list.length === 0, [list]);

  const toBuy = () => {
    nav.push('/ordx/ticker?ticker=btc&assets_type=ns');
  };
  const toMint = () => {
    nav.push('/inscribe?type=name&source=blog');
  };
  const onSelectionChange = (name: any) => {
    setSelected(name);
  };

  useEffect(() => {
    !!selected && onChange?.(selected);
  }, [selected]);
  return (
    <div>
      <Select
        value={selected}
        size="large"
        onSelect={onSelectionChange}
        loading={isLoading || loading}
        showSearch
        className="w-full rounded-full overflow-hidden bg-[#27272A]"
        placeholder="Select a person"
        filterOption={(input, option) =>
          (option?.label as string).toLowerCase().includes(input.toLowerCase())
        }
        options={list}
      />

      {/* <Select
        isLoading={loading}
        placeholder="Select an Name"
        selectedKeys={[selected]}
        onChange={(e) => onSelectionChange(e.target.value)}
      >
        {list.map((item) => (
          <SelectItem key={item.name}>{item.name}</SelectItem>
        ))}
      </Select> */}
      <div className="flex gap-8 justify-center mt-2">
        <Button color="primary" onClick={toBuy}>
          Buy
        </Button>
        <Button color="primary" onClick={toMint}>
          Inscribe
        </Button>
      </div>
    </div>
  );
}
