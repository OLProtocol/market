import { useBuyStore, useCommonStore } from '@/store';
import { Divider, Spinner, Button } from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { Decimal } from 'decimal.js';
import { Icon } from '@iconify/react';
import { satsToBitcoin } from '@/lib';
import { useTranslation } from 'react-i18next';
import { BtcFeeRate } from './fee/BtcFeeRate';
import useSWR from 'swr';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { fetchChainFeeRate } from '@/api';

interface Props {
  splitDummyBol: boolean;
  calcLoading: boolean;
  networkFee: number;
  dummyNetworkFee?: number;
  serviceFee: number;
}
export const BatchCart = ({
  splitDummyBol,
  calcLoading,
  networkFee,
  serviceFee,
}: Props) => {
  const { t } = useTranslation();
  const { network } = useReactWalletStore((state) => state);
  const { list, remove } = useBuyStore();
  const [fee, setFee] = useState({ value: 1, type: 'Normal' });

  const { data: feeRateData, isLoading } = useSWR(
    `fetchChainFeeRate-${network}`,
    () => fetchChainFeeRate(network as any),
  );

  const { setFeeRate, feeRate } = useCommonStore((state) => state);

  const totalPrice = useMemo(
    () =>
      list.reduce((a, b) => {
        const decimalA = new Decimal(a);
        const decimalB = new Decimal(Number(b.price));
        return decimalA.plus(decimalB).toNumber();
      }, 0) || 0,
    [list],
  );

  const feeChange = (fee: any) => {
    setFee(fee);
    setFeeRate(fee);
  };

  const removeHandler = (u: string) => {
    remove(u);
  };

  return (
    <div className="fixed max-w-screen w-96 bottom-20 right-0 bg-gray-100 dark:bg-slate-900 rounded-t-lg px-4 z-10">
      <div className="h-10 flex items-center justify-between font-bold">
        <span>Cart ({list.length})</span>
        <span>Total: {totalPrice} BTC</span>
      </div>
      <Divider className="my-2" />
      <div>
        {list.map((item) => (
          <div
            key={item.order_id}
            className="flex items-center justify-between py-2 min-h-14"
          >
            <div>
              <div className="mb-1">
                {item.assets.map((asset) => (
                  <div key={asset.ticker}>{asset.ticker}</div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon="cryptocurrency-color:btc" className="" />
                {item.price} BTC
              </div>
            </div>
            <Button
              isIconOnly
              size="sm"
              onClick={() => removeHandler(item.utxo)}
            >
              <Icon icon="mdi:close" className="text-white text-xl" />
            </Button>
          </div>
        ))}
      </div>

      {splitDummyBol && (
        <div>
          <Divider className="my-2" />
          <div className="text-xs text-gray-300">
            {t('common.split_dummy_hint')}
          </div>
        </div>
      )}
      <Divider className="my-2" />
      <div>
        <div>
          <BtcFeeRate
            onChange={feeChange}
            value={feeRate.value}
            feeType={feeRate.type}
            feeRateData={feeRateData}
          />
        </div>
        <div className="flex justify-between items-center">
          <span>{t('common.network_fee')}</span>
          {calcLoading ? (
            <Spinner size="sm" color="primary" />
          ) : (
            <span>~ {satsToBitcoin(networkFee)} BTC</span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span>{t('common.service_fee')}</span>
          <span>{satsToBitcoin(serviceFee)} BTC</span>
        </div>
      </div>
    </div>
  );
};
