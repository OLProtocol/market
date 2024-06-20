import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  CardHeader,
  Button,
  Divider,
} from '@nextui-org/react';
import { Steps, Tag, Progress, notification } from 'antd';
import { InscribeOrderItem } from './InscribeOrderItem';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { ordx } from '@/api';
import mempool from '@/api/mempool';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useOrderStore, OrderItemType, useCommonStore } from '@/store';
import {
  inscribe,
  pushCommitTx,
  getFundingAddress,
  waitSomeSeconds,
  sendBTC,
} from '@/lib/inscribe';
import { generateMempoolUrl } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { _0n } from '@cmdcode/crypto-utils/dist/const';
import { hideStr } from '@/lib/utils';
import { FeeShow } from './FeeShow';
import { useTranslation } from 'react-i18next';

interface InscribingOrderMdaolProps {
  show: boolean;
  orderId: string;
  onFinished?: () => void;
  onClose?: () => void;
}
export const InscribingOrderModal = ({
  show,
  orderId,
  onClose,
  onFinished,
}: InscribingOrderMdaolProps) => {
  const { t } = useTranslation();
  const { feeRate } = useCommonStore();
  const [successPercent, setSuccessPercent] = useState(0);
  const steps = [
    {
      title: (
        <div className="dark:text-white">
          {t('pages.inscribe.pay.step_one.name')}
        </div>
      ),
    },
    {
      title: (
        <div className="dark:text-white">
          {t('pages.inscribe.pay.step_three.name')}
        </div>
      ),
    },
    {
      title: (
        <div className="dark:text-white">
          {t('pages.inscribe.pay.step_four.name')}
        </div>
      ),
    },
  ];
  const { address: currentAccount, publicKey } = useReactWalletStore();
  const [loading, setLoading] = useState(false);
  const { changeStatus, setCommitTx, addSucccessTxid, findOrder } =
    useOrderStore((state) => state);

  const [activeStep, setActiveStep] = useState(0);
  const order = useMemo(() => {
    return findOrder(orderId) as OrderItemType;
  }, [orderId]);
  const payOrder = async () => {
    if (!order) {
      return;
    }
    setLoading(true);

    try {
      const { inscription, feeRate, network, fee, metadata } = order;
      let txid;
      txid = await sendBTC({
        toAddress: inscription.inscriptionAddress,
        value: fee.totalFee,
        feeRate: feeRate,
        network: network,
        fromAddress: currentAccount,
        fromPubKey: publicKey,
        utxos: metadata.utxos,
      });
      const commitTx = {
        txid,
        vout: 0,
        amount: fee.totalFee,
      };
      setCommitTx(orderId, commitTx);
      changeStatus(orderId, 'paid');
      await waitSomeSeconds(1500);
      setLoading(false);
      setActiveStep(1);
      setTimeout(() => {
        startInscribe();
      }, 0);
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      notification.error({
        message: error.message || JSON.stringify(error),
      });
    }
  };
  const startInscribe = async () => {
    if (!order) {
      return;
    }
    setLoading(true);
    setLoading(true);
    setActiveStep(2);
    changeStatus(orderId, 'inscribe_wait');
    await waitSomeSeconds(1000);
    setLoading(false);
    inscribeHandler();
  };

  const inscribeHandler = async () => {
    if (!(order && order.commitTx)) {
      return;
    }
    try {
      setLoading(true);
      console.log('order', order);
      const { commitTx, fee } = order;
      const commitTxid = (commitTx.txid as any)?.data || commitTx.txid;
      await ordx.pollGetTxStatus(commitTxid, order.network);
      await waitSomeSeconds(1500);
      const txid = await inscribe({
        secret: order.secret,
        network: order.network as any,
        inscription: order.inscription,
        files: order.files,
        metadata: order.metadata,
        txid: commitTxid,
        serviceFee: 0,
        vout: commitTx.vout,
        amount: commitTx.amount,
        toAddress: order.toAddress[0],
        inscribeFee: order.inscriptionSize,
      });
      addSucccessTxid(orderId, txid);
      changeStatus(orderId, 'inscribe_success');
      setActiveStep(2);
      notification.success({
        message: 'Success',
        description: 'Inscribe Success',
      });
      setLoading(false);
      onFinished?.();
    } catch (error: any) {
      try {
        // await savePaidOrder({
        //   key: orderId,
        //   content: {
        //     order,
        //     address: currentAccount,
        //   },
        // });
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
      changeStatus(orderId, 'inscribe_fail');
      notification.error({
        message: 'Error',
        description: error.message || 'error',
      });
    }
  };
  const checkStatus = () => {
    if (order.status === 'paid') {
      setActiveStep(1);
    }
    if (order.status === 'inscribe_success') {
      setActiveStep(2);
    }
  };

  const fundingAddressHref = (address?: string) => {
    if (!address || !order.network) {
      return '';
    }
    return generateMempoolUrl({
      network: order.network,
      path: `address/${address}`,
    });
  };
  useEffect(() => {
    checkStatus();
  }, []);
  const closeHandler = () => {
    onClose?.();
  };
  return (
    <Modal
      isDismissable={false}
      size="3xl"
      isOpen={show}
      onClose={closeHandler}
    >
      <ModalContent>
        <ModalHeader className="flex items-center">
          <span className="mr-2">Inscribing Order</span>
          <Tag color="error">{order.network}</Tag>
        </ModalHeader>
        <ModalBody>
          <div className="mb-4">
            <Steps current={activeStep} items={steps} />
          </div>
          <div>
            {activeStep === 0 && order.status !== 'timeout' && (
              <div>
                <div className="flex justify-center">
                  <WalletConnectBus>
                    <Button
                      color="primary"
                      isLoading={loading}
                      onClick={payOrder}
                    >
                      {t('buttons.pay_wallet')}
                    </Button>
                  </WalletConnectBus>
                </div>
              </div>
            )}
            {/* step two */}
            {activeStep === 1 && (
              <div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {t('pages.inscribe.pay.step_three.name')}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('pages.inscribe.pay.step_three.des')}
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Button
                    color="primary"
                    isLoading={loading}
                    onClick={inscribeHandler}
                  >
                    {t('buttons.inscribe')}
                  </Button>
                </div>
                <div className="text-amber-400 text-base text-center">
                  {t('pages.inscribe.order.continue')}
                </div>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold">
                    {t('pages.inscribe.pay.step_four.name')}
                  </div>
                  <div className="text-sm text-gray-400">
                    {t('pages.inscribe.pay.step_four.des')}
                  </div>
                </div>
                <div className="max-h-[20rem] overflow-y-auto">
                  <div className="flex justify-between mb-4">
                    <div>{t('pages.inscribe.pay.step_four.genesis_tx')}</div>
                    <a
                      className="text-blue-500 underline"
                      href={generateMempoolUrl({
                        network: order.network,
                        path: `tx/${order.txid}`,
                      })}
                      target="_blank"
                    >
                      {hideStr(order.txid, 10)}
                    </a>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Button
                    color="primary"
                    isLoading={loading}
                    size="lg"
                    onClick={closeHandler}
                  >
                    {t('buttons.close')}
                  </Button>
                </div>
              </div>
            )}
          </div>
          <FeeShow
            feeRate={feeRate.value}
            // inscriptionSize={order.inscriptionSize}
            serviceFee={order.fee.serviceFee}
            // filesLength={order.inscriptions.length}
            totalFee={order.fee.totalFee}
            // networkFee={order.fee.networkFee}
          />

          <>
            <Divider />
            <Card>
              <CardBody>
                <CardHeader>Funding Account</CardHeader>
                <div className="flex justify-between">
                  <div>{t('common.address')}</div>
                  <a
                    className="text-blue-500 underline ml-4"
                    href={fundingAddressHref(
                      order.inscription?.inscriptionAddress,
                    )}
                    target="_blank"
                  >
                    {hideStr(order.inscription?.inscriptionAddress, 10)}
                  </a>
                </div>
              </CardBody>
            </Card>
          </>
          <Divider />
          <div className="max-h-[20rem] overflow-y-auto">
            <div className="mb-2 flex-col gap-2">
              {order.files?.map((item, index) => (
                <InscribeOrderItem
                  key={index}
                  label={index + 1}
                  status={item?.status}
                  value={item.show}
                  address={order.toAddress[0]}
                />
              ))}
            </div>
          </div>
          {order.createAt && (
            <div className="text-right text-sm text-gray-400">
              {t('pages.inscribe.pay.created_text')}{' '}
              {new Date(order.createAt).toLocaleString('af')}
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
