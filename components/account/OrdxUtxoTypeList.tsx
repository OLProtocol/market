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
      revalidateOnFocus: false,
      // revalidateOnMount: true,
    },
  );
  const NsAssetTitle = 'ns';
  const list = useMemo(() => {
    if (!data) {
      return [];
    }
    let ret = [{assetsName:'Name', assert: 'Name', balance: 0 }];
    for (let i = 0; i < data?.data?.length; i++) {
      const item = data?.data[i];
      
      let assert = item?.assets_type + (item?.assets_name ? ':' + item?.assets_name : '');
      let assetsName = item?.assets_type + (item?.assets_name ? ':' + item?.assets_name : '');
      if(item?.assets_type === 'ticker'){
        assetsName = item?.assets_name ? item?.assets_name :'';
      }
      // if(item?.assets_type != 'ticker' && item?.assets_type != 'exotic'){
      //   assetsName =  NsAssetTitle;
      // }
      ret.push({assetsName: assetsName, assert: assert, balance: item?.balance });
    }

    return ret;
  }, [data]);
  useEffect(() => {
    console.log('list changed', list);
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
            title={`${item.assetsName}${!!item.balance ? `(${item.balance})` : ''}`}
          />
        ))}
      </Tabs>
    </div>
  );
};
