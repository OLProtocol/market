'use client';

import { getTopAssets } from '@/api';
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
  Image,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { thousandSeparator, getTickLabel } from '@/lib/utils';
import { SortDropdown } from '@/components/SortDropdown';
import { HomeTypeTabs } from '@/components/home/HomeTypeTabs';
import { BtcPrice } from '@/components/BtcPrice';

export default function Home() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [type, setType] = useState<string>('ticker');
  const [interval, setInterval] = useState<any>(1);
  const [sortField, setSortField] = useState<any>('');
  const [sortOrder, setSortOrder] = useState<any>(0);

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
    column: '',
    direction: 'ascending',
  });
  const { network } = useReactWalletStore();
  const { data, error, isLoading } = useSWR(
    `/ordx/getTopTickers-${network}-${type}-${interval}-${sortField}-${sortOrder}`,
    () => {
      let res = getTopAssets({
        assets_type: type,
        interval,
        top_count: 200,
        top_name: '',
        sort_field: sortField,
        sort_order: sortOrder,
      });
      return res;
    },
  );
  const onSortChange = (i?: number) => {
    setInterval(i);
  };
  const list = useMemo(() => {
    return data?.data || [];
  }, [data]);
  const toDetail = (e) => {
    router.push(`/ordx/ticker?ticker=${e}&assets_type=${type}`);
  };
  const typeChange = (e: string) => {
    setType(e);
    setSortOrder(0);
    setSortField('');
    setSortDescriptor({ column: '', direction: 'ascending' });
  };
  const onTableSortChange = (e: SortDescriptor) => {
    setSortDescriptor(e);
    setSortField(e.column);
    setSortOrder(e.direction === 'ascending' ? 0 : 1);
  };
  const columns = useMemo(
    () => [
      {
        key: 'assets_name',
        label:
          type === 'ns' ? t('common.domain_name') : t('common.assets_name'),
        allowsSorting: true,
      },
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
        key: 'market_cap',
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
    ],
    [i18n.language, type],
  );

  return (
    <div className="pt-4">
      <div className="mb-2 flex justify-between items-center">
        <HomeTypeTabs value={type} onChange={typeChange} />
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
              // className="text-sm md:text-base font-extralight"
              className="text-sm md:text-xl md:font-extrablod font-extralight md:pb-3 md:pt-3"
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
              key={item.assets_name}
              className="cursor-pointer text-sm md:text-base"
            >
              {(columnKey) => {
                if (columnKey === 'assets_name') {
                  const tick = getKeyValue(item, 'assets_name');
                  const nickname = getKeyValue(item, 'nickname');
                  const logo = getKeyValue(item, 'logo');
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base items-left">
                        {logo ? (
                          <Image
                            radius="full"
                            src={`${process.env.NEXT_PUBLIC_HOST}${network === 'testnet' ? '/testnet' : '/mainnet'}${logo}`}
                            alt="logo"
                            className="w-14 h-14 p-2 rounded-full bg-gray-950"
                          />
                        ) : (
                          <Avatar
                            name={tick.slice(0, 1).toUpperCase()}
                            className="text-2xl text-gray-300 font-black w-14 h-14 bg-gray-950"
                          />
                        )}
                        <span className="pt-4">
                          {nickname ? nickname : getTickLabel(tick)}
                        </span>
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
                } else if (columnKey === 'market_cap') {
                  return (
                    <TableCell>
                      <div className="flex text-sm md:text-base">
                        <Icon
                          icon="cryptocurrency-color:btc"
                          className="mr-1 mt-0.5"
                        />
                        {(getKeyValue(item, 'market_cap') / 100000000).toFixed(
                          4,
                        )}
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
                        {/* <BtcPrice btc={getKeyValue(item, columnKey)} /> */}
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
