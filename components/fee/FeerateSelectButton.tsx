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
import { useState } from "react";
import { useCommonStore } from "@/stores";
import { BtcFeeRate } from "./BtcFeeRate";
export const FeerateSelectButton = () => {
  const { isOpen, onClose, onOpenChange, onOpen } = useDisclosure();
  const [fee, setFee] = useState(1);
  const { setFeeRate, feeRate } = useCommonStore((state) => state);
  const handleOk = () => {
    setFeeRate({ value: fee, type: "custom" });
    onClose();
  };
  const handleCancel = () => {
    onClose();
  };
  const feeChange = (value: number) => {
    setFee(value);
  };
  return (
    <div>
      <Button
        variant="ghost"
        className="bg-transparent"
        onClick={() => onOpen()}
      >
        Gas: {feeRate.value}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Gas Fee</ModalHeader>
              <ModalBody>
                <BtcFeeRate onChange={feeChange} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleCancel}>
                  Close
                </Button>
                <Button color="primary" onPress={handleOk}>
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
