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
        isStriped
        onRowAction={toDetail}
        aria-label="Example table with infinite pagination"
      >
        <TableHeader>
          <TableColumn key="ticker">Ticker</TableColumn>
          <TableColumn key="total_amount">Volumn</TableColumn>
          <TableColumn key="lowest_price">Price</TableColumn>
          <TableColumn key="onsell_order_count">Num of sales</TableColumn>
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
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
