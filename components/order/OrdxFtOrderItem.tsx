import {
  Divider,
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  CardBody,
  Chip,
} from '@nextui-org/react';
import { WalletConnectBus } from '@/components/walllet/WalletConnectBus';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const OrdxFtOrderItem = ({ item, onBuy, onCancelOrder }: any) => {
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
      className="border-none w-full h-[14rem] md:h-[18rem]"
    >
      <CardBody>
        <div className="flex flex-col h-full">
          <div className="flex-1 text-sm md:text-base">
            {item?.assets?.map((v: any) => (
              <div key={v.inscriptionnum}>
                <div>
                  {t('common.tick')}: {v.ticker}
                </div>
                <div>
                  {t('common.asset_num')}: {v.amount}
                </div>
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
              className="text-tiny flex-1 "
              variant="flat"
              isLoading={loading}
              color="default"
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
