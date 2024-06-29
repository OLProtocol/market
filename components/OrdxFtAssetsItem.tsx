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
  let isText = true;
  let tickContent = "{'p':'ordx','op':'mint','tick':'"+item?.assets_list?.[0]?.assets_name+"','amt':'"+item?.assets_list?.[0]?.amount+"'}";
 
  const sellHandler = async () => {
    setLoading(true);
    await onSell?.(item);
    setLoading(false);
  };
  const showContent = (content_type?: string) => {
    if (!content_type) return false;
    return !['text/plain'].some((type) => content_type.indexOf(type) > -1);
  };
  if( item?.assets_list?.[0]?.assets_type === 'exotic' || showContent(item?.assets?.[0]?.content_type) ){
    tickContent ='';
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
      className="card-hover forced-colors:hidden border-none w-[12rem] h-[17.5rem] md:w-[16rem] md:h-[21.75rem] relative hover:border hover:border-solid hover:border-indigo-500"
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
      <CardBody className="radius-lg w-[11.5rem] h-[11.75rem] md:w-[15.5rem] md:h-[15.75rem] top-1 bottom-0 left-1">
        <div className="flex-1 text-xs tracking-widest antialiased md:text-base">
           <div className={`label ${isHovered ? 'label-hover' : ''}`}>
              <span className="flex absolute top-2 left-2 text-center text-gray-100 uppercase">
                {item?.assets_list?.[0]?.assets_name}
              </span>
            </div>
            <div className="flex-1 justify-center h-full overflow-hidden top-0 left-0">
            <div className="absolute items-center inset-0 z-0">
            {
             item?.assets_list?.[0]?.assets_type === 'exotic' ? (
                    <Image
                      radius="full"
                      src={`/raresats/${item?.assets_list?.[0]?.assets_name}.png`}
                      alt="logo"
                      className="w-36 h-36 top-14 left-14 rounded-full"
                    />
                  ) : (
                    showContent(item?.assets_list?.[0]?.content_type) && (
                      <UtxoContent
                        inscriptionId={item?.assets_list?.[0]?.inscriptionId}
                        utxo={item?.utxo}
                      ></UtxoContent>
                    )
                  )
                }              
            </div> 
            {  showContent(item?.assets_list?.[0]?.content_type) || !isText?(
                <section className="text-center font-mono absolute top-0 left-0 w-full h-full z-40 flex flex-col justify-end">
                  <p className="font-medium text-2xl md:text-3xl mb-1">
                    {thousandSeparator(item?.assets_list?.[0]?.amount)}
                  </p>    
                </section>

                 ):(
                  isText?( 
                <section className="text-center pt-10 font-mono md:pt-12 absolute top-0 left-0 w-full h-full z-40">
                    <p className="font-medium pt-3 text-2xl md:text-3xl md:pt-3">
                      {thousandSeparator(item?.assets_list?.[0]?.amount)}
                    </p>               
                    <p className="pt-12 md:pb-2 md:text-xs">                      
                      <span className="font-mono text-gray-100">
                        {tickContent}
                      </span>
                    </p>                    
                  </section>
                  ):( '')
                 
              )}        
        </div>
      </div>

      </CardBody>

      <CardFooter className="block item-center bg-gray-800 w-[12rem] h-[6rem] md:w-[18rem]">
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
          {item?.assets_list?.[0]?.assets_name}
          <span className="relative pl-4 font-medium text-lg md:text-xl">
            assets: {thousandSeparator(item?.assets_list?.[0]?.amount)}
          </span>
        </div> */}
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
