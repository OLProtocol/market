'use client';

import useSWR from 'swr';
import { Tabs, Tab } from '@nextui-org/react';
import { getAddressOrdxList } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';

interface OrdxUtxoTypeListProps {
  onChange?: (ticker: string) => void;
}
export const OrdxUtxoTypeList = ({ onChange }: OrdxUtxoTypeListProps) => {
  const router = useRouter();
  const { address, network } = useReactWalletStore((state) => state);

  const [selected, setSelected] = useState<string>();
  const [page, setPage] = useState(1);
  // const page = useRef(1);
  const [size, setSize] = useState(12);

  const swrKey = useMemo(() => {
    return `/ordx/getAddressOrdxList-${address}-${network}-${page}-${size}`;
  }, [address, page, size, network]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressOrdxList({ address }),
    {
      revalidateOnMount: true,
    },
  );
  const NsAssetTitle = 'ns';
  const list = useMemo(() => {
    let ret = [{ assert: 'Name', balance: 0 }];
    if (!data) {
      return ret;
    }

    for (let i = 0; i < data?.data?.length; i++) {
      const item = data?.data[i];
      const assert =
        item?.assets_type + (item?.assets_name ? ':' + item?.assets_name : '');
      if (assert === NsAssetTitle) {
        ret[0].balance = item?.balance;
        continue;
      } else {
        ret.push({ assert: assert, balance: item?.balance });
      }
    }

    return ret;
  }, [data]);
  useEffect(() => {
    if (list.length > 0) {
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
    <div className="py-2 sm:py-4">
      <Tabs
        variant="light"
        aria-label="Tabs variants"
        color="warning"
        radius="full"
        size="lg"
        classNames={{
          tabList: 'flex-wrap rounded-none',
          tab: 'w-min',
        }}
        onSelectionChange={changeHandler}
      >
        {list?.map((item) => (
          <Tab
            key={item.assert}
            title={`${item.assert}${!!item.balance ? `(${item.balance})` : ''}`}
          />
        ))}
      </Tabs>
    </div>
  );
};
