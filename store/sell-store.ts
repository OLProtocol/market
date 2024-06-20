import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Decimal } from 'decimal.js';
import { btcToSats, satsToBitcoin } from '@/lib';

export interface UtxoAssetItem {
  utxo: string;
  value: number;
  price: string;
  unit_price: string;
  // unit: 'btc' | 'sats';
  status: 'pending' | 'confirmed' | 'failed';
  tickers: {
    ticker: string;
    amount: number;
    inscriptionnum: number;
  }[];
  nslist: {
    name: string;
    utxo: string;
  }[];
}

interface SellState {
  unit: 'btc' | 'sats';
  ticker: string;
  assets_type: string;
  assets_name: string;
  type: 'ft' | 'name';
  amountUnit: 'btc' | 'sats';
  list: UtxoAssetItem[];
  add: (item: UtxoAssetItem) => void;
  changeStatus: (
    utxo: string,
    status: 'pending' | 'confirmed' | 'failed',
  ) => void;
  changePrice: (utxo: string, price: string) => void;
  changeUnit: (unit: 'btc' | 'sats') => void;
  changeTicker: (ticker: string) => void;
  changeType: (t: 'ft' | 'name') => void;
  changeAmountUnit: (unit: 'btc' | 'sats') => void;
  remove: (utxo: string) => void;
  reset: () => void;
}

export const useSellStore = create<SellState>()(
  devtools((set, get) => ({
    unit: 'sats',
    amountUnit: 'btc',
    ticker: '',
    assets_type: '',
    assets_name: '',
    type: 'ft',
    list: [
      // {
      //   utxo: 'c1751e4beb5472305875f2b7ed30f8805c5f8027c393e884fad86be2fc6bc00c:0',
      //   value: 546,
      //   price: '',
      //   unit_price: '2',
      //   status: 'pending',
      //   tickers: [
      //     {
      //       ticker: '123123123123',
      //       amount: 546,
      //       inscriptionnum: 1742327,
      //     },
      //   ],
      // },
    ],
    changePrice(utxo, price) {
      const { list, ticker, amountUnit, unit, type } = get();
      const newList = list.map((item) => {
        let amount = 0;
        if (type === 'ft') {
          amount = item.tickers.find((t) => t.ticker === ticker)?.amount || 0;
        } else if (type === 'name') {
          amount = 1;
        }
        if (price === '' || isNaN(Number(price))) {
          return {
            ...item,
            unit_price: '',
            price: '',
          };
        }
        const unitPrice = unit === 'btc' ? btcToSats(price).toString() : price;
        let amountPrice: any = new Decimal(unitPrice)
          .mul(new Decimal(amount))
          .toNumber();
        amountPrice = Math.ceil(amountPrice).toString();
        amountPrice =
          amountUnit === 'btc'
            ? satsToBitcoin(amountPrice.toString()).toString()
            : amountPrice;
        if (item.utxo === utxo) {
          return {
            ...item,
            unit_price: price,
            price: amountPrice,
          };
        }
        return item;
      });

      set({
        list: newList,
      });
    },
    changeTicker(ticker) {
      set({
        ticker,
      });
    },
    changeType(t) {
      set({
        type: t,
      });
    },
    changeStatus(utxo, status) {
      const { list } = get();
      const newList = list.map((item) => {
        if (item.utxo === utxo) {
          return {
            ...item,
            status,
          };
        }
        return item;
      });

      set({
        list: newList,
      });
    },
    changeUnit(unit) {
      const { list, ticker, amountUnit, type } = get();
      const newList = list.map((item) => {
        const unitPrice =
          unit === 'btc'
            ? satsToBitcoin(item.unit_price).toString()
            : btcToSats(item.unit_price).toString();
        let amount = 0;
        if (type === 'ft') {
          amount = item.tickers.find((t) => t.ticker === ticker)?.amount || 0;
        } else if (type === 'name') {
          amount = 1;
        }

        const satsPrice =
          unit === 'btc' ? btcToSats(unitPrice).toString() : unitPrice;
        let amountPrice = new Decimal(satsPrice)
          .mul(new Decimal(amount))
          .toString();
        amountPrice =
          amountUnit === 'btc'
            ? satsToBitcoin(amountPrice).toString()
            : amountPrice;
        return {
          ...item,
          unit_price: unitPrice,
          price: amountPrice,
        };
      });
      set({
        unit,
        list: newList,
      });
    },
    changeAmountUnit(unit) {
      const { list, ticker } = get();
      const newList = list.map((item) => {
        return {
          ...item,
          price:
            unit === 'btc'
              ? satsToBitcoin(item.price).toString()
              : btcToSats(item.price).toString(),
        };
      });
      set({
        amountUnit: unit,
        list: newList,
      });
    },
    add: (item) => {
      const { list, ticker, type } = get();
      if (!list.find((i) => i.utxo === item.utxo)) {
        let amount = 0;
        if (type === 'ft') {
          amount = item.tickers.find((t) => t.ticker === ticker)?.amount || 0;
        } else if (type === 'name') {
          amount = 1;
        }
        let amountPrice = new Decimal(item.unit_price)
          .mul(new Decimal(amount))
          .toString();
        amountPrice = satsToBitcoin(amountPrice).toString();
        set((state) => {
          return {
            list: [
              ...state.list,
              {
                ...item,
                price: amountPrice,
              },
            ],
          };
        });
      }
    },
    remove: (utxo) => {
      set((state) => {
        return {
          list: state.list.filter((item) => item.utxo !== utxo),
        };
      });
    },
    reset: () => {
      set({
        ticker: '',
        unit: 'sats',
        amountUnit: 'btc',
        list: [],
      });
    },
  })),
);
