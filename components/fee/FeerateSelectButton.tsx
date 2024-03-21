"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useCommonStore } from "@/stores";
import { BtcFeeRate } from "./BtcFeeRate";
import useSWR from "swr";
import { fetchChainFeeRate } from "@/api";
import { useUnisatStore } from "@/providers/unisat-store-provider";

export const FeerateSelectButton = () => {
  const { network } = useUnisatStore((state) => state);
  const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();
  const [fee, setFee] = useState({ value: 1, type: "Normal" });

  const { data: feeRateData, isLoading } = useSWR(
    `fetchChainFeeRate-${network}`,
    () => fetchChainFeeRate(network as any)
  );

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
    setFeeRate({ value: feeRateData?.halfHourFee || 1, type: "Normal" });
  }, [feeRateData]);

  return (
    <div>
      <Button
        variant="ghost"
        isLoading={isLoading}
        className="bg-transparent"
        onClick={() => onOpen()}
      >
        Gas: {feeRate.value} sats
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Gas Fee</ModalHeader>
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
              Close
            </Button>
            <Button color="primary" onPress={handleOk}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
