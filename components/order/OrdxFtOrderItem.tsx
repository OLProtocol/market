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
import { WalletConnectBus } from '@/components/order/WalletConnectBus';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { hideStr, thousandSeparator } from '@/lib/utils';

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
      <CardBody className='h-4/6'>
        <div className="flex-1 text-sm md:text-base">
          <Chip
            variant="shadow"
            size='lg'
            radius='sm'
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            {item?.assets[0].ticker}
          </Chip>
          <div className='flex justify-center'>
            <section className="text-center pt-8">
              <p className='text-2xl font-thin text-white'>
                {thousandSeparator(item?.assets[0].amount)}
              </p>
              <p className='pt-5'>
                <span className='font-medium text-blue-400'>{(item?.assets[0].unit_price*100000000/item?.assets[0].unit_amount).toFixed(2)}</span>
                <span className='font-thin text-gray-400'>&nbsp;sats/{item?.assets[0].ticker}</span>
              </p>
              {/* <p>
                <Snippet
                  codeString={item?.utxo}
                  className="bg-transparent text-gray-500"
                  symbol=""
                  size="lg"
                  variant="flat"
                >
                  <span className='font-thin'>{hideStr(item?.utxo, 6)}</span>
                </Snippet>
              </p> */}
            </section>
          </div>

        </div>
      </CardBody>
      <CardFooter className="block bg-gray-800 h-2/6">
        <div className='pb-2 flex'>
          {item.currency === 'BTC' && (
            <Icon icon="cryptocurrency-color:btc" className='mr-1 mt-0.5' />
          )}
          <span className='text-sm text-amber-500'>{item?.price}</span>
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
              className="flex-1 border"
              fullWidth
              variant="ghost"
              size='md'
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
