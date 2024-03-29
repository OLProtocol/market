import React, { useEffect, useMemo } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Snippet,
  Chip,
  Spinner,
} from '@nextui-org/react';
import { notification } from 'antd';
import {
  hideStr,
  filterUtxosByValue,
  buildBuyOrder,
  satsToBitcoin,
  btcToSats,
} from '@/lib/utils';
import { SIGHASH_SINGLE_ANYONECANPAY, DUMMY_UTXO_VALUE } from '@/lib/constants';

import { getUtxoByValue, buyOrder, unlockOrder } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useState } from 'react';
import useSWR from 'swr';
import { useTranslation } from 'react-i18next';
import { useCommonStore } from '@/store';

interface OrderBuyModalProps {
  visiable: boolean;
  item: any;
  orderRaw?: string;
  onClose?: () => void;
  onSuccess?: () => void;
}
export const OrderBuyModal = ({
  visiable,
  item,
  orderRaw,
  onClose: onModalClose,
  onSuccess,
}: OrderBuyModalProps) => {
  const { t } = useTranslation();
  let serviceFee = 0;
  if (
    process.env.NEXT_PUBLIC_SERVICE_FEE &&
    process.env.NEXT_PUBLIC_IS_FREE == '0'
  ) {
    serviceFee = Number(process.env.NEXT_PUBLIC_SERVICE_FEE);
  }
  const { feeRate } = useCommonStore((state) => state);
  const { balance, address, network } = useReactWalletStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data, isLoading } = useSWR(
    `getUtxoByValue-${address}-${network}`,
    () => getUtxoByValue({ address, network, value: 500 }),
  );
  const utxos = useMemo(() => data?.data || [], [data]);
  const spendableValue = useMemo(() => {
    return utxos.reduce((pre, cur) => {
      return pre + cur.value;
    }, 0);
  }, [utxos]);
  const priceSats = useMemo(() => {
    return item?.price ? btcToSats(item?.price) : 0;
  }, [item?.price]);

  const networkFeeAndUtxos = useMemo(() => {
    const virtualFee = (180 * 10 + 34 * 10 + 10) * feeRate.value;
    if (!utxos.length || !priceSats) {
      return {
        fee: 0,
        utxos: [],
      };
    }
    const { utxos: filterConsumUtxos, smallTwoUtxos } = filterUtxosByValue(
      utxos,
      virtualFee + 330 + priceSats + serviceFee + DUMMY_UTXO_VALUE * 2,
    );

    const realityFee =
      (180 * (filterConsumUtxos.length + 4) + 34 * 4 + 10) * feeRate.value;
    return {
      fee: realityFee,
      utxos: filterConsumUtxos,
      smallTwoUtxos: smallTwoUtxos,
    };
  }, [feeRate, utxos, priceSats, serviceFee]);
  const totalPrice = useMemo(() => {
    if (item) {
      return btcToSats(item?.price) + serviceFee + networkFeeAndUtxos.fee;
    }
    return 0;
  }, [item, serviceFee, networkFeeAndUtxos.fee]);
  console.log('networkFeeAndUtxos', networkFeeAndUtxos);
  const cancelHandler = async () => {
    setLoading(true);
    try {
      const res = await unlockOrder({ address, order_id: item.order_id });
      if (res.code !== 200) {
        notification.error({
          message: t('notification.order_cancel_failed_title'),
          description: res.msg,
        });
        return;
      }
      closeHandler();
    } catch (error: any) {
      notification.error({
        message: t('notification.order_cancel_failed_title'),
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  const closeHandler = () => {
    onModalClose?.();
    onClose();
  };

  const confirmHandler = async () => {
    try {
      if (!(address && network && networkFeeAndUtxos.smallTwoUtxos?.length)) {
        notification.warning({
          message: t('notification.order_buy_failed_title'),
          description: t('notification.order_buy_failed_description_1'),
        });
        return;
      }
      if (!orderRaw) {
        notification.warning({
          message: t('notification.order_buy_failed_title'),
          description: t('notification.order_buy_failed_description_2'),
        });
        return;
      }
      if (networkFeeAndUtxos.smallTwoUtxos?.length < 2) {
        notification.warning({
          message: t('notification.order_buy_failed_title'),
          description: t('notification.order_buy_failed_description_3'),
        });
        return;
      }
      setLoading(true);
      const buyRaw = await buildBuyOrder({
        orderId: item.order_id,
        orderRaw,
        utxos: networkFeeAndUtxos.utxos,
        dummyUtxos: networkFeeAndUtxos.smallTwoUtxos,
        fee: networkFeeAndUtxos.fee,
        address,
        network,
        serviceFee: serviceFee,
        feeRate: feeRate.value,
      });
      const res = await buyOrder({
        order_id: item?.order_id,
        address,
        raw: buyRaw,
      });
      if (res.code === 200) {
        notification.success({
          message: t('notification.order_buy_success_title'),
          description: t('notification.order_buy_success_description'),
        });
        onSuccess?.();
        closeHandler();
      } else {
        notification.error({
          message: t('notification.order_buy_failed_title'),
          description: res.msg,
        });
      }
    } catch (error: any) {
      console.log('buy order error', error);
      notification.error({
        message: t('notification.order_buy_failed_title'),
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const insufficientBalance = useMemo(() => {
    return spendableValue < totalPrice;
  }, [spendableValue, totalPrice]);
  const buttonDisabled = useMemo(() => {
    return insufficientBalance;
  }, [insufficientBalance]);
  useEffect(() => {
    if (visiable) {
      onOpen();
    } else {
      onClose();
    }
  }, [visiable]);

  return (
    <Modal
      hideCloseButton
      backdrop="blur"
      isDismissable={false}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={closeHandler}
    >
      <ModalContent>
        <ModalHeader className="">{t('pages.order.modal_title')}</ModalHeader>
        <ModalBody>
          <div className="flex  justify-between">
            <div className="flex-1">
              {item?.assets?.map((v: any) => (
                <div key={v.inscriptionnum}>
                  <div>
                    <div className="font-bold">
                      {t('common.tick')}: {v.ticker}
                    </div>
                    <div className="text-sm">
                      {t('common.amount')}: {v.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div>
                {t('common.price')}: {item?.price} BTC
              </div>
              <div className="flex items-center">
                {t('common.from')}:
                <Snippet
                  codeString={item?.address}
                  className="bg-transparent"
                  symbol=""
                  size="sm"
                  variant="flat"
                >
                  {hideStr(item?.address, 4)}
                </Snippet>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>{t('common.fee_rate')}</span>
            <div>
              {feeRate.value} <span>sats</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>{t('common.service_fee')}</span>
            <div>
              {serviceFee} <span>sats</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>{t('common.network_fee')}</span>
            {isLoading ? (
              <Spinner size="sm" />
            ) : (
              <div>
                {networkFeeAndUtxos.fee} <span>sats</span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center font-bold text-lg">
            <span>{t('common.total')}</span>
            <div>
              {satsToBitcoin(totalPrice)} <span>BTC</span>
            </div>
          </div>
          <Chip radius="sm" size="lg" className="w-full max-w-none text-small">
            <div
              className={`flex items-center justify-between ${
                insufficientBalance ? 'text-red-600' : ''
              }`}
            >
              <span>{t('common.available_balance')}</span>
              {isLoading ? (
                <Spinner size="sm" />
              ) : (
                <span>{satsToBitcoin(spendableValue)} BTC</span>
              )}
            </div>
          </Chip>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            isLoading={loading}
            variant="light"
            onPress={cancelHandler}
          >
            {t('buttons.cancel')}
          </Button>
          <Button
            isLoading={loading}
            isDisabled={buttonDisabled}
            color="primary"
            onPress={confirmHandler}
          >
            {t('buttons.confirm')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
/**{
    "order_id": 10000079,
    "address": "tb1prcc8rp5wn0y9vp434kchl3aag8r8hz699006ufvczwnneuqx0wdsfmvq4y",
    "order_type": 1,
    "currency": "BTC",
    "price": 0.00001,
    "utxo": "1f8863156b8c53aeddcf912cbb02884e0b1379920cd698c8f9080e126ba98593:0",
    "value": 546,
    "assets": [
        {
            "ticker": "123123123123",
            "amount": 546,
            "inscriptionnum": 1742327,
            "unit_price": 0.00018315018315018315,
            "uint_amount": 10000
        }
    ],
    "order_time": 1710844436820
} */
