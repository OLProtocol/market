"use client";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  WalletConnectReact,
  useReactWalletStore,
} from "btc-connect/dist/react";
import "btc-connect/dist/style/index.css";
import { useTheme } from "next-themes";
import { hideStr } from "@/lib/utils";
import { notification } from "antd";
import { useCommonStore } from "@/store";

export const WalletConnectButton = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const { connected, check, address, disconnect, btcWallet } =
    useReactWalletStore((state) => state);
  const { setSignature, signature } = useCommonStore((state) => state);
  const toMyAssets = () => {
    router.push("/account");
  };
  useEffect(() => {
    check();
  }, []);
  const onConnectSuccess = async (wallet: any) => {
    if (!signature) {
      console.log("signature text", process.env.NEXT_PUBLIC_SIGNATURE_TEXT);
      const _s = await wallet.signMessage(
        process.env.NEXT_PUBLIC_SIGNATURE_TEXT
      );
      setSignature(_s);
    }
  };
  const onConnectError = (error: any) => {
    console.error("Connect Wallet Failed", error);
    notification.error({
      message: "Connect Wallet Failed",
      description: error.message,
    });
  };
  const onDisconnectSuccess = () => {
    setSignature("");
  };
  useEffect(() => {
    console.log("connected", connected);
    if (connected) {
      btcWallet?.on("accountsChanged", check);
      btcWallet?.on("networkChanged", check);
    }
    return () => {
      btcWallet?.removeListener("accountChanged", check);
      btcWallet?.removeListener("networkChanged", check);
    };
  }, [connected]);
  return (
    <WalletConnectReact
      config={{
        network: "livenet",
        defaultConnectorId: "okx",
      }}
      theme={theme === "dark" ? "dark" : "light"}
      onConnectSuccess={onConnectSuccess}
      onConnectError={onConnectError}
      onDisconnectSuccess={onDisconnectSuccess}
    >
      <>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button>{hideStr(address, 4, "**")}</Button>
          </PopoverTrigger>
          <PopoverContent className="p-2">
            <div className="flex flex-col gap-2">
              <Button className="w-full" onClick={toMyAssets}>
                我的资产
              </Button>
              <Button color="danger" variant="ghost" onClick={disconnect}>
                Disconnect
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </>
    </WalletConnectReact>
  );
};
