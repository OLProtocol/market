'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AssetsTypeList } from '@/components/account/AssetsTypeList';
import { OrdxCategoryTab } from './OrdxCategoryTab';
import { AssetsList } from './AssetsList';
// import { OrdxUtxoList } from './OrdxUtxoList';

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
  return (
    <div className="py-4">
      <div className="mb-4">
        <OrdxCategoryTab onChange={onCategoryChange} />
      </div>
      <div>
        <AssetsTypeList onChange={onAssertChange} assets_type={assertType} />
      </div>
      {!!assertType && !!assertName && (
        <AssetsList assets_name={assertName} assets_type={assertType} />
      )}
    </div>
  );
};
