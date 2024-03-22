"use client";

import { getTopTickers } from "@/api";
import useSWR from "swr";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableColumn,
  Spinner,
  getKeyValue,
} from "@nextui-org/react";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(`/ordx/getTopTickers`, () =>
    getTopTickers({})
  );
  const list = useMemo(() => data?.data || [], [data]);
  const toDetail = (e) => {
    router.push(`/ordx/ticker?ticker=${e}`);
  };
  return (
    <div className="pt-4">
      <Table
        isHeaderSticky
        onRowAction={toDetail}
        aria-label="Example table with infinite pagination"
      >
        <TableHeader>
          <TableColumn key="ticker">Ticker</TableColumn>
          <TableColumn key="tx_total_volume">Volumn</TableColumn>
          <TableColumn key="lowest_price">Price</TableColumn>
          <TableColumn key="tx_order_count">成交笔数</TableColumn>
          <TableColumn key="holder_count">Holders</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={list}
          emptyContent={"No Data."}
          loadingContent={<Spinner />}
        >
          {(item: any) => (
            <TableRow key={item.ticker} className="cursor-pointer">
              {(columnKey) => {
                if (columnKey === "holder_count") {
                  return (
                    <TableCell className="text-center">
                      <div>{getKeyValue(item, columnKey)}</div>
                      {/* <div>{item['holder_dispersion']}</div> */}
                    </TableCell>
                  );
                } else if (
                  ["tx_total_volume", "lowest_price"].includes(
                    columnKey.toString()
                  )
                ) {
                  console.log("item", columnKey);
                  return (
                    <TableCell>{getKeyValue(item, columnKey)} BTC</TableCell>
                  );
                } else {
                  return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
                }
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
