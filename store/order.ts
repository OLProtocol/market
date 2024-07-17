import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import localForage from 'localforage';
// import { InscribeType } from '@/types';
// import { savePaidOrder } from '@/api';

type OrderStatus =
  | 'pending'
  | 'paid'
  | 'paid_error'
  | 'commit_success'
  | 'commit_error'
  | 'inscribe_wait'
  | 'inscribe_success'
  | 'inscribe_fail'
  | 'timeout';

export interface OrderItemType {
  orderId: string;
  type: any;
  inscription: any;
  secret: string;
  txid?: string;
  oneUtxo: boolean;
  toAddress: string[];
  network: string;
  files: any[];
  metadata: any;
  fee: {
    serviceFee: number;
    totalFee: number;
    networkFee: number;
    discountServiceFee: number;
    totalInscriptionSize: number;
  };
  commitTx?: {
    txid: string;
    amount: number;
    vout: number;
  };
  feeRate: number;
  status: OrderStatus;
  createAt: number;
}
interface OrderState {
  list: OrderItemType[];
  saveLength: number;
  setList: (l: OrderItemType[]) => void;
  add: (item: OrderItemType) => void;
  changeStatus: (orderId: string, status: OrderStatus) => void;
  checkAllList: () => void;
  addSucccessTxid: (orderId: string, txid: string) => void;
  setCommitTx: (orderId: string, tx: any) => void;
  findOrder: (orderId: string) => OrderItemType | undefined;
  reset: () => void;
}

export const useOrderStore = create<OrderState>()(
  devtools(
    persist(
      (set, get) => ({
        list: [],
        saveLength: 0,
        setList: (l) => {
          set({
            list: l,
          });
        },
        add: (l) => {
          set({
            list: [...get().list, l],
          });
        },
        checkAllList: () => {
          const len = get().list.length;
          const newList: OrderItemType[] = [];
          for (let i = 0; i < len; i++) {
            const item = get().list[i];
            const dis = Date.now() - item.createAt;
            if (dis > 1000 * 60 * 60 * 24 * 7) {
              continue;
            }
            if (item.status === 'pending' && dis > 1000 * 60 * 5) {
              item.status = 'timeout';
              item.inscription = {};
              item.files = [];
            }
          }
          set({
            list: newList,
          });
        },
        addSucccessTxid: (orderId, txid) => {
          const list = get().list.map((item) => {
            if (item.orderId === orderId) {
              item.txid = txid;
            }
            return item;
          });
          set({
            list,
          });
        },
        addTxidToInscription: (orderId, index, txid) => {
          const list = get().list.map((item) => {
            if (item.orderId === orderId) {
              item.inscription.txid = txid;
            }
            return item;
          });
          set({
            list,
          });
        },
        setCommitTx: (orderId, tx) => {
          const list = get().list.map((item) => {
            if (item.orderId === orderId) {
              item.commitTx = tx;
            }
            return item;
          });
          set({
            list,
          });
        },
        changeInscriptionStatus: (orderId, index, status: OrderStatus) => {
          const list = get().list.map((item) => {
            if (item.orderId === orderId) {
              item.inscription.status = status;
            }
            return item;
          });
          set({
            list,
          });
        },
        changeStatus: (orderId, status: OrderStatus) => {
          const list = get().list.map((item) => {
            if (item.orderId === orderId) {
              item.status = status;
            }
            return item;
          });
          set({
            list,
          });
        },
        savePaidOrder: async (address, network) => {
          const { list, saveLength } = get();
          const paidList = list.filter(
            (item) =>
              item.status == 'inscribe_fail' || item.status == 'commit_error',
          );
          if (paidList.length && saveLength !== paidList.length) {
            // await savePaidOrder({ address, list: paidList, network });
            set({
              saveLength: paidList.length,
            });
          }
        },
        findOrder: (orderId) => {
          const list = get().list;
          const order = list.find((item) => item.orderId === orderId);
          return order;
        },
        reset: () => {
          set({
            list: [],
            saveLength: 0,
          });
        },
      }),
      {
        name: 'order-store',
        storage: createJSONStorage(() => localForage),
      },
    ),
  ),
);
