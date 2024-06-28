'use client';

import { useState } from 'react';
import { Radio, RadioGroup } from '@nextui-org/react';
import { InscribeOrdxMint } from './InscribeOrdxMint';
import { InscribeOrdxDeploy } from './InscribeOrdxDeploy';
import { useTranslation } from 'react-i18next';
interface InscribeOrdxProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
}

export const InscribeOrdx = ({ onNext, onChange }: InscribeOrdxProps) => {
  const [type, setType] = useState('mint');
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <div className="mb-4 flex justify-center">
        <RadioGroup
          orientation="horizontal"
          onValueChange={(e) => setType(e)}
          value={type}
        >
          <Radio value="mint">{t('common.mint')}</Radio>
          <Radio value="deploy">{t('common.deploy')}</Radio>
        </RadioGroup>
      </div>
      <div>
        {type === 'mint' && (
          <InscribeOrdxMint onNext={onNext} onChange={onChange} />
        )}
        {type === 'deploy' && (
          <InscribeOrdxDeploy onNext={onNext} onChange={onChange} />
        )}
      </div>
    </div>
  );
};
