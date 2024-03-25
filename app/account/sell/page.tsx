"use client";

import {
  Divider,
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { notification } from "antd";
import { useSellStore } from "@/store";
import { useList } from "react-use";
import { useEffect, useMemo } from "react";
import { parseUtxo, buildSellOrder, btcToSats } from "@/lib/utils";
import { useReactWalletStore } from "btc-connect/dist/react";
import { submitOrder } from "@/api";
import { useRouter } from "next/navigation";

export default function SellPage() {
  const router = useRouter();
  const { list, reset } = useSellStore((state) => state);
  const { network, address } = useReactWalletStore((state) => state);
  const [
    priceList,
    { updateAt: updateAt, set: setList, clear: clearList, removeAt },
  ] = useList<number>([]);
  const listItems = async () => {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const inscriptionUtxo = {
        ...parseUtxo(item.utxo),
        value: item.value,
      };
      const orderRaw = await buildSellOrder({
        inscriptionUtxo,
        amount: 1,
        total: btcToSats(priceList[i]),
        network,
        address,
      });
      const res = await submitOrder({ address, raw: orderRaw });
      if (res.code === 200) {
        notification.success({
          message: "Listed successfully",
          description: `The order has been submitted successfully, please wait for the buyer to buy it.`,
        });
        reset();
        router.back();
      } else {
        notification.error({
          message: "List failed",
          description: res.msg,
        });
      }
    }
  };
  const priceChange = (i, v: any) => {
    updateAt(i, Number(v));
  };
  const totalPrice = useMemo(
    () => priceList.reduce((a, b) => a + b, 0) || 0,
    [priceList]
  );
  useEffect(() => {
    setList(Array.from(list).fill(0));
  }, [list, setList]);

  return (
    <div>
      <div className="flex justify-between gap-4 ">
        <div className="flex-1 overflow-hidden">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Item</TableColumn>
              <TableColumn>Unit Price</TableColumn>
              <TableColumn>Amount</TableColumn>
            </TableHeader>
            <TableBody>
              {list.map((item, i) => (
                <TableRow key={item.utxo}>
                  <TableCell>
                    <div>
                      Ticker：
                      {item.tickers?.map((v) => ` ${v.ticker}`)?.join("-")}
                    </div>
                    <div>
                      Inscription：
                      {item.tickers
                        ?.map((v) => `# ${v.inscriptionnum}`)
                        ?.join("-")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      placeholder="0.00"
                      onChange={(e) => priceChange(i, e.target.value)}
                      endContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            btc
                          </span>
                        </div>
                      }
                    />
                  </TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Card className="w-60">
          <CardBody>
            <div>Total: {list.length}</div>
            <div>Your profits: {totalPrice} BTC</div>
          </CardBody>
          <CardFooter>
            <Button
              isDisabled={totalPrice <= 0}
              color="primary"
              className="w-full"
              onClick={listItems}
            >
              List
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
