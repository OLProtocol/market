"use client";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useUnisatStore } from "@/providers/unisat-store-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { hideStr } from "@/lib/utils";
export const WalletConnectButton = () => {
  const router = useRouter();
  const { connect, check, connected, address, disconnect, balance } =
    useUnisatStore((state) => state);
  const toMyAssets = () => {
    router.push("/account");
  };
  useEffect(() => {
    check();
  }, [check]);
  return connected ? (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button>{hideStr(address, 4, "**")}</Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <div className="flex flex-col gap-2">
          <Button
            className="w-full"
            onClick={toMyAssets}
          >
            我的资产
          </Button>
          <Button color="danger" variant="ghost" onClick={disconnect}>
            Disconnect
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ) : (
    <Button onClick={connect}>Connect Wallet</Button>
  );
};
