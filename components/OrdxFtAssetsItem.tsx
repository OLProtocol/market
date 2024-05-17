import {
  Button,
  Card,
  CardFooter,
  CardBody,
  Checkbox,
  Chip,
  Snippet,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { hideStr, thousandSeparator } from '@/lib/utils';
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
          <span className="text-gray-500">{item?.tickers[0].ticker}</span>
          <div className="flex justify-center">
            <section className="text-center pt-8">
              <p className="text-xl font-medium text-white">
                {thousandSeparator(item?.tickers[0].amount)}
              </p>
              <p className="pt-5">
                <Snippet
                  codeString={item?.utxo}
                  className="bg-transparent text-blue-400"
                  symbol=""
                  size="lg"
                  variant="flat"
                >
                  <span className="font-thin">{hideStr(item?.utxo, 6)}</span>
                </Snippet>
              </p>
            </section>
          </div>
        </div>
      </CardBody>

      <CardFooter className="block bg-gray-800 h-1/5">
        <div className="flex justify-center">
          {item.order_id === 0 ? (
            <Button
              // fullWidth
              variant="ghost"
              size="md"
              isLoading={loading}
              color="primary"
              radius="lg"
              onClick={sellHandler}
              className="border"
            >
              {t('buttons.list_sale')}
            </Button>
          ) : (
            <Button
              className="text-tiny"
              // fullWidth
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
      </CardFooter>
    </Card>
  );
};
