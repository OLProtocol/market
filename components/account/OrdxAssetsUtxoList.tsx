'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OrdxUtxoTypeList } from '@/components/account/OrdxUtxoTypeList';
import { OrdxNameList } from './OrdxNameList';
import { OrdxUtxoList } from './OrdxUtxoList';

export const OrdxAssetsUtxoList = () => {
  const router = useRouter();
  const [ticker, setTicker] = useState<string>('Name');

  const onTickerChange = (t: string) => {
    setTicker(t);
  };

  return (
    <div>
      <div>
        <OrdxUtxoTypeList onChange={onTickerChange} />
      </div>
      {ticker === 'Name' && <OrdxNameList />}
      {ticker !== 'Name' && <OrdxUtxoList ticker={ticker} />}
    </div>
  );
};
