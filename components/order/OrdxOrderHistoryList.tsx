"use client";

import useSWR from "swr";
import {
  Spinner,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Snippet,
} from "@nextui-org/react";
import { getHistory } from "@/api";
import { useMemo, useState } from "react";
import { hideStr, resolveMempoolTxLink } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useReactWalletStore } from "btc-connect/dist/react";
import { Pagination } from "@/components/Pagination";
import { SortDropdown } from "@/components/SortDropdown";
import { useRouter } from "next/navigation";

interface OrdxOrderHistoryListProps {
  ticker?: string;
  address?: string;
}
export const OrdxOrderHistoryList = ({
  ticker,
  address,
}: OrdxOrderHistoryListProps) => {
  const { network } = useReactWalletStore((state) => state);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sort, setSort] = useState(0);
  const { data, isLoading } = useSWR(
    `/ordx/history-${ticker}-${address}-${page}-${size}-${sort}`,
    () =>
      getHistory({ offset: (page - 1) * size, size, ticker, address, sort }),
    {
      revalidateOnMount: true,
    }
  );
  const onSortChange = (sort?: number) => {
    if (sort !== undefined) {
      setSort(sort);
    }
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / size) : 0),
    [data, size]
  );
  const typeMap = useMemo(() => {
    return {
      1: "成交",
      2: "下架",
      3: "无效",
      10: "卖出",
      11: "买入",
    };
  }, []);
  const coumns = useMemo(() => {
    const defaultColumns = [
      {
        key: "utxo",
        label: "Utxo",
        align: "center",
      },
      {
        key: "price",
        label: "Price",
        align: "center",
      },
      {
        key: "value",
        label: "Num",
        align: "center",
      },
      {
        key: "address",
        label: "From",
        align: "center",
      },
      {
        key: "txaddress",
        label: "To",
        align: "center",
        hideHeader: true,
      },
      {
        key: "txtime",
        label: "Time",
        align: "center",
      },
      {
        key: "txid",
        label: "Tx",
        allowsSorting: false,
        align: "center",
      },
    ];
    const addressColumnIndex = defaultColumns.findIndex(
      (column) => column.key === "txaddress"
    );

    if (address) {
      defaultColumns.splice(addressColumnIndex, 1);
      defaultColumns.unshift({
        key: "result",
        label: "Type",
        align: "center",
      });
    }
    return defaultColumns;
  }, [address]);
  const list = useMemo(() => data?.data?.order_list || [], [data]);
  return (
    <div className="">
      <Table
        isHeaderSticky
        isStriped
        topContent={
          <div className="flex justify-end">
            <SortDropdown
              disabled={!list.length}
              onChange={onSortChange}
            ></SortDropdown>
          </div>
        }
        bottomContent={
          page > 1 ? (
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
          ) : null
        }
      >
        <TableHeader columns={coumns}>
          {coumns.map((c) => {
            return (
              <TableColumn key={c.key} align={c.align as any}>
                {c.label}
              </TableColumn>
            );
          })}
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={list}
          emptyContent={"No Data."}
          loadingContent={<Spinner />}
        >
          {(item: any) => (
            <TableRow key={item.order_id}>
              {(columnKey) => {
                if (
                  columnKey === "utxo" ||
                  columnKey === "txaddress" ||
                  columnKey === "address"
                ) {
                  const v = getKeyValue(item, columnKey);
                  return (
                    <TableCell>
                      {v ? (
                        <Snippet
                          codeString={v}
                          className="bg-transparent"
                          symbol=""
                          size="lg"
                          variant="flat"
                        >
                          {hideStr(v, 6)}
                        </Snippet>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                  );
                } else if (columnKey === "txid") {
                  return (
                    <TableCell>
                      <a
                        href={resolveMempoolTxLink(
                          getKeyValue(item, columnKey),
                          network
                        )}
                        target="_blank"
                      >
                        <Icon icon="ph:share-fill" />
                      </a>
                    </TableCell>
                  );
                } else if (columnKey === "txtime") {
                  return (
                    <TableCell>
                      <span>
                        {new Date(
                          Number(getKeyValue(item, columnKey))
                        ).toLocaleString()}
                      </span>
                    </TableCell>
                  );
                } else if (columnKey === "result") {
                  return (
                    <TableCell>
                      {typeMap[getKeyValue(item, columnKey)]}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell>
                      {`${getKeyValue(item, columnKey)}${
                        columnKey === "price" ? " " + item.currency : ""
                      }`}
                    </TableCell>
                  );
                }
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
