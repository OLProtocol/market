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
import { hideStr, satsToBitcoin } from '@/lib/utils/format';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';
import { useCommonStore } from '@/store/common';
import { generateMempoolUrl } from '@/lib/utils/url';
import { useUtxoStore } from '@/store/utxo';
import { sleep } from '@/lib/utils/format';
import { installSat20PwaProvider, isSat20PwaEmbedded } from '@/lib/sat20PwaProvider';
import { message } from '@/lib/wallet-sdk';

const isPwaWallet = (wallet: unknown) => {
  return !!(wallet as { isSat20Pwa?: boolean } | null)?.isSat20Pwa;
};

const SHARED_CONNECTOR_COOKIE = 'sat20_wallet_connector';
const SHARED_SIGNATURE_COOKIE = 'sat20_wallet_signature';
const SHARED_DISCONNECT_COOKIE = 'sat20_wallet_disconnected';
const SHARED_IDENTITY_COOKIE = 'sat20_wallet_identity';

type SharedWalletIdentity = {
  address?: string;
  publicKey?: string;
  network?: string;
  connectorId?: string;
  updatedAt?: number;
};

const getSharedCookieDomain = () => {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.location.hostname.endsWith('.ordx.market')
    ? '; domain=.ordx.market'
    : '';
};

const setSharedCookie = (name: string, value: string, maxAge = 2592000) => {
  if (typeof document === 'undefined') {
    return;
  }
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${getSharedCookieDomain()}`;
};

const getSharedCookie = (name: string) => {
  if (typeof document === 'undefined') {
    return '';
  }
  const value = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`))
    ?.split('=')[1];
  return value ? decodeURIComponent(value) : '';
};

const getSharedConnectorId = () => {
  return getSharedCookie(SHARED_CONNECTOR_COOKIE);
};

const setSharedConnectorId = (connectorId?: string) => {
  if (!connectorId) {
    return;
  }
  setSharedCookie(SHARED_CONNECTOR_COOKIE, connectorId);
  setSharedCookie(SHARED_DISCONNECT_COOKIE, '', 0);
};

const getSharedSignature = () => {
  return getSharedCookie(SHARED_SIGNATURE_COOKIE);
};

const setSharedSignature = (signature?: string) => {
  if (signature) {
    setSharedCookie(SHARED_SIGNATURE_COOKIE, signature);
  }
};

const getSharedWalletIdentity = (): SharedWalletIdentity | null => {
  const value = getSharedCookie(SHARED_IDENTITY_COOKIE);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value) as SharedWalletIdentity;
  } catch {
    return null;
  }
};

const setSharedWalletIdentity = (identity: SharedWalletIdentity) => {
  if (!identity.address || !identity.publicKey) {
    return;
  }
  setSharedCookie(SHARED_IDENTITY_COOKIE, JSON.stringify({
    ...identity,
    updatedAt: Date.now(),
  }));
  setSharedCookie(SHARED_DISCONNECT_COOKIE, '', 0);
};

const getReusableSharedSignature = (publicKey?: string) => {
  const sharedSignature = getSharedSignature();
  if (!sharedSignature) {
    return '';
  }
  const sharedIdentity = getSharedWalletIdentity();
  if (publicKey && sharedIdentity?.publicKey && sharedIdentity.publicKey !== publicKey) {
    return '';
  }
  return sharedSignature;
};

const saveSharedWalletState = (state: {
  address?: string;
  publicKey?: string;
  network?: string;
  connectorId?: string;
  signature?: string;
}) => {
  setSharedWalletIdentity({
    address: state.address,
    publicKey: state.publicKey,
    network: state.network,
    connectorId: state.connectorId,
  });
  if (state.connectorId) {
    setSharedConnectorId(state.connectorId);
  }
  if (state.signature) {
    setSharedSignature(state.signature);
  }
};

const isSharedDisconnected = () => {
  return getSharedCookie(SHARED_DISCONNECT_COOKIE) === '1';
};

const markSharedDisconnected = () => {
  setSharedCookie(SHARED_DISCONNECT_COOKIE, '1');
  setSharedCookie(SHARED_CONNECTOR_COOKIE, '', 0);
  setSharedCookie(SHARED_SIGNATURE_COOKIE, '', 0);
  setSharedCookie(SHARED_IDENTITY_COOKIE, '', 0);
};

