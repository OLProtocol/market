'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from '@nextui-org/react';
import { OrdxAssetsUtxoList } from '@/components/account/OrdxAssetsUtxoList';
import { OrdxOrderHistoryList } from '@/components/order/OrdxOrderHistoryList';
import { OrdxOrderList } from '@/components/account/OrdxOrderList';
import { notification } from 'antd';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useTranslation } from 'react-i18next';
import { OrdxBillList } from '@/components/account/OrdxBillList';
import { btcToSats, satsToBitcoin } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { BtcPrice } from '@/components/BtcPrice';
import { getAddressOrdxList, getTickerSummary } from '@/api';
import useSWR from 'swr';

export default function AccountPage() {
  const { t } = useTranslation();
  const { address, balance, network } = useReactWalletStore((state) => state);
  const [totalSatValue, setTotalSatValue] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(1000);

  const swrKey = useMemo(() => {
    return `/ordx/getAddressOrdxList-${address}-${network}-${page}-${size}`;
  }, [address, page, size, network]);

  const {
    data: orderListResp,
    isLoading,
    mutate,
  } = useSWR(
    swrKey,
    () => getAddressOrdxList({ address, offset: (page - 1) * size, size }),
    {
      revalidateOnMount: true,
    },
  );
  const tickList = useMemo(() => orderListResp?.data || [], [orderListResp]);

  const getPriceByTicker = async (ticker) => {
    const resp = await getTickerSummary({ ticker });
    if (resp.code !== 200) {
      notification.error({
        message: 'Error',
        description: resp.msg,
      });
      return;
    }
    return resp.data.summary.lowest_price;
  };
  useEffect(() => {
    setTotalSatValue(0);
    let tmp = 0;
    tickList.map(async (item: any) => {
      const resp = await getTickerSummary({ ticker: item.ticker });
      const price = resp.data.summary.lowest_price;
      tmp += Number(price) * item.balance;
      setTotalSatValue(totalSatValue + tmp);
    });
  }, [tickList]);

  return (
    <div>
      <div className="min-h-[8rem] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-2 sm:gap-4 mt-4 mb-4">
        <Card isHoverable className="px-2">
          <CardHeader>
            <span className="text-base md:text-lg font-mono text-gray-400">
              BTC balance
            </span>
          </CardHeader>
          <Divider className="divide-inherit divide-dashed" />
          <CardBody className="text-left text-md font-thin leading-8">
            <div className="flex">
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-2" />
              {satsToBitcoin(balance.total)}
            </div>
            <div className="flex text-sm md:font-bold">
              <span className="text-yellow-400 w-5"> &nbsp;$</span>
              <span className="text-gray-400 h-5">
                <BtcPrice btc={balance.total / 100000000} />
              </span>
            </div>
          </CardBody>
        </Card>

        <Card isHoverable className="px-2">
          <CardHeader>
            <span className="text-base md:text-lg font-mono text-gray-400">
              Sat20 value
            </span>
          </CardHeader>
          <Divider className="divide-inherit divide-dashed" />
          <CardBody className="text-left text-md font-thin leading-8">
            <div className="flex">
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-2" />
              {(totalSatValue / 100000000).toFixed(8)}
            </div>
            <div className="flex text-sm md:font-bold">
              <span className="text-yellow-400 w-5"> &nbsp;$</span>
              <span className="text-gray-400 h-5">
                <BtcPrice btc={totalSatValue / 100000000} />
              </span>
            </div>
          </CardBody>
        </Card>

        <Card isHoverable className="px-2">
          <CardHeader>
            <span className="text-base md:text-lg font-mono text-gray-400">
              Ordinals NFT value
            </span>
          </CardHeader>
          <Divider />
          <CardBody className="text-left text-md font-thin leading-8">
            <div className="flex">
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-2" />
              {(totalSatValue / 100000000).toFixed(8)}
            </div>
            <div className="flex text-sm md:font-bold">
              <span className="text-yellow-400 w-5"> &nbsp;$</span>
              <span className="text-gray-400 h-5">
                <BtcPrice btc={totalSatValue / 100000000} />
              </span>
            </div>
          </CardBody>
        </Card>
      </div>
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
        <Tab key="utxo" title={t('buttons.my_assets')}>
          <OrdxAssetsUtxoList />
        </Tab>
        <Tab key="history" title={t('common.tx_history')}>
          <OrdxOrderHistoryList address={address} />
        </Tab>
        <Tab key="order" title={t('common.my_listings')}>
          <OrdxOrderList address={address} />
        </Tab>
        <Tab key="bill" title={t('common.my_biils')}>
          <OrdxBillList />
        </Tab>
      </Tabs>
    </div>
  );
}
