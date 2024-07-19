'use client';

import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { hideStr, satsToBitcoin } from '@/lib/utils';
import { Snippet } from '@nextui-org/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { balance, address, network } = useReactWalletStore((state) => state);

  return (
    <section>
      <WalletConnectBus className="mx-auto mt-20 block">
        {children}
      </WalletConnectBus>
    </section>
  );
}
