import { Button } from '@nextui-org/react';
import { useBuyStore } from '@/store';
import { Icon } from '@iconify/react';
import { BatchCart } from './BatchCart';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import { notification } from 'antd';
import { Decimal } from 'decimal.js';
import { useCommonStore } from '@/store';
import {
  buildDummyUtxos,
  DUMMY_UTXO_VALUE,
  filterUtxosByValue,
  btcToSats,
  buildBuyOrder,
} from '@/lib';
import { getUtxoByValue, bulkBuyOrder, unlockOrder } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';

interface Props {
  toBuy?: () => void;

  onSuccess?: () => void;
  onClose?: () => void;
}
export const BatchBuyFooter = ({ onSuccess, onClose }: Props) => {
  let serviceFee = 0;
  if (
    process.env.NEXT_PUBLIC_SERVICE_FEE &&
    process.env.NEXT_PUBLIC_IS_FREE == '0'
  ) {
    serviceFee = Number(process.env.NEXT_PUBLIC_SERVICE_FEE);
  }
  const [loading, setLoading] = useState(false);
  const { list } = useBuyStore();
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  const { feeRate } = useCommonStore((state) => state);
  const { address, network } = useReactWalletStore();
  const { data, isLoading } = useSWR(
    `getUtxoByValue-${address}-${network}`,
    () => getUtxoByValue({ address, network, value: 500 }),
  );
  const orderLength = useMemo(() => list.length || 0, [list]);
  const dummyLength = useMemo(() => orderLength * 2, [orderLength]);
  const utxos = useMemo(() => data?.data || [], [data]);
  const dummyUtxos = useMemo(
    () => utxos.filter((v) => v.value === DUMMY_UTXO_VALUE),
    [utxos],
  );
  const canSpendableUtxos = useMemo(
    () => utxos.filter((v) => v.value !== DUMMY_UTXO_VALUE),
    [utxos],
  );
  const totalPrice = useMemo(
    () =>
      list.reduce((a, b) => {
        const decimalA = new Decimal(a);
        const decimalB = new Decimal(Number(btcToSats(b.price)));
        return decimalA.plus(decimalB).toNumber();
      }, 0) || 0,
    [list],
  );
  const findDummyUtxos = async () => {
    const spendableDummyUtxos = dummyUtxos?.slice(0, dummyLength) || [];
    const virtualDummyFee = (170 * 10 + 34 * 3 + 10) * feeRate.value;
    const dis = dummyLength - spendableDummyUtxos.length;
    let balanceUtxo: any;
    let spendedUtxos: any = [];
    if (dis > 0) {
      const { utxos: filterDummyConsumUtxos } = filterUtxosByValue(
        utxos,
        virtualDummyFee + 330 + DUMMY_UTXO_VALUE * dis,
      );
      const { dummyUtxos: newDummyUtxos, balanceUtxo: newBalanceUtxo } =
        await buildDummyUtxos({
          utxos: filterDummyConsumUtxos,
          feeRate: feeRate.value,
          num: dis,
        });
      spendedUtxos = filterDummyConsumUtxos;
      balanceUtxo = newBalanceUtxo;
      spendableDummyUtxos.push(...newDummyUtxos);
    }
    return {
      dummyUtxos: spendableDummyUtxos,
      balanceUtxo,
      spendedUtxos,
    };
  };
  const buyHandler = async () => {
    try {
      if (!utxos.length) {
        notification.error({
          message: t('notification.order_buy_failed_title'),
          description: t('notification.order_buy_failed_description_4'),
        });
        return;
      }
      setLoading(true);
      const { dummyUtxos, balanceUtxo, spendedUtxos } = await findDummyUtxos();
      console.log('canSpendableUtxos', canSpendableUtxos);
      const spendableUtxos = canSpendableUtxos.filter((v) => {
        const l = !!spendedUtxos.find(
          (s) => s.txid === v.txid && s.vout === v.vout,
        );
        return !l;
      });
      console.log('spendableUtxos', spendableUtxos);
      if (balanceUtxo) {
        spendableUtxos.push(balanceUtxo);
      }
      const virtualFee =
        (170 * 10 + 34 * (3 + dummyLength * 3) + 10) * feeRate.value;
      const { utxos: filterConsumUtxos } = filterUtxosByValue(
        spendableUtxos,
        virtualFee +
          330 +
          totalPrice +
          serviceFee +
          DUMMY_UTXO_VALUE * dummyLength,
      );
      const buyRaw = await buildBuyOrder({
        orders: list,
        utxos: filterConsumUtxos,
        dummyUtxos: dummyUtxos,
        serviceFee: serviceFee,
        feeRate: feeRate.value,
      });

      const order_ids = list.map((v) => v.order_id);
      const res = await bulkBuyOrder({
        address,
        order_ids,
        raw: buyRaw,
      });
      setLoading(false);
      if (res.code === 200) {
        notification.success({
          message: t('notification.order_buy_success_title'),
          description: t('notification.order_buy_success_description'),
        });
        onSuccess?.();
      } else {
        notification.error({
          message: t('notification.order_buy_failed_title'),
          description: res.msg,
        });
      }
    } catch (error: any) {
      setLoading(false);
      console.log('buy order error', error);
      notification.error({
        message: t('notification.order_buy_failed_title'),
        description: error.message,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  // const { data: order } = await buyOrder({
  //   address,
  return (
    <>
      {show && <BatchCart />}
      <div className="batch-sell-footer fixed bottom-0 w-full h-20 left-0 dark:bg-slate-900 bg-gray-100 z-20">
        <div className="flex justify-between items-center w-full h-full px-4">
          <div className="flex-1">{list.length}</div>
          <div className="flex gap-2 items-center">
            <Button
              className="btn btn-primary"
              color="primary"
              isLoading={loading || isLoading}
              onClick={buyHandler}
            >
              {t('common.buy')}
            </Button>
            <Button isIconOnly color="danger" onClick={() => setShow(!show)}>
              <Icon icon="mdi:cart" className="text-white text-2xl" />
            </Button>
            <Button isIconOnly onClick={onClose}>
              <Icon icon="mdi:close" className="text-white text-2xl" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
