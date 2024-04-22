import {
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
  Checkbox,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
interface Props {
  item: any;
  onSell?: (item: any) => void;
  onCancelOrder?: () => void;
  selected?: boolean;
  canSelect?: boolean;
  onSelect?: (b: boolean) => void;
}
export const OrdxFtAssetsItem = ({
  item,
  onSell,
  onCancelOrder,
  selected,
  canSelect,
  onSelect,
}: Props) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const sellHandler = async () => {
    setLoading(true);
    await onSell?.(item);
    setLoading(false);
  };
  return (
    <Card
      radius="lg"
      className="border-none w-full  h-[14rem] md:h-[18rem] relative"
    >
      {canSelect && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 cursor-pointer"
          onClick={() => {
            onSelect?.(!selected);
          }}
        >
          <div className="flex absolute top-4 right-4">
            <Checkbox isSelected={selected} onValueChange={onSelect} />
          </div>
        </div>
      )}
      <CardBody>
        <div className="flex-1 text-sm md:text-base">
          {item?.tickers?.map((v: any) => (
            <div key={v.inscriptionnum}>
              <div>Ticker: {v.ticker}</div>
              <div>Amount: {v.amount}</div>
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
                {t('buttons.list_sale')}
              </Button>
            ) : (
              <Button
                className="text-tiny"
                fullWidth
                variant="flat"
                color="default"
                radius="lg"
                startContent={
                  item.locker == '1' ? (
                    <Icon icon="mdi:lock" className="text-lg" />
                  ) : null
                }
                onClick={onCancelOrder}
              >
                {t('buttons.remove_sale')}（{item.price} {item.currency}）
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
