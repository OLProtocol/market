import { Radio, RadioGroup, Input, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useMap } from 'react-use';
import { useTranslation } from 'react-i18next';

interface InscribeTextProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
}
export const InscribeOrdxName = ({ onNext, onChange }: InscribeTextProps) => {
  const { t } = useTranslation();
  const [data, { set }] = useMap({
    type: 'mint',
    name: '',
  });
  const nameChange = (name: string) => {
    set('name', name);
  };
  useEffect(() => {
    onChange?.(data);
  }, [data]);

  return (
    <div>
      <div className="mb-4 text-center">
        <p>{t('pages.inscribe.name.name_placeholder')}</p>
        {/* <p>{t('pages.inscribe.text.bulk_des')}</p> */}
      </div>
      <RadioGroup
        orientation="horizontal"
        onValueChange={(e) => set('type', e)}
        value={data.type}
      >
        {/* <Radio value="mint">{t('common.mint')}</Radio> */}
        {/* <Radio value="update">{t('common.deploy')}</Radio> */}
      </RadioGroup>
      <div className="mb-2">
        <div className="flex items-center mb-4">
          <div className="w-52">{t('pages.inscribe.name.input_name')}</div>
          <Input
            value={data.name}
            className="flex-1"
            onChange={(e) => {
              nameChange(e.target.value);
            }}
            maxLength={32}
            type="text"
            placeholder={t('pages.inscribe.name.name_placeholder')}
          />
        </div>
      </div>
      <Button
        className="mx-auto block"
        color="primary"
        isDisabled={!data.name}
        onClick={onNext}
      >
        {t('buttons.next')}
      </Button>
    </div>
  );
};
