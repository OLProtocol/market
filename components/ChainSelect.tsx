'use client';
import { Select, SelectItem } from '@nextui-org/react';
import { useCommonStore } from '@/store';

export const ChainSelect = () => {
  const { chain, setChain } = useCommonStore();
  console.log(chain);
  const handleSelectionChange = (e: any) => {
    setChain(e.target.value);
  };

  return (
    <Select
      placeholder="Select a chain"
      defaultSelectedKeys={[chain]}
      className="max-w-xs w-28"
      onChange={handleSelectionChange}
    >
      <SelectItem key="btc" value="btc">
        BTC
      </SelectItem>
      <SelectItem key="sat20" value="sat20">
        Sat20
      </SelectItem>
    </Select>
  );
}; 