const WalletConnectButton = () => {
  console.log('WalletConnectButton component rendering');
  const { t } = useTranslation();
  const router = useRouter();
  const { theme } = useTheme();
  
  // 使用ref来跟踪事件监听器状态，防止重复绑定
  const eventListenersBound = useRef(false);
  const signatureCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialCheckTimeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const isComponentMounted = useRef(true);
  const restoreInProgressRef = useRef(false);
  
  const {
    connected,
    check,
    address,
    publicKey,
    disconnect,
    btcWallet,
    network,
    initStatus,
  } = useReactWalletStore((state) => state);
  
  const { reset, getUnspendUtxos, list: UtxoList } = useUtxoStore();
  const { setSignature, signature } = useCommonStore((state) => state);
  const [utxoAmount, setUtxoAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pwaEmbedded, setPwaEmbedded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const provider = installSat20PwaProvider();
    setPwaEmbedded(isSat20PwaEmbedded() && !!provider);

    if (!provider) {
      return;
    }

    const syncEmbeddedWallet = async (payload?: any) => {
      let accounts = Array.isArray(payload?.accounts) ? payload.accounts : [];
      let nextPublicKey = payload?.publicKey || '';
      let nextNetwork = payload?.network || network;

      if (!accounts.length) {
        try {
          accounts = await provider.getAccounts();
          nextPublicKey = await provider.getPublicKey();
          nextNetwork = await provider.getNetwork();
        } catch (error) {
          console.warn('SAT20 PWA wallet sync failed:', error);
        }
      }

      const nextAddress = accounts[0] || '';
      const currentPublicKey = useReactWalletStore.getState().publicKey;
      if (nextPublicKey && nextPublicKey !== currentPublicKey) {
        setSignature('');
      }

      (useReactWalletStore.setState as (partial: Record<string, unknown>) => void)({
        connected: !!nextAddress,
        address: nextAddress,
        publicKey: nextPublicKey,
        network: nextNetwork,
        btcWallet: provider,
      });

      if (!nextAddress) {
        setSignature('');
        reset();
      }
    };

    provider.on('ready', syncEmbeddedWallet);
    provider.on('accountChanged', syncEmbeddedWallet);
    provider.on('networkChanged', syncEmbeddedWallet);
    const syncTimer = setTimeout(() => {
      syncEmbeddedWallet();
    }, 300);

    return () => {
      clearTimeout(syncTimer);
      provider.removeListener('ready', syncEmbeddedWallet);
      provider.removeListener('accountChanged', syncEmbeddedWallet);
      provider.removeListener('networkChanged', syncEmbeddedWallet);
    };
  }, [mounted, network, reset, setSignature]);

  // 清理超时定时器
  const clearTimeouts = useCallback(() => {
    if (signatureCheckTimeoutRef.current) {
      clearTimeout(signatureCheckTimeoutRef.current);
      signatureCheckTimeoutRef.current = null;
    }
  }, []);

  const clearRestoreTimers = useCallback(() => {
    initialCheckTimeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    initialCheckTimeoutRefs.current = [];
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
    const currentWallet = useReactWalletStore.getState().btcWallet;
    if (!isSat20PwaEmbedded() && !isPwaWallet(currentWallet)) {
      markSharedDisconnected();
    }
    reset();
    if (isPwaWallet(currentWallet)) {
      (useReactWalletStore.setState as (partial: Record<string, unknown>) => void)({
        connected: false,
        address: '',
        publicKey: '',
        btcWallet: undefined,
      });
      return;
    }
    await disconnect();
  }, [clearTimeouts, btcWallet, setSignature, reset, disconnect]);

  // 优化的签名验证函数
  const checkSignature = useCallback(async () => {
    const {
      publicKey: currentPublicKey,
      btcWallet: currentWallet,
    } = useReactWalletStore.getState();
    const currentSignature = useCommonStore.getState().signature || signature;

    if (isPwaWallet(currentWallet)) {
      return;
    }
    if (!currentSignature || !currentPublicKey || !process.env.NEXT_PUBLIC_SIGNATURE_TEXT) {
      return;
    }

    const signatureText = process.env.NEXT_PUBLIC_SIGNATURE_TEXT;
    const verifySignature = (nextSignature: string) => {
      return message.verifyMessageOfECDSA(
        currentPublicKey,
        signatureText,
        nextSignature,
      );
    };

    try {
      const isValid = verifySignature(currentSignature);

      if (!isValid) {
        console.warn('Signature verification failed');
        setSignature('');
        notification.warning({
          message: 'Signature Verification Failed',
          description: 'Please sign again when an authorized request is needed',
        });
      }
    } catch (error: unknown) {
      console.error('Signature verification error:', error);
      setSignature('');
      notification.warning({
        message: 'Signature Verification Error',
        description: 'Please sign again when an authorized request is needed',
      });
    }
  }, [signature, publicKey, handlerDisconnect, btcWallet, setSignature]);

  // 优化的账户和网络变化处理
  const accountAndNetworkChange = useCallback(async (payload?: any) => {
    if (isProcessing) return;
    
    console.log('Account or network changed');
    setIsProcessing(true);
    
    try {
      if (isPwaWallet(btcWallet)) {
        const hasAccountPayload = Array.isArray(payload?.accounts)
          || Array.isArray(payload)
          || typeof payload === 'string';
        const accounts = Array.isArray(payload?.accounts)
          ? payload.accounts
          : Array.isArray(payload)
            ? payload
            : typeof payload === 'string'
              ? [payload]
              : [];
        const nextAddress = accounts[0];

        (useReactWalletStore.setState as (partial: Record<string, unknown>) => void)({
          ...(hasAccountPayload ? { connected: !!nextAddress, address: nextAddress || '' } : {}),
          ...(payload?.publicKey ? { publicKey: payload.publicKey } : {}),
          ...(payload?.network ? { network: payload.network } : {}),
          btcWallet,
        });

        if (hasAccountPayload && !nextAddress) {
          setSignature('');
          reset();
        }
        return;
      }

      reset();
      const windowState = document.visibilityState === 'visible' || !document.hidden;
      
      if (!isPwaWallet(btcWallet)) {
        await check();
      }
      
      if (process.env.NEXT_PUBLIC_SIGNATURE_TEXT && connected && windowState) {
        try {
          const currentState = useReactWalletStore.getState() as any;
          const sharedSignature = getReusableSharedSignature(currentState.publicKey);
          if (sharedSignature) {
            setSignature(sharedSignature);
            return;
          }
          console.log('Requesting new signature after account/network change');
          const newSignature = await btcWallet?.signMessage(
            process.env.NEXT_PUBLIC_SIGNATURE_TEXT,
          );
          if (newSignature) {
            setSignature(newSignature);
            saveSharedWalletState({
              address: currentState.address,
              publicKey: currentState.publicKey,
              network: currentState.network,
              connectorId: currentState.localConnectorId || currentState.connectorId,
              signature: newSignature,
            });
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
      if (process.env.NEXT_PUBLIC_SIGNATURE_TEXT && !isPwaWallet(wallet)) {
        const walletState = useReactWalletStore.getState() as any;
        const connectorId = walletState.localConnectorId || walletState.connectorId;
        const sharedSignature = getReusableSharedSignature(walletState.publicKey);
        if (sharedSignature) {
          setSignature(sharedSignature);
          saveSharedWalletState({
            address: walletState.address,
            publicKey: walletState.publicKey,
            network: walletState.network,
            connectorId,
            signature: sharedSignature,
          });
        } else {
          setSignature('');
          console.log('Requesting signature for:', process.env.NEXT_PUBLIC_SIGNATURE_TEXT);
          const signatureResult = await wallet.signMessage(
            process.env.NEXT_PUBLIC_SIGNATURE_TEXT,
          );
          setSignature(signatureResult);
          saveSharedWalletState({
            address: walletState.address,
            publicKey: walletState.publicKey,
            network: walletState.network,
            connectorId,
            signature: signatureResult,
          });
        }
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
  }, [setSignature]);

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

  const restoreWalletConnection = useCallback(async () => {
    if (restoreInProgressRef.current) {
      return false;
    }
    if (isSat20PwaEmbedded()) {
      return false;
    }
    if (isSharedDisconnected()) {
      return false;
    }

    restoreInProgressRef.current = true;

    try {
      const walletState = useReactWalletStore.getState() as any;
      if (!walletState.btcWallet) {
        return false;
      }

      const sharedIdentity = getSharedWalletIdentity();
      const connectorId = walletState.localConnectorId
        || walletState.connectorId
        || sharedIdentity?.connectorId
        || getSharedConnectorId();
      if (connectorId) {
        const connector = walletState.connectors?.find(
          (item: any) => item.id === connectorId && item.installed,
        );
        if (!connector) {
          return false;
        }
        if (!walletState.connectorId && typeof walletState.switchConnector === 'function') {
          walletState.switchConnector(connectorId);
        }
      } else {
        const installedConnectors = walletState.connectors?.filter(
          (connector: any) => connector.installed,
        ) || [];
        if (installedConnectors.length !== 1 || typeof walletState.switchConnector !== 'function') {
          return false;
        }
        walletState.switchConnector(installedConnectors[0].id);
      }

      await walletState.check();
      let nextState = useReactWalletStore.getState();
      if (!nextState.connected && sharedIdentity?.address && sharedIdentity?.publicKey) {
        (useReactWalletStore.setState as (partial: Record<string, unknown>) => void)({
          connected: true,
          address: sharedIdentity.address,
          publicKey: sharedIdentity.publicKey,
          ...(sharedIdentity.network ? { network: sharedIdentity.network } : {}),
        });
        nextState = useReactWalletStore.getState();
      }
      if (nextState.connected && nextState.publicKey) {
        const nextConnectorId = (nextState as any).localConnectorId || (nextState as any).connectorId || connectorId;
        const nextSignature = getReusableSharedSignature(nextState.publicKey)
          || useCommonStore.getState().signature
          || '';
        setSignature(nextSignature);
        saveSharedWalletState({
          address: nextState.address,
          publicKey: nextState.publicKey,
          network: (nextState as any).network || sharedIdentity?.network,
          connectorId: nextConnectorId,
          signature: nextSignature,
        });
        clearRestoreTimers();
        return true;
      }
      return false;
    } finally {
      restoreInProgressRef.current = false;
    }
  }, [setSignature, clearRestoreTimers]);

  // 初始化检查 - 只在组件挂载时执行一次
  useEffect(() => {
    if (!initStatus) {
      return;
    }

    isComponentMounted.current = true;
    console.log('Initial wallet restore - useEffect triggered');
    if (restoreInProgressRef.current || useReactWalletStore.getState().connected) {
      return;
    }
    clearRestoreTimers();
    const restoreDelays = [0, 300, 1000, 2000, 4000];
    let cancelled = false;

    const runRestore = (delay: number) => {
      const timeout = setTimeout(() => {
        if (
          cancelled
          || restoreInProgressRef.current
          || !isComponentMounted.current
          || isSat20PwaEmbedded()
        ) {
          return;
        }
        if (useReactWalletStore.getState().connected) {
          return;
        }
        console.log('Executing wallet restore check...', delay);
        restoreWalletConnection()
          .then((restored) => {
            if (restored) {
              console.log('Wallet restore check succeeded');
              clearRestoreTimers();
            }
          })
          .catch((error) => {
            console.error('Wallet restore check failed:', error);
          });
      }, delay);
      initialCheckTimeoutRefs.current.push(timeout);
    };

    restoreDelays.forEach(runRestore);

    return () => {
      cancelled = true;
      console.log('Cleaning up initial restore timeout');
      clearRestoreTimers();
    };
  }, [initStatus, check, restoreWalletConnection, clearRestoreTimers]);

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
      clearRestoreTimers();
      clearTimeouts();
      cleanupEventListeners();
    };
  }, [clearTimeouts, cleanupEventListeners, clearRestoreTimers]);

  if (!mounted) {
    return <Button className="px-0 opacity-0 pointer-events-none">...</Button>;
  }

  const walletStatus = connected && address ? (
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
          {!pwaEmbedded && !isPwaWallet(btcWallet) ? (
            <Button
              color="danger"
              variant="ghost"
              onClick={handlerDisconnect}
              disabled={isProcessing}
            >
              {t('buttons.disconnect')}
            </Button>
          ) : null}
        </div>
      </PopoverContent>
    </Popover>
  ) : null;

  if (pwaEmbedded) {
    return walletStatus || <Button className="px-0 opacity-0 pointer-events-none">...</Button>;
  }

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
        {walletStatus}
      </>
    </WalletConnectReact>
  );
};

export default WalletConnectButton;
