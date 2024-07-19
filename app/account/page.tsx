'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import useSWR from 'swr';
import { OrdxAssetsUtxoList } from '@/components/account/OrdxAssetsUtxoList';
import { OrdxOrderHistoryList } from '@/components/order/OrdxOrderHistoryList';
import { OrdxOrderList } from '@/components/account/OrdxOrderList';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useTranslation } from 'react-i18next';
import { OrdxBillList } from '@/components/account/OrdxBillList';
import { getAddressAssetsValue } from '@/api';

export default function AccountPage() {
  const { t } = useTranslation();
  const { address, balance, network } = useReactWalletStore((state) => state);
  const [totalSatValue, setTotalSatValue] = useState(0);
  const swrKey = useMemo(() => {
    return `/ordx/getAddressAssetsValue-${address}-${network}`;
  }, [address, network]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressAssetsValue(address),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  useEffect(() => {
    console.log(data);
    if (data?.data) {
      setTotalSatValue(data.data?.total_value || 0);
    }
  }, [data]);
  console.log('totalSatValue', totalSatValue);
  return (
    <div className="py-4">
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
