import { Radio, RadioGroup, Input, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useMap } from 'react-use';
import { ordx } from '@/api';
import { tryit } from 'radash';
import { clacTextSize } from '@/lib/inscribe';
import { useTranslation } from 'react-i18next';
import { useReactWalletStore } from 'btc-connect/dist/react';

interface InscribeTextProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
}
export const InscribeOrdxName = ({ onNext, onChange }: InscribeTextProps) => {
  const { t } = useTranslation();
  const { network } = useReactWalletStore();
  const [errorText, setErrorText] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, { set }] = useMap({
    type: 'mint',
    name: '',
  });
  const checkName = async () => {
    let checkStatus = true;
    setLoading(true);
    const [error, res] = await tryit(ordx.getNsName)({
      name: data.name,
      network,
    });
    setLoading(false);
    const { data: nameData } = res || {};
    const textSize = clacTextSize(data.name);
    if (textSize < 3 || textSize == 4 || textSize > 32) {
      checkStatus = false;
      setErrorText(t('pages.inscribe.name.error_1'));
      return checkStatus;
    }
    if (nameData) {
      checkStatus = false;
      setErrorText(t('pages.inscribe.name.error_2', { name: data.name }));
      return checkStatus;
    }
    return checkStatus;
  };
  const nextHanlder = async () => {
    const status = await checkName();
    if (status) {
      onNext?.();
    }
  };
  const nameChange = (name: string) => {
    set('name', name);
  };
  useEffect(() => {
    setChecked(false);
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
        {errorText && (
          <div className="mb-2 text-xl text-center text-red-500">
            {errorText}
          </div>
        )}
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
            placeholder={t('pages.inscribe.ordx.tick_placeholder')}
          />
        </div>
      </div>
      <Button
        className="mx-auto block"
        color="primary"
        isDisabled={!data.name || loading}
        onClick={nextHanlder}
      >
        {checked ? t('buttons.next') : 'Check'}
      </Button>
    </div>
  );
};
