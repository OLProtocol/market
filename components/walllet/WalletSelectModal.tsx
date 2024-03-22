import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Spinner,
  Card,
  CardBody,
  Image,
} from "@nextui-org/react";
import { notification } from "antd";
import { useUnisatStore } from "@/stores";
import { useState } from "react";

interface WalletSelectModalProps {
  visiable: boolean;
  onClose?: () => void;
}
export const WalletSelectModal = ({
  visiable,
  onClose: onModalClose,
}: WalletSelectModalProps) => {
  const { connect, installed } = useUnisatStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const connectHander = async () => {
    setLoading(true);
    try {
      await connect();
      onModalClose?.();
    } catch (error: any) {
      notification.error({
        message: "Connect Wallet Failed",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
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
      onClose={onModalClose}
    >
      <ModalContent>
        <ModalHeader className="">Select a wallet to connect</ModalHeader>
        <ModalBody className="pb-4">
          <Card isPressable isDisabled={loading} onClick={connectHander}>
            <CardBody>
              {loading ? (
                <div className="flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                <div className="flex items-center">
                  <Image
                    src="/logo/unisat.svg"
                    alt="unisat logo"
                    className="w-10 h-10 mr-2"
                  />
                  <span className="text-lg md:text-2xl font-bold flex-1">
                    Unisat Wallet
                  </span>
                  {!installed && (
                    <span className="justify-self-end text-orange-400">
                      Not Installed
                    </span>
                  )}
                </div>
              )}
            </CardBody>
          </Card>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
