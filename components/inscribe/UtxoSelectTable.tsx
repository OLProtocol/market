import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
  Snippet,
  Card,
  CardBody,
  Checkbox,
  Radio,
} from '@nextui-org/react';
import { hideStr } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface Props {
  utxos?: any[];
  onChange: (utxo: any) => void;
}
export const UtxoSelectTable = ({ onChange }: Props) => {
  const utxos = [
    {
      utxo: '4a8533b4323bea013ee43b250a142e00b1e022e2f7a0d5c7b5579ce93ae40e06:1',
      value: 900000,
      type: 'vintage',
      amount: 900000,
      sats: [
        {
          start: 714919783763,
          size: 500000,
          offset: 0,
        },
      ],
    },
    {
      utxo: '3ef22ae3084ecc47edcf580b079a942b4b841bb50658ca4de707949b446fd5a7:1',
      value: 500000,
      type: 'vintage',
      amount: 500000,
      sats: [
        {
          start: 816208088604,
          size: 500000,
          offset: 0,
        },
      ],
    },
    {
      utxo: 'c62b18cf7c616a7907e13e6fb84677c89fe24640174a3246dddc7fc05fb125b0:1',
      value: 800000,
      type: 'vintage',
      amount: 800000,
      sats: [
        {
          start: 2602623807828,
          size: 500000,
          offset: 0,
        },
      ],
    },
    {
      utxo: '5f4b29c2c800709505d2fb3fc68182c98b061baf0f9b5c0467dc76c89310b7c1:1',
      value: 500000,
      type: 'vintage',
      amount: 500000,
      sats: [
        {
          start: 816212589780,
          size: 500000,
          offset: 0,
        },
      ],
    },
    {
      utxo: '0ccc999a088c3852a79f3957deab58b2291231f951fef2c169e13315239c5172:1',
      value: 500000,
      type: 'vintage',
      amount: 500000,
      sats: [
        {
          start: 2602608793629,
          size: 500000,
          offset: 0,
        },
      ],
    },
  ];
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set([]));
  const columns = [
    {
      key: 'radio',
      label: '',
    },
    {
      key: 'utxo',
      label: 'UTXO',
    },
    {
      key: 'value',
      label: 'Sats',
    },
    {
      key: 'sats',
      label: 'Rare Sats',
    },
    {
      key: 'offset',
      label: 'Offset',
    },
  ];
  const selectChange = () => {
    const utxo = Array.from(selectedKeys.values())?.[0];
    if (utxo) {
      const findUtxo = utxos.find((u) => u.utxo === utxo);
      findUtxo && onChange?.(findUtxo);
    }
  };
  const onSelectionChange = (keys: any) => {
    const utxo = Array.from(selectedKeys.values())?.[0];
    if (utxo) {
      const findUtxo = utxos.find((u) => u.utxo === utxo);
      const firstOffset = findUtxo?.sats?.[0].offset || 0;
      if (firstOffset >= 546) {
        return;
      }
    }
    setSelectedKeys(keys);
  };
  useEffect(() => {
    selectChange();
  }, [selectedKeys]);
  return (
    <Card shadow="none">
      <CardBody>
        <Table
          aria-label="Select Utoxs"
          selectionMode="single"
          color="primary"
          selectedKeys={selectedKeys}
          onSelectionChange={onSelectionChange}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={utxos}>
            {(item) => (
              <TableRow key={item.utxo}>
                {(columnKey) => {
                  const value = getKeyValue(item, columnKey);
                  if (columnKey === 'radio') {
                    return (
                      <TableCell>
                        <Checkbox
                          isReadOnly
                          value={item.utxo}
                          checked={selectedKeys.has(item.utxo)}
                        />
                      </TableCell>
                    );
                  } else if (columnKey === 'utxo') {
                    return (
                      <TableCell>
                        <Snippet
                          codeString={value}
                          className="bg-transparent text-inherit"
                          symbol=""
                          size="lg"
                          variant="flat"
                        >
                          <span className="font-thin">{hideStr(value, 6)}</span>
                        </Snippet>
                      </TableCell>
                    );
                  } else if (columnKey === 'sats') {
                    let size = 0;
                    if (value !== undefined) {
                      size = value.reduce((acc, cur) => {
                        return acc + cur.size;
                      }, 0);
                    }
                    return <TableCell>{size}</TableCell>;
                  } else if (columnKey === 'offset') {
                    let offset = 0;
                    if (item.sats) {
                      offset = item.sats[0].offset;
                    }
                    return <TableCell>{offset}</TableCell>;
                  } else {
                    return <TableCell>{value}</TableCell>;
                  }
                }}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};
