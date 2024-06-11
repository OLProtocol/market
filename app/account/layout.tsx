'use client';

import { useReactWalletStore } from 'btc-connect/dist/react';
import { hideStr, satsToBitcoin } from '@/lib/utils';
import { Snippet } from '@nextui-org/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';

import { getAddressOrdxList, getTickerSummary } from '@/api';
import { useEffect, useMemo, useState } from 'react';
import { notification } from 'antd';
import useSWR from 'swr';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { balance, address, network } = useReactWalletStore((state) => state);

  return (
    <section>
      <WalletConnectBus className="mx-auto mt-20 block">
        <div>
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
        </div>
        <div className="">{children}</div>
      </WalletConnectBus>
    </section>
  );
}
