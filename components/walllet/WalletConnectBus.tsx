"use client";
import { Button } from "@nextui-org/react";
import { useUnisatStore } from "@/stores";
import React from "react";
import { WalletSelectModal } from "./WalletSelectModal";

interface WalletConnectBusProps {
  children: React.ReactNode;
  className?: string;
}
export const WalletConnectBus = ({
  children,
  className,
}: WalletConnectBusProps) => {
  const [visiable, setVisiable] = React.useState(false);

  const { connected } = useUnisatStore((state) => state);
  return connected ? (
    <>{children}</>
  ) : (
    <>
      <Button
        onClick={() => setVisiable(true)}
        size="sm"
        radius="full"
        className={className}
        color="primary"
      >
        Connect Wallet
      </Button>
      <WalletSelectModal
        visiable={visiable}
        onClose={() => setVisiable(false)}
      />
    </>
  );
};
