import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Spinner,
  Card,
  CardBody,
} from "@nextui-org/react";
import { version } from "@/assets/version";
import { getAppVersion } from "@/api";
import useSWR from "swr";

export const UpdateVersionModal = () => {
  const [open, setOpen] = useState(false);
  const { data: appVersion } = useSWR(`getAppVersion`, () => getAppVersion(), {
    refreshInterval: 1000 * 60 * 2,
  });
  const timer = useRef<any>();
  const showModal = () => {
    setOpen(true);
  };
  const refresh = () => {
    setOpen(false);
    window.location.reload();
  };
  const checkVersion = () => {
    console.log("appVersion", appVersion);
    console.log("version", version);
    if (appVersion && Number(appVersion) > version) {
      showModal();
    }
  };
  const hideModal = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      checkVersion();
    }, 1000 * 60 * 5);
    setOpen(false);
  };
  useEffect(() => {
    checkVersion();
  }, [appVersion]);
  return (
    <Modal
      backdrop="blur"
      isDismissable={false}
      isOpen={open}
      onClose={hideModal}
    >
      <ModalContent>
        <ModalHeader className="">有新版本，是否更新？</ModalHeader>
        <ModalFooter>
          <Button color="primary" variant="light" onPress={hideModal}>
            取消
          </Button>
          <Button color="danger" onPress={refresh}>
            立即更新
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
