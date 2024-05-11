'use client';

import { getTopTickers } from '@/api';
import useSWR from 'swr';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableColumn,
  Spinner,
  getKeyValue,
  SortDescriptor,
  Avatar,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { thousandSeparator } from '@/lib/utils';
import { SortDropdown } from '@/components/SortDropdown';

export default function Home() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [interval, setInterval] = useState<any>(1);
  const sortList = useMemo(
    () => [
      { label: t('common.time_1D'), value: 1 },
      { label: t('common.time_7D'), value: 7 },
      { label: t('common.time_30D'), value: 30 },
      { label: t('common.time_all_time'), value: 0 },
    ],
    [i18n.language],
  );
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'age',
    direction: 'ascending',
  });
  const { network } = useReactWalletStore();
  const { data, error, isLoading } = useSWR(
    `/ordx/getTopTickers-${network}-${interval}`,
    () => getTopTickers({ interval }),
  );
  const onSortChange = (i?: number) => {
    setInterval(i);
  };
  const list = useMemo(() => data?.data || [], [data]);
  const toDetail = (e) => {
    router.push(`/ordx/ticker?ticker=${e}`);
  };
  const onTableSortChange = (e: any) => {
    setSortDescriptor(e);
  };
  const columns = [
    { key: 'ticker', label: t('common.tick'), allowsSorting: false },
    {
      key: 'lowest_price',
      label: t('common.lowest_price'),
      allowsSorting: true,
    },
    {
      key: 'lowest_price_change',
      label: t('common.price_change'),
      allowsSorting: true,
    },
    {
      key: 'tx_total_volume',
      label: t('common.tx_total_volume'),
      allowsSorting: true,
    },
    {
      key: 'total_amount',
      label: t('common.total_amount'),
      allowsSorting: true,
    },
    {
      key: 'tx_order_count',
      label: t('common.tx_order_count'),
      allowsSorting: true,
    },
    {
      key: 'holder_count',
      label: t('common.holder_count'),
      allowsSorting: true,
    },
    {
      key: 'onsell_order_count',
      label: t('common.order_num'),
      allowsSorting: true,
    },
  ];

  return (
    <div className="pt-4">
      <div className="mb-2 flex justify-end items-center">
        <SortDropdown
          sortList={sortList}
          value={interval}
          disabled={!list.length}
          onChange={onSortChange}
        ></SortDropdown>
      </div>
      <Table
        isHeaderSticky
        isStriped
        sortDescriptor={sortDescriptor}
        onSortChange={onTableSortChange}
        color="primary"
        selectionMode="single"
        onRowAction={toDetail}
        aria-label="Example table with infinite pagination"
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn
              key={column.key}
              allowsSorting={column.allowsSorting}
              className="text-sm md:text-base font-extralight"
            >
              {column.label}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={list}
          emptyContent={'No Data.'}
          loadingContent={<Spinner />}
        >
          {(item: any) => (
            <TableRow
              key={item.ticker}
              className="cursor-pointer text-sm md:text-base"
            >
              {(columnKey) => {
                if (columnKey === 'ticker') {
                  const tick = getKeyValue(item, columnKey);
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        <Avatar name={tick.slice(0, 1)?.toUpperCase()} />
                        &nbsp;
                        <span className="pt-2">{tick}</span>
                      </div>
                    </TableCell>
                  );
                } else if (columnKey === 'lowest_price') {
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        {getKeyValue(item, columnKey).toFixed(2) + ' sats'}
                      </div>
                    </TableCell>
                  );
                } else if (columnKey === 'lowest_price_change') {
                  const priceChange = getKeyValue(item, columnKey);
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        {priceChange === '-' && <span>-</span>}

                        {priceChange.length > 1 &&
                          priceChange.includes('-') && (
                            <span className="text-red-500">{priceChange}</span>
                          )}

                        {priceChange.length > 1 &&
                          !priceChange.includes('-') && (
                            <span className="text-green-500">
                              {priceChange}
                            </span>
                          )}
                      </div>
                    </TableCell>
                  );
                } else if (columnKey === 'total_amount') {
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        <Icon
                          icon="cryptocurrency-color:btc"
                          className="mr-1 mt-0.5"
                        />
                        {(
                          (getKeyValue(item, 'total_amount') *
                            getKeyValue(item, 'lowest_price')) /
                          100000000
                        ).toFixed(4)}
                      </div>
                    </TableCell>
                  );
                } else if (columnKey === 'tx_total_volume') {
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        <Icon
                          icon="cryptocurrency-color:btc"
                          className="mr-1 mt-0.5"
                        />
                        {getKeyValue(item, columnKey)}
                      </div>
                    </TableCell>
                  );
                } else if (
                  ['tx_order_count', 'holder_count'].includes(
                    columnKey.toString(),
                  )
                ) {
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        {thousandSeparator(getKeyValue(item, columnKey))}
                      </div>
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell className="font-light text-sm md:text-base">
                      {getKeyValue(item, columnKey)}
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
}
