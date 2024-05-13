'use client';

import { useReactWalletStore } from 'btc-connect/dist/react';
import { hideStr, satsToBitcoin } from '@/lib/utils';
import { Divider, Snippet } from '@nextui-org/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { Icon } from '@iconify/react';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { balance, address } = useReactWalletStore((state) => state);
  return (
    <section>
      <WalletConnectBus className="mx-auto mt-20 block">
        <div className="">
          <div className="">
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
            <div className="flex text-2xl">
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-0.5" />
              {satsToBitcoin(balance.total)}
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </WalletConnectBus>
    </section>
  );
}
