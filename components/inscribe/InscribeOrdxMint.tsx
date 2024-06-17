'use client';

import { Input, Slider, Button } from '@nextui-org/react';
import { notification } from 'antd';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-use';
import { clacTextSize } from '@/lib/inscribe';
import { useTranslation } from 'react-i18next';
import { ordx } from '@/api';
import { useUtxoStore } from '@/store';
import { useCommonStore } from '@/store';
import { tryit, min } from 'radash';
import { UtxoSelectTable } from './UtxoSelectTable';
// import { CopyButton } from '@/components/CopyButton';

interface InscribeOrdxMintProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
  onUtxoChange?: (data: any) => void;
}

export const InscribeOrdxMint = ({
  onNext,
  onChange,
}: InscribeOrdxMintProps) => {
  const { address: currentAccount, network, connected } = useReactWalletStore();
  const { btcHeight } = useCommonStore((state) => state);
  const { t } = useTranslation();
  const { selectUtxosByAmount } = useUtxoStore();
  const [showRepeat, setShowRepeat] = useState(false);
  const [tickBlurLoading, setTickBlurLoading] = useState(false);
  const [tickBlurChecked, setTickBlurChecked] = useState(false);
  const [contentType, setContentType] = useState('');
  const [data, { set }] = useMap<any>({
    type: 'mint',
    mode: 'fair',
    tick: '',
    amount: 1,
    repeatMint: 1,
    relateInscriptionId: '',
    utxos: [],
  });
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const [tickLoading, setTickLoading] = useState(false);
  const [tickChecked, setTickChecked] = useState(false);
  const [specialStatus, setSpecialStatus] = useState(false);
  const [utxoList, setUtxoList] = useState<any[]>([]);

  const getOrdxUtxoByType = async (type: string, amount: number) => {
    try {
      const resp = await ordx.getUtxoByType({
        address: currentAccount,
        type,
        amount,
        network,
      });
      return resp;
    } catch (error) {
      notification.error({
        message: t('notification.system_error'),
      });
      console.error('Failed to fetch ordxUTXO:', error);
      throw error;
    }
  };

  const getOrdXInfo = async (tick: string, blur = false) => {
    setLoading(true);
    const [err, info] = await tryit(ordx.getOrdxInfo)({
      tick,
      network,
    });
    const [perError, permissionInfo] = await tryit(ordx.getTickerPermission)({
      ticker: tick,
      network,
      address: currentAccount,
    });
    if (err || perError) {
      notification.error({
        message: t('notification.system_error'),
      });
      setLoading(false);
      throw err;
    }
    setShowRepeat(true);
    const {
      ticker,
      limit = 0,
      max = 0,
      contenttype,
      rarity,
      selfmint = 0,
    } = info.data || {};
    let utxos: any = [];
    if (ticker) {
      const { amount = 0 } = permissionInfo.data || {};
      let _max = limit;
      if (max) {
        _max = min([_max, max, amount]);
      }
      set('rarity', rarity);
      set('mintRarity', rarity);
      const isSpecial = rarity !== 'unknow' && rarity !== 'common' && !!rarity;
      set('isSpecial', isSpecial);
      console.log('amount', _max);
      if (isSpecial || contenttype === 'text/html') {
        setShowRepeat(false);
      }
      if (blur) {
        set('amount', _max);
      }
      if (isSpecial) {
        const [rarityError, rarityData] = await tryit(ordx.getUtxoByType)({
          address: currentAccount,
          type: rarity,
          amount,
          network,
        });
        if (rarityError) {
          notification.error({
            message: t('notification.system_error'),
          });
          throw rarityError;
        }
        utxos = rarityData.data || [];
        utxos?.sort(
          (a, b) =>
            b?.sats?.reduce((acc, cur) => {
              return acc + cur.size;
            }, 0) -
            a?.sats?.reduce((acc, cur) => {
              return acc + cur.size;
            }, 0),
        );
      }
      setUtxoList(utxos);
    }
    setLoading(false);
    return [info.data, permissionInfo.data, utxos];
  };
  const cleanTick = () => {
    const cleanValue = data.tick.replace(/[^\w\u4e00-\u9fa5]/g, '');
    set('tick', cleanValue);
    return cleanValue;
  };

  const checkTick = async () => {
    const tick = cleanTick();
    if (!tick) {
      return false;
    }
    const textSize = clacTextSize(tick);
    if (textSize < 3 || textSize == 4 || textSize > 32) {
      setErrorText(t('pages.inscribe.ordx.error_1'));
      return false;
    }
    try {
      setTickLoading(true);
      const [info, permissionInfo, specialUtxos] = await getOrdXInfo(tick);
      if (!info) {
        setErrorText(t('pages.inscribe.ordx.error_4', { tick: data.tick }));
        return false;
      }
      const {
        rarity,
        startBlock,
        endBlock,
        limit,
        contenttype,
        inscriptionId,
        max,
        totalMinted,
        selfmint,
      } = info || {};
      const selfMintAmount = permissionInfo?.amount || 0;
      const isSpecial = rarity !== 'unknow' && rarity !== 'common' && !!rarity;
      console.log(max);
      console.log(selfMintAmount);
      let _maxAmount;
      let _singleMaxAmount = limit || 0;
      if (max) {
        _maxAmount = min([max, selfMintAmount]);
        _singleMaxAmount = min([_singleMaxAmount, max, selfMintAmount]);
      }
      const isRightBlock =
        startBlock &&
        endBlock &&
        btcHeight <= endBlock &&
        btcHeight >= startBlock;
      setTickLoading(false);

      let status = 'Completed';
      if (max > 0) {
        if (selfmint > 0) {
          status = selfMintAmount > 0 ? 'Minting' : 'Project';
        } else if (totalMinted < max) {
          status = 'Minting';
        }
      } else if (isRightBlock) {
        status = 'Minting';
      } else if (btcHeight < startBlock) {
        status = 'Pending';
      } else {
        status = 'Completed';
      }
      if (isSpecial && !specialUtxos.length) {
        setErrorText(`${rarity}类型的特殊聪数量不够`);
        return false;
      }
      if (status === 'Pending') {
        setErrorText(t('pages.inscribe.ordx.error_6', { tick: data.tick }));
        return false;
      }
      if (status === 'Project') {
        setErrorText(t('pages.inscribe.ordx.error_17', { tick: data.tick }));
        return false;
      }
      if (status === 'Completed') {
        setErrorText(t('pages.inscribe.ordx.error_7', { tick: data.tick }));
        return false;
      }
      if (data.amount > _singleMaxAmount) {
        setErrorText(
          t('pages.inscribe.ordx.error_5', { limit: _singleMaxAmount }),
        );
        return false;
      }
      if (
        _maxAmount !== undefined &&
        Math.ceil(data.amount * data.repeatMint) > _maxAmount
      ) {
        setErrorText(t('pages.inscribe.ordx.error_5', { limit: _maxAmount }));
        return false;
      }
      if (
        _maxAmount !== undefined &&
        Math.ceil(data.amount * data.repeatMint) > _maxAmount
      ) {
        setErrorText(t('pages.inscribe.ordx.error_5', { limit: _maxAmount }));
        return false;
      }
      setContentType(contenttype);
      if (contenttype === 'text/html') {
        set('relateInscriptionId', inscriptionId);
        if (!isSpecial) {
          const utxos = selectUtxosByAmount(Math.max(data.amount, 546));
          console.log('utxos', utxos);
          if (!utxos.length) {
            setErrorText(t('pages.inscribe.ordx.error_18'));
            return false;
          }
          let utxosRanges = await Promise.all(
            utxos.map((v) => ordx.exoticUtxo({ utxo: v.utxo, network })),
          );
          utxosRanges = utxosRanges.map((v, i) => ({
            ...v.data,
            ...utxos[i],
          }));
          set('utxos', utxosRanges as any);
        }
      }
      return true;
    } catch (error) {
      setTickLoading(false);
      console.log('error', error);
      return false;
    }
  };
  const nextHandler = async () => {
    setErrorText('');
    if (!tickChecked) {
      const checkStatus = await checkTick();
      setTickChecked(checkStatus);
    } else {
      setLoading(true);

      setLoading(false);
      onNext?.();
    }
  };
  const ontickBlur = async () => {
    const tick = cleanTick();
    if (!connected) {
      return [];
    }
    if (tick) {
      setTickBlurChecked(false);
      await getOrdXInfo(tick, true);
      setTickBlurChecked(true);
    }
  };
  const tickChange = async (value: string) => {
    setUtxoList([]);
    setTickChecked(false);
    setErrorText('');
    setTickBlurChecked(false);
    set('amount', 1);
    set('repeatMint', 1);
    set('relateInscriptionId', '');
    set('utxos', []);
    set('tick', value.trim());
  };

  const buttonDisabled = useMemo(() => {
    return !data.tick || !tickBlurChecked;
  }, [data, tickBlurChecked]);

  const handleUtxoChange = (utxoData: any) => {
    setTickChecked(false);
    console.log('utxo', utxoData);
    const utxo = utxoData.utxo;
    const txid = utxo.split(':')[0];
    const vout = Number(utxo.split(':')[1]);
    set('utxos', [
      {
        ...utxoData,
        txid,
        vout,
      },
    ] as any[]);
    set('amount', utxoData.amount);
  };
  useEffect(() => {
    setTickChecked(false);
  }, [data.repeatMint]);
  useEffect(() => {
    onChange?.(data);
  }, [data]);
  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <div className="w-52">{t('common.tick')}</div>
          <Input
            value={data.tick}
            className="flex-1"
            onChange={(e) => {
              tickChange(e.target.value);
            }}
            onBlur={() => {
              ontickBlur();
            }}
            maxLength={32}
            type="text"
            placeholder={t('pages.inscribe.ordx.tick_placeholder')}
          />
        </div>
        <div className="flex items-center mb-4">
          <div className="w-52">{t('common.amount')}</div>
          <Input
            type="number"
            className="flex-1"
            value={data.amount?.toString()}
            isDisabled={tickLoading}
            onChange={(e) => {
              set(
                'amount',
                isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
              );
              setTickChecked(false);
            }}
            min={1}
          ></Input>
        </div>
        {data.isSpecial && utxoList.length > 0 && (
          <UtxoSelectTable utxos={utxoList} onChange={handleUtxoChange} />
        )}
        {showRepeat && (
          <div>
            <div className="flex items-center mb-4">
              <div className="w-52">{t('common.repeat_mint')}</div>
              <div className="flex-1">
                <div className="flex gap-2 items-center">
                  <Input
                    type="number"
                    value={data.repeatMint.toString()}
                    onChange={(e) => {
                      set(
                        'repeatMint',
                        isNaN(Number(e.target.value))
                          ? 0
                          : Math.min(Number(e.target.value), 10),
                      );
                    }}
                    min={1}
                    max={10}
                  ></Input>
                  <Slider
                    step={1}
                    maxValue={10}
                    minValue={1}
                    value={[data.repeatMint]}
                    className="max-w-md"
                    onChange={(e) => set('repeatMint', e[0])}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-60 mx-auto flex justify-center">
        <WalletConnectBus>
          <Button
            isLoading={loading || tickBlurLoading}
            isDisabled={buttonDisabled}
            color="primary"
            className="w-60"
            onClick={nextHandler}
          >
            {tickChecked ? t('buttons.next') : 'Check'}
          </Button>
        </WalletConnectBus>
      </div>
      {errorText && (
        <div className="mt-2 text-xl text-center text-red-500">{errorText}</div>
      )}
    </div>
  );
};
