'use client';

import { Tabs, Tab } from '@nextui-org/react';
import { OrdxUtxoList } from '@/components/account/OrdxUtxoList';
import { OrdxOrderHistoryList } from '@/components/order/OrdxOrderHistoryList';
import { OrdxOrderList } from '@/components/account/OrdxOrderList';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useTranslation } from 'react-i18next';
import { OrdxBillList } from '@/components/account/OrdxBillList';

export default function AccountPage() {
  const { t } = useTranslation();
  const { address } = useReactWalletStore((state) => state);
  return (
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
        <OrdxUtxoList />
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
  );
}
