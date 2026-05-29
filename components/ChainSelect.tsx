import { useCommonStore } from '@/store/common';

const SATOSHINET_MARKET_URL =
  process.env.NEXT_PUBLIC_SATSNET_MARKET_URL
  || (process.env.NODE_ENV === 'development' ? '' : 'https://satsnet.ordx.market/');

const resolveSatsnetMarketUrl = () => {
  const baseUrl = SATOSHINET_MARKET_URL
    || `${window.location.protocol}//${window.location.hostname}:3006/`;

  const url = new URL(baseUrl, window.location.href);
  const networkParam = new URLSearchParams(window.location.search).get('network');
  const currentNetwork = useCommonStore.getState().network;
  const network = networkParam === 'testnet' || networkParam === 'mainnet' || networkParam === 'livenet'
    ? networkParam
    : currentNetwork;
  url.searchParams.set('network', network === 'testnet' ? 'testnet' : 'mainnet');
  return url.href;
};

const navigateMarket = (href: string) => {
  if (window.parent !== window) {
    window.parent.postMessage({
      type: 'SAT20_DAPP_NAVIGATE',
      protocol: 'sat20-dapp-connect',
      origin: window.location.origin,
      href,
    }, '*');
    return;
  }

  window.location.href = href;
};

export const ChainSelect = () => {
  const chain = 'Bitcoin'

  const handleSelectionChange = (value: any) => {
    if (value === 'SatoshiNet') {
      navigateMarket(resolveSatsnetMarketUrl());
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button
        className={`px-3 py-1.5 rounded-full min-w-[90px] text-sm transition-colors ${chain === 'Bitcoin'
          ? 'text-white hover:opacity-80'
          : 'bg-transparent text-gray-500 hover:text-white'
          }`}
        style={chain === 'Bitcoin' ? { background: 'linear-gradient(to right, #7342dbd5, #d846efc4)' } : {}}
        onClick={() => handleSelectionChange('Bitcoin')}
      >
        Bitcoin
      </button>
      <button
        className={`px-3 py-1.5 rounded-full min-w-[90px] text-sm transition-colors ${chain !== 'Bitcoin'
          ? 'text-white hover:opacity-80'
          : 'bg-transparent text-gray-500 hover:text-white'
          }`}
        style={chain !== 'Bitcoin' ? { background: 'linear-gradient(to right, #7342dbd5, #d846efc4)' } : {}}
        onClick={() => handleSelectionChange('SatoshiNet')}
      >
        SatoshiNet
      </button>
    </div>
  );
};
