'use client';

import { useReactWalletStore } from 'btc-connect/dist/react';
import { hideStr, satsToBitcoin } from '@/lib/utils';
import { Divider, Snippet } from '@nextui-org/react';
import { WalletConnectBus } from '@/components/order/WalletConnectBus';

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
            <h1 className="">
              <Snippet
                codeString={address}
                className="bg-transparent text-lg md:text-2xl font-bold"
                symbol=""
                size="lg"
                variant="flat"
              >
                {hideStr(address, 6)}
              </Snippet>
            </h1>
            <div className="">
              <p className="text-2xl md:text-4xl font-bold">
                {satsToBitcoin(balance.total)}
                <span className="text-lg md:text-3xl"> BTC</span>
              </p>
            </div>
          </div>
          <Divider className="my-2" />
        </div>
        <div className="">{children}</div>
      </WalletConnectBus>
    </section>
  );
}
