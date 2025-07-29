export const ChainSelect = () => {
  const chain = 'Bitcoin'

  const handleSelectionChange = (value: any) => {
    if (value === 'SatoshiNet') {
      window.location.href = 'https://satsnet.test.ordx.market/';
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