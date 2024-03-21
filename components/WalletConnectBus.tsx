"use client";
import { Button } from "@nextui-org/react";
import { useUnisatStore } from "@/stores";
import React from "react";

interface WalletConnectBusProps {
  children: React.ReactNode;
  className?: string;
}
export const WalletConnectBus = ({
  children,
  className,
}: WalletConnectBusProps) => {
  const { connect, connected } = useUnisatStore((state) => state);
  return connected ? (
    <>{children}</>
  ) : (
    <Button
      onClick={connect}
      size="sm"
      radius="full"
      className={className}
      color="primary"
    >
      Connect Wallet
    </Button>
  );
};
