'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OrdxUtxoTypeList } from '@/components/account/OrdxUtxoTypeList';
import { OrdxCategoryTab } from './OrdxCategoryTab';
import { OrdxNameList } from './OrdxNameList';
import { OrdxUtxoList } from './OrdxUtxoList';

export const OrdxAssetsUtxoList = () => {
  const router = useRouter();
  const [assertType, setAssertType] = useState<string>('ticker');
  const [assertName, setAssertName] = useState<string>('');

  const onAssertChange = (data: string) => {
    setAssertName(data);
  };
  const onCategoryChange = (t: string) => {
    setAssertType(t);
  };
  console.log('assertType', assertType);
  console.log('assertName', assertName);
  return (
    <div className="py-4">
      <div className="mb-4">
        <OrdxCategoryTab onChange={onCategoryChange} />
      </div>
      {assertType === 'ns' && (
        <OrdxNameList assetsName={assertName} assetsType={assertType} />
      )}
      {assertType !== 'ns' && (
        <>
          <div>
            <OrdxUtxoTypeList onChange={onAssertChange} />
          </div>
          <OrdxUtxoList assetsName={assertName} assetsType={assertType} />
        </>
      )}
    </div>
  );
};
