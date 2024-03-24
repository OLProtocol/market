"use client";

import useSWR from "swr";
import { notification, Empty } from "antd";
import { getOrdxAssets, cancelOrder } from "@/api";
import { useReactWalletStore } from "btc-connect/dist/react";
import { useEffect, useMemo, useState } from "react";
import { useSellStore } from "@/stores";
import { Pagination } from "@/components/Pagination";
import { Content } from "@/components/Content";
import { OrdxFtAssetsItem } from "@/components/OrdxFtAssetsItem";
import { useRouter } from "next/navigation";
export const OrdxUtxoList = () => {
  const router = useRouter();
  const { address } = useReactWalletStore((state) => state);
  const { add: addSell, reset } = useSellStore((state) => state);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const swrKey = useMemo(() => {
    return `/ordx/GetAddressOrdxAssets-${address}-${page}-${size}`;
  }, [address, page, size]);
  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getOrdxAssets({ address, offset: (page - 1) * size, size }),
    {
      revalidateOnMount: true,
    }
  );

  const toSell = async (item: any) => {
    addSell(item);
    router.push("/account/sell");
  };
  const onCancelOrder = async (item: any) => {
    const res = await cancelOrder({ address, order_id: item.order_id });
    if (res.code === 200) {
      notification.success({
        message: "Cancel order successfully",
        description: `The order has been canceled successfully`,
      });
      mutate(swrKey);
    } else {
      notification.error({
        message: "Cancel order failed",
        description: res.msg,
      });
    }
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / 10) : 0),
    [data]
  );
  const list = useMemo(() => data?.data?.assets || [], [data]);

  useEffect(() => {
    reset();
  }, []);
  return (
    <div className="p-4">
      <Content loading={isLoading}>
        {!list.length && <Empty className="mt-10" />}
        <div className="min-h-[30rem] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {list.map((item: any) => (
            <OrdxFtAssetsItem
              key={item.utxo}
              item={item}
              onSell={() => toSell(item)}
              onCancelOrder={() => onCancelOrder(item)}
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
    </div>
  );
};
