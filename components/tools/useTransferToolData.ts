'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useMap } from 'react-use';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useCommonStore } from '@/store';
import {
  ordx,
} from '@/api';
import {
  calcNetworkFee,
  buildTransaction,
  signAndPushPsbt,
} from '@/lib';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

// 缓存管理器
class AssetCache {
  private cache: Map<string, { data: any; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

  getKey(address: string, network: string, asset?: string): string {
    return asset ? `${address}:${network}:${asset}` : `${address}:${network}:summary`;
  }

  get(address: string, network: string, asset?: string): any | null {
    const key = this.getKey(address, network, asset);
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data;
    }
    if (cached) {
      this.cache.delete(key);
    }
    return null;
  }

  set(address: string, network: string, data: any, asset?: string): void {
    const key = this.getKey(address, network, asset);
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  clear(): void {
    this.cache.clear();
  }

  clearForAddress(address: string, network: string): void {
    for (const key of this.cache.keys()) {
      if (key.startsWith(`${address}:${network}`)) {
        this.cache.delete(key);
      }
    }
  }
}

// 全局缓存实例
const globalAssetCache = new AssetCache();

export function useTransferToolData() {
  const { t } = useTranslation();
  const [fee, setFee] = useState(0);
  const { feeRate } = useCommonStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { address, network, publicKey } = useReactWalletStore((state) => state);
  const [refresh, setRefresh] = useState(0);

  // 资产列表（从summary接口获取）
  const [assetList, setAssetList] = useState<any[]>([]);
  // 选中的资产
  const [selectedAsset, setSelectedAsset] = useState<string>('');
  // 是否正在加载资产UTXO
  const [loadingAssetUtxos, setLoadingAssetUtxos] = useState(false);

  const [inputList, { set: setInputList }] = useMap<any>({
    items: [
      {
        id: 1,
        value: {
          ticker: '',
          utxo: '',
          sats: 0,
          unit: 'sats',
          description: '',
        },
        options: {
          tickers: [],
          utxos: [],
        },
      },
    ],
  });

  const [outputList, { set: setOutputList }] = useMap<any>({
    items: [
      {
        id: 1,
        num: 1,
        value: {
          sats: 0,
          unit: 'sats',
          address: '',
        },
      },
    ],
  });

  const [balance, { set: setBalance }] = useMap<any>({
    sats: 0,
    unit: 'sats',
  });

  // 获取资产列表（使用缓存）
  const fetchAssetList = useCallback(async () => {
    if (!address || !network) return;

    // 检查缓存
    const cached = globalAssetCache.get(address, network);
    if (cached) {
      setAssetList(cached);
      return;
    }

    try {
      const res = await ordx.getAddressSummayr({
        address,
        network,
      });

      if (res.code !== 0) {
        notification.error({
          message: t('notification.transaction_title'),
          description: res.msg,
        });
        return;
      }

      // 处理资产列表，过滤掉 type 为 * 的
      const assets = (res.data || []).filter((item: any) => {
        return item.Name?.Type !== '*';
      });

      // 缓存结果
      globalAssetCache.set(address, network, assets);
      setAssetList(assets);
    } catch (error) {
      console.error('Failed to fetch asset list:', error);
      notification.error({
        message: t('notification.transaction_title'),
        description: 'Failed to fetch asset list',
      });
    }
  }, [address, network, t]);

  // 获取资产UTXO详情（使用缓存）
  const fetchAssetUtxos = useCallback(async (assetName: string) => {
    if (!address || !network || !assetName) return;

    // 检查缓存
    const cached = globalAssetCache.get(address, network, assetName);
    if (cached) {
      return cached;
    }

    setLoadingAssetUtxos(true);
    try {
      const res = await ordx.getAddressAsset({
        address,
        asset: assetName,
        network,
      });

      if (res.code !== 0) {
        notification.error({
          message: t('notification.transaction_title'),
          description: res.msg,
        });
        return null;
      }

      // 处理 UTXO 数据
      const utxos = (res.data || []).map((item: any) => ({
        txid: item.Outpoint.split(':')[0],
        vout: Number(item.Outpoint.split(':')[1]),
        value: item.Value,
        assetamount: item.Assets?.reduce((sum: number, asset: any) => {
          return sum + parseInt(asset.Amount || '0', 10);
        }, 0),
      }));

      const result = { utxos, total: res.total };

      // 缓存结果
      globalAssetCache.set(address, network, result, assetName);
      return result;
    } catch (error) {
      console.error('Failed to fetch asset utxos:', error);
      notification.error({
        message: t('notification.transaction_title'),
        description: 'Failed to fetch asset utxos',
      });
      return null;
    } finally {
      setLoadingAssetUtxos(false);
    }
  }, [address, network, t]);

  // 处理资产选择
  const handleAssetSelect = useCallback(async (assetName: string) => {
    setSelectedAsset(assetName);

    // 重置输入列表
    setInputList('items', [
      {
        id: 1,
        value: {
          ticker: assetName,
          utxo: '',
          sats: 0,
          unit: 'sats',
          description: '',
        },
        options: {
          tickers: [],
          utxos: [],
        },
      },
    ]);

    // 获取选中资产的 UTXO
    const utxoData = await fetchAssetUtxos(assetName);
    if (utxoData) {
      setInputList('items', [
        {
          id: 1,
          value: {
            ticker: assetName,
            utxo: '',
            sats: 0,
            unit: 'sats',
            description: '',
          },
          options: {
            tickers: [assetName],
            utxos: utxoData.utxos,
          },
        },
      ]);
    }
  }, [fetchAssetUtxos, setInputList]);

  const handleUtxoSelectChange = useCallback(
    (itemId, utxo) => {
      const txid = utxo.split(':')[0];
      const vout = Number(utxo.split(':')[1]);

      const utxoObj = inputList.items[itemId - 1].options.utxos.find(
        (item) => item.txid === txid && item.vout === vout,
      );

      const updatedItems = [...inputList.items];
      updatedItems[itemId - 1].value = {
        ...updatedItems[itemId - 1].value,
        sats: utxoObj?.value || 0,
        utxo,
        description: utxoObj?.assetamount
          ? `${utxoObj.assetamount} Asset / ${utxoObj.value} sats`
          : `${utxoObj.value} sats`,
      };

      setInputList('items', updatedItems);
      calculateBalance();
    },
    [inputList.items],
  );

  const calculateBalance = useCallback(async () => {
    let inTotal = 0;
    let outTotal = 0;
    inputList.items.forEach((v) => {
      inTotal += v.value.sats;
    });
    if (inTotal === 0) {
      return;
    }

    const outputs: any[] = [];
    outputList.items.forEach((v) => {
      for (let i = 0; i < v.num; i++) {
        outputs.push({
          address: v.value.address,
          value: v.value.sats,
        });
      }
    });
    outputs.forEach((v) => {
      outTotal += v.value;
    });
    if (outTotal === 0) {
      return;
    }
    const utxos = inputList.items.map((v) => ({
      txid: v.value.utxo.split(':')[0],
      vout: Number(v.value.utxo.split(':')[1]),
      value: v.value.sats,
    }));

    const fee = await calcNetworkFee({
      utxos,
      outputs,
      feeRate: feeRate.value,
      network,
      address: address,
      publicKey,
    });
    setFee(fee);
    setBalance('sats', inTotal - outTotal - fee);
  }, [
    inputList.items,
    outputList.items,
    feeRate.value,
    network,
    address,
    publicKey,
  ]);

  // getAvialableTicker 已移除 - 现在通过资产列表流程获取UTXO

  const splitHandler = useCallback(async () => {
    if (!address) {
      return;
    }
    setLoading(true);

    try {
      const inTotal = inputList.items.reduce(
        (acc, cur) => acc + cur.value.sats,
        0,
      );

      const utxos = inputList.items.map((v) => ({
        txid: v.value.utxo.split(':')[0],
        vout: Number(v.value.utxo.split(':')[1]),
        value: v.value.sats,
      }));
      const outputs: any[] = [];
      outputList.items.forEach((v) => {
        for (let i = 0; i < v.num; i++) {
          outputs.push({
            address: v.value.address,
            value: v.value.sats,
          });
        }
      });
      const outTotal = outputs.reduce((acc, cur) => acc + cur.value, 0);
      const fee = await calcNetworkFee({
        utxos,
        outputs: outputs,
        feeRate: feeRate.value,
        network,
        address: address,
        publicKey,
      });
      if (inTotal - outTotal - fee < 0) {
        setLoading(false);
        notification.error({
          message: t('notification.transaction_title'),
          description: 'Not enough sats',
        });
        return;
      }

      const psbt = await buildTransaction({
        utxos,
        outputs,
        feeRate: feeRate.value,
        network,
        address: address,
        suitable: false,
        publicKey,
      });

      const txid = await signAndPushPsbt(psbt, network);
      setLoading(false);
      notification.success({
        message: t('notification.transaction_title'),
        description: t('notification.transaction_spilt_success'),
      });

      // 清除缓存
      globalAssetCache.clearForAddress(address, network);
      setRefresh((prev) => prev + 1);
    } catch (error: any) {
      console.log('error(transfer sats) = ', error);
      setLoading(false);
      notification.error({
        message: t('notification.transaction_title'),
        description: error.message || t('notification.transaction_spilt_fail'),
      });
    }
  }, [
    address,
    inputList.items,
    outputList.items,
    feeRate.value,
    network,
    publicKey,
    t,
  ]);

  useEffect(() => {
    calculateBalance();
  }, [feeRate, inputList, outputList]);

  useEffect(() => {
    setInputList('items', [
      {
        id: 1,
        value: {
          ticker: '',
          utxo: '',
          sats: 0,
          unit: 'sats',
        },
        options: {
          tickers: [],
          utxos: [],
        },
      },
    ]);
    setBalance('sats', 0);
    setBalance('unit', 'sats');

    setFee(0);
    setOutputList('items', [
      {
        id: 1,
        num: 1,
        value: {
          sats: 0,
          unit: 'sats',
          address: '',
        },
      },
    ]);

    // 重置资产相关状态
    setSelectedAsset('');
    setAssetList([]);

    if (address) {
      fetchAssetList();
    }
  }, [address, refresh, fetchAssetList]);

  return useMemo(
    () => ({
      fee,
      loading,
      address,
      inputList,
      outputList,
      balance,
      assetList,
      selectedAsset,
      loadingAssetUtxos,
      handleAssetSelect,
      handleUtxoSelectChange,
      setInputList,
      setOutputList,
      setBalance,
      splitHandler,
      refresh,
      feeRate,
    }),
    [
      fee,
      loading,
      address,
      inputList,
      outputList,
      balance,
      assetList,
      selectedAsset,
      loadingAssetUtxos,
      handleAssetSelect,
      handleUtxoSelectChange,
      splitHandler,
      refresh,
      feeRate,
    ],
  );
}
