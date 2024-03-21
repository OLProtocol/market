import { createStore } from "zustand/vanilla";

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

export const createUnisatStore = (
  initState: UnisatState = defaultInitState
) => {
  return createStore<UnisatStore>()((set, get) => ({
    ...initState,
    check: async () => {
      try {
        const unisat = window.unisat;
        if (!unisat) {
          set((state) => ({ installed: false }));
          throw new Error("Unisat not installed");
        }
        set((state) => ({ installed: true, unisat }));
        const accounts = await unisat.getAccounts();
        if (accounts.length) {
          const address = accounts[0];
          const network = await unisat.getNetwork();
          const publicKey = await unisat.getPublicKey();
          const balance = await unisat.getBalance();
          set((state) => ({
            unisat,
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
          set((state) => ({ publicKey, address, balance, connected: true, unisat }));
        }
      } catch (error) {
        console.error("Error checking unisat", error);
        throw error;
      }
    },
  }));
};
