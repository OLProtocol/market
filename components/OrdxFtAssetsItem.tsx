import {
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

export const OrdxFtAssetsItem = ({ item, onSell, onCancelOrder }: any) => {
  const [loading, setLoading] = useState(false);
  const sellHandler = async () => {
    setLoading(true);
    await onSell(item);
    setLoading(false);
  };
  return (
    <Card radius="lg" className="border-none w-full min-h-[15rem]">
      <CardBody>
        <div className="flex-1">
          {item?.tickers?.map((v: any) => (
            <div key={v.inscriptionnum}>
              <div># {v.inscriptionnum}</div>
              <div>{v.ticker}</div>
              <div>{v.amount}</div>
            </div>
          ))}
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="">
        <div className="flex-1">
          <div>
            {item.order_id === 0 ? (
              <Button
                className="text-tiny "
                variant="flat"
                fullWidth
                color="default"
                radius="lg"
                onClick={sellHandler}
              >
                上架
              </Button>
            ) : (
              <Button
                className="text-tiny"
                fullWidth
                variant="flat"
                color="default"
                radius="lg"
                onClick={onCancelOrder}
              >
                下架（{item.price} {item.currency}）
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
