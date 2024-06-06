'use client';

import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { notification, Empty } from 'antd';
import { getOrdxAssets, cancelOrder, ordx } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSellStore } from '@/store';
import { Pagination } from '@/components/Pagination';
import { Content } from '@/components/Content';
import { OrdxFtAssetsItem } from '@/components/OrdxFtAssetsItem';
import { BatchSellFooter } from '@/components/BatchSellFooter';
import { useRouter } from 'next/navigation';
import { OrdxUtxoTypeList } from '@/components/account/OrdxUtxoTypeList';
import { useList } from 'react-use';
import { satsToBitcoin } from '@/lib';
import { Decimal } from 'decimal.js';
export const OrdxUtxoList = () => {
  const router = useRouter();
  const [ticker, setTicker] = useState<string>('');
  const { address, network } = useReactWalletStore((state) => state);
  const {
    add: addSell,
    changeTicker,
    reset,
    list: sellList,
    remove: removeSell,
  } = useSellStore((state) => state);
  const [canSelect, setCanSelect] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [list, { set, reset: resetList, updateAt }] = useList<any>([]);
  const swrKey = useMemo(() => {
    return `/ordx/GetAddressOrdxAssets-${address}-${page}-${size}-${ticker}`;
  }, [address, page, size, ticker]);

  const {
    data,
    isMutating: isLoading,
    trigger,
  } = useSWRMutation(swrKey, () =>
    getOrdxAssets({ address, ticker, offset: (page - 1) * size, size }),
  );
  const swrNsKey = useMemo(() => {
    return `/ordx/getNsListByAddress-${address}-${network}`;
  }, [address, network]);

  const {
    data: nsData,
    isMutating: isNsLoading,
    trigger: getNsList,
  } = useSWRMutation(swrNsKey, () =>
    ordx.getNsListByAddress({ address, network }),
  );
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / size) : 0),
    [data],
  );
  useEffect(() => {
    if (data) {
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
    console.log(satsToBitcoin(item.value));
    const tickerAmount =
      item.tickers.find((v) => v.ticker === ticker)?.amount || 0;
    changeTicker(ticker);
    addSell({
      ...item,
      unit_price: '2',
      status: 'pending',
      price: new Decimal('2').mul(new Decimal(tickerAmount)).toString(),
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
  const onTickerChange = (t: string) => {
    if (ticker === t) {
      return;
    }
    if (ticker === 'Name') {
    } else {
      setTicker(t);
      reset();
    }

    resetList();
    setCanSelect(false);
    setPage(1);
  };

  useEffect(() => {
    reset();
  }, []);
  useEffect(() => {
    if (ticker && ticker !== 'Name') {
      trigger();
    } else if (ticker && ticker === 'Name') {
      console.log('ticker', ticker);
      getNsList();
    }
  }, [ticker]);
  return (
    <div className={`${canSelect ? 'pb-20' : ''}`}>
      <div>
        <OrdxUtxoTypeList onChange={onTickerChange} />
      </div>
      <Content loading={isLoading}>
        {!list.length && <Empty className="mt-10" />}
        <div className="min-h-[30rem] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 2xl:grid-cols-6 gap-2 sm:gap-4 mb-4">
          {list.map((item: any) => (
            <OrdxFtAssetsItem
              selected={!!sellList.find((i) => i.utxo === item.utxo)}
              canSelect={canSelect}
              onSelect={(bol) => selectHandler(bol, item)}
              key={item.utxo + item.locked}
              item={item}
              onSell={() => sellHandler(item)}
              onCancelOrder={() => onCancelOrder(item)}
            />
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
              // page.current = offset;
              // console.log("page", page.current);
              // setSize(size);
            }}
          />
        </div>
      )}
      {canSelect && <BatchSellFooter toSell={toSell} onClose={onBatchClose} />}
    </div>
  );
};
