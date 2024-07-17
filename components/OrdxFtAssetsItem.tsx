import {
  Button,
  Card,
  CardFooter,
  CardBody,
  Checkbox,
  Chip,
  Snippet,
  Image,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { hideStr, thousandSeparator } from '@/lib/utils';
import { UtxoContent } from './UtxoContent';
interface Props {
  item: any;
  assets_name: string;
  onSell?: (item: any) => void;
  onTransfer?: (item: any) => void;
  onCancelOrder?: () => void;
  selected?: boolean;
  canSelect?: boolean;
  onSelect?: (b: boolean) => void;
  delay?: number;
}
export const OrdxFtAssetsItem = ({
  item,
  onSell,
  onTransfer,
  onCancelOrder,
  selected,
  assets_name,
  canSelect,
  onSelect,
  delay,
}: Props) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  let isText = true;

  const sellHandler = async () => {
    setLoading(true);
    await onSell?.(item);
    setLoading(false);
  };

  const showContent = (content_type?: string, delegate?: string) => {
    if (!content_type) return false;
    return (
      !!delegate ||
      !['text/plain'].some((type) => content_type.indexOf(type) > -1)
    );
  };
  const asset = useMemo(
    () =>
      item?.assets_list?.find((v) => v?.assets_name === assets_name) ||
      item?.assets_list[0],
    [item?.assets_list, assets_name],
  );
  let tickContent =
    "{'p':'ordx','op':'mint','tick':'" +
    asset?.assets_name +
    "','amt':'" +
    asset?.amount +
    "'}";
  if (
    asset?.assets_type === 'exotic' ||
    showContent(item?.assets?.[0]?.content_type, item?.assets?.[0]?.delegate)
  ) {
    tickContent = '';
    isText = false;
  }

  const cancelHandler = async () => {
    setLoading(true);
    await onCancelOrder?.();
    setLoading(false);
  };
  return (
    <Card
      radius="lg"
      className="card-hover forced-colors:hidden border-none w-[12rem] h-[18rem] md:w-[16rem] md:h-[22.6rem] relative outline-2 hover:outline-offset-2 hover:border hover:border-solid hover:border-indigo-500 bg-repeat hover:bg-[url('/bg.gif')]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {canSelect && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-30 cursor-pointer"
          onClick={() => {
            onSelect?.(!selected);
          }}
        >
          <div className="flex absolute top-4 right-4">
            <Checkbox isSelected={selected} onValueChange={onSelect} />
          </div>
        </div>
      )}
      <CardBody className="radius-lg w-[12rem] h-[12rem] md:w-[16rem] md:h-[16rem] top-0 bottom-0 left-0">
        <div className="flex-1 text-xs tracking-widest antialiased md:text-base uppercase">
          <div className="flex-1 justify-center h-full overflow-hidden top- left-1">
            <div className="absolute items-center inset-0 z-0">
              {asset?.assets_type === 'exotic' ? (
                <Image
                  radius="full"
                  src={`/raresats/${asset?.assets_name}.png`}
                  alt="logo"
                  className="w-32 h-32 md:w-36 md:h-36 top-8 left-8 md:top-14 md:left-14 rounded-full"
                />
              ) : (
                showContent(asset?.content_type, asset?.delegate) && (
                  <div className="w-full h-full">
                    <UtxoContent
                      inscriptionId={asset?.inscriptionId}
                      delay={delay}
                      utxo={item?.utxo}
                    ></UtxoContent>
                  </div>
                )
              )}
            </div>
            {showContent(asset?.content_type, asset?.delegate) || !isText ? (
              <section className="text-center font-mono absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end">
                {asset?.assets_type === 'exotic' ? (
                  <p className="font-medium text-2xl md:text-3xl mb-4">
                    {thousandSeparator(asset?.amount)}
                  </p>
                ) : (
                  <p className="font-medium text-2xl md:text-3xl mb-1">
                    {thousandSeparator(asset?.amount)}
                  </p>
                )}
              </section>
            ) : isText ? (
              <section className="text-center pt-10 font-mono md:pt-12 absolute top-0 left-0 w-full h-full z-40">
                <p className="font-medium pt-3 text-2xl md:text-3xl md:pt-3">
                  {thousandSeparator(asset?.amount)}
                </p>
                <p className="pt-12 md:pb-2 md:text-xs">
                  <span className="font-mono text-gray-100">{tickContent}</span>
                </p>
              </section>
            ) : (
              ''
            )}
          </div>
          <div className="grid justify-items-start ... z-40">
            <div className="left-0 top-0 flex absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100">
              {asset?.assets_name}
            </div>
          </div>
        </div>
      </CardBody>

      <CardFooter className="block item-center bg-gray-800 w-[12rem] h-[6rem] md:h-[6.5rem]  md:w-[18rem]">
        <Snippet
          codeString={item?.utxo}
          className="bg-transparent text-blue-400 pt-0 pb-0"
          symbol=""
          size="sm"
          variant="flat"
        >
          <span className="font-thin md:pl-8">{hideStr(item?.utxo, 6)}</span>
        </Snippet>

        {/* <div className="pb-1 md:pb-2">
          {asset?.assets_name}
          <span className="relative pl-4 font-medium text-lg md:text-xl">
            assets: {thousandSeparator(asset?.amount)}
          </span>
        </div> */}
        <div className="flex item-center pb-1 gap-2">
          {item.order_id === 0 ? (
            <>
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
              <Button
                // fullWidth
                variant="ghost"
                size="md"
                isLoading={loading}
                // color="primary"
                radius="sm"
                onClick={() => onTransfer?.(item)}
                className="text-tiny h-8 w-5/6 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 hover:border-none hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 ${buttonStyles.buyNowButton}` uppercase"
              >
                transfer
              </Button>
            </>
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
