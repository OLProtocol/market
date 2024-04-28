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
  Button,
  Tooltip,
} from '@nextui-org/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { thousandSeparator } from '@/lib/utils';

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(`/ordx/getTopTickers`, () =>
    getTopTickers({}),
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
          <TableColumn key="ticker" className="text-sm md:text-base font-extralight">
            {t('common.tick')}
          </TableColumn>
           <TableColumn key="onsell_order_count" className="text-sm md:text-base font-extralight">
            {t('common.onsell_order_count')}
          </TableColumn>
          <TableColumn key="tx_total_volume" className="text-sm md:text-base font-extralight">
            {t('common.total_volumn')}
          </TableColumn>
          <TableColumn key="total_amount" className="text-sm md:text-base font-extralight">
            {t('common.total_amount')}
          </TableColumn>
          <TableColumn key="tx_total_amount" className="text-sm md:text-base font-extralight">
            {t('common.tx_total_amount')}
          </TableColumn>
          <TableColumn key="onsell_total_amount" className="text-sm md:text-base font-extralight">
            {t('common.onsell_total_amount')}
          </TableColumn>
          <TableColumn key="lowest_price" className="text-sm md:text-base font-extralight">
            {t('common.lowest_price')}
          </TableColumn>
          <TableColumn key="highest_price" className="text-sm md:text-base font-extralight">
            {t('common.highest_price')}
          </TableColumn>
          <TableColumn key="tx_order_count" className="text-sm md:text-base font-extralight">
            {t('common.tx_order_count')}
          </TableColumn>
          <TableColumn key="holder_count" className="text-sm md:text-base font-extralight">
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
            <TableRow key={item.ticker} className="cursor-pointer text-sm md:text-base">
              {(columnKey) => {
                if (columnKey === 'holder_count') {
                  return (
                    <TableCell>
                      <div className="font-light text-sm md:text-base">
                        {getKeyValue(item, columnKey)}&nbsp;
                        {getKeyValue(item, 'holder_dispersion') !== '' && getKeyValue(item, 'holder_dispersion').length > 1 && getKeyValue(item, 'holder_dispersion').includes('-') && (
                          <Tooltip color="danger" content={t('common.holder_dispersion')} delay={1000}>
                            <Button color="danger" variant="flat">
                              {getKeyValue(item, 'holder_dispersion')}
                            </Button>
                          </Tooltip>
                        )}
                        {getKeyValue(item, 'holder_dispersion') !== '' && !getKeyValue(item, 'holder_dispersion').includes('-') && (
                          <Tooltip color="success" content={t('common.holder_dispersion')} delay={1000}>
                            <Button color="success" variant="flat">
                              {getKeyValue(item, 'holder_dispersion')}
                            </Button>
                          </Tooltip>
                        )}
                      </div>
                    </TableCell>
                  );
                } else if (columnKey === 'onsell_total_amount') {
                  return (
                    <TableCell>
                      <div className="font-light text-sm md:text-base">
                        {getKeyValue(item, columnKey)}&nbsp;
                        {getKeyValue(item, 'onsell_amount_change') !== '' && getKeyValue(item, 'onsell_amount_change').length > 1 && getKeyValue(item, 'onsell_amount_change').includes('-') && (
                          <Button color="danger" variant="flat">
                            {getKeyValue(item, 'onsell_amount_change')}
                          </Button>
                        )}
                        {getKeyValue(item, 'onsell_amount_change') !== '' && !getKeyValue(item, 'onsell_amount_change').includes('-') && (
                          <Button color="success" variant="flat">
                            {getKeyValue(item, 'onsell_amount_change')}
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  );
                } else if (
                  ['tx_total_volume', 'lowest_price', 'highest_price'].includes(
                    columnKey.toString(),
                  )
                ) {
                  return (
                    <TableCell>
                      <div className='flex text-sm md:text-base'>
                        <Icon icon="cryptocurrency-color:btc" className='mr-1 mt-0.5' />
                        {getKeyValue(item, columnKey)}
                      </div>
                    </TableCell>
                  );
                } else if (columnKey === 'total_amount') {
                  return (
                    <TableCell className="font-light text-sm md:text-base">
                      {thousandSeparator(getKeyValue(item, columnKey))}
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
