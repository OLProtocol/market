import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CommonState {
  feeRate: {
    value: number;
    type?: string;
  },
  appVersion: number,
  setFeeRate: (feeRate: any) => void;
  reset: () => void;
}

export const useCommonStore = create<CommonState>()(
  devtools((set) => ({
    feeRate: {
      value: 1,
      type: 'custom',
    },
    appVersion: 0,
    setFeeRate: (rate) => {
      set({
        feeRate: rate,
      });
    },
    reset: () => {
      set({
        feeRate: {
          value: 1,
          type: 'custom',
        },
        appVersion: 0,
      });
    },
  }))
);
