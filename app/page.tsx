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
        onRowAction={toDetail}
        className="text-sm md:text-base"
        aria-label="Example table with infinite pagination"
      >
        <TableHeader>
          <TableColumn key="ticker" className="text-sm md:text-base">
            {t('common.tick')}
          </TableColumn>
          <TableColumn key="tx_total_volume" className="text-sm md:text-base">
            {t('common.tx_total_volume')}
          </TableColumn>
          <TableColumn key="lowest_price" className="text-sm md:text-base">
            {t('common.lowest_price')}
          </TableColumn>
          <TableColumn
            key="lowest_price_change"
            className="text-sm md:text-base"
          >
            {t('common.market_change')}
          </TableColumn>
          <TableColumn key="tx_order_count" className="text-sm md:text-base">
            {t('common.tx_order_count')}
          </TableColumn>
          <TableColumn key="holder_count" className="text-sm md:text-base">
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
            <TableRow key={item.ticker} className="cursor-pointer">
              {(columnKey) => {
                if (columnKey === 'holder_count') {
                  return (
                    <TableCell className="text-sm md:text-base">
                      <div>{getKeyValue(item, columnKey)}</div>
                      <div
                        className={`text-xs ${item['holder_dispersion'].indexOf('-') === 0 ? 'text-red-500' : 'text-green-500'}`}
                      >
                        {item['holder_dispersion']}
                      </div>
                    </TableCell>
                  );
                } else if (
                  ['tx_total_volume', 'lowest_price'].includes(
                    columnKey.toString(),
                  )
                ) {
                  console.log('item', columnKey);
                  return (
                    <TableCell className="text-sm md:text-base">
                      {getKeyValue(item, columnKey)} BTC
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell className="text-sm md:text-base">
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
