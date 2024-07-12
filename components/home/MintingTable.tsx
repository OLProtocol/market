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
  Avatar,
  Button,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ordxSWR } from '@/api/ordx-swr';

export const MintingTable = () => {
  const { data: heightData } = ordxSWR.useBtcHeight('livenet');

  const startBlockHeight = 850282;
  const currentBlockHeight = useMemo(() => {
    return heightData?.data.height || 0;
  }, [heightData]);
  const endBlockHeight = 853358;

  const router = useRouter();
  const { t, i18n } = useTranslation();
  const toMint = ({ type, ticker }) => {
    router.push('/inscribe?type=' + type + '&ticker=' + ticker);
  };
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
    <section className="bg-[#060818] text-white md:pb-6 rounded-lg">
      <table className="w-full border-collapse">
        <thead className="h-16 bg-gray-800/50">
          <tr className='px-2 text-sm md:text-xl'>
            <th>No.</th>
            <th>Ticker</th>
            {/* <th>Block</th> */}
            <th>Holders</th>
            <th>Minted</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          <tr className='h-16 md:h-18 py-4 text-sm md:text-xl border-b-1 border-slate-800'>
            <td>1</td>
            <td>              
              RarePizza
            </td>
            {/* <td>850282 - 853358 <br />
              2024-07-02 03:58 ~ 2024-07-23 11:48
            </td> */}
            <td>2,591</td>
            <td>32,007,479</td>
            <td>
              <ProgressBar
                start={startBlockHeight}
                current={currentBlockHeight}
                target={endBlockHeight}
                isdisplay={false}
              />
            </td>
            <td>
              <Button
                className="flex-1 text-xs h-7 w-12 md:text-2xl font-bold md:h-10 md:w-30 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 md:uppercase"
                variant="flat"
                radius="sm"
                onClick={() => toMint({ type: 'ordx', ticker: 'rarepizza' })}
              >
                Mint
              </Button> </td>
          </tr>
          <tr className='h-16 md:h-18 py-4 text-sm md:text-xl border-b-1 border-slate-800'>
            <td>2</td>
            <td>
              Jades</td>
            {/* <td> - </td> */}
            <td> 3 </td>
            <td> 5 </td>
            <td>
              <ProgressBar
                start='1000000'
                current='1500000'
                target='10000000'
                isdisplay={false}
              />
            </td>
            <td>
              <Button
                className="flex-1 text-xs h-7 w-12 md:text-2xl font-bold md:h-10 md:w-30 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 md:uppercase"
                variant="flat"
                radius="sm"
                onClick={() => toMint({ type: 'ordx', ticker: 'jades' })}
              >
                Mint
              </Button> </td>
          </tr>
          <tr className='h-16 md:h-18 py-4 text-xm md:text-xl border-b-1 border-slate-800'>
            <td>3</td>
            <td>
              Name</td>
            {/* <td> - </td> */}
            <td> - </td>
            <td> - </td>
            <td>
              <ProgressBar
                start='1000000'
                current='1500000'
                target='10000000'
                isdisplay={false}
              />
            </td>
            <td>
              <Button
                className="flex-1 text-xs h-7 w-12 md:text-2xl font-bold md:h-10 md:w-30 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 md:uppercase"
                variant="flat"
                radius="sm"
                onClick={() => toMint({ type: 'name', ticker: '' })}
              >
                Mint
              </Button> </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
