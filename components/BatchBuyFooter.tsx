import { Button, Input, Slider } from '@nextui-org/react';
import { useBuyStore } from '@/store';
import { Icon } from '@iconify/react';
import { BatchCart } from './BatchCart';
import { useState, useMemo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { notification } from 'antd';
import { Decimal } from 'decimal.js';
import { useCommonStore } from '@/store';
import { useDebounce } from 'react-use';
import {
  buildDummyUtxos,
  DUMMY_UTXO_VALUE,
  filterUtxosByValue,
  btcToSats,
  buildBuyOrder,
  calcBuyOrderFee,
  satsToBitcoin,
  getSuitableUtxos,
} from '@/lib';
import {
  getUtxoByValue,
  bulkBuyOrder,
  lockBulkOrder,
  unlockBulkOrder,
  unlockOrder,
} from '@/api';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';

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
  const [raws, setRaws] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [calcLoading, setCalcLoading] = useState(false);
  const { list, setList, remove: removeBuy } = useBuyStore();
  const [selectSize, setSelectSize] = useState(list.length || 0);
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  const [removeOrderIds, setRemoveOrderIds] = useState<
    { raw: string; order_id: string }[]
  >([]);
  const [networkFee, setNetworkFee] = useState(0);
  const { feeRate } = useCommonStore((state) => state);
  const { address, network } = useReactWalletStore();

  const lockOrderIds = useMemo(() => {
    return list.map((v) => v.order_id);
  }, [list]);

  const { data, isLoading } = useSWR(
    `getUtxoByValue-${address}-${network}`,
    () => getUtxoByValue({ address, network, value: 0 }),
  );

  const {
    data: lockData,
    isMutating: lockLoading,
    trigger: lockTrigger,
  } = useSWRMutation(
    `getUtxoByValue-${address}-${network}-${JSON.stringify(lockOrderIds)}`,
    () => lockBulkOrder({ address, orderIds: lockOrderIds }),
  );
  const orderLength = useMemo(() => list.length || 0, [list]);
  const dummyLength = useMemo(() => orderLength + 1, [orderLength]);

  useEffect(() => {
    if (lockData?.code === 200) {
      setRaws(lockData.data?.filter((v) => !!v.raw) || []);
      const len = lockData.data?.length || 0;
      for (let i = 0; i < lockData.data?.length; i++) {
        const { raw, order_id } = lockData.data[i];
        if (!raw) {
          removeBuy(order_id);
        }
      }
    }
  }, [lockData]);
  const canSelectLength = useMemo(() => {
    return Math.min(
      assetsList.filter((i) => i.locked === 0 && i.address !== address).length,
      1000,
    );
  }, [assetsList]);

  const utxos = useMemo(() => data?.data || [], [data]);
  const dummyUtxos = useMemo(
    () => utxos.filter((v) => v.value === DUMMY_UTXO_VALUE),
    [utxos],
  );
  const splitDummyBol = useMemo(
    () => dummyLength > dummyUtxos.length,
    [dummyLength, dummyUtxos],
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
    const minServiceDecimal = new Decimal(minServiceFee);
    const _s = list.reduce((a, b) => {
      let decimalB = new Decimal(Number(btcToSats(b.price)));
      decimalB = decimalB.mul(new Decimal(0.01)).ceil();

      const totalSercice = a.plus(decimalB);
      return totalSercice;
    }, new Decimal(0));
    return _s.plus(minServiceDecimal).toNumber();
  }, [list]);
  const insufficientBalanceStatus = useMemo(
    () => totalBalacne > totalPrice + serviceFee,
    [totalBalacne, totalPrice, serviceFee],
  );
  // useEffect(() => {
  //   if (utxos.length) {
  //     const outputs = [
  //       {
  //         address,
  //         value: 4229912,
  //       },
  //       // {
  //       //   address,
  //       //   value: DUMMY_UTXO_VALUE,
  //       // },
  //       // {
  //       //   address,
  //       //   value: DUMMY_UTXO_VALUE,
  //       // },
  //       // {
  //       //   address,
  //       //   value: DUMMY_UTXO_VALUE,
  //       // },
  //       // {
  //       //   address,
  //       //   value: DUMMY_UTXO_VALUE,
  //       // },
  //       // {
  //       //   address,
  //       //   value: DUMMY_UTXO_VALUE,
  //       // },
  //     ];
  //     getSuitableUtxos({
  //       utxos,
  //       outputs,
  //       feeRate: feeRate.value,
  //       address,
  //       network,
  //     });
  //   }
  // }, [utxos]);
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
    if (calcLoading || list.length === 0) {
      return;
    }
    if (!insufficientBalanceStatus) {
      setNetworkFee(
        Math.ceil(
          (170 * (list.length + 1) +
            34 * (list.length * 2 + dummyLength + 2) +
            10) *
            feeRate.value,
        ),
      );
      setCalcLoading(false);
      return;
    }
    setCalcLoading(true);
    const newDummyUtxos = dummyUtxos?.slice(0, dummyLength);

    const virtualFee = (170 * 10 + 34 * (3 + dummyLength) + 10) * feeRate.value;
    const { utxos: filterConsumUtxos } = filterUtxosByValue(
      canSpendableUtxos,
      virtualFee +
        330 +
        totalPrice +
        serviceFee +
        DUMMY_UTXO_VALUE * dummyLength,
    );

    const networkFee = await calcBuyOrderFee({
      raws,
      utxos: filterConsumUtxos,
      dummyUtxos: newDummyUtxos,
      serviceFee: serviceFee,
      feeRate: feeRate.value,
      network: network,
    });
    setCalcLoading(false);
    setNetworkFee(networkFee);
  };
  useEffect(() => {
    calcFee();
  }, [
    dummyLength,
    serviceFee,
    dummyUtxos,
    canSpendableUtxos,
    totalPrice,
    feeRate.value,
  ]);
  useDebounce(
    () => {
      if (list.length) {
        lockTrigger();
      }
    },
    1000,
    [list],
  );
  useEffect(() => {
    setSelectSize(list.length);
  }, [list]);
  useDebounce(
    () => {
      if (removeOrderIds.length) {
        unlockBulkOrder({ address, orderIds: removeOrderIds });
      }
    },
    1000,
    [removeOrderIds],
  );
  useDebounce(
    () => {
      console.log(selectSize);

      let _list = structuredClone(list);
      const len = _list.length;
      setRemoveOrderIds([]);
      if (selectSize < len) {
        const removeOrder = _list.slice(selectSize, len);
        setRemoveOrderIds(removeOrder.map((v) => v.order_id));
        _list = _list.slice(0, selectSize);
      } else if (selectSize > len) {
        for (let i = 0; i < assetsList.length; i++) {
          const item = assetsList[i];
          if (_list.length >= selectSize) {
            break;
          }
          if (
            item.locked === 0 &&
            item.address !== address &&
            _list.findIndex((v) => v.order_id === item.order_id) === -1
          ) {
            _list.push(item);
          }
        }
      }
      setList(_list);
    },
    300,
    [selectSize],
  );
  const unlockHandler = async (item) => {
    try {
      const res = await unlockOrder({
        address,
        order_id: item.order_id,
      });
      removeBuy(item.utxo);
    } catch (error: any) {
      notification.error({
        message: t('notification.order_unlock_failed_title'),
        description: error.message,
      });
    }
  };
  const onRemoveItem = async (u: string) => {
    const item = list.find((i) => i.utxo === u);
    if (item) {
      const res = await unlockHandler(item);
    }
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
        raws,
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

  return (
    <>
      {show && list.length && (
        <BatchCart
          splitDummyBol={splitDummyBol}
          networkFee={networkFee}
          serviceFee={serviceFee}
          calcLoading={calcLoading}
          onRemove={onRemoveItem}
        />
      )}
      <div className="batch-sell-footer fixed bottom-0 w-full h-28 sm:h-20 left-0 dark:bg-slate-900 bg-gray-100 z-[99]">
        <div className="flex gap-2 justify-center sm:justify-between items-center flex-col sm:flex-row w-full h-full px-4">
          <div className="sm:flex-1 flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-4 w-60">
              <Input
                type="number"
                className="w-20"
                value={selectSize.toString()}
                onValueChange={(e) => setSelectSize(Number(e))}
              />
              <Slider
                size="sm"
                step={1}
                minValue={0}
                maxValue={canSelectLength}
                value={[selectSize]}
                className="flex-1"
                onChange={(e) => {
                  setSelectSize(isNaN(e[0]) ? 0 : e[0]);
                }}
              />
            </div>
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
                {t('common.balance')}:&nbsp;&nbsp;{satsToBitcoin(totalBalacne)}{' '}
                BTC
              </div>
            </div>
            <Button
              className="btn btn-primary"
              color="primary"
              isDisabled={!insufficientBalanceStatus || !list.length}
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
