import {
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
} from "@nextui-org/react";
import { use, useMemo } from "react";

const TickerContent = ({ content }: any) => {
  return (
    <div className="h-36 max-w-full">
      <div className="w-full h-full flex justify-center items-center break-words break-all p-4">
        <p>{content}</p>
      </div>
    </div>
  );
};

export const OrdxFtAssetsItem = ({ item, onSell }: any) => {
  const inscriptionNum = useMemo(() => {
    return item?.tickers?.map((v) => `# ${v.inscriptionnum}`)?.join("-") || "";
  }, [item]);
  const ticker = useMemo(() => {
    return item?.tickers?.[0];
  }, [item]);
  return (
    <Card radius="lg" className="border-none w-60">
      <CardBody>
        <TickerContent
          content={JSON.stringify({
            p: "ordx",
            op: "mint",
            tick: ticker?.ticker,
            amt: ticker?.amount,
          })}
        />
      </CardBody>
      <Divider />
      <CardFooter className="">
        <div className="flex-1">
          <div className="text-tiny  mb-2">{inscriptionNum}</div>
          <div>
            <ButtonGroup className="w-full">
              <Button
                className="text-tiny  "
                variant="flat"
                color="default"
                radius="lg"
                onClick={onSell}
              >
                上架
              </Button>
              <Button
                className="text-tiny  "
                variant="flat"
                color="default"
                radius="lg"
              >
                上架
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
