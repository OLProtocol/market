import { useBuyStore } from '@/store';
import { Divider } from '@nextui-org/react';
import { useMemo } from 'react';
import { Decimal } from 'decimal.js';
import { satsToBitcoin } from '@/lib';
interface Props {
  splitDummyBol: boolean;
  networkFee: number;
  dummyNetworkFee?: number;
  serviceFee: number;
}
export const BatchCart = ({ splitDummyBol, networkFee, serviceFee }: Props) => {
  const { list } = useBuyStore();
  const totalPrice = useMemo(
    () =>
      list.reduce((a, b) => {
        const decimalA = new Decimal(a);
        const decimalB = new Decimal(Number(b.price));
        return decimalA.plus(decimalB).toNumber();
      }, 0) || 0,
    [list],
  );
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
            className="flex items-center justify-between py-2"
          >
            <div>
              {item.assets.map((asset) => (
                <div key={asset.ticker}>{asset.ticker}</div>
              ))}
            </div>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
      <div>{splitDummyBol && <div>需要分割虚拟UTXO</div>}</div>
      <Divider className="my-2" />
      <div>
        <div className="flex justify-between items-center">
          <span>network fee</span>
          <span>~ {satsToBitcoin(networkFee)} BTC</span>
        </div>
        <div className="flex justify-between items-center">
          <span>sercice fee</span>
          <span>{satsToBitcoin(serviceFee)} BTC</span>
        </div>
      </div>
    </div>
  );
};
