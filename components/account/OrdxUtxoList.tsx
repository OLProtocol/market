"use client";

import useSWR from "swr";
import { Spinner } from "@nextui-org/react";
import { getOrdxAssets } from "@/api";
import { useUnisatStore } from "@/providers/unisat-store-provider";
import { useMemo, useState } from "react";
import { useSellStore } from "@/stores";
import { Pagination } from "@/components/Pagination";
import { Content } from "@/components/Content";
import { OrdxFtAssetsItem } from "@/components/OrdxFtAssetsItem";
import { useRouter } from "next/navigation";
export const OrdxUtxoList = () => {
  const router = useRouter();
  const { address } = useUnisatStore((state) => state);
  const { add: addSell } = useSellStore((state) => state);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const { data, isLoading } = useSWR(
    `/ordx/GetAddressOrdxAssets-${address}-${page}-${size}`,
    () => getOrdxAssets({ address, offset: (page - 1) * size, size })
  );
  const toSell = (item: any) => {
    addSell(item);
    router.push("/account/sell");
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / 10) : 0),
    [data]
  );
  const list = useMemo(() => data?.data?.assets || [], [data]);
  return (
    <div className="p-4">
      <Content loading={isLoading}>
        <div className="min-h-[30rem] flex gap-4 flex-wrap justify-around mb-4">
          {list.map((item: any) => (
            <OrdxFtAssetsItem
              key={item.utxo}
              item={item}
              onSell={() => toSell(item)}
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
    </div>
  );
};
