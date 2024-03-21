import React, { useEffect, useMemo } from "react";
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
} from "@nextui-org/react";
import { env } from "next-runtime-env";
import { notification } from "antd";
import { hideStr, filterUtxosByValue, buildBuyOrder } from "@/lib/utils";

import { getUtxoByValue, buyOrder } from "@/api";
import { useUnisatStore } from "@/providers/unisat-store-provider";
import { useState } from "react";
import useSWR from "swr";
import { useCommonStore } from "@/stores";

interface OrderBuyModalProps {
  visiable: boolean;
  item: any;
  onClose?: () => void;
  onSuccess?: () => void;
}
export const OrderBuyModal = ({
  visiable,
  item,
  onClose: onModalClose,
  onSuccess,
}: OrderBuyModalProps) => {
  const NEXT_PUBLIC_SERVICE_FEE = env("NEXT_PUBLIC_SERVICE_FEE");
  const NEXT_PUBLIC_IS_FREE = env("NEXT_PUBLIC_IS_FREE");

  let serviceFee = 0;
  if (NEXT_PUBLIC_SERVICE_FEE && NEXT_PUBLIC_IS_FREE == "0") {
    serviceFee = Number(NEXT_PUBLIC_SERVICE_FEE);
  }
  const { feeRate } = useCommonStore((state) => state);
  const { balance, address, network } = useUnisatStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data, isLoading } = useSWR(
    `getUtxoByValue-${address}-${network}`,
    () => getUtxoByValue({ address, network, value: 500 })
  );
  const utxos = useMemo(() => data?.data || [], [data]);
  const closeHandler = () => {
    onModalClose?.();
    onClose();
  };
  const confirmHandler = async () => {
    console.log("confirmHandler");
    try {
      if (!(address && network && networkFeeAndUtxos.smallTwoUtxos?.length)) {
        notification.warning({
          message: "buy error",
          description: `数据错误`,
        });
      }
      setLoading(true);
      const buyRaw = await buildBuyOrder({
        orderId: item.order_id,
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
          message: "buy successfully",
          description: `The order has been submitted successfully, please wait for the buyer to buy it.`,
        });
        onSuccess?.();
        closeHandler();
      } else {
        notification.error({
          message: "buy failed",
          description: res.msg,
        });
      }
    } catch (error: any) {
      notification.error({
        message: "buy failed",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  const networkFeeAndUtxos = useMemo(() => {
    const virtualFee = (180 * 3 + 34 * 10 + 10) * feeRate.value;
    if (!utxos.length || !item?.price) {
      return {
        fee: 0,
        utxos: [],
      };
    }
    const { utxos: filterConsumUtxos, smallTwoUtxos } = filterUtxosByValue(
      utxos,
      virtualFee + 330 + item?.price + serviceFee
    );

    const realityFee =
      (180 * (filterConsumUtxos.length + 4) + 34 * 4 + 10) * feeRate.value;
    return {
      fee: realityFee,
      utxos: filterConsumUtxos,
      smallTwoUtxos: smallTwoUtxos,
    };
  }, [feeRate, utxos, item?.price]);
  console.log(networkFeeAndUtxos, "networkFeeAndUtxos");
  const totalPrice = useMemo(() => {
    if (item) {
      return item.price;
    }
    return 0;
  }, [item]);
  useEffect(() => {
    if (visiable) {
      onOpen();
    } else {
      onClose();
    }
  }, [visiable]);

  return (
    <Modal
      backdrop="blur"
      isDismissable={false}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={closeHandler}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="">立即购买</ModalHeader>
            <ModalBody>
              <div className="flex  justify-between">
                <div className="flex-1">
                  {item?.assets?.map((v: any) => (
                    <div key={v.inscriptionnum}>
                      <div>
                        {v.amount} {v.ticker}
                      </div>
                      <div># {v.inscriptionnum}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div>价格: {item?.price} BTC</div>
                  <div className="flex items-center">
                    来自:
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
                <span>Fee Rate</span>
                <div>
                  {feeRate.value} <span>sats</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>平台服务费</span>
                <div>
                  {serviceFee} <span>sats</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>网络费用</span>
                {isLoading || !networkFeeAndUtxos.fee ? (
                  <Spinner size="sm" />
                ) : (
                  <div>
                    {networkFeeAndUtxos.fee} <span>sats</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center font-bold text-lg">
                <span>总计</span>
                <div>
                  {totalPrice} <span>BTC</span>
                </div>
              </div>
              <Chip
                radius="sm"
                size="lg"
                className="w-full max-w-none text-small"
              >
                <div className="flex items-center justify-between">
                  <span>可用余额</span>
                  <span>{balance.confirmed} BTC</span>
                </div>
              </Chip>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={closeHandler}>
                关闭
              </Button>
              <Button
                isLoading={loading}
                isDisabled={!networkFeeAndUtxos.fee}
                color="primary"
                onPress={confirmHandler}
              >
                确认
              </Button>
            </ModalFooter>
          </>
        )}
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
