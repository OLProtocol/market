'use client';

const SAT20_DAPP_PROTOCOL = 'sat20-dapp-connect';
const REQUEST_TIMEOUT = 180_000;

type PendingRequest = {
  resolve: (value: unknown) => void;
  reject: (reason: Error) => void;
  timeoutId: ReturnType<typeof setTimeout>;
};

type Sat20PwaProvider = {
  isSat20Pwa: true;
  requestAccounts: () => Promise<string[]>;
  getAccounts: () => Promise<string[]>;
  getPublicKey: () => Promise<string>;
  getNetwork: () => Promise<string>;
  switchNetwork: (network: string) => Promise<unknown>;
  signPsbt: (psbtHex: string, options?: Record<string, unknown>) => Promise<string>;
  signMessage: (message: string) => Promise<string>;
  pushPsbt: (psbtHex: string, options?: Record<string, unknown>) => Promise<unknown>;
  pushTx: (rawtx: string, options?: Record<string, unknown>) => Promise<unknown>;
  extractTxFromPsbt: (...args: unknown[]) => Promise<unknown>;
  on: (event: string, handler: (...args: unknown[]) => void) => void;
  removeListener: (event: string, handler: (...args: unknown[]) => void) => void;
  [method: string]: unknown;
};

declare global {
  interface Window {
    __sat20PwaProvider?: Sat20PwaProvider;
    sat20?: unknown;
  }
}

const pendingRequests = new Map<string, PendingRequest>();
const listeners = new Map<string, Set<(...args: unknown[]) => void>>();
const latestEventPayloads = new Map<string, unknown[]>();
let walletOrigin = '*';
let installed = false;
let locationReporterInstalled = false;

export const isSat20PwaEmbedded = () => {
  return typeof window !== 'undefined' && window.parent !== window;
};

const emit = (event: string, ...args: unknown[]) => {
  latestEventPayloads.set(event, args);
  listeners.get(event)?.forEach((handler) => handler(...args));
};

const createRequestId = () => {
  return `sat20_pwa_${Date.now()}_${Math.random().toString(36).slice(2)}`;
};

const createNonce = () => {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

const requestWalletReady = () => {
  if (!isSat20PwaEmbedded()) {
    return;
  }

  window.parent.postMessage({
    type: 'SAT20_DAPP_CLIENT_READY',
    protocol: SAT20_DAPP_PROTOCOL,
    origin: window.location.origin,
    href: window.location.href,
    nonce: createNonce(),
  }, walletOrigin);
};

const installLocationReporter = () => {
  if (locationReporterInstalled) {
    return;
  }
  locationReporterInstalled = true;

  const report = () => {
    setTimeout(requestWalletReady, 0);
  };
  const wrapHistory = (method: 'pushState' | 'replaceState') => {
    const original = window.history[method];
    window.history[method] = function (...args) {
      const result = original.apply(this, args);
      report();
      return result;
    };
  };

  wrapHistory('pushState');
  wrapHistory('replaceState');
  window.addEventListener('popstate', report);
  window.addEventListener('pageshow', report);
};

const sendRequest = (action: string, params: unknown[] = []) => {
  if (!isSat20PwaEmbedded()) {
    return Promise.reject(new Error('SAT20 PWA wallet is not available'));
  }

  const requestId = createRequestId();
  const expiresAt = Date.now() + REQUEST_TIMEOUT;

  return new Promise<unknown>((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      pendingRequests.delete(requestId);
      reject(new Error(`SAT20 PWA request timed out: ${action}`));
    }, REQUEST_TIMEOUT);

    pendingRequests.set(requestId, { resolve, reject, timeoutId });

    window.parent.postMessage({
      type: 'SAT20_DAPP_REQUEST',
      protocol: SAT20_DAPP_PROTOCOL,
      requestId,
      origin: window.location.origin,
      action,
      params,
      nonce: createNonce(),
      expiresAt,
    }, walletOrigin);
  });
};

const normalizeSignature = (result: unknown) => {
  if (typeof result === 'string') {
    return result;
  }
  if (result && typeof result === 'object') {
    const value = result as Record<string, unknown>;
    if (typeof value.signature === 'string') {
      return value.signature;
    }
    if (value.data && typeof value.data === 'object') {
      const data = value.data as Record<string, unknown>;
      if (typeof data.signature === 'string') {
        return data.signature;
      }
    }
  }
  throw new Error('SAT20 PWA wallet did not return a signature');
};

