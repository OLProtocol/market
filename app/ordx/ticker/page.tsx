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
import { Icon } from '@iconify/react';

export default function Page() {
  const { t, i18n } = useTranslation();
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
      {
        value: summary.tx_order_count,
        label: t('common.tx_order_count'),
        unit: '',
      },
      {
        value: summary.tx_total_amount,
        label: t('common.tx_total_asset'),
        unit: '',
      },
      {
        value: summary.tx_total_volume,
        label: t('common.tx_total_volume'),
        unit: 'BTC',
      },
      {
        value: summary.onsell_order_count,
        label: t('common.onsell_order_count'),
        unit: '',
      },
      {
        value: summary.onsell_total_amount,
        label: t('common.onsell_total_amount'),
        unit: '',
      },
      {
        value: summary.lowest_price,
        label: t('common.lowest_price'),
        unit: 'BTC',
      },
      {
        value: summary.highest_price,
        label: t('common.highest_price'),
        unit: 'BTC',
      },
      {
        value: summary.holder_count,
        label: i18n.t('common.holder_count'),
        unit: '',
      },
    ];
  }, [summary, i18n.language]);

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
          <WalletConnectBus text={t('buttons.list_sale')}>
            <Button onClick={toAccount} color="primary">
              {t('buttons.list_sale')}
            </Button>
          </WalletConnectBus>
        </div>
        <div>
          <div className="flex gap-2 flex-wrap">
            {headList.map((item) => (
              <Card isHoverable key={item.label} className="px-2">
                <CardBody className="text-left">
                  <div className="flex text-base md:text-2xl">
                    {item.unit === 'BTC' && (
                      <Icon
                        icon="cryptocurrency-color:btc"
                        className="mr-1 mt-0.5"
                      />
                    )}
                    <span>{item.value === undefined ? '-' : item.value}</span>
                  </div>
                  <div className="text-md md:text-sm text-gray-400">
                    {item.label}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        {/* <Tabs aria-label="Options" size="lg" color="primary"> */}
        <Tabs
          aria-label="Options"
          color="primary"
          size="lg"
          variant="underlined"
          classNames={{
            tabList:
              'gap-6 w-full relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-blue-500',
            tab: 'max-w-fit px-0 h-12',
            tabContent: 'group-data-[selected=true]:text-blue-400',
          }}
          style={{ width: '100%' }}
        >
          <Tab key="market" title={t('pages.market.title')}>
            <OrdxOrderList ticker={ticker} />
          </Tab>
          <Tab key="history" title={t('common.tx_history')}>
            <OrdxOrderHistoryList ticker={ticker} />
          </Tab>
          <Tab key="my" title={t('common.my_listings')}>
            <WalletConnectBus className="mx-auto mt-20 block">
              <OrdxOrderList ticker={ticker} address={address} />
            </WalletConnectBus>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
