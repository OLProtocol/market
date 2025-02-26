'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import ProgressBar from '@/components/ProgressBar';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { ordxSWR } from '@/api/ordx-swr';
import { thousandSeparator } from '@/lib/utils';

export const MintingTable = ({ rarepizza, jades, nsDetail }: any) => {
  const { data: heightData } = ordxSWR.useBtcHeight('livenet');

  const currentBlockHeight = useMemo(() => {
    return heightData?.data.height || 0;
  }, [heightData]);

  const router = useRouter();
  const { t, i18n } = useTranslation();
  const toMint = ({ type, ticker }) => {
    router.push('/inscribe?type=' + type + '&ticker=' + ticker);
  };
  const toRarePizza = () => {
    router.push('/ordx/ticker?ticker=rarepizza&assets_type=ticker');
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
          <tr className="px-2 text-sm md:text-xl">
            <th>No.</th>
            <th>Ticker</th>
            {/* <th>Block</th> */}
            <th>Holders</th>
            <th>Minted</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="h-16 md:h-18 py-4 text-sm md:text-xl border-b-1 border-slate-800">
            <td>1</td>
            <td>RarePizza</td>
            {/* <td>850282 - 853358 <br />
              2024-07-02 03:58 ~ 2024-07-23 11:48
            </td> */}
            <td>{thousandSeparator(rarepizza?.holdersCount)}</td>
            <td>{thousandSeparator(rarepizza?.totalMinted)}</td>
            <td>
              <ProgressBar
                start={rarepizza?.startBlock}
                current={currentBlockHeight}
                target={rarepizza?.endBlock}
                isdisplay={false}
              />
            </td>
            <td>
              <Button
                className="flex-1 text-xs h-7 w-16  font-bold md:h-10 md:w-32  bg-indigo-500/50 md:uppercase"
                variant="flat"
                radius="sm"
                onClick={() => toRarePizza()}
              >
                Trade
              </Button>
            </td>
          </tr>
          <tr className="h-16 md:h-18 py-4 text-sm md:text-xl border-b-1 border-slate-800">
            <td>2</td>
            <td>Jades</td>
            {/* <td> - </td> */}
            <td>{thousandSeparator(jades?.holdersCount)}</td>
            <td>{thousandSeparator(jades?.totalMinted)}</td>
            <td>
              <ProgressBar
                start="1000000"
                current="1500000"
                target="10000000"
                isdisplay={false}
              />
            </td>
            <td>
              <Button
                className="flex-1 text-xs h-7 w-16  font-bold md:h-10 md:w-32 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 md:uppercase"
                variant="flat"
                radius="sm"
                onClick={() => toMint({ type: 'ordx', ticker: 'jades' })}
              >
                Mint
              </Button>
            </td>
          </tr>
          <tr className="h-16 md:h-18 py-4 text-xm md:text-xl border-b-1 border-slate-800">
            <td>3</td>
            <td>Name</td>
            {/* <td> - </td> */}
            <td> - </td>
            <td>{nsDetail?.total} </td>
            <td>
              <ProgressBar
                start="1000000"
                current="1500000"
                target="10000000"
                isdisplay={false}
              />
            </td>
            <td>
              <Button
                className="flex-1 text-xs h-7 w-16  font-bold md:h-10 md:w-32 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:to-indigo-500 hover:via-purple-500 hover:from-pink-500 md:uppercase"
                variant="flat"
                radius="sm"
                onClick={() => toMint({ type: 'name', ticker: '' })}
              >
                Mint
              </Button>{' '}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
