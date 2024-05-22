import { Radio, RadioGroup, Textarea, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useMap } from 'react-use';
import { useTranslation } from 'react-i18next';

interface InscribeTextProps {
  onNext?: () => void;
  onChange?: (type: string, value: string) => void;
}
export const InscribeText = ({ onNext, onChange }: InscribeTextProps) => {
  const { t } = useTranslation();
  const [data, { set }] = useMap({
    type: 'single',
    text: '',
  });
  useEffect(() => {
    onChange?.(data.type, data.text);
  }, [data.type, data.text]);

  return (
    <div>
      <div className="mb-4 text-center">
        <p>{t('pages.inscribe.text.single_des')}</p>
        <p>{t('pages.inscribe.text.bulk_des')}</p>
      </div>
      {/* <div className="mb-4 flex justify-center">
        <RadioGroup
          onValueChange={(e) => set('type', e)}
          value={data.type}
          orientation="horizontal"
        >
          <Radio value="single">{t('pages.inscribe.text.single')}</Radio>
          <Radio value="bulk">{t('pages.inscribe.text.bulk')}</Radio>
        </RadioGroup>
      </div> */}
      <div className="mb-2">
        <Textarea
          disableAutosize
          rows={5}
          placeholder={t('pages.inscribe.text.textarea_placeholder')}
          value={data.text}
          onChange={(e) => set('text', e.target.value)}
        />
      </div>
      <Button
        className="mx-auto block"
        color="primary"
        isDisabled={!data.text}
        onClick={onNext}
      >
        {t('buttons.next')}
      </Button>
    </div>
  );
};
