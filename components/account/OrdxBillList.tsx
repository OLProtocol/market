'use client';

import { getChargedTaskList, getTopTickers } from '@/api';
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
import { BtcPrice } from '@/components/BtcPrice';

interface OrdxBillListProps {
    address?: string;
}
export const OrdxBillList = ({ address }: OrdxBillListProps) => {
    const { t, i18n } = useTranslation();
    const router = useRouter();

    const { address: storeAddress, network } = useReactWalletStore(
        (state) => state,
    );

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(12);
    const [sortField, setSortField] = useState<any>('');
    const [sortOrder, setSortOrder] = useState<any>(0);

    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: '',
        direction: 'ascending',
    });

    const { data, error, isLoading } = useSWR(
        `/ordx/getChargedTaskList-${network}-${address}--${page}-${size}-${sortField}-${sortOrder}`,
        () =>
            getChargedTaskList({
                address: address,
                offset: (page - 1) * size,
                size: size,
                sort_field: sortField,
                sort_order: sortOrder,
            }),
    );

    const list = useMemo(() => data?.data || [], [data]);

    const toDetail = (e) => {
        router.push(`/ordx/bill?tx_id=${e}`);
    };

    const onTableSortChange = (e: SortDescriptor) => {
        setSortDescriptor(e);
        setSortField(e.column);
        setSortOrder(e.direction === 'ascending' ? 0 : 1);
    };
    const columns = [
        {
            key: 'chargedAddress',
            label: 'ChargedAddress',
            allowsSorting: true
        },
        {
            key: 'fees',
            label: 'Fee',
            allowsSorting: true,
        },
        {
            key: 'status',
            label: 'Status',
            allowsSorting: true,
        },
        {
            key: 'txId',
            label: 'Tx',
            allowsSorting: true,
        },
        {
            key: 'type',
            label: 'Type',
            allowsSorting: true,
        },
        {
            key: 'createdAt',
            label: 'Create Date',
            allowsSorting: true,
        },
        {
            key: 'updatedAt',
            label: 'Update Date',
            allowsSorting: true,
        },
    ];

    return (
        <div className="pt-4">
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
                                return (
                                    <TableCell className="font-light text-sm md:text-base">
                                        {getKeyValue(item, columnKey)}
                                    </TableCell>
                                );
                            }}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
