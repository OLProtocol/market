import { Image } from '@nextui-org/react';
import { UtxoContent } from '@/components/UtxoContent';
import { thousandSeparator } from '@/lib/utils';
import { BtcPrice } from '../BtcPrice';

export const OrderAssetContent = ({
  asset,
  assets_type,
  order_source,
  othersAssets,
  utxo,
}) => {
  const showContent = (content_type?: string, delegate?: string) => {
    if (!content_type) return false;
    return (
      !!delegate ||
      !['text/plain'].some((type) => content_type.indexOf(type) > -1)
    );
  };

  return (
    <div className="flex-1 text-xs tracking-widest antialiased md:text-base">
      <div className="flex-1 justify-center h-full overflow-hidden top-1 left-1">
        <div className="absolute items-center inset-0 z-10">
          {asset?.assets_type === 'exotic' ? (
            <Image
              src={`/raresats/${asset?.assets_name}.svg`}
              alt="logo"
              className="w-32 h-32 md:w-36 md:h-36 top-8 left-8 md:top-14 md:left-14"
            />
          ) : (
            showContent(asset?.content_type, asset?.delegate) && (
              <div className="h-full w-full">
                <UtxoContent
                  defaultImage="/ordx-utxo-content-default.jpg"
                  inscriptionId={asset?.inscription_id}
                  utxo={utxo}
                />
              </div>
            )
          )}
        </div>
        <AssetContentOverlay
          asset={asset}
          assets_type={assets_type}
          showContent={showContent}
        />
      </div>
      {assets_type === 'exotic' && (
        <div className="flex gap-1 absolute bottom-2 px-1 overflow-x-auto w-full left-0 justify-center">
          {othersAssets?.map((item, i) => (
            <Image
              key={i}
              src={`/raresats/${item?.assets_name}.svg`}
              alt="icon"
              className="w-5 h-5"
            />
          ))}
        </div>
      )}
      {assets_type !== 'ns' && (
        <div className="left-0 top-0 flex absolute p-2 rounded-br-[1rem] text-center text-gray-200 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 backdrop-saturate-50 hover:text-gray-100 z-10">
          {asset?.assets_name}
        </div>
      )}
    </div>
  );
};

const AssetContentOverlay = ({ asset, assets_type, showContent }) => (
  <>
    {showContent(asset?.content_type, asset?.delegate) ? (
      <section className="text-center font-mono absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end">
        <p className="font-medium text-2xl md:text-3xl mb-1">
          {thousandSeparator(asset?.amount)}
        </p>
      </section>
    ) : (
      <section className="text-center pt-10 font-mono md:pt-12 absolute top-0 left-0 w-full h-full z-20">
        <p className="font-medium pt-5 text-2xl md:text-3xl md:pt-6">
          {assets_type === 'ns'
            ? asset?.assets_name
            : thousandSeparator(asset?.amount)}
        </p>
        {assets_type !== 'ns' && <AssetPriceInfo asset={asset} />}
      </section>
    )}
  </>
);

const AssetPriceInfo = ({ asset }) => (
  <>
    <p className="pt-12 md:pb-2 md:text-sm">
      <span className="font-bold text-amber-400">
        {(asset?.unit_price / asset?.unit_amount).toFixed(2)}
      </span>
      <span className="font-mono text-gray-100">
        &nbsp;sats/{asset?.assets_name}
      </span>
    </p>
    <p className="md:text-sm">
      <span className="font-mono text-gray-100">
        $<BtcPrice btc={asset?.unit_price / asset?.unit_amount / 100000000} />
        &nbsp; /{asset?.assets_name}
      </span>
    </p>
  </>
);
