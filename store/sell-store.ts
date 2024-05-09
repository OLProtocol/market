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
}

interface SellState {
  unit: 'btc' | 'sats';
  ticker: string;
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
  changeAmountUnit: (unit: 'btc' | 'sats') => void;
  remove: (utxo: string) => void;
  reset: () => void;
}

export const useSellStore = create<SellState>()(
  devtools((set, get) => ({
    unit: 'sats',
    amountUnit: 'btc',
    ticker: '123123123123',
    list: [
      {
        utxo: 'c1751e4beb5472305875f2b7ed30f8805c5f8027c393e884fad86be2fc6bc00c:0',
        value: 546,
        price: '',
        unit_price: '2',
        status: 'pending',
        tickers: [
          {
            ticker: '123123123123',
            amount: 546,
            inscriptionnum: 1742327,
          },
        ],
      },
    ],
    changePrice(utxo, price) {
      if (
        price === undefined ||
        isNaN(Number(price)) ||
        Number(price) < 0 ||
        price == ''
      ) {
        price = '0';
      }
      const { list, ticker, amountUnit } = get();
      const newList = list.map((item) => {
        const tickerAmount =
          item.tickers.find((t) => t.ticker === ticker)?.amount || 0;
        let amountPrice = new Decimal(price)
          .mul(new Decimal(tickerAmount))
          .toString();
        amountPrice =
          amountUnit === 'btc'
            ? satsToBitcoin(amountPrice).toString()
            : btcToSats(amountPrice).toString();
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
      const { list, ticker } = get();
      const newList = list.map((item) => {
        return {
          ...item,
          unit_price:
            unit === 'btc'
              ? satsToBitcoin(item.unit_price).toString()
              : btcToSats(item.unit_price).toString(),
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
      });
    },
    add: (item) => {
      const { list } = get();
      if (!list.find((i) => i.utxo === item.utxo)) {
        set((state) => {
          return {
            list: [...state.list, item],
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
        amountUnit: 'sats',
        list: [],
      });
    },
  })),
);
