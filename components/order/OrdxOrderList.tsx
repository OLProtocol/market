'use client';

import useSWR from 'swr';
import { Empty, notification } from 'antd';
import { getOrders, lockOrder, unlockOrder } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { use, useMemo, useState } from 'react';
import { Pagination } from '@/components/Pagination';
import { Content } from '@/components/Content';
import { OrdxFtOrderItem } from '@/components/order/OrdxFtOrderItem';
import { OrderBuyModal } from '@/components/order/OrderBuyModal';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { SortDropdown } from '@/components/SortDropdown';
interface OrdxOrderListProps {
  ticker: string;
  address?: string;
}
export const OrdxOrderList = ({ ticker, address }: OrdxOrderListProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { address: storeAddress, network } = useReactWalletStore(
    (state) => state,
  );
  console.log(network);
  const [modalVisiable, setModalVisiable] = useState(false);
  const [buyItem, setBuyItem] = useState<any>();
  const [orderRaw, setOrderRaw] = useState<any>();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [sort, setSort] = useState(1);
  const sortList = [
    { label: t('common.not_sort'), value: 0 },
    { label: t('common.sort_price_ascending'), value: 1 },
    { label: t('common.sort_price_descending'), value: 2 },
    { label: t('common.sort_time_ascending'), value: 3 },
    { label: t('common.sort_time_descending'), value: 4 },
  ];

  const swrKey = useMemo(() => {
    if (address) {
      return `/ordx/getOrders-${ticker}-${address}-${network}-${page}-${size}-${sort}`;
    }
    return `/ordx/getOrders-${ticker}-${network}-${page}-${size}-${sort}`;
  }, [ticker, address, page, size, network, sort]);
  console.log('swrKey', swrKey);
  const { data, isLoading, mutate } = useSWR(swrKey, () =>
    getOrders({ offset: (page - 1) * size, size, ticker, address, sort }),
  );
  const onSortChange = (sort?: number) => {
    if (sort !== undefined) {
      setSort(sort);
    }
  };
  const onBuy = async (item: any) => {
    setBuyItem(item);
    // await unlockOrder({ address: storeAddress, order_id: item.order_id });
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
    const { raw } = orderDetail.data;
    setOrderRaw(raw);
    setModalVisiable(true);
  };
  const onBuySuccess = () => {
    mutate(swrKey);
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / size) : 0),
    [data, size],
  );
  const list = useMemo(() => data?.data?.order_list || [], [data]);
  return (
    <div className="">
      <Content loading={isLoading}>
        {!list.length && <Empty className="mt-10" />}
        {!!list.length && (
          <div className="flex justify-end mb-4">
            <SortDropdown
              sortList={sortList}
              value={sort}
              disabled={!list.length}
              onChange={onSortChange}
            ></SortDropdown>
          </div>
        )}
        <div className="min-h-[30rem] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-4">
          {list.map((item: any, i) => (
            <OrdxFtOrderItem
              key={item.utxo + i}
              item={item}
              onBuy={() => onBuy(item)}
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
    </div>
  );
};
