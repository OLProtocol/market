import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
  Snippet,
} from '@nextui-org/react';
import { hideStr } from '@/lib/utils';
import { useState } from 'react';

interface Props {
  utxos: any[];
}
export const UtxoSelectTable = ({ utxos }: Props) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['2']));
  const columns = [
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
  // const utxoColumns: ColumnsType<any> = [
  //   {
  //     title: '',
  //     dataIndex: '',
  //     key: '',
  //     align: 'center',
  //     render: (t) => {
  //       return (
  //         <div className="flex item-center justify-center">
  //           <input
  //             type="radio"
  //             id={t.utxo}
  //             name="utxo-select"
  //             value={t.utxo}
  //             checked={selectedUtxo === t.utxo}
  //             onChange={() => handleUtxoChange(t)}
  //           />
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     title: 'UTXO',
  //     dataIndex: 'utxo',
  //     key: 'utxo',
  //     align: 'center',
  //     width: '40%',
  //     render: (t) => {
  //       const txid = t.replace(/:0$/m, '');
  //       const href = generateMempoolUrl({
  //         network,
  //         path: `tx/${txid}`,
  //       });
  //       return (
  //         <div className="flex item-center justify-center">
  //           {/* <Tooltip content={t}  triggerScaleOnOpen={false}>
  //             <a
  //               className="text-blue-500 cursor-pointer mr-2"
  //               href={href}
  //               target="_blank"
  //             >
  //               {hideStr(t)}
  //             </a>
  //           </Tooltip> */}
  //           {hideStr(t)}
  //           {/* <CopyButton text={t} tooltip="Copy Tick" /> */}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     title: 'Sats',
  //     dataIndex: 'value',
  //     key: 'value',
  //     align: 'center',
  //     render: (r) => {
  //       return <div className="cursor-pointer">{r}</div>;
  //     },
  //   },
  //   {
  //     title: 'Rare Sats',
  //     key: 'rareSatSize',
  //     align: 'center',
  //     render: (r) => {
  //       let size = 0;
  //       if (r !== undefined) {
  //         size = r.sats.reduce((acc, cur) => {
  //           return acc + cur.size;
  //         }, 0);
  //       }
  //       return <div className="cursor-pointer">{size}</div>;
  //     },
  //   },
  //   {
  //     title: 'Offset',
  //     key: 'offset',
  //     align: 'center',
  //     render: (r) => {
  //       let offset = 0;
  //       if (r) {
  //         offset = r.sats[0].offset;
  //       }
  //       return <div className="cursor-pointer">{offset}</div>;
  //     },
  //   },
  // ];
  return (
    <Table
      aria-label="Controlled table example with dynamic content"
      selectionMode="single"
      selectedKeys={selectedKeys}
      // onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={utxos}>
        {(item) => (
          <TableRow key={item.utxo}>
            {(columnKey) => {
              const value = getKeyValue(item, columnKey);
              if (columnKey === 'utxo') {
                return (
                  <TableCell>
                    <Snippet
                      codeString={value}
                      className="bg-transparent text-gray-500"
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
                let size = 0;
                if (value !== undefined) {
                  size = value.reduce((acc, cur) => {
                    return acc + cur.size;
                  }, 0);
                }
                return <TableCell>{size}</TableCell>;
              } else {
                return <TableCell>{value}</TableCell>;
              }
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
