import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface UtxoAssetItem {
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

interface SellState {
  list: UtxoAssetItem[];
  add: (item: UtxoAssetItem) => void;
  changeStatus: (
    utxo: string,
    status: 'pending' | 'confirmed' | 'failed',
  ) => void;
  changePrice: (utxo: string, price: string) => void;
  remove: (utxo: string) => void;
  reset: () => void;
}

export const useSellStore = create<SellState>()(
  devtools((set, get) => ({
    list: [
      // {
      //   utxo: "1f8863156b8c53aeddcf912cbb02884e0b1379920cd698c8f9080e126ba98593:0",
      //   value: 546,
      //   tickers: [
      //     {
      //       ticker: "123123123123",
      //       amount: 546,
      //       inscriptionnum: 1742327,
      //     },
      //   ],
      // },
    ],
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
