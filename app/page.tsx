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
} from '@nextui-org/react';
import { useMemo } from 'react';
import { Transaction } from '@/lib';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Icon } from '@iconify/react';

export default function Home() {
  console.log('Transaction', Transaction);
  const { t } = useTranslation();
  const router = useRouter();
  const { network } = useReactWalletStore();
  const { data, error, isLoading } = useSWR(
    `/ordx/getTopTickers-${network}`,
    () => getTopTickers({}),
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
          <TableColumn
            key="ticker"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.tick')}
          </TableColumn>
          <TableColumn
            key="tx_total_volume"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.volumn')}
          </TableColumn>
          <TableColumn
            key="lowest_price"
            className="text-sm md:text-base font-extralight"
          >
            {t('common.price')}
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
                if (columnKey === 'holder_count') {
                  return (
                    <TableCell className="font-light text-sm md:text-base">
                      {getKeyValue(item, columnKey)}

                      {/* <div>{item['holder_dispersion']}</div> */}
                    </TableCell>
                  );
                } else if (
                  ['tx_total_volume', 'lowest_price'].includes(
                    columnKey.toString(),
                  )
                ) {
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
