'use client';

import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { useEffect, useState, useMemo } from 'react';
import { useCommonStore } from '@/store';
import { BtcFeeRate } from './BtcFeeRate';
import useSWR from 'swr';
import { useTranslation } from 'react-i18next';
import { ordx } from '@/api';
import { useReactWalletStore } from 'btc-connect/dist/react';

export const FeerateSelectButton = () => {
  const { t } = useTranslation();
  const { network } = useReactWalletStore((state) => state);
  const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();
  const [fee, setFee] = useState({ value: 1, type: 'Normal' });

  const { data, isLoading } = useSWR(`fetchChainFeeRate-${network}`, () =>
    ordx.fetchChainFeeRate(network as any),
  );
  const feeRateData = useMemo(() => {
    if (data?.code === 0) {
      return data.data.list;
    } else {
      return [];
    }
  }, [data]);
  const { setFeeRate, feeRate } = useCommonStore((state) => state);
  const handleOk = () => {
    setFeeRate(fee);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };
  const feeChange = (fee: any) => {
    setFee(fee);
  };
  useEffect(() => {
    console.log('feeRateData', feeRateData);
    if (feeRateData?.length) {
      const normalFee = feeRateData.find((item) => item.title === 'Normal');
      setFeeRate({ value: normalFee?.feeRate || 1, type: 'Normal' });
    }
  }, [feeRateData]);

  return (
    <div>
      <Button
        variant="ghost"
        isLoading={isLoading}
        className="bg-transparent"
        onClick={() => onOpen()}
      >
        <Icon icon="mdi:gas-station" className="text-xl0" />
        {feeRate.value}{' '}
        <span className="dark:text-gray-400 text-slate-600">sat/vB</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {t('common.gas_fee')}
          </ModalHeader>
          <ModalBody>
            <BtcFeeRate
              onChange={feeChange}
              value={feeRate.value}
              feeType={feeRate.type}
              feeRateData={feeRateData}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={handleCancel}>
              {t('common.close')}
            </Button>
            <Button color="primary" onPress={handleOk}>
              {t('common.ok')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
