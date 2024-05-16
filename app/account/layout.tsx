'use client';

import { useReactWalletStore } from 'btc-connect/dist/react';
import { hideStr, satsToBitcoin } from '@/lib/utils';
import { Divider, Snippet } from '@nextui-org/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { Icon } from '@iconify/react';
import { BtcPrice } from '@/components/BtcPrice';
import { getAddressOrdxList } from '@/api';
import { useEffect, useState } from 'react';
import { notification } from 'antd';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { balance, address } = useReactWalletStore((state) => state);
  const [sat20Balance, setSat20Balance] = useState(0);
  
  const getAssetAmount = async() => {
    const resp = await getAddressOrdxList({ address, offset: 0, size: 1000 })
    if (resp.code !== 200) {
      notification.error({
        message: 'Error',
        description: resp.msg,
      });
      return
    }
    if (resp.data && resp.data.length > 0) {
      let tmpSat20Balance = 0;
      resp.data.map((item: any) => {
        tmpSat20Balance += item.balance;
      })
      setSat20Balance(tmpSat20Balance);
    }
  }

  useEffect(() => {
    getAssetAmount();
  }, [address])

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
          <div className="flex">
            <div className="flex text-2xl">
              <span>Balance:&nbsp;&nbsp;</span>
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-1" />
              {satsToBitcoin(balance.total)}
              <span className="text-gray-400">
                &nbsp;&nbsp;$<BtcPrice btc={balance.total / 100000000} />
              </span>
            </div>
            <div className="flex text-2xl">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>Sat20 Assets:&nbsp;&nbsp;</span>
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-1" />
              {satsToBitcoin(sat20Balance)}
              <span className="text-gray-400">
                &nbsp;&nbsp;$<BtcPrice btc={sat20Balance / 100000000} />
              </span>
            </div>
          </div>
        </div>
        <div className="">{children}</div>
      </WalletConnectBus>
    </section>
  );
}
