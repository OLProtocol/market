import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SellState {
  list: any[];
  add: (item: any) => void;
  reset: () => void;
}

export const useSellStore = create<SellState>()(
  devtools((set) => ({
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
    add: (item) => {
      set((state) => {
        return {
          list: [...state.list, item],
        };
      });
    },
    reset: () => {
      set({
        list: [],
      });
    },
  }))
);
