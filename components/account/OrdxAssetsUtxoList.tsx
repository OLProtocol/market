'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OrdxUtxoTypeList } from '@/components/account/OrdxUtxoTypeList';
import { OrdxNameList } from './OrdxNameList';
import { OrdxUtxoList } from './OrdxUtxoList';

export const OrdxAssetsUtxoList = () => {
  const router = useRouter();
  const [assertType, setAssertType] = useState<string>('Name');
  const [assertName, setAssertName] = useState<string>('Name');

  const onAssertChange = (data: string) => {
    const parts = data.split(':');
    console.log('onAssertChange', data, parts);
    setAssertType(parts[0]);
    setAssertName(parts[1]);
  };
  console.log('assertType', assertType);
  console.log('assertName', assertName);
  return (
    <div>
      <div>
        <OrdxUtxoTypeList onChange={onAssertChange} />
      </div>
      {assertType === 'Name' && (
        <OrdxNameList assetsName={''} assetsType={''} />
      )}
      {assertType !== 'Name' && (
        <OrdxUtxoList assetsName={assertName} assetsType={assertType} />
      )}
    </div>
  );
};
