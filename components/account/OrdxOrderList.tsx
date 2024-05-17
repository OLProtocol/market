'use client';

import useSWR from 'swr';
import { Empty, notification } from 'antd';
import { getOrders, cancelOrder } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { use, useEffect, useMemo, useState } from 'react';
import { Pagination } from '@/components/Pagination';
import { Content } from '@/components/Content';
import { OrdxFtOrderItem } from '@/components/order/OrdxFtOrderItem';
import { useTranslation } from 'react-i18next';
import { useList } from 'react-use';

interface OrdxOrderListProps {
  address?: string;
}
export const OrdxOrderList = ({ address }: OrdxOrderListProps) => {
  const { t } = useTranslation();
  const { address: storeAddress, network } = useReactWalletStore(
    (state) => state,
  );
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const swrKey = useMemo(() => {
    if (address) {
      return `/ordx/getOrders-${address}-${network}-${page}-${size}`;
    }
    return `/ordx/getOrders-${network}-${page}-${size}`;
  }, [address, page, size, network]);
  const { data, isLoading, mutate } = useSWR(swrKey, () =>
    getOrders({ offset: (page - 1) * size, size, address }),
  );
  const [list, { set, reset: resetList, updateAt, removeAt }] = useList<any>(
    [],
  );
  useEffect(() => {
    if (data) {
      set(data.data?.order_list || []);
    }
  }, [data, set]);
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
      removeAt(index);
    } else {
      notification.error({
        message: 'Cancel order failed',
        description: res.msg,
      });
    }
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / size) : 0),
    [data, size],
  );
  return (
    <div className="">
      <Content loading={isLoading}>
        {!list.length && <Empty className="mt-10" />}
        <div className="min-h-[30rem] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-4">
          {list.map((item: any) => (
            <OrdxFtOrderItem
              key={item.utxo}
              item={item}
              onCancelOrder={() => onCancelOrder(item)}
            />
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
            }}
          />
        </div>
      )}
    </div>
  );
};
