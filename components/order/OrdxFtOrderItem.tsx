import {
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
  Chip,
} from "@nextui-org/react";
import { WalletConnectBus } from "@/components/walllet/WalletConnectBus";
import { useState } from "react";

export const OrdxFtOrderItem = ({ item, onBuy }: any) => {
  const [loading, setLoading] = useState(false);
  const buyHandler = async () => {
    setLoading(true);
    try {
      await onBuy(item);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card isPressable radius="lg" className="border-none w-full h-[14rem] md:h-[20rem]">
      <CardBody>
        <div className="flex flex-col h-full">
          <div className="flex-1 text-sm md:text-base">
            {item?.assets?.map((v: any) => (
              <div key={v.inscriptionnum}>
                <div>Ticker: {v.ticker}</div>
                <div>Amount: {v.amount}</div>
              </div>
            ))}
          </div>
          <Chip size="lg" className="w-full max-w-none text-small">
            <div>{item?.price} BTC</div>
          </Chip>
        </div>
      </CardBody>
      <CardFooter className="">
        <WalletConnectBus className="flex-1">
          <Button
            className="text-tiny flex-1 "
            variant="flat"
            isLoading={loading}
            color="default"
            radius="lg"
            onClick={buyHandler}
          >
            购买
          </Button>
        </WalletConnectBus>
        {/* <Button
              isIconOnly
              radius="full"
              variant="faded"
              aria-label="Take a photo"
            >
              <Icon icon="material-symbols:shopping-cart-outline-rounded" className="text-lg"/>
            </Button> */}
      </CardFooter>
    </Card>
  );
};
