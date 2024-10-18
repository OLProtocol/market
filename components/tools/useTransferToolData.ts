'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useMap, useList } from 'react-use';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { useCommonStore } from '@/store';
import {
  getOrdxAddressHolders,
  getOrdxSummary,
  getSats,
  getUtxoByValue,
} from '@/api';
import {
  calcNetworkFee,
  buildTransaction,
  signAndPushPsbt,
  hideStr,
  getTickLabel,
} from '@/lib';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

export function useTransferToolData() {
  const { t } = useTranslation();
  const [fee, setFee] = useState(0);
  const { feeRate } = useCommonStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { address, network, publicKey } = useReactWalletStore((state) => state);
  const [refresh, setRefresh] = useState(0);
  const [ordxUtxoLimit, setOrdxUtxoLimit] = useState(100);
  const [plainUtxoLimit, setPlainUtxoLimit] = useState(100);

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

  const [tickerList, { set: setTickerList }] = useList<any>([]);

  const handleTickerSelectChange = useCallback(
    (itemId, ticker) => {
      const updatedItems = [...inputList.items];
      updatedItems[itemId - 1].value = {
        ...updatedItems[itemId - 1].value,
        ticker,
        sats: 0,
        unit: 'sats',
        utxo: '',
        utxos: [],
      };

      const selectTicker =
        tickerList?.find((item) => item.ticker === ticker) || [];
      let utxos = selectTicker.utxos;
      if (inputList.items.length > 1) {
        inputList.items.forEach((inItem, index) => {
          if (index !== itemId - 1) {
            utxos = utxos.filter(
              (utxo) => utxo.txid + ':' + utxo.vout !== inItem.value.utxo,
            );
            utxos = [...new Set(utxos)];
          }
        });
      }

      updatedItems[itemId - 1].options.utxos = utxos;
      setInputList('items', updatedItems);
    },
    [inputList.items, tickerList],
  );

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
          ? `${utxoObj.assetamount} Asset/ ${utxoObj.value} sats`
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

    outputList.items.forEach((v) => {
      outTotal += v.value.sats;
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
      outputs: outputList.items.map((v) => ({
        address: v.value.address,
        value: v.value.sats,
      })),
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

  const getTickers = useCallback(async () => {
    const tickers: any[] = [];

    let res = await getOrdxSummary({
      address: address,
      network,
    });

    if (res.code !== 0) {
      notification.error({
        message: t('notification.transaction_title'),
        description: res.msg,
      });
      return;
    }
    const detail = res.data.detail;

    await Promise.all(
      detail.map(async (item) => {
        if (item.type === 'e' || item.type === 'o') {
          return;
        }

        let tickerOrAssetsType = item.type;
        if (item.type === 'f') {
          tickerOrAssetsType = item.ticker;
        }
        res = await getOrdxAddressHolders({
          start: 0,
          limit: ordxUtxoLimit,
          address: address,
          tickerOrAssetsType: tickerOrAssetsType,
          network: network,
        });
        const utxosOfTicker: any[] = [];
        let total = 0;
        if (res.code === 0) {
          const details = res.data.detail;
          total = res.data.total;
          details.forEach((detail) => {
            const utxo = {
              txid: detail.utxo.split(':')[0],
              vout: Number(detail.utxo.split(':')[1]),
              value: detail.amount,
              assetamount: detail.assetamount,
            };
            utxosOfTicker.push(utxo);
          });
        }

        tickers.push({
          ticker: item.ticker,
          total: total,
          utxos: utxosOfTicker,
        });
      }),
    );

    return tickers;
  }, [address, network, ordxUtxoLimit, t]);

  const getAvialableTicker = useCallback(async () => {
    let res = await getUtxoByValue({
      address: address,
      value: 0,
      network,
    });
    if (res.code !== 0) {
      notification.error({
        message: t('notification.transaction_title'),
        description: res.msg,
      });
      return;
    }
    return {
      ticker: t('pages.tools.transaction.available_utxo'),
      utxos: res.data,
    };
  }, [address, network, t]);

  const getRareSatTicker = useCallback(async () => {
    const data = await getSats({
      address: address,
      network,
    });

    let tickers: any[] = [];

    if (data.code === 0) {
      data.data.forEach((item) => {
        let hasRareStats = false;
        if (item.sats && item.sats.length > 0) {
          item.sats.forEach((sat) => {
            if (sat.satributes && sat.satributes.length > 0) {
              hasRareStats = true;
              return;
            }
          });
        }

        if (hasRareStats) {
          const utxo = {
            txid: item.utxo.split(':')[0],
            vout: Number(item.utxo.split(':')[1]),
            value: item.value,
          };

          if (tickers.length === 0) {
            tickers.push({
              ticker:
                t('pages.tools.transaction.rare_sats') +
                '-' +
                item.sats[0].satributes[0],
              utxos: [utxo],
            });
          } else {
            let utxoExist = false;
            tickers.forEach((obj) => {
              obj.utxos.forEach((tmp) => {
                if (tmp === utxo.txid + ':' + utxo.vout) {
                  utxoExist = true;
                  return;
                }
              });
            });
            if (!utxoExist) {
              if (
                tickers.some(
                  (obj) =>
                    obj['ticker'] ===
                    t('pages.tools.transaction.rare_sats') +
                      '-' +
                      item.sats[0].satributes[0],
                )
              ) {
                tickers = tickers.map((obj) => {
                  if (
                    obj['ticker'] ===
                    t('pages.tools.transaction.rare_sats') +
                      '-' +
                      item.sats[0].satributes[0]
                  ) {
                    return {
                      ticker: obj['ticker'],
                      utxos: [...obj.utxos, utxo],
                    };
                  } else {
                    return obj;
                  }
                });
              } else {
                tickers.push({
                  ticker:
                    t('pages.tools.transaction.rare_sats') +
                    '-' +
                    item.sats[0].satributes[0],
                  utxos: [utxo],
                });
              }
            }
          }
        }
      });
    }

    return tickers;
  }, [address, network, t]);

  const getAllTickers = useCallback(async () => {
    const tickers = await getTickers();
    const avialableTicker = await getAvialableTicker();
    tickers?.push(avialableTicker);
    const rareSatTickers = await getRareSatTicker();
    const combinedArray = tickers?.concat(rareSatTickers);
    setTickerList(combinedArray || []);
  }, [getTickers, getAvialableTicker, getRareSatTicker]);

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
      const outTotal = outputList.items.reduce(
        (acc, cur) => acc + cur.value.sats,
        0,
      );

      const utxos = inputList.items.map((v) => ({
        txid: v.value.utxo.split(':')[0],
        vout: Number(v.value.utxo.split(':')[1]),
        value: v.value.sats,
      }));

      const fee = await calcNetworkFee({
        utxos,
        outputs: outputList.items.map((v) => ({
          address: v.value.address,
          value: v.value.sats,
        })),
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
        outputs: outputList.items.map((v) => ({
          address: v.value.address,
          value: v.value.sats,
        })),
        feeRate: feeRate.value,
        network,
        address: address,
        publicKey,
      });

      const txid = await signAndPushPsbt(psbt);
      setLoading(false);
      notification.success({
        message: t('notification.transaction_title'),
        description: t('notification.transaction_spilt_success'),
      });

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
    setTickerList([]);
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
        value: {
          sats: 0,
          unit: 'sats',
          address: '',
        },
      },
    ]);
    if (address) {
      getAllTickers();
    }
  }, [address, refresh, getAllTickers]);

  return useMemo(
    () => ({
      fee,
      loading,
      address,
      inputList,
      outputList,
      balance,
      tickerList,
      handleTickerSelectChange,
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
      tickerList,
      handleTickerSelectChange,
      handleUtxoSelectChange,
      splitHandler,
      refresh,
      feeRate,
    ],
  );
}
