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
import { useTranslation } from 'react-i18next';

export const MintingTable = () => {
  const { t, i18n } = useTranslation();
  const columns = [
    {
      key: 'ticker',
      label: t('common.tick'),
    },
  ];
  const list = [
    {
      ticker: 'RarePizza',
    },
  ];
  return (
    <Table>
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody
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
              const value = getKeyValue(item, columnKey);
              return (
                <TableCell className="font-light text-sm md:text-base">
                  {value}
                </TableCell>
              );
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
