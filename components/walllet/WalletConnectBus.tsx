"use client";
import { Button } from "@nextui-org/react";
import {
  useReactWalletStore,
  WalletConnectReact,
} from "btc-connect/dist/react";
import React from "react";
import { useTheme } from "next-themes";

interface WalletConnectBusProps {
  children: React.ReactNode;
  className?: string;
}
export const WalletConnectBus = ({
  children,
  className,
}: WalletConnectBusProps) => {
  const { theme } = useTheme();
  return (
    <WalletConnectReact
      config={{
        network: "livenet",
        defaultConnectorId: "okx",
      }}
      ui={{
        connectClass: "block mx-auto mt-20",
      }}
      theme={theme === "dark" ? "dark" : "light"}
    >
      {children}
    </WalletConnectReact>
  );
};
