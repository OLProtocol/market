import { useBuyStore } from '@/store';
import { useMemo } from 'react';
import { Decimal } from 'decimal.js';

export const BatchCart = () => {
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
    </div>
  );
};
