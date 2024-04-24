'use client';

import useSWR from 'swr';
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
} from '@nextui-org/react';
import { getHistory } from '@/api';
import { useMemo, useState } from 'react';
import { hideStr, resolveMempoolTxLink } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Pagination } from '@/components/Pagination';
import { SortDropdown } from '@/components/SortDropdown';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface OrdxOrderHistoryListProps {
  ticker?: string;
  address?: string;
}
export const OrdxOrderHistoryList = ({
  ticker,
  address,
}: OrdxOrderHistoryListProps) => {
  const { t, i18n } = useTranslation();
  const { network } = useReactWalletStore((state) => state);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);
  const [sort, setSort] = useState(0);
  const { data, isLoading } = useSWR(
    `/ordx/history-${ticker}-${address}-${page}-${size}-${sort}`,
    () =>
      getHistory({ offset: (page - 1) * size, size, ticker, address, sort }),
    {
      revalidateOnMount: true,
    },
  );
  const onSortChange = (sort?: number) => {
    if (sort !== undefined) {
      setSort(sort);
    }
  };
  const total = useMemo(
    () => (data?.data?.total ? Math.ceil(data?.data?.total / size) : 0),
    [data, size],
  );
  const typeMap = useMemo(() => {
    console.log(t('common.executed'));
    return {
      1: t('common.executed'),
      2: t('common.delist'),
      3: t('common.invalid'),
      4: t('common.list'),
      10: t('common.sell'),
      11: t('common.buy'),
    };
  }, [i18n.language]);
  console.log(typeMap);
  const coumns = useMemo(() => {
    const defaultColumns = [
      {
        key: 'utxo',
        label: t('common.utxo'),
        align: 'center',
      },
      {
        key: 'price',
        label: t('common.price'),
        align: 'center',
      },
      {
        key: 'value',
        label: t('common.num'),
        align: 'center',
      },
      {
        key: 'address',
        label: t('common.from'),
        align: 'center',
      },
      {
        key: 'txaddress',
        label: t('common.to'),
        align: 'center',
        hideHeader: true,
      },
      {
        key: 'txtime',
        label: t('common.time'),
        align: 'center',
      },
      {
        key: 'txid',
        label: t('common.tx'),
        allowsSorting: false,
        align: 'center',
      },
    ];
    const addressColumnIndex = defaultColumns.findIndex(
      (column) => column.key === 'txaddress',
    );

    if (address) {
      defaultColumns.splice(addressColumnIndex, 1);
      defaultColumns.unshift({
        key: 'result_text',
        label: 'Type',
        align: 'center',
      });
    }
    return defaultColumns;
  }, [address, i18n.language]);
  const sortList = [
    { label: t('common.not_sort'), value: 0 },
    { label: t('common.sort_price_ascending'), value: 1 },
    { label: t('common.sort_price_descending'), value: 2 },
    { label: t('common.sort_time_ascending'), value: 3 },
    { label: t('common.sort_time_descending'), value: 4 },
  ];
  const list = useMemo(
    () =>
      data?.data?.order_list?.map((v) => ({
        ...v,
        result_text: typeMap[v.result],
      })) || [],
    [data, typeMap],
  );
  return (
    <div className="">
      <Table
        isHeaderSticky
        isStriped
        topContent={
          <div className="flex justify-end">
            <SortDropdown
              sortList={sortList}
              value={sort}
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
                page={page}
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
              <TableColumn className="text-sm md:text-base text-center font-extralight" key={c.key} align={c.align as any}>
                {c.label}
              </TableColumn>
            );
          })}
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={list}
          emptyContent={'No Data.'}
          loadingContent={<Spinner />}
        >
          {list.map((item: any, i) => (
            <TableRow key={item.utxo + i} className="text-sm md:text-base">
              {(columnKey) => {
                if (
                  columnKey === 'utxo' ||
                  columnKey === 'txaddress' ||
                  columnKey === 'address'
                ) {
                  const v = getKeyValue(item, columnKey);
                  return (
                    <TableCell className='text-center font-light'>
                      {v ? (
                        <Snippet
                          codeString={v}
                          className="bg-transparent"
                          symbol=""
                          size="lg"
                          variant="flat"
                        >
                          <span className='font-light'>{hideStr(v, 6)}</span>
                        </Snippet>
                      ) : (
                        '-'
                      )}
                    </TableCell>
                  );
                } else if (columnKey === 'txid') {
                  return (
                    <TableCell className='text-center font-light'>
                      <a
                        href={resolveMempoolTxLink(
                          getKeyValue(item, columnKey),
                          network,
                        )}
                        target="_blank"
                      >
                        <Icon icon="ph:share-fill" />
                      </a>
                    </TableCell>
                  );
                } else if (columnKey === 'txtime') {
                  return (
                    <TableCell className='text-center font-light text-sm md:text-base'>
                      <span>
                        {new Date(
                          Number(getKeyValue(item, columnKey)),
                        ).toLocaleString()}
                      </span>
                    </TableCell>
                  );
                } else if (columnKey === 'result_text') {
                  return <TableCell className='text-center font-light text-sm md:text-base'>{getKeyValue(item, columnKey)}</TableCell>;
                } else if (columnKey === 'price') {
                  return (
                    <TableCell>
                      <div className='flex text-sm md:text-base'>
                        {item.currency === 'BTC' && (
                          <Icon icon="cryptocurrency-color:btc" className='mr-1 mt-0.5'/>
                        )}
                      
                        {getKeyValue(item, columnKey)}
                        {item.currency !== 'BTC' && (
                          ' ' + item.currency
                        )}
                      </div>
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell className='text-center font-light text-sm md:text-base'>
                      {getKeyValue(item, columnKey)}
                      {/* {`${getKeyValue(item, columnKey)}${
                        columnKey === 'price' ? ' ' + item.currency : ''
                      }`} */}
                    </TableCell>
                  );
                }
              }}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
