import {
  Button,
  Card,
  CardFooter,
  CardBody,
  Checkbox,
  Chip,
  Listbox,
  ListboxItem,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
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
  const cancelHandler = async () => {
    setLoading(true);
    await onCancelOrder?.();
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
      <CardBody className="h-4/5">
        <div className="flex-1 text-sm md:text-base">
          <Chip
            variant="shadow"
            size="lg"
            classNames={{
              base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
              content: 'drop-shadow shadow-black text-white',
            }}
          >
            {item?.tickers[0].ticker}
          </Chip>
          {item?.tickers?.map((v: any) => (
            <Listbox
              key={v.inscriptionnum}
              className="border-small border-gray-700 rounded-xl mt-5"
            >
              <ListboxItem key={v.ticker + '-' + v.inscriptionnum}>
                Inscription Num: {v.inscriptionnum}
              </ListboxItem>
              <ListboxItem key={v.ticker + '-' + v.amount}>
                {t('common.asset_num')}: {v.amount}
              </ListboxItem>
            </Listbox>
          ))}
        </div>
      </CardBody>

      <CardFooter className="block bg-gray-800 h-1/5">
        <div className="flex-1">
          <div>
            {item.order_id === 0 ? (
              <Button
                fullWidth
                variant="ghost"
                size="md"
                isLoading={loading}
                color="primary"
                radius="sm"
                onClick={sellHandler}
                className="border"
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
                isLoading={loading}
                startContent={
                  item.locker == '1' ? (
                    <Icon icon="mdi:lock" className="text-lg" />
                  ) : null
                }
                onClick={cancelHandler}
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