const normalizeSignedPsbt = (result: unknown) => {
  if (typeof result === 'string') {
    return result;
  }
  if (result && typeof result === 'object') {
    const value = result as Record<string, unknown>;
    if (typeof value.psbt === 'string') {
      return value.psbt;
    }
    if (value.data && typeof value.data === 'object') {
      const data = value.data as Record<string, unknown>;
      if (typeof data.psbt === 'string') {
        return data.psbt;
      }
    }
  }
  throw new Error('SAT20 PWA wallet did not return a signed PSBT');
};

const handleMessage = (event: MessageEvent) => {
  if (event.source !== window.parent) {
    return;
  }

  const message = event.data;
  if (!message || message.protocol !== SAT20_DAPP_PROTOCOL) {
    return;
  }

  if (message.type === 'SAT20_DAPP_EVENT') {
    if (message.event === 'ready') {
      walletOrigin = event.origin;
    } else if (walletOrigin !== '*' && event.origin !== walletOrigin) {
      return;
    }
    emit(message.event, message.payload);
    if (message.event === 'accountChanged') {
      emit('accountsChanged', message.payload);
    }
    if (message.event === 'networkChanged') {
      emit('networkChanged', message.payload);
    }
    return;
  }

  if (message.type !== 'SAT20_DAPP_RESPONSE') {
    return;
  }

  if (walletOrigin !== '*' && event.origin !== walletOrigin) {
    return;
  }

  const pending = pendingRequests.get(message.requestId);
  if (!pending) {
    return;
  }

  clearTimeout(pending.timeoutId);
  pendingRequests.delete(message.requestId);

  if (message.success) {
    pending.resolve(message.result);
  } else {
    pending.reject(new Error(message.error?.message || 'SAT20 PWA request failed'));
  }
};

const createProvider = (): Sat20PwaProvider => {
  const requestMethod = (method: string) => (...args: unknown[]) => sendRequest(method, args);

  return {
    isSat20Pwa: true,
    requestAccounts: () => sendRequest('requestAccounts') as Promise<string[]>,
    getAccounts: () => sendRequest('getAccounts') as Promise<string[]>,
    getPublicKey: () => sendRequest('getPublicKey') as Promise<string>,
    getNetwork: () => sendRequest('getNetwork') as Promise<string>,
    switchNetwork: (network: string) => sendRequest('switchNetwork', [network]),
    signPsbt: async (psbtHex: string, options?: Record<string, unknown>) => {
      return normalizeSignedPsbt(await sendRequest('signPsbt', [psbtHex, options]));
    },
    signMessage: async (message: string) => {
      return normalizeSignature(await sendRequest('signMessage', [message]));
    },
    pushPsbt: (psbtHex: string, options?: Record<string, unknown>) => sendRequest('pushPsbt', [psbtHex, options]),
    pushTx: (rawtx: string, options?: Record<string, unknown>) => sendRequest('pushTx', [rawtx, options]),
    extractTxFromPsbt: requestMethod('extractTxFromPsbt'),
    on: (event: string, handler: (...args: unknown[]) => void) => {
      const handlers = listeners.get(event) ?? new Set();
      handlers.add(handler);
      listeners.set(event, handlers);
      const latestPayload = latestEventPayloads.get(event);
      if (latestPayload) {
        handler(...latestPayload);
      }
    },
    removeListener: (event: string, handler: (...args: unknown[]) => void) => {
      listeners.get(event)?.delete(handler);
    },
  };
};

export const installSat20PwaProvider = () => {
  if (!isSat20PwaEmbedded()) {
    return null;
  }

  if (!installed) {
    window.addEventListener('message', handleMessage);
    installLocationReporter();
    installed = true;
  }

  requestWalletReady();

  if (!window.__sat20PwaProvider) {
    window.__sat20PwaProvider = createProvider();
  }

  if (!window.sat20) {
    window.sat20 = window.__sat20PwaProvider;
  }

  return window.__sat20PwaProvider;
};
