import {
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
  Chip,
} from "@nextui-org/react";
import { WalletConnectBus } from "@/components/WalletConnectBus";

export const OrdxFtOrderItem = ({ item, onBuy }: any) => {
  return (
    <Card isPressable radius="lg" className="border-none w-60 max-h-[18rem]">
      <CardBody>
        <div className="flex flex-col h-full">
          <div className="flex-1">
            {item?.assets?.map((v: any) => (
              <div key={v.inscriptionnum}>
                <div># {v.inscriptionnum}</div>
                <div>{v.ticker}</div>
                <div>{v.amount}</div>
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
            color="default"
            radius="lg"
            onClick={onBuy}
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
