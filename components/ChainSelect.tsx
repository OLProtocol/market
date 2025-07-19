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
          ? 'bg-[#F7931A] text-white hover:bg-[#F7931A]/80'
          : 'bg-transparent text-gray-500 hover:text-white'
          }`}
        onClick={() => handleSelectionChange('Bitcoin')}
      >
        Bitcoin
      </button>
      <button
        className={`px-3 py-1.5 rounded-full min-w-[90px] text-sm transition-colors ${chain !== 'Bitcoin'
          ? 'bg-[#F7931A] text-white hover:bg-[#F7931A]/80'
          : 'bg-transparent text-gray-500 hover:text-white'
          }`}
        onClick={() => handleSelectionChange('SatoshiNet')}
      >
        SatoshiNet
      </button>
    </div>
  );
};