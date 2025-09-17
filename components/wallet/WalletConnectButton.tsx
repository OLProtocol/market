'use client';

import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Snippet,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import {
  WalletConnectReact,
  useReactWalletStore,
} from '@sat20/btc-connect/dist/react';

import { Icon } from '@iconify/react';

import { useTheme } from 'next-themes';
import { hideStr, satsToBitcoin } from '@/lib/utils';
import { message } from '@/lib/wallet-sdk';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useCommonStore } from '@/store';
import { generateMempoolUrl } from '@/lib/utils';
import { useUtxoStore } from '@/store';
import { sleep } from '@/lib';

const WalletConnectButton = () => {
  console.log('WalletConnectButton component rendering');
  const { t } = useTranslation();
  const router = useRouter();
  const { theme } = useTheme();
  
  // 使用ref来跟踪事件监听器状态，防止重复绑定
  const eventListenersBound = useRef(false);
  const signatureCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isComponentMounted = useRef(true);
  
  const {
    connected,
    check,
    address,
    publicKey,
    disconnect,
    btcWallet,
    network,
  } = useReactWalletStore((state) => state);
  
  const { reset, getUnspendUtxos, list: UtxoList } = useUtxoStore();
  const { setSignature, signature } = useCommonStore((state) => state);
  const [utxoAmount, setUtxoAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  // 清理超时定时器
  const clearTimeouts = useCallback(() => {
    if (signatureCheckTimeoutRef.current) {
      clearTimeout(signatureCheckTimeoutRef.current);
      signatureCheckTimeoutRef.current = null;
    }
    if (initialCheckTimeoutRef.current) {
      clearTimeout(initialCheckTimeoutRef.current);
      initialCheckTimeoutRef.current = null;
    }
  }, []);

  // 优化的断开连接处理
  const handlerDisconnect = useCallback(async () => {
    console.log('Disconnecting wallet');
    clearTimeouts();
    if (btcWallet && eventListenersBound.current) {
      btcWallet.removeListener('accountsChanged', accountAndNetworkChange);
      btcWallet.removeListener('networkChanged', accountAndNetworkChange);
      eventListenersBound.current = false;
    }
    setSignature('');
    reset();
    await disconnect();
  }, [clearTimeouts, btcWallet, setSignature, reset, disconnect]);

  // 优化的签名验证函数
  const checkSignature = useCallback(async () => {
    if (!signature || !publicKey || !process.env.NEXT_PUBLIC_SIGNATURE_TEXT) {
      return;
    }

    try {
      const isValid = message.verifyMessageOfECDSA(
        publicKey,
        process.env.NEXT_PUBLIC_SIGNATURE_TEXT,
        signature,
      );
      
      if (!isValid) {
        console.warn('Signature verification failed');
        notification.warning({
          message: 'Signature Verification Failed',
          description: 'Please reconnect your wallet',
        });
        await handlerDisconnect();
      }
    } catch (error: unknown) {
      console.error('Signature verification error:', error);
      notification.warning({
        message: 'Signature Verification Error',
        description: 'Please reconnect your wallet',
      });
      await handlerDisconnect();
    }
  }, [signature, publicKey, handlerDisconnect]);

  // 优化的账户和网络变化处理
  const accountAndNetworkChange = useCallback(async () => {
    if (isProcessing) return;
    
    console.log('Account or network changed');
    setIsProcessing(true);
    
    try {
      reset();
      const windowState = document.visibilityState === 'visible' || !document.hidden;
      
      await check();
      
      if (process.env.NEXT_PUBLIC_SIGNATURE_TEXT && connected && windowState) {
        try {
          console.log('Requesting new signature after account/network change');
          const newSignature = await btcWallet?.signMessage(
            process.env.NEXT_PUBLIC_SIGNATURE_TEXT,
          );
          if (newSignature) {
            setSignature(newSignature);
          }
        } catch (error: unknown) {
          console.error('Signature request failed after account/network change:', error);
          await handlerDisconnect();
        }
      } else if (!windowState) {
        await handlerDisconnect();
      }
    } catch (error: unknown) {
      console.error('Account/network change handling failed:', error);
    } finally {
      setIsProcessing(false);
    }
  }, [isProcessing, reset, check, connected, btcWallet, setSignature, handlerDisconnect]);

  // 清理事件监听器
  const cleanupEventListeners = useCallback(() => {
    if (btcWallet && eventListenersBound.current) {
      btcWallet.removeListener('accountsChanged', accountAndNetworkChange);
      btcWallet.removeListener('networkChanged', accountAndNetworkChange);
      eventListenersBound.current = false;
    }
  }, [btcWallet, accountAndNetworkChange]);

  // 绑定事件监听器
  const bindEventListeners = useCallback(() => {
    if (btcWallet && !eventListenersBound.current) {
      btcWallet.on('accountsChanged', accountAndNetworkChange);
      btcWallet.on('networkChanged', accountAndNetworkChange);
      eventListenersBound.current = true;
    }
  }, [btcWallet, accountAndNetworkChange]);

  // 优化的连接成功处理
  const onConnectSuccess = useCallback(async (wallet: any) => {
    if (isProcessing) return;
    await sleep(300);
    setIsProcessing(true);
    console.log('onConnectSuccess', wallet);
    console.log('signature', signature);
    console.log('process.env.NEXT_PUBLIC_SIGNATURE_TEXT', process.env.NEXT_PUBLIC_SIGNATURE_TEXT);
    console.log('wallet.signMessage', wallet.signMessage);
    try {
      if (!signature && process.env.NEXT_PUBLIC_SIGNATURE_TEXT) {
        console.log('Requesting signature for:', process.env.NEXT_PUBLIC_SIGNATURE_TEXT);
        const signatureResult = await wallet.signMessage(
          process.env.NEXT_PUBLIC_SIGNATURE_TEXT,
        );
        setSignature(signatureResult);
      }
    } catch (error: unknown) {
      console.error('Signature request failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to get signature from wallet';
      notification.error({
        message: 'Signature Request Failed',
        description: errorMessage,
      });
      await disconnect();
    } finally {
      setIsProcessing(false);
    }
  }, [signature, isProcessing, setSignature, disconnect]);

  // 优化的连接错误处理
  const onConnectError = useCallback((error: unknown) => {
    console.error('Connect Wallet Failed', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to connect wallet';
    notification.error({
      message: 'Connect Wallet Failed',
      description: errorMessage,
    });
  }, []);

  const toMyAssets = () => {
    router.push('/account');
  };

  const toHistory = () => {
    const url = generateMempoolUrl({
      network,
      path: `address/${address}`,
    });
    window.open(url, '_blank');
  };

  // 计算显示金额
  const showAmount = useMemo(() => {
    return satsToBitcoin(utxoAmount);
  }, [utxoAmount]);

  // 初始化检查 - 只在组件挂载时执行一次
  useEffect(() => {
    console.log('Initial wallet check - useEffect triggered');
    console.log('check function available:', typeof check);
    
    // 立即执行一次check
    if (isComponentMounted.current) {
      console.log('Executing check function immediately...');
      try {
        check();
        console.log('Check function executed successfully');
      } catch (error) {
        console.error('Check function failed:', error);
      }
    }
    
    // 延迟再次检查，确保钱包状态正确
    initialCheckTimeoutRef.current = setTimeout(() => {
      if (!isComponentMounted.current) {
        console.log('Component unmounted, skipping delayed check');
        return;
      }
      console.log('Executing delayed check function...');
      try {
        check();
        console.log('Delayed check function executed successfully');
      } catch (error) {
        console.error('Delayed check function failed:', error);
      }
    }, 300);

    return () => {
      console.log('Cleaning up initial check timeout');
      isComponentMounted.current = false;
      if (initialCheckTimeoutRef.current) {
        clearTimeout(initialCheckTimeoutRef.current);
        initialCheckTimeoutRef.current = null;
      }
    };
  }, []); // 空依赖数组，只在挂载时执行一次

  // 更新UTXO金额
  useEffect(() => {
    const unspendUtxos = getUnspendUtxos();
    const amount = unspendUtxos.reduce((acc, cur) => acc + cur.value, 0);
    setUtxoAmount(amount);
  }, [UtxoList, getUnspendUtxos]);

  // 处理连接状态变化
  useEffect(() => {
    console.log('Connection status changed:', connected);
    
    if (connected) {
      // 延迟执行签名检查，避免竞态条件
      signatureCheckTimeoutRef.current = setTimeout(() => {
        checkSignature();
      }, 2000);
      
      // 绑定事件监听器
      bindEventListeners();
    } else {
      // 清理资源
      clearTimeouts();
      cleanupEventListeners();
    }

    // 清理函数
    return () => {
      clearTimeouts();
      cleanupEventListeners();
    };
  }, [connected, checkSignature, bindEventListeners, cleanupEventListeners, clearTimeouts]);

  // 组件卸载时的清理
  useEffect(() => {
    return () => {
      console.log('Component unmounting, cleaning up all resources');
      isComponentMounted.current = false;
      clearTimeouts();
      cleanupEventListeners();
    };
  }, [clearTimeouts, cleanupEventListeners]);

  return (
    <WalletConnectReact
      config={{
        network: 'livenet' as any,
      }}
      theme={theme === 'dark' ? 'dark' : 'light'}
      onConnectSuccess={onConnectSuccess}
      onConnectError={onConnectError}
    >
      <>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button
              className="px-0"
              disabled={isProcessing}
              endContent={
                <div className="px-2 h-full flex justify-center items-center bg-gray-600">
                  {address?.slice(-4)}
                </div>
              }
            >
              <div className="flex items-center gap-1 pl-2">
                <span>{showAmount}</span>
                <Icon icon="cryptocurrency-color:btc" className="w-4 h-4" />
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-2">
            <div className="flex flex-col gap-2">
              <div>
                <Snippet
                  codeString={address}
                  className="bg-transparent text-lg md:text-2xl font-thin items-center"
                  symbol=""
                  variant="flat"
                >
                  <span className="text-base font-thin text-slate-400">
                    {hideStr(address, 4)}
                  </span>
                </Snippet>
              </div>
              <Button className="w-full" onClick={toHistory}>
                {t('buttons.to_history')}
              </Button>
              <Button
                color="danger"
                variant="ghost"
                onClick={handlerDisconnect}
                disabled={isProcessing}
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
