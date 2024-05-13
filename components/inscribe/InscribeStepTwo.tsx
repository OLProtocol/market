import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { useMap } from 'react-use';
import { InscribeCheckItem } from './InscribeCheckItem';
import { useTranslation } from 'react-i18next';

interface Brc20SetpOneProps {
  list: any[];
  type: any;
  onNext?: () => void;
  onBack?: () => void;
}
export const InscribeStepTwo = ({
  list,
  type = 'text',
  onNext,
  onBack,
}: Brc20SetpOneProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-lg font-bold text-center">
        {t('pages.inscribe.step_two.title')}
      </div>
      <div className="text-md text-center">
        {t('pages.inscribe.step_two.des', {
          num: list.length,
          type: type,
        })}
      </div>
      <div className="max-h-[30rem] overflow-y-auto">
        <div className="w-full py-4 flex flex-col gap-4">
          {list.map((item, index) => (
            <InscribeCheckItem
              key={index}
              label={index + 1}
              value={item.show}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <Button size="md" color="primary" onClick={onBack}>
          {t('buttons.back')}
        </Button>
        <Button size="md" color="secondary" onClick={onNext}>
          {t('buttons.next')}
        </Button>
      </div>
    </div>
  );
};
