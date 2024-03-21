import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

declare global {
  interface Window {
    unisat: any;
  }
}

interface Balance {
  confirmed: number;
  unconfirmed: number;
  total: number;
}

export type UnisatState = {
  balance: Balance;
  unisat?: any;
  publicKey: string;
  signature?: string;
  address: string;
  connected: boolean;
  installed: boolean;
  network: string;
};

export type UnisatActions = {
  check: () => void;
  connect: () => void;
  disconnect: () => void;
  switchNetwork: () => void;
};

export type UnisatStore = UnisatState & UnisatActions;

export const initUnisatStore = (): UnisatState => {
  return {
    balance: { confirmed: 0, unconfirmed: 0, total: 0 },
    publicKey: "",
    address: "",
    unisat: null,
    connected: false,
    installed: false,
    network: "testnet",
  };
};

export const defaultInitState: UnisatState = {
  balance: { confirmed: 0, unconfirmed: 0, total: 0 },
  publicKey: "",
  address: "",
  unisat: null,
  connected: false,
  installed: false,
  network: "testnet",
};

export const useUnisatStore = create<UnisatStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...defaultInitState,
        sign: async (message: string) => {
          try {
            const unisat = window.unisat;
            if (!unisat) {
              throw new Error("Unisat not installed");
            }
            const signature = await unisat.signMessage(message);
            set((state) => ({ signature }));
          } catch (error) {
            console.error("Error signing message", error);
            throw error;
          }
        },
        check: async () => {
          try {
            const unisat = window.unisat;
            if (!unisat) {
              set((state) => ({ installed: false }));
              throw new Error("Unisat not installed");
            }
            set((state) => ({ installed: true, unisat }));
            if (!get().signature) {
              return;
            }
            const accounts = await unisat.getAccounts();
            if (accounts.length) {
              const address = accounts[0];
              const network = await unisat.getNetwork();
              const publicKey = await unisat.getPublicKey();
              const balance = await unisat.getBalance();
              set((state) => ({
                publicKey,
                address,
                balance,
                connected: true,
                network: network,
              }));
            }
          } catch (error) {
            console.error("Error checking unisat", error);
            throw error;
          }
        },
        connect: async () => {
          try {
            const unisat = window.unisat;
            if (!unisat) {
              throw new Error("Unisat not installed");
            }
            const accounts = await unisat.requestAccounts();
            if (accounts.length) {
              let signature = get().signature;
              if (!signature) {
                signature = await unisat.signMessage(
                  "tinyverse-ordx-marketplace"
                );
              }
              const address = accounts[0];
              const publicKey = await unisat.getPublicKey();
              const network = await unisat.getNetwork();
              const balance = await unisat.getBalance();
              set((state) => ({
                publicKey,
                address,
                balance,
                connected: true,
                network,
                unisat,
                signature,
              }));
            }
          } catch (error) {
            console.error("Error checking unisat", error);
            throw error;
          }
        },
        
        disconnect: () =>
          set((state) => ({
            connected: false,
            publicKey: "",
            address: "",
            balance: { confirmed: 0, unconfirmed: 0, total: 0 },
            signature: undefined,
            unisat: null,
            installed: true,
          })),
        switchNetwork: async () => {
          try {
            const unisat = window.unisat;
            if (!unisat) {
              throw new Error("Unisat not installed");
            }
            const network = get().network === "testnet" ? "livenet" : "testnet";
            await unisat.switchNetwork(network);
            set((state) => ({ network }));
            const accounts = await unisat.getAccounts();
            if (accounts.length) {
              const address = accounts[0];
              const publicKey = await unisat.getPublicKey();
              const balance = await unisat.getBalance();
              set((state) => ({
                publicKey,
                address,
                balance,
                connected: true,
                unisat,
              }));
            }
          } catch (error) {
            console.error("Error checking unisat", error);
            throw error;
          }
        },
      }),
      {
        name: "unisat-store",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => ["signature"].includes(key))
          ),
      }
    )
  )
);
