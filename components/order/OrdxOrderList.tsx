"use client";

import useSWR from "swr";
import { Empty } from "antd";
import { getOrders, getOrdxAssets } from "@/api";
import { useUnisatStore } from "@/providers/unisat-store-provider";
import { use, useMemo, useState } from "react";
import { Pagination } from "@/components/Pagination";
import { Content } from "@/components/Content";
import { OrdxFtOrderItem } from "@/components/order/OrdxFtOrderItem";
import { OrderBuyModal } from "@/components/order/OrderBuyModal";
import { useRouter } from "next/navigation";

interface OrdxOrderListProps {
  ticker: string;
  address?: string;
}
export const OrdxOrderList = ({ ticker, address }: OrdxOrderListProps) => {
  const router = useRouter();
  const [modalVisiable, setModalVisiable] = useState(false);
  const [buyItem, setBuyItem] = useState<any>();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const swrKey = useMemo(() => {
    if (address) {
      return `/ordx/getOrders-${ticker}-${address}-${page}-${size}`;
    }
    return `/ordx/getOrders-${ticker}-${page}-${size}`;
  }, [ticker, address, page, size]);
  const { data, isLoading, mutate } = useSWR(swrKey, () =>
    getOrders({ offset: (page - 1) * size, size, ticker, address })
  );
  const onBuy = (item: any) => {
    setBuyItem(item);
    setModalVisiable(true);
  };
  const onBuySuccess = () => {
    mutate(swrKey);
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / size) : 0),
    [data, size]
  );
  const list = useMemo(() => data?.data?.order_list || [], [data]);
  return (
    <div className="">
      <Content loading={isLoading}>
        {!list.length && <Empty className="mt-10" />}
        <div className="min-h-[30rem] grid  grid-1 sm:grid-2 md:grid-4 lg:grid-6 gap-4 mb-4">
          {list.map((item: any) => (
            <OrdxFtOrderItem
              key={item.utxo}
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
            offset={page}
            size={size}
            onChange={(offset, size) => {
              setPage(offset);
              // setSize(size);
            }}
          />
        </div>
      )}

      <OrderBuyModal
        item={buyItem}
        onSuccess={() => onBuySuccess()}
        onClose={() => setModalVisiable(false)}
        visiable={modalVisiable}
      />
    </div>
  );
};
