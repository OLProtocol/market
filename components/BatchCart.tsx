import { useBuyStore } from '@/store';
import { Divider, Spinner, Button } from '@nextui-org/react';
import { useMemo } from 'react';
import { Decimal } from 'decimal.js';
import { Icon } from '@iconify/react';
import { satsToBitcoin } from '@/lib';
interface Props {
  splitDummyBol: boolean;
  calcLoading: boolean;
  networkFee: number;
  dummyNetworkFee?: number;
  serviceFee: number;
}
export const BatchCart = ({
  splitDummyBol,
  calcLoading,
  networkFee,
  serviceFee,
}: Props) => {
  const { list, remove } = useBuyStore();
  const totalPrice = useMemo(
    () =>
      list.reduce((a, b) => {
        const decimalA = new Decimal(a);
        const decimalB = new Decimal(Number(b.price));
        return decimalA.plus(decimalB).toNumber();
      }, 0) || 0,
    [list],
  );
  const removeHandler = (u: string) => {
    remove(u);
  };
  return (
    <div className="fixed max-w-screen w-96 bottom-20 right-0 bg-gray-100 dark:bg-slate-900 rounded-t-lg px-4 z-10">
      <div className="h-10 flex items-center justify-between font-bold">
        <span>Cart ({list.length})</span>
        <span>Total: {totalPrice} BTC</span>
      </div>
      <Divider className="my-2" />
      <div>
        {list.map((item) => (
          <div
            key={item.order_id}
            className="flex items-center justify-between py-2 h-14"
          >
            <div>
              <div className="mb-1">
                {item.assets.map((asset) => (
                  <div key={asset.ticker}>{asset.ticker}</div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon="cryptocurrency-color:btc" className="" />
                {item.price} BTC
              </div>
            </div>
            <Button
              isIconOnly
              size="sm"
              onClick={() => removeHandler(item.utxo)}
            >
              <Icon icon="mdi:close" className="text-white text-xl" />
            </Button>
          </div>
        ))}
      </div>
      {/* <div>{splitDummyBol && <div>需要分割虚拟UTXO</div>}</div> */}
      <Divider className="my-2" />
      <div>
        <div className="flex justify-between items-center">
          <span>network fee</span>
          {calcLoading ? (
            <Spinner size="sm" color="primary" />
          ) : (
            <span>~ {satsToBitcoin(networkFee)} BTC</span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span>sercice fee</span>
          <span>{satsToBitcoin(serviceFee)} BTC</span>
        </div>
      </div>
    </div>
  );
};
