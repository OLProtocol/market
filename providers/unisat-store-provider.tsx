"use client";

import {
  type ReactNode,
  createContext,
  useRef,
  useContext,
} from "react";
import { type StoreApi, useStore } from "zustand";

import {
  type UnisatStore,
  createUnisatStore,
  initUnisatStore,
} from "@/stores/unisat-store";

export const UnisatStoreContext = createContext<StoreApi<UnisatStore> | null>(
  null
);

export interface UnisatStoreProviderProps {
  children: ReactNode;
}

export const UnisatStoreProvider = ({ children }: UnisatStoreProviderProps) => {
  const storeRef = useRef<StoreApi<UnisatStore>>();
  if (!storeRef.current) {
    storeRef.current = createUnisatStore(initUnisatStore());
  }

  return (
    <UnisatStoreContext.Provider value={storeRef.current}>
      {children}
    </UnisatStoreContext.Provider>
  );
};

export const useUnisatStore = <T,>(selector: (store: UnisatStore) => T): T => {
  const unisatStoreContext = useContext(UnisatStoreContext);

  if (!unisatStoreContext) {
    throw new Error(`useUnisatStore must be use within UnisatStoreProvider`);
  }

  return useStore(unisatStoreContext, selector);
};
