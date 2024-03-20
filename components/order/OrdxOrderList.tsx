"use client";

import useSWR from "swr";
import { Spinner } from "@nextui-org/react";
import { getOrders, getOrdxAssets } from "@/api";
import { useUnisatStore } from "@/providers/unisat-store-provider";
import { useMemo, useState } from "react";
import { useSellStore } from "@/stores";
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
  const { data, isLoading } = useSWR(
    `/ordx/getOrders-${ticker}-${address}-${page}-${size}`,
    () => getOrders({ offset: (page - 1) * size, size, ticker, address })
  );
  const onBuy = (item: any) => {
    setBuyItem(item);
    console.log(123)
    setModalVisiable(true);
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / 10) : 0),
    [data]
  );
  const list = useMemo(() => data?.data?.order_list || [], [data]);
  return (
    <div className="p-4">
      <Content loading={isLoading}>
        <div className="min-h-[30rem] flex gap-4 flex-wrap justify-around mb-4">
          {list.map((item: any) => (
            <OrdxFtOrderItem
              key={item.utxo}
              item={item}
              onBuy={() => onBuy(item)}
            />
          ))}
        </div>
      </Content>
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
      <OrderBuyModal item={buyItem} onClose={() => setModalVisiable(false)} visiable={modalVisiable} />
    </div>
  );
};
