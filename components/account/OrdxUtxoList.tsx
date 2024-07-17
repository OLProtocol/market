'use client';

import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { notification, Empty } from 'antd';
import { getOrdxAssets, cancelOrder, ordx } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSellStore } from '@/store';
import { Pagination } from '@/components/Pagination';
import { Content } from '@/components/Content';
import { OrdxFtAssetsItem } from '@/components/OrdxFtAssetsItem';
import { BatchSellFooter } from '@/components/BatchSellFooter';
import { useRouter } from 'next/navigation';
import { useList } from 'react-use';
import { satsToBitcoin } from '@/lib';
import { Decimal } from 'decimal.js';
interface Props {
  assetsName: string;
  assetsType: string;
}
export const OrdxUtxoList = ({
  assetsName: assets_name,
  assetsType: assets_type,
}: Props) => {
  console.log(assets_name, assets_type);
  const router = useRouter();
  const { address, network } = useReactWalletStore((state) => state);
  const {
    add: addSell,
    changeAssetsName,
    changeAssetsType,
    reset,
    list: sellList,
    remove: removeSell,
  } = useSellStore((state) => state);
  const [canSelect, setCanSelect] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [list, { set, reset: resetList, updateAt }] = useList<any>([]);
  const swrKey = useMemo(() => {
    return `/ordx/getOrdxAssets-${address}-${assets_type}-${assets_name}-${page}-${size}`;
  }, [address, page, size, assets_name, assets_type]);

  const {
    data,
    isMutating: isLoading,
    trigger,
  } = useSWRMutation(swrKey, () => {
    return getOrdxAssets({
      address,
      assets_name,
      assets_type: assets_type,
      offset: (page - 1) * size,
      size,
    });
  });

  const total = useMemo(() => {
    // if (data) {
    //   console.log("OrdxUtxoList: data, total", data, data?.data?.total);
    // }
    return data?.data?.total ? Math.ceil(data?.data?.total / size) : 0;
  }, [data]);
  useEffect(() => {
    if (data) {
      console.log('OrdxUtxoList: data', data);
      set(data?.data?.assets || []);
    }
  }, [data, set]);

  const toSell = () => {
    router.push('/account/sell');
  };
  const sellHandler = async (item: any) => {
    addHandler(item);
    setCanSelect(true);
  };
  const addHandler = (item: any) => {
    let tickerAmount = 0;
    if (assets_type === 'exotic') {
      tickerAmount =
        item.assets_list?.find((v) => v.assets_type === 'exotic')?.amount || 0;
    } else {
      tickerAmount =
        item.tickers?.find((v) => v.ticker === assets_name)?.amount || 0;
    }
    console.log(new Decimal('2').mul(new Decimal(tickerAmount)).toString());
    changeAssetsType(assets_type);
    changeAssetsName(assets_name);
    addSell({
      ...item,
      unit_price: '2',
      status: 'pending',
    });
  };
  const selectHandler = (bol: boolean, item: any) => {
    if (bol) {
      if (!item.order_id) {
        addHandler(item);
      }
    } else {
      removeSell(item.utxo);
    }
  };
  const onBatchClose = () => {
    setCanSelect(false);
    reset();
  };
  const onCancelOrder = async (item: any) => {
    if (item.locker === '1') {
      notification.error({
        message: 'Cancel order failed',
        description: `The order is locked, please wait unlock it first`,
      });
      return;
    }
    const res = await cancelOrder({ address, order_id: item.order_id });
    if (res.code === 200) {
      notification.success({
        message: 'Cancel order successfully',
        description: `The order has been canceled successfully`,
      });
      const index = list.findIndex((i) => i.utxo === item.utxo);
      item.order_id = 0;
      if (index >= 0) {
        updateAt(index, item);
      }
    } else {
      notification.error({
        message: 'Cancel order failed',
        description: res.msg,
      });
    }
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (assets_type || assets_name) {
      resetList();
      setCanSelect(false);
      trigger();
    }
  }, [page, size]);
  useEffect(() => {
    if (assets_type || assets_name) {
      resetList();
      setCanSelect(false);
      setPage(1);
      trigger();
    }
  }, [assets_type, assets_name]);
  return (
    <div className={`${canSelect ? 'pb-20' : ''}`}>
      <Content loading={isLoading}>
        {!list.length && <Empty className="mt-10" />}
        <div className="min-h-[30rem] flex flex-wrap justify-center gap-8 mb-4">
          {list.map((item: any, i) => (
            <div key={item.utxo + item.locked}>
              <OrdxFtAssetsItem
                assets_name={assets_name}
                selected={!!sellList.find((i) => i.utxo === item.utxo)}
                canSelect={canSelect}
                onSelect={(bol) => selectHandler(bol, item)}
                item={item}
                delay={i > 5 ? 2000 : 0}
                onSell={() => sellHandler(item)}
                onCancelOrder={() => onCancelOrder(item)}
              />
            </div>
          ))}
        </div>
      </Content>
      {total > 1 && (
        <div className="flex justify-center">
          <Pagination
            total={total}
            size={size}
            page={page}
            onChange={(offset, size) => {
              setPage(offset);
            }}
          />
        </div>
      )}
      {canSelect && <BatchSellFooter toSell={toSell} onClose={onBatchClose} />}
    </div>
  );
};
