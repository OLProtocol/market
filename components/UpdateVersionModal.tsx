import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { version } from "@/assets/version";
import { getAppVersion } from "@/api";
import useSWR from "swr";

export const UpdateVersionModal = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  useSWR(`getAppVersion`, () => getAppVersion(), {
    refreshInterval: 1000 * 60 * 2,
    onSuccess: (appVersion) => {
      console.log(appVersion);
      if (appVersion && Number(appVersion) > version) {
        showModal();
      }
    },
  });
  const timer = useRef<any>();

  const refresh = () => {
    setOpen(false);
    window.location.reload();
  };
  const hideModal = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(
      () => {
        // checkVersion();
      },
      1000 * 60 * 5,
    );
    setOpen(false);
  };
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
            稍后再说
          </Button>
          <Button color="danger" onPress={refresh}>
            立即更新
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
