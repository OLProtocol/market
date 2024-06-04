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
import styles from '/styles/Orderitem.module.css';

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
  const [isHovered, setIsHovered] = useState(false);
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
      // className="border-none w-full h-[14rem] md:h-[18rem] relative"
      className="forced-colors:hidden border-none w-full h-[14rem] md:h-[18rem] relative hover:border-1 hover:border-solid hover:border-indigo-500 bg-repeat hover:bg-[url('/bg.gif')]"
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
        <div className="flex-1 text-xs tracking-widest antialiased md:text-base uppercase bg-auto bg-left bg-no-repeat bg-[url('/tick/Pearl.png')]">
          <div className={`${styles.label} ${isHovered ? styles['label-hover'] : ''}`}>
            <span className="flex absolute top-2 left-2 text-center text-gray-500">
              {item?.assets[0].ticker}
            </span>
          </div>
          <div className="flex justify-center">
          <section className="text-center pt-4 font-mono md:pt-8">
              <p className="font-medium pt-2 text-2xl md:text-3xl md:pt-3">
                {thousandSeparator(item?.assets[0].amount)}
              </p>
              <p className="pt-2 md:pb-2 md:text-sm">
                <span className="font-bold text-amber-400">
                  {(
                    item?.assets[0].unit_price/item?.assets[0].unit_amount
                  ).toFixed(2)}
                </span>
                <span className="font-mono text-gray-500">
                  &nbsp;sats/{item?.assets[0].ticker}
                </span>
              </p>
              <p className='md:text-sm'>
                <span className="font-mono text-gray-400">
                  $
                  <BtcPrice
                    btc={
                      item?.assets[0].unit_price /
                      item?.assets[0].unit_amount /
                      100000000
                    }
                  />
                  &nbsp; /{item?.assets[0].ticker}
                </span>
              </p>
            </section>
          </div>
        </div>
      </CardBody>
      <CardFooter className="block bg-gray-800 h-2/5">
        <div className="pb-2 flex-1 flex items-center justify-between gap-4 font-bold md:pb-5">
          <div className="flex">
            {item.currency === 'BTC' && (
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-0.5" />
            )}
            <span className="text-sm text-gray-400">{item?.price}</span>
          </div>
          <div className="flex">
            <span className="text-sm text-gray-500">
              &nbsp;&nbsp;$
              <BtcPrice btc={item?.price} />
            </span>
          </div>
        </div>
        <WalletConnectBus className="flex-1" text={t('buttons.buy')}>
          {item?.address === currentAddress && showResale ? (
            <Button
            className="text-tiny h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
            variant="flat"             
            radius="sm"
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
            className="flex-1 border-none h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
            variant="ghost"
            size="md"
            isDisabled={!canBuy}
            isLoading={loading}             
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
