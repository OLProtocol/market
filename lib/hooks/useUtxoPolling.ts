import { useEffect, useRef, useState, useCallback } from 'react';
import useSWRMutation  from 'swr/mutation';
import { getUtxoByValue } from '@/api';
import { useUtxoStore } from '@/store';

interface UseUtxoPollingOptions {
  interval?: number; // 定时间隔，默认30秒
  enabled?: boolean; // 是否启用定时获取
  immediate?: boolean; // 是否立即执行一次
  onSuccess?: (data: any) => void; // 成功回调
  onError?: (error: any) => void; // 错误回调
}

export const useUtxoPolling = (
  address: string | undefined,
  network: string | undefined,
  options: UseUtxoPollingOptions = {}
) => {
  const {
    interval = 30000, // 默认30秒
    enabled = true,
    immediate = true,
    onSuccess,
    onError,
  } = options;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPolling, setIsPolling] = useState(false);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);
  const { setList } = useUtxoStore();

  // 使用SWR Mutation获取UTXO数据
  const { data, trigger: getUtxos, error, isMutating } = useSWRMutation(
    `getUtxoByValue-${address}-${network}`,
    () => getUtxoByValue({ address, network, value: 500 }),
    {
      onSuccess: (data) => {
        setLastFetchTime(new Date());
        
        // 处理UTXO数据
        if (data?.data?.length) {
          const list = data.data?.map((item: any) => ({
            status: 'unspend',
            location: 'remote',
            utxo: `${item.txid}:${item.vout}`,
            ...item,
          }));
          setList(list);
        }
        
        // 调用成功回调
        onSuccess?.(data);
      },
      onError: (error) => {
        console.error('获取UTXO数据失败:', error);
        onError?.(error);
      },
    }
  );

  // 启动定时获取
  const startPolling = useCallback(() => {
    if (!address || !network || !enabled) return;
    
    // 停止之前的定时器
    stopPolling();
    
    // 立即执行一次（如果启用）
    if (immediate) {
      getUtxos();
    }
    
    // 设置定时器
    intervalRef.current = setInterval(() => {
      console.log(`[${new Date().toLocaleTimeString()}] 定时获取UTXO数据...`);
      getUtxos();
    }, interval);
    
    setIsPolling(true);
  }, [address, network, enabled, immediate, interval, getUtxos]);

  // 停止定时获取
  const stopPolling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPolling(false);
  }, []);

  // 手动触发一次获取
  const triggerFetch = useCallback(() => {
    if (address && network) {
      getUtxos();
    }
  }, [address, network, getUtxos]);

  // 监听地址和网络变化
  useEffect(() => {
    if (address && network && enabled) {
      startPolling();
    } else {
      stopPolling();
    }

    // 清理函数
    return () => {
      stopPolling();
    };
  }, [address, network, enabled, startPolling, stopPolling]);

  // 监听enabled状态变化
  useEffect(() => {
    if (!enabled) {
      stopPolling();
    } else if (address && network) {
      startPolling();
    }
  }, [enabled, address, network, startPolling, stopPolling]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      stopPolling();
    };
  }, [stopPolling]);

  return {
    data,
    error,
    isMutating,
    isPolling,
    lastFetchTime,
    startPolling,
    stopPolling,
    triggerFetch,
  };
};
