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
import { UtxoContent } from './UtxoContent';
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
  const [isHovered, setIsHovered] = useState(false);
  const sellHandler = async () => {
    setLoading(true);
    await onSell?.(item);
    setLoading(false);
  };
  const showContent = (content_type?: string) => {
    if (!content_type) return false;
    return !['text/plain'].some((type) => content_type.indexOf(type) > -1);
  };
  const cancelHandler = async () => {
    setLoading(true);
    await onCancelOrder?.();
    setLoading(false);
  };
  return (
    <Card
      radius="lg"
      className="card-hover forced-colors:hidden border-none w-[12rem] h-[18rem] md:w-[16rem] md:h-[24rem] relative hover:border hover:border-solid hover:border-indigo-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {canSelect && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-20 cursor-pointer"
          onClick={() => {
            onSelect?.(!selected);
          }}
        >
          <div className="flex absolute top-4 right-4">
            <Checkbox isSelected={selected} onValueChange={onSelect} />
          </div>
        </div>
      )}
      <CardBody className="radius-lg w-[11.5rem] h-[11.75rem] md:w-[15.5rem] md:h-[15.75rem] top-1 bottom-0 left-1">
        <div className="flex-1 text-xs tracking-widest antialiased md:text-base uppercase">
          <div className="absolute inset-0 z-0">
            {item?.assets_list?.[0]?.assets_type?.toLowerCase()}
            {showContent(item?.assets_list?.[0]?.content_type) && (
              <UtxoContent
                inscriptionId={item?.assets_list?.[0]?.inscriptionId}
                utxo={item?.utxo}
              />
            )}
          </div>

          <div className={`label ${isHovered ? 'label-hover' : ''}`}>
            <span className="flex absolute top-2 left-2 text-center text-gray-200">
              {item?.assets_list?.[0]?.assets_name}
            </span>
          </div>
        </div>
      </CardBody>

      <CardFooter className="block item-center bg-gray-800 w-[12rem] h-[6rem] md:w-[18rem] md:h-[8rem]">
        <Snippet
          codeString={item?.utxo}
          className="bg-transparent text-blue-400 pt-0 pb-0"
          symbol=""
          size="sm"
          variant="flat"
        >
          <span className="font-thin md:pl-8">{hideStr(item?.utxo, 6)}</span>
        </Snippet>

        <div className="pb-1 md:pb-2">
          {item?.assets_list?.[0]?.assets_name}
          <span className="relative pl-4 font-medium text-lg md:text-xl">
            assets: {thousandSeparator(item?.assets_list?.[0]?.amount)}
          </span>
        </div>
        <div className="flex item-center pb-1">
          {item.order_id === 0 ? (
            <Button
              // fullWidth
              variant="ghost"
              size="md"
              isLoading={loading}
              // color="primary"
              radius="sm"
              onClick={sellHandler}
              className="text-tiny h-8 w-5/6 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
            >
              {t('buttons.list_sale')}
            </Button>
          ) : (
            <Button
              className="text-tiny h-8 w-5/6 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
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
