'use client';

import { useReactWalletStore } from 'btc-connect/dist/react';
import { hideStr, satsToBitcoin } from '@/lib/utils';
import { Card, CardBody, CardHeader, Divider, Image, Snippet } from '@nextui-org/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { Icon } from '@iconify/react';
import { BtcPrice } from '@/components/BtcPrice';
import { getAddressOrdxList, getTickerSummary } from '@/api';
import { useEffect, useMemo, useState } from 'react';
import { notification } from 'antd';
import useSWR from 'swr';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { balance, address, network } = useReactWalletStore((state) => state);
  const [totalSatValue, setTotalSatValue] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(1000);

  const swrKey = useMemo(() => {
    return `/ordx/getAddressOrdxList-${address}-${network}-${page}-${size}`;
  }, [address, page, size, network]);

  const { data: orderListResp, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressOrdxList({ address, offset: (page - 1) * size, size }),
    {
      revalidateOnMount: true,
    },
  );
  const tickList = useMemo(() => orderListResp?.data || [], [orderListResp]);

  const getPriceByTicker = async (ticker) => {
    const resp = await getTickerSummary({ ticker })
    if (resp.code !== 200) {
      notification.error({
        message: 'Error',
        description: resp.msg,
      });
      return
    }
    return resp.data.summary.lowest_price
  }

  useEffect(() => {
    setTotalSatValue(0)
    let tmp = 0;
    tickList.map(async (item: any) => {
      const resp = await getTickerSummary({ ticker: item.ticker })
      const price = resp.data.summary.lowest_price
      tmp += Number(price) * item.balance
      setTotalSatValue(totalSatValue + tmp)
    })
  }, [tickList])

  return (
    <section>
      <WalletConnectBus className="mx-auto mt-20 block">
        <div>
          <Snippet
            codeString={address}
            className="bg-transparent text-lg md:text-2xl font-thin"
            symbol=""
            variant="flat"
          >
            <span className="text-base font-thin text-slate-400">
              {hideStr(address, 6)}
            </span>
          </Snippet>

          <div className="flex-1 flex items-center justify-between gap-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card isHoverable className="px-2">
                <CardHeader>
                  <span className='text-base md:text-md text-gray-200'>BTC balance</span>
                </CardHeader>
                <Divider />
                <CardBody className="text-left text-md font-thin leading-8">
                  <div className="flex">
                    <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-2" />
                    {satsToBitcoin(balance.total)}
                  </div>
                  <div className="flex">
                    <span className="text-xs text-red-500 w-5">$</span>
                    <span className='text-yellow-500 text-xs h-5'><BtcPrice btc={balance.total / 100000000} /></span>
                  </div>
                </CardBody>
              </Card>

              <Card isHoverable className="px-2">
                <CardHeader>
                <span className='text-base md:text-md text-gray-200'>Sat20 value</span>
                </CardHeader>
                <Divider />
                <CardBody className="text-left text-md font-thin leading-8">
                  <div className="flex">
                  <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-2" />
                    {(totalSatValue/100000000).toFixed(8)}
                  </div>
                  <div className="flex">
                    <span className="text-xs text-red-500 w-5">$</span>
                    <span className='text-yellow-500 text-xs h-5'>
                      <BtcPrice btc={totalSatValue / 100000000} />
                    </span>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>

        </div>
        <div className="">{children}</div>
      </WalletConnectBus>
    </section>
  );
}
