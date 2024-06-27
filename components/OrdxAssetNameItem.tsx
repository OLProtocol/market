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
export const OrdxAssetNameItem = ({
  item,
  onSell,
  onCancelOrder,
  selected,
  canSelect,
  onSelect,
}: Props) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      className="forced-colors:hidden border-none w-full h-[14rem] md:h-[18rem] relative hover:border-1 hover:border-solid hover:border-indigo-500 bg-repeat hover:bg-[url('/bg.gif')]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      <CardBody className="h-7/10">
        <div className="flex-1 text-xs tracking-widest antialiased md:text-base uppercase bg-auto bg-left bg-no-repeat bg-[url('/tick/Pearl.png')]">
          <div className={`label ${isHovered ? 'label-hover' : ''}`}>
            <span className="flex absolute top-2 left-2 text-center text-gray-200">
              {item?.assets_list[0]?.assets_name}
            </span>
          </div>
          <div className="flex justify-center">
            <section className="text-center pt-8">
              <p className="font-medium pt-2 text-2xl md:text-3xl md:pt-3"></p>
              <p className="pt-5">
                <Snippet
                  codeString={item?.utxo}
                  className="bg-transparent text-blue-400"
                  symbol=""
                  size="sm"
                  variant="flat"
                >
                  <span className="font-thin md:pl-8">
                    {hideStr(item?.utxo, 6)}
                  </span>
                </Snippet>
              </p>
            </section>
          </div>
        </div>
      </CardBody>

      <CardFooter className="block bg-gray-800 h-3/10">
        <div className="flex justify-center pb-1">
          {item.order_id === 0 ? (
            <Button
              // fullWidth
              variant="ghost"
              size="md"
              isLoading={loading}
              // color="primary"
              radius="sm"
              onClick={sellHandler}
              className="text-tiny h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
            >
              {t('buttons.list_sale')}
            </Button>
          ) : (
            <Button
              className="text-tiny h-8 w-full bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
              // fullWidth
              variant="flat"
              // color="default"
              radius="sm"
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
