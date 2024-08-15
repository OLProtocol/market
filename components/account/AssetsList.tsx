'use client';

import useSWRMutation from 'swr/mutation';
import { notification, Empty } from 'antd';
import { getOrdxAssets, cancelOrder, ordx } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSellStore } from '@/store';
import { AssetsItem } from '@/components/assets/AssetsItem';
import { BatchSellFooter } from '@/components/BatchSellFooter';
import { useRouter } from 'next/navigation';
import { useList } from 'react-use';
import { Decimal } from 'decimal.js';
import { ScrollContent } from '@/components/ScrollContent';

interface Props {
  assets_name: string;
  assets_type: string;
}
export const AssetsList = ({ assets_name, assets_type }: Props) => {
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
  const [type, setType] = useState('sell');
  const [canSelect, setCanSelect] = useState(false);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
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

  const [list, { set, reset: resetList, push: pushToList, updateAt }] =
    useList<any>([]);
  useEffect(() => {
    if (data) {
      const { assets = [] } = data?.data || {};
      if (page === 1) {
        set(assets);
      } else {
        pushToList(...assets);
      }
    }
  }, [data]);

  const toSell = () => {
    router.push('/account/sell');
  };
  const toTransfer = () => {
    router.push('/account/transfer');
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
    try {
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
    } catch (error: any) {
      notification.error({
        message: 'Cancel order failed',
        description: error.msg,
      });
    }
  };
  const total = useMemo(() => data?.data?.total || 0, [data]);
  const finished = useMemo(() => {
    return list.length >= total;
  }, [total, list]);
  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (assets_type || assets_name) {
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
      <ScrollContent
        loading={isLoading}
        loadMore={loadMore}
        finished={finished}
        empty={!list.length}
      >
        <div className="min-h-[30rem] flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
          {list.map((item: any, i) => (
            <div key={item.utxo + i}>
              <AssetsItem
                assets_name={assets_name}
                assets_type={assets_type}
                selected={!!sellList.find((i) => i.utxo === item.utxo)}
                canSelect={canSelect}
                onSelect={(bol) => selectHandler(bol, item)}
                item={item}
                delay={i > 5 ? 2000 : 0}
                onTransfer={() => {
                  setType('transfer');
                  sellHandler(item);
                }}
                onSell={() => {
                  setType('sell');
                  sellHandler(item);
                }}
                onCancelOrder={() => onCancelOrder(item)}
              />
            </div>
          ))}
        </div>
      </ScrollContent>
      {/* {total > 1 && (
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
      )} */}
      {canSelect && (
        <BatchSellFooter
          actionType={type}
          toTransfer={toTransfer}
          toSell={toSell}
          onClose={onBatchClose}
        />
      )}
    </div>
  );
};
