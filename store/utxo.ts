import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Decimal } from 'decimal.js';
import { filterUtxosByValue } from '@/lib';
import { last, sort } from 'radash';

export interface UtxoItem {
  status: 'unspend' | 'locked';
  location: 'remote' | 'local';
  utxo: string;
  txid: string;
  vout: number;
  value: number;
}
interface UtxoState {
  list: UtxoItem[];
  setList: (list: UtxoItem[]) => void;
  getUnspendUtxos: () => UtxoItem[];
  selectUtxosByAmount: (amount: number) => UtxoItem[];
  add: (item: UtxoItem) => void;
  remove: (utxo: string) => void;
  removeUtxos: (utxos: string[]) => void;
  reset: () => void;
}

export const useUtxoStore = create<UtxoState>()(
  devtools((set, get) => ({
    list: [],
    setList: (list) => {
      sort(list, (f) => f.value, true);
      set({ list });
    },
    add: (item) => {
      const list = get().list;
      list.push(item);
      sort(list, (f) => f.value, true);
      set({ list });
    },
    remove: (utxo) => {
      const list = get().list.filter((item) => item.utxo !== utxo);
      set({ list });
    },
    removeUtxos: (utxos) => {
      const list = get().list.filter(
        (item) => !utxos.find((u) => u === item.utxo),
      );
      set({ list });
    },
    getUnspendUtxos: () => {
      return get().list.filter((v) => v.status === 'unspend') || [];
    },
    selectUtxosByAmount: (amount: number) => {
      const { list } = get();
      const unspendList = list.filter((v) => v.status === 'unspend');
      const filterlist = unspendList.filter((v) => v.value >= amount);
      let selectUtxos: any = [];
      if (filterlist.length) {
        selectUtxos = [filterlist[filterlist.length - 1]];
      } else {
        selectUtxos = filterUtxosByValue(unspendList, amount).utxos;
      }
      list.forEach((v) => {
        if (!!selectUtxos.find((u) => u.utxo === v.utxo)) {
          v.status = 'locked';
        }
      });
      set({ list });
      return selectUtxos;
    },
    reset: () => {
      set({
        list: [],
      });
    },
  })),
);
