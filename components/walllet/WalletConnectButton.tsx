'use client';

import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  WalletConnectReact,
  useReactWalletStore,
} from 'btc-connect/dist/react';
import 'btc-connect/dist/style/index.css';
import { useTheme } from 'next-themes';
import { hideStr } from '@/lib/utils';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useCommonStore } from '@/store';

const WalletConnectButton = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { theme } = useTheme();
  const { connected, check, address, disconnect, btcWallet } =
    useReactWalletStore((state) => state);
  const { setSignature, signature } = useCommonStore((state) => state);
  const toMyAssets = () => {
    router.push('/account');
  };
  useEffect(() => {
    console.log('check', connected);
    check();
  }, []);
  const onConnectSuccess = async (wallet: any) => {
    if (!signature) {
      console.log('signature text', process.env.NEXT_PUBLIC_SIGNATURE_TEXT);
      try {
        const _s = await wallet.signMessage(
          process.env.NEXT_PUBLIC_SIGNATURE_TEXT,
        );
        setSignature(_s);
      } catch (error) {
        await disconnect();
      }
    }
  };
  const onConnectError = (error: any) => {
    console.error('Connect Wallet Failed', error);
    notification.error({
      message: 'Connect Wallet Failed',
      description: error.message,
    });
  };
  const handlerDisconnect = async () => {
    console.log('disconnect success');
    setSignature('');
    await disconnect();
  };
  const accountAndNetworkChange = async () => {
    console.log('accountAndNetworkChange');
    console.log('connected', connected);
    try {
      if (process.env.NEXT_PUBLIC_SIGNATURE_TEXT && connected) {
        try {
          const _s = await btcWallet?.signMessage(
            process.env.NEXT_PUBLIC_SIGNATURE_TEXT,
          );
          if (_s) {
            setSignature(_s);
          }
        } catch (error) {
          await disconnect();
        }
      }
      // await check();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log('connected', connected);
    if (connected) {
      btcWallet?.on('accountsChanged', accountAndNetworkChange);
      btcWallet?.on('networkChanged', accountAndNetworkChange);
    } else {
      btcWallet?.removeListener('accountsChanged', accountAndNetworkChange);
      btcWallet?.removeListener('networkChanged', accountAndNetworkChange);
    }
    return () => {
      btcWallet?.removeListener('accountsChanged', accountAndNetworkChange);
      btcWallet?.removeListener('networkChanged', accountAndNetworkChange);
    };
  }, [connected]);
  return (
    <WalletConnectReact
      config={{
        network: 'livenet',
        defaultConnectorId: 'okx',
      }}
      theme={theme === 'dark' ? 'dark' : 'light'}
      onConnectSuccess={onConnectSuccess}
      onConnectError={onConnectError}
    >
      <>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button>{hideStr(address, 4, '**')}</Button>
          </PopoverTrigger>
          <PopoverContent className="p-2">
            <div className="flex flex-col gap-2">
              <Button className="w-full" onClick={toMyAssets}>
                {t('buttons.my_assets')}
              </Button>
              <Button
                color="danger"
                variant="ghost"
                onClick={handlerDisconnect}
              >
                {t('buttons.disconnect')}
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </>
    </WalletConnectReact>
  );
};

export default WalletConnectButton;
