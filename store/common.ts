import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CommonState {
  feeRate: {
    value: number;
    type?: string;
  };
  btcHeight: number;
  btcPrice: number;
  appVersion: number;
  signature?: string;
  setBtcPrice: (b: number) => void;
  setHeight: (h: number) => void;
  setSignature: (signature: string) => void;
  setFeeRate: (feeRate: any) => void;
  reset: () => void;
}

export const useCommonStore = create<CommonState>()(
  devtools(
    persist(
      (set) => ({
        feeRate: {
          value: 1,
          type: 'custom',
        },
        btcHeight: 0,
        btcPrice: 0,
        appVersion: 0,
        signature: '',
        setSignature: (signature) => {
          set({
            signature,
          });
        },
        setFeeRate: (rate) => {
          set({
            feeRate: rate,
          });
        },
        setBtcPrice: (b) => {
          set({
            btcPrice: b,
          });
        },
        setHeight: (height) => {
          set({
            btcHeight: height,
          });
        },
        reset: () => {
          set({
            btcHeight: 0,
            feeRate: {
              value: 1,
              type: 'custom',
            },
            appVersion: 0,
          });
        },
      }),
      {
        name: 'common-store',
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) =>
              ['signature'].includes(key),
            ),
          ),
      },
    ),
  ),
);
