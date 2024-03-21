'use client';

import { Tabs, Tab } from "@nextui-org/react";
import { OrdxUtxoList } from "@/components/account/OrdxUtxoList";
import { OrdxOrderHistoryList } from "@/components/order/OrdxOrderHistoryList";
import { useUnisatStore } from "@/providers/unisat-store-provider";

export default function AccountPage() {
  const { address } = useUnisatStore((state) => state);
  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="utxo" title="我的资产">
          <OrdxUtxoList />
        </Tab>
        <Tab key="history" title="交易历史">
          <OrdxOrderHistoryList address={address} />
        </Tab>
      </Tabs>
    </div>
  );
}
