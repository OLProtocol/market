'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OrdxUtxoTypeList } from '@/components/account/OrdxUtxoTypeList';
import { OrdxNameList } from './OrdxNameList';
import { OrdxUtxoList } from './OrdxUtxoList';

export const OrdxAssetsUtxoList = () => {
  const router = useRouter();
  const [assertType, setAssertType] = useState<string>('');
  const [assertName, setAssertName] = useState<string>('Name');

  const onAssertChange = (data: string) => {
    const parts = data.split(':');
    if (parts.length === 1) {
      setAssertType('');
      setAssertName(data);
    } else {
      setAssertType(parts[0]);
      setAssertName(parts[1]);
    }
  };

  return (
    <div>
      <div>
        <OrdxUtxoTypeList onChange={onAssertChange} />
      </div>
      {assertName === 'Name' && (
        <OrdxNameList assetsName={''} assetsType={assertType} />
      )}
      {assertName !== 'Name' && (
        <OrdxUtxoList assetsName={assertName} assetsType={assertType} />
      )}
    </div>
  );
};
