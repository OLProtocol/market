'use client';

import { Tabs, Tab } from '@nextui-org/react';
import { OrdxUtxoList } from '@/components/account/OrdxUtxoList';
import { OrdxOrderHistoryList } from '@/components/order/OrdxOrderHistoryList';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useTranslation } from 'react-i18next';

export default function AccountPage() {
  const { t } = useTranslation();
  const { address } = useReactWalletStore((state) => state);
  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="utxo" title={t('buttons.my_assets')}>
          <OrdxUtxoList />
        </Tab>
        <Tab key="history" title={t('common.tx_history')}>
          <OrdxOrderHistoryList address={address} />
        </Tab>
      </Tabs>
    </div>
  );
}
