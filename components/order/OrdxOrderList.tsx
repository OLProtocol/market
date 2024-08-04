'use client';

import useSWR from 'swr';
import { Switch } from '@nextui-org/react';
import { Empty, notification } from 'antd';
import { getOrders, lockOrder, unlockOrder, cancelOrder } from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '@/components/Pagination';
import { BatchBuyFooter } from '@/components/BatchBuyFooter';
import { Content } from '@/components/Content';
import { useBuyStore } from '@/store';
import { OrdxFtOrderItem } from '@/components/order/OrdxFtOrderItem';
import { OrderBuyModal } from '@/components/order/OrderBuyModal';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { SortDropdown } from '@/components/SortDropdown';
import { useList } from 'react-use';

interface OrdxOrderListProps {
  assets_name: string;
  assets_type?: string;
  address?: string;
  showResale?: boolean;
}
export const OrdxOrderList = ({
  assets_name,
  assets_type,
  address,
  showResale = true,
}: OrdxOrderListProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { address: storeAddress, network } = useReactWalletStore(
    (state) => state,
  );
  const {
    list: buyList,
    add: addBuy,
    remove: removeBuy,
    reset,
  } = useBuyStore();
  const [hideStatus, setHideStatus] = useState(false);
  const [canSelect, setCanSelect] = useState(false);
  const [modalVisiable, setModalVisiable] = useState(false);
  const [buyItem, setBuyItem] = useState<any>();
  const [orderRaw, setOrderRaw] = useState<any>();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [sort, setSort] = useState(1);
  const sortList = [
    { label: t('common.not_sort'), value: 0 },
    { label: t('common.sort_unit_price_ascending'), value: 1 },
    { label: t('common.sort_unit_price_descending'), value: 2 },
    { label: t('common.sort_price_ascending'), value: 5 },
    { label: t('common.sort_price_descending'), value: 6 },
    { label: t('common.sort_time_ascending'), value: 3 },
    { label: t('common.sort_time_descending'), value: 4 },
  ];

  const swrKey = useMemo(() => {
    if (address) {
      return `/ordx/getOrders-${assets_name}-${assets_type}-${address}-${network}-${page}-${size}-${sort}`;
    }
    return `/ordx/getOrders-${assets_name}-${assets_type}-${network}-${page}-${size}-${sort}`;
  }, [assets_name, address, page, size, network, sort, assets_type]);

  const { data, isLoading, mutate } = useSWR(swrKey, () =>
    getOrders({
      offset: (page - 1) * size,
      size,
      assets_name,
      address,
      sort,
      assets_type,
    }),
  );
  const [list, { set, reset: resetList, updateAt, removeAt }] = useList<any>(
    [],
  );
  useEffect(() => {
    if (data) {
      const { order_list = [] } = data?.data || {};
      if (hideStatus) {
        set(order_list.filter((i) => i.locked !== 1));
      } else {
        set(order_list);
      }
    }
  }, [data, hideStatus]);

  const onSortChange = (sort?: number) => {
    if (sort !== undefined) {
      setSort(sort);
    }
  };
  const batchSuccessHandler = () => {
    setCanSelect(false);
    setModalVisiable(false);
    reset();
    mutate(swrKey);
  };
  const removeHandler = async (u: string) => {
    const item = list.find((i) => i.utxo === u);
    if (item) {
      const res = await unlockHandler(item);
    }
  };
  const onCancelOrder = async (item: any) => {
    if (item.locker === '1') {
      notification.error({
        message: t('notification.order_cancel_failed_title'),
        description: t('notification.order_cancel_failed_description_1'),
      });
      return;
    }
    const res = await cancelOrder({
      address: address || storeAddress,
      order_id: item.order_id,
    });
    if (res.code === 200) {
      notification.success({
        message: t('notification.order_cancel_success_title'),
        description: t('notification.order_cancel_success_description_1'),
      });
      const index = list.findIndex((i) => i.utxo === item.utxo);
      removeAt(index);
    } else {
      notification.error({
        message: t('notification.order_cancel_failed_title'),
        description: res.msg,
      });
    }
  };
  const buyHandler = async (item) => {
    try {
      const orderDetail = await lockOrder({
        address: storeAddress,
        order_id: item.order_id,
      });
      if (!orderDetail?.data?.raw) {
        notification.error({
          message: t('notification.lock_order_failed_title'),
          description: orderDetail.msg,
        });
        return;
      }
      addBuy({ ...item, status: 'pending', raw: orderDetail.data.raw });
    } catch (error: any) {
      console.log(error);
      notification.error({
        message: t('notification.lock_order_failed_title'),
        description: error,
      });
    }
  };
  const selectHandler = async (s: boolean, item: any) => {
    if (s) {
      await buyHandler(item);
    } else {
      await unlockHandler(item);
    }
  };
  const unlockHandler = async (item) => {
    try {
      const res = await unlockOrder({
        address: storeAddress,
        order_id: item.order_id,
      });
      if (res.code !== 200) {
        notification.error({
          message: t('notification.order_unlock_failed_title'),
          description: res.msg,
        });
        return;
      }
      removeBuy(item.utxo);
    } catch (error: any) {
      notification.error({
        message: t('notification.order_unlock_failed_title'),
        description: error.message,
      });
    }
  };
  const onBuy = async (item: any) => {
    await buyHandler(item);
    setCanSelect(true);
    // await unlockOrder({ address: storeAddress, order_id: item.order_id });
    // const { raw } = orderDetail.data;
    // setOrderRaw(raw);
    // setModalVisiable(true);
  };
  const onBuySuccess = () => {
    mutate(swrKey);
  };
  const batchCloseHandler = async () => {
    setCanSelect(false);
    const listPromise = buyList.map((item) =>
      unlockOrder({ address: storeAddress, order_id: item.order_id }),
    );
    try {
      const res = await Promise.all(listPromise);
      if (res.some((i) => i.code !== 200)) {
        notification.error({
          message: t('notification.order_unlock_failed_title'),
          description: t('notification.order_cancel_failed_description'),
        });
        return;
      }
      reset();
      setCanSelect(false);
      setModalVisiable(false);
      mutate(swrKey);
    } catch (error: any) {
      notification.error({
        message: t('notification.order_unlock_failed_title'),
        description: error.message,
      });
    }
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / size) : 0),
    [data, size],
  );
  useEffect(() => {
    reset();
  }, []);
  return (
    <div className={`${canSelect ? 'pb-20' : ''}`}>
      <Content loading={isLoading}>
        {total > 1 && (
          <div className="flex justify-end gap-4 mb-4">
            <Switch
              isSelected={hideStatus}
              onValueChange={(e) => setHideStatus(e)}
            >
              Hide Locaked
            </Switch>
            <SortDropdown
              sortList={sortList}
              value={sort}
              disabled={!list.length || canSelect}
              onChange={onSortChange}
            ></SortDropdown>
          </div>
        )}
        {!list.length && <Empty className="mt-10" />}

        <div className="min-h-[30rem] flex flex-wrap justify-center gap-8 mb-4">
          {list.map((item: any, i) => (
            <div key={item.utxo + i}>
              <OrdxFtOrderItem
                assets_name={assets_name}
                assets_type={assets_type}
                showResale={showResale}
                canSelect={canSelect}
                delay={i > 5 ? 2000 : 0}
                selected={!!buyList.find((i) => i.utxo === item.utxo)}
                item={item}
                onCancelOrder={() => onCancelOrder(item)}
                onSelect={(s) => selectHandler(s, item)}
                onBuy={() => onBuy(item)}
              />
            </div>
          ))}
        </div>
      </Content>
      {total > 1 && (
        <div className="flex justify-center">
          <Pagination
            total={total}
            page={page}
            size={size}
            onChange={(offset, size) => {
              setPage(offset);
              // setSize(size);
            }}
          />
        </div>
      )}
      {!!orderRaw && (
        <OrderBuyModal
          item={buyItem}
          orderRaw={orderRaw}
          onSuccess={() => onBuySuccess()}
          onClose={() => setModalVisiable(false)}
          visiable={modalVisiable}
        />
      )}
      {canSelect && (
        <BatchBuyFooter
          list={list}
          onRemove={removeHandler}
          onClose={batchCloseHandler}
          onSuccess={batchSuccessHandler}
        />
      )}
    </div>
  );
};
