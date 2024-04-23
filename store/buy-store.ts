import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface BuyUtxoAssetItem {
  utxo: string;
  value: number;
  price: string;
  status: 'pending' | 'confirmed' | 'failed';
  tickers: {
    ticker: string;
    amount: number;
    inscriptionnum: number;
  }[];
}

interface BuyState {
  list: any[];
  add: (item: any) => void;
  changeStatus: (
    utxo: string,
    status: 'pending' | 'confirmed' | 'failed',
  ) => void;
  changePrice: (utxo: string, price: string) => void;
  remove: (utxo: string) => void;
  reset: () => void;
}

export const useBuyStore = create<BuyState>()(
  devtools((set, get) => ({
    list: [],
    changePrice(utxo, price) {
      const { list } = get();
      const newList = list.map((item) => {
        if (item.utxo === utxo) {
          return {
            ...item,
            price,
          };
        }
        return item;
      });

      set({
        list: newList,
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
        list: [],
      });
    },
  })),
);
