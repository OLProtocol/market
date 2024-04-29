import { Button, Input, Slider } from '@nextui-org/react';
import { useBuyStore } from '@/store';
import { Icon } from '@iconify/react';
import { BatchCart } from './BatchCart';
import { useState, useMemo, use, useEffect } from 'react';
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
  calcBuyOrderFee,
  satsToBitcoin,
} from '@/lib';
import { getUtxoByValue, bulkBuyOrder, unlockOrder } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';

interface Props {
  list: any[];
  toBuy?: () => void;

  onSuccess?: () => void;
  onClose?: () => void;
}
export const BatchBuyFooter = ({
  list: assetsList,
  onSuccess,
  onClose,
}: Props) => {
  let minServiceFee = 0;
  if (
    process.env.NEXT_PUBLIC_SERVICE_FEE &&
    process.env.NEXT_PUBLIC_IS_FREE == '0'
  ) {
    minServiceFee = Number(process.env.NEXT_PUBLIC_SERVICE_FEE);
  }
  const [selectSize, setSelectSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const [calcLoading, setCalcLoading] = useState(false);
  const { list } = useBuyStore();
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  const [networkFee, setNetworkFee] = useState(0);
  const { feeRate } = useCommonStore((state) => state);
  const { address, network } = useReactWalletStore();
  const { data, isLoading } = useSWR(
    `getUtxoByValue-${address}-${network}`,
    () => getUtxoByValue({ address, network, value: 500 }),
  );
  const orderLength = useMemo(() => list.length || 0, [list]);
  const dummyLength = useMemo(() => orderLength + 1, [orderLength]);

  const canSelectLength = useMemo(() => {
    return Math.min(
      assetsList.filter((i) => i.locker === '0' && i.address !== address)
        .length,
      10,
    );
  }, [assetsList]);
  console.log('canSelectLength', canSelectLength);
  const utxos = useMemo(() => data?.data || [], [data]);
  const dummyUtxos = useMemo(
    () => utxos.filter((v) => v.value === DUMMY_UTXO_VALUE),
    [utxos],
  );
  const splitDummyBol = useMemo(
    () => dummyLength > dummyUtxos.length,
    [dummyLength],
  );
  const canSpendableUtxos = useMemo(
    () => utxos.filter((v) => v.value !== DUMMY_UTXO_VALUE),
    [utxos],
  );
  const totalBalacne = useMemo(() => {
    return canSpendableUtxos.reduce((a, b) => a + b.value, 0) || 0;
  }, [utxos]);
  const totalPrice = useMemo(
    () =>
      list.reduce((a, b) => {
        const decimalA = new Decimal(a);
        const decimalB = new Decimal(Number(btcToSats(b.price)));
        return decimalA.plus(decimalB).toNumber();
      }, 0) || 0,
    [list],
  );
  const serviceFee = useMemo(() => {
    const a = new Decimal(0.01);
    const b = new Decimal(totalPrice);
    const calcServie = a.mul(b).mul(new Decimal(orderLength)).toNumber();
    return Math.ceil(Math.max(minServiceFee, calcServie));
  }, [totalPrice]);
  const insufficientBalanceStatus = useMemo(
    () => totalBalacne > totalPrice + serviceFee,
    [totalBalacne, totalPrice, serviceFee],
  );
  const findDummyUtxos = async () => {
    const spendableDummyUtxos = dummyUtxos?.slice(0, dummyLength) || [];
    // const spendableDummyUtxos = dummyUtxos?.slice(0, 1) || [];
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
  const calcFee = async () => {
    if (calcLoading || !insufficientBalanceStatus || list.length === 0) {
      return;
    }
    setCalcLoading(true);
    const newDummyUtxos = dummyUtxos?.slice(0, dummyLength);
    const virtualFee =
      (170 * 10 + 34 * (3 + dummyLength * 3) + 10) * feeRate.value;
    const { utxos: filterConsumUtxos } = filterUtxosByValue(
      canSpendableUtxos,
      virtualFee +
        330 +
        totalPrice +
        serviceFee +
        DUMMY_UTXO_VALUE * dummyLength,
    );
    const networkFee = await calcBuyOrderFee({
      orders: list,
      utxos: filterConsumUtxos,
      dummyUtxos: newDummyUtxos,
      serviceFee: serviceFee,
      feeRate: feeRate.value,
    });
    setCalcLoading(false);
    setNetworkFee(networkFee);
  };
  useEffect(() => {
    if (canSpendableUtxos.length && dummyLength) {
      calcFee();
    }
  }, [
    dummyLength,
    serviceFee,
    dummyUtxos,
    canSpendableUtxos,
    totalPrice,
    feeRate.value,
  ]);
  const sizeChangeHandler = (size: number) => {
    console.log(size);
    size = Math.max(size, 0);
    size = Math.min(size, canSelectLength);
    setSelectSize(size);
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
      const {
        dummyUtxos: newDummyUtxos,
        balanceUtxo,
        spendedUtxos,
      } = await findDummyUtxos();

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
        dummyUtxos: newDummyUtxos,
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
      {show && list.length && (
        <BatchCart
          splitDummyBol={splitDummyBol}
          networkFee={networkFee}
          serviceFee={serviceFee}
          calcLoading={calcLoading}
        />
      )}
      <div className="batch-sell-footer fixed bottom-0 w-full h-20 left-0 dark:bg-slate-900 bg-gray-100 z-20">
        <div className="flex justify-between items-center w-full h-full px-4">
          <div className="flex-1 flex items-center flex-wrap gap-4">
            {/* <div>扫货</div>
            <div className="flex items-center gap-4 w-60">
              <Slider
                size="sm"
                step={1}
                maxValue={canSelectLength}
                minValue={0}
                value={selectSize}
                className="flex-1"
                onChange={(e) => {
                  sizeChangeHandler(e as number);
                }}
              />
              <Input
                type="number"
                className="w-20"
                value={selectSize.toString()}
                onValueChange={(e) => sizeChangeHandler(Number(e))}
              />
            </div> */}
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <Icon icon="cryptocurrency-color:btc" className="" />
                {satsToBitcoin(totalPrice)} BTC
              </div>
              <div
                className={`text-xs text-right  ${!insufficientBalanceStatus ? 'text-red-500' : 'text-gray-400'}`}
              >
                余额：{satsToBitcoin(totalBalacne)} BTC
              </div>
            </div>
            <Button
              className="btn btn-primary"
              color="primary"
              isDisabled={!insufficientBalanceStatus}
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
