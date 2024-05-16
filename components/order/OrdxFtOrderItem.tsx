import {
  Button,
  Card,
  CardFooter,
  CardBody,
  Chip,
  Checkbox,
  Listbox,
  ListboxItem,
  Snippet,
} from '@nextui-org/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Icon } from '@iconify/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { hideStr, thousandSeparator } from '@/lib/utils';
import { BtcPrice } from '../BtcPrice';

interface Props {
  item: any;
  onBuy?: any;
  showResale?: boolean;
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
  showResale = true,
}: Props) => {
  const { address: currentAddress } = useReactWalletStore();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const buyHandler = async () => {
    setLoading(true);
    try {
      await onBuy?.(item);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const canBuy = useMemo(
    () => currentAddress && item.address !== currentAddress,
    [currentAddress, item.address],
  );
  const selectHandler = (b: boolean) => {
    if (!canBuy) {
      return;
    }
    onSelect?.(b);
  };

  return (
    <Card
      isPressable
      radius="lg"
      className="border-none w-full h-[14rem] md:h-[18rem] relative"
    >
      {canSelect && (
        <div
          className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
          onClick={() => {
            selectHandler?.(!selected);
          }}
        >
          <div className="flex absolute top-4 right-4">
            <Checkbox
              isDisabled={!canBuy}
              isSelected={selected}
              onValueChange={selectHandler}
            />
          </div>
        </div>
      )}
      <CardBody className="h-3/5">
        <div className="flex-1 text-sm md:text-base">
          <span className='text-gray-500'>{item?.assets[0].ticker}</span>
          <div className="flex justify-center">
            <section className="text-center pt-8">
              <p className="text-xl font-medium">
                {thousandSeparator(item?.assets[0].amount)}
              </p>
              <p className="pt-2">
                <span className="font-medium text-blue-400">
                  {(
                    item?.assets[0].unit_price / item?.assets[0].unit_amount
                  ).toFixed(2)}
                </span>
                <span className="font-thin text-gray-400">
                  &nbsp;sats/{item?.assets[0].ticker}
                </span>
              </p>
              <p>
                <span className="font-thin text-gray-400">
                  $<BtcPrice btc={(item?.assets[0].unit_price / item?.assets[0].unit_amount)/100000000} />
                </span>
              </p>
            </section>
          </div>
        </div>
      </CardBody>
      <CardFooter className="block bg-gray-800 h-2/5">
        <div className="pb-2 flex">
          {item.currency === 'BTC' && (
            <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-0.5" />
          )}
          <span className="text-sm text-amber-500">{item?.price}</span>
          <span className="text-sm font-thin text-gray-400">
            &nbsp;&nbsp;$<BtcPrice btc={item?.price} />
          </span>
        </div>
        <WalletConnectBus className="flex-1" text={t('buttons.buy')}>
          {item?.address === currentAddress && showResale ? (
            <Button
              className="text-tiny"
              // fullWidth
              variant="flat"
              color="danger"
              radius="lg"
              startContent={
                item.locker == '1' ? (
                  <Icon icon="mdi:lock" className="text-lg" />
                ) : null
              }
              onClick={onCancelOrder}
            >
              {t('buttons.remove_sale')}
            </Button>
          ) : (
            <Button
              className="flex-1 border"
              // fullWidth
              variant="ghost"
              size="md"
              isDisabled={!canBuy}
              isLoading={loading}
              color="primary"
              radius="sm"
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
      </CardFooter>
    </Card>
  );
};
