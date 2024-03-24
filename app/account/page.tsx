"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { OrdxUtxoList } from "@/components/account/OrdxUtxoList";
import { OrdxOrderHistoryList } from "@/components/order/OrdxOrderHistoryList";
import { useReactWalletStore } from "btc-connect/dist/react";

export default function AccountPage() {
  const { address } = useReactWalletStore((state) => state);
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
