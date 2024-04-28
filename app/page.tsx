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
  Avatar,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useReactWalletStore } from 'btc-connect';
import { thousandSeparator } from '@/lib/utils';
import { SortDropdown } from '@/components/SortDropdown';

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  const [interval, setInterval] = useState<any>(1);
  const sortList = [
    { label: '24小时', value: 1 },
    { label: '7天', value: 7 },
    { label: '30天', value: 30 },
    { label: '全部时间', value: 0 },
  ];
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
        onRowAction={toDetail}
        aria-label="Example table with infinite pagination"
      >
        <TableHeader>
          <TableColumn
            key="ticker"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.tick')}
          </TableColumn>
          <TableColumn
            key="lowest_price"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.price')}
          </TableColumn>
          <TableColumn
            key="lowest_price_change"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.price_change')}
          </TableColumn>
          <TableColumn
            key="tx_total_volume"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.tx_total_volume')}
          </TableColumn>
          <TableColumn
            key="total_amount"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.total_amount')}
          </TableColumn>
          <TableColumn
            key="tx_order_count"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.tx_order_count')}
          </TableColumn>
          <TableColumn
            key="holder_count"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.holder_count')}
          </TableColumn>
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
                        &nbsp;
                        <Avatar name={tick.charAt(0)} />
                        <span className="pt-2">{tick}</span>
                      </div>
                    </TableCell>
                  );
                } else if (columnKey === 'lowest_price') {
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        {(getKeyValue(item, columnKey) * 10000).toFixed(2) +
                          ' sats'}
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
                        {getKeyValue(item, 'total_amount') *
                          getKeyValue(item, 'lowest_price')}
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
