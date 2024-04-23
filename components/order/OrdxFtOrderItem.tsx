import {
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
  Chip,
  Checkbox,
  Listbox,
  ListboxItem,
} from '@nextui-org/react';
import { WalletConnectBus } from '@/components/order/WalletConnectBus';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  item: any;
  onBuy: any;
  onCancelOrder?: () => void;
  canSelect?: boolean;
  selected?: boolean;
  onSelect?: (s: boolean) => void;
}

export const OrdxFtOrderItem = ({
  item,
  onBuy,
  canSelect,
  selected,
  onSelect,
  onCancelOrder,
}: Props) => {
  const { address: currentAddress } = useReactWalletStore();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
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
    <Card
      isPressable
      radius="lg"
      className="border-none w-full h-[14rem] md:h-[18rem] relative"
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
          {item?.assets?.map((v: any) => (
            <Listbox key={v.inscriptionnum}>
              <ListboxItem key={v.ticker}>
                {t('common.tick')}: {v.ticker}
              </ListboxItem>
              <ListboxItem key={v.ticker + '-' + v.amount}>
                {t('common.asset_num')}: {v.amount}
              </ListboxItem>
            </Listbox>
          ))}
        </div>
      </CardBody>
      <CardFooter className="block bg-gray-800">
        <div className="pb-2 flex">
          <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-0.5" />
          <span className="text-sm text-amber-500">{item?.price}</span>
        </div>
        <WalletConnectBus className="flex-1">
          {item?.address === currentAddress ? (
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
          ) : (
            <Button
              className="text-tiny flex-1"
              fullWidth
              variant="ghost"
              isLoading={loading}
              color="primary"
              radius="lg"
              startContent={
                item.locker == '1' ? (
                  <Icon icon="mdi:lock" className="text-lg" />
                ) : null
              }
              onClick={buyHandler}
            >
              {t('buttons.buy')}
            </Button>
          )}
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
