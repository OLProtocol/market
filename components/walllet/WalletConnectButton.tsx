"use client";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useWalletStore } from "@/stores";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  WalletConnectReact,
  useReactWalletStore,
} from "btc-connect/dist/react";
import "btc-connect/dist/style/index.css";
import { useTheme } from "next-themes";
import { hideStr } from "@/lib/utils";

export const WalletConnectButton = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const { connected, check, address, disconnect, btcWallet } =
  useReactWalletStore((state) => state);
  const [visiable, setVisiable] = useState(false);
  const toMyAssets = () => {
    router.push("/account");
  };
  const connectHandler = async () => {
    setVisiable(true);
    // await connect();
  };
  useEffect(() => {
    // check();
  }, []);
  const testConnect = async (wallet: any) => {
    console.log("Connected Wallet", wallet);
    console.log(wallet.connected);
    console.log(wallet.address);
  };
  useEffect(() => {
    console.log("connected", connected);
    if (connected) {
      // btcWallet?.on("accountChanged", check);
      btcWallet?.on("networkChanged", check);
    }
    return () => {
      // btcWallet?.removeListener("accountChanged", check);
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
      onConnectSuccess={testConnect}
      onConnectError={console.error}
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
