'use client';

import useSWR from 'swr';
import { Card, CardBody, Button } from '@nextui-org/react';
import { getTickerSummary } from '@/api';
import { Image, Divider, Tabs, Tab } from '@nextui-org/react';
import { OrdxOrderList } from '@/components/order/OrdxOrderList';
import { OrdxOrderHistoryList } from '@/components/order/OrdxOrderHistoryList';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { WalletConnectBus } from '@/components/walllet/WalletConnectBus';

export default function Page() {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useSearchParams();
  const { address } = useReactWalletStore((state) => state);
  const ticker = params.get('ticker') as any;
  const { data } = useSWR(`getTickerSummary`, () =>
    getTickerSummary({ ticker }),
  );
  const toAccount = () => {
    router.push(`/account`);
  };
  const summary = useMemo(() => data?.data?.summary || {}, [data]);
  const headList = useMemo(() => {
    return [
      { value: summary.tx_order_count, label: t('common.tx_order_count') },
      { value: summary.tx_total_amount, label: t('common.tx_total_amount') },
      { value: summary.tx_total_volume, label: t('common.tx_total_volume') },
      {
        value: summary.onsell_order_count,
        label: t('common.onsell_order_count'),
      },
      {
        value: summary.onsell_total_amount,
        label: t('common.onsell_total_amount'),
      },
      { value: summary.lowest_price, label: t('common.lowest_price') },
      { value: summary.highest_price, label: t('common.highest_price') },
      { value: summary.holder_count, label: t('common.holder_count') },
    ];
  }, [summary]);
  return (
    <div>
      <div className="min-h-40 flex flex-col py-2">
        <div className="flex-1 flex items-center mb-4 justify-between gap-2">
          <div className="flex flex-1 items-center flex-wrap">
            <Image src="/logo.jpg" alt="logo" className="mr-2 w-16 h-16" />
            <div className="flex-1">
              <div className="text-2xl md:text-4xl font-bold">
                {summary?.ticker}
              </div>
            </div>
          </div>
          <WalletConnectBus>
            <Button onClick={toAccount} color="primary">
              上架
            </Button>
          </WalletConnectBus>
        </div>
        <div>
          <div className="flex gap-2 flex-wrap">
            {headList.map((item) => (
              <Card isHoverable key={item.label} className="px-2">
                <CardBody className="text-center">
                  <div className="text-base md:text-2xl font-bold ">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm">{item.label}</div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Divider />
      <div className="pt-4">
        <Tabs aria-label="Options">
          <Tab key="market" title="市场">
            <OrdxOrderList ticker={ticker} />
          </Tab>
          <Tab key="history" title="交易历史">
            <OrdxOrderHistoryList ticker={ticker} />
          </Tab>
          <Tab key="my" title="我的挂单">
            <WalletConnectBus className="mx-auto mt-20 block">
              <OrdxOrderList ticker={ticker} address={address} />
            </WalletConnectBus>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
