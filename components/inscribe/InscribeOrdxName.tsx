import {
  Select,
  SelectItem,
  RadioGroup,
  Input,
  Button,
} from '@nextui-org/react';
import { useEffect, useState, useMemo } from 'react';
import { useMap } from 'react-use';
import { ordx } from '@/api';
import { tryit } from 'radash';
import { clacTextSize } from '@/lib/inscribe';
import { useTranslation } from 'react-i18next';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
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
    suffix: '',
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

    if (data.suffix) {
      const textSize = clacTextSize(data.name + data.suffix);

      if (textSize > 32) {
        checkStatus = false;
        setErrorText(t('pages.inscribe.name.error_1'));
        return checkStatus;
      }
    }
    const textSize = clacTextSize(data.name);
    if (!data.suffix && (textSize < 3 || textSize == 4 || textSize > 32)) {
      checkStatus = false;
      setErrorText(t('pages.inscribe.name.error_1'));
      return checkStatus;
    }
    if (nameData) {
      checkStatus = false;
      setErrorText(t('pages.inscribe.name.error_2', { name: data.name }));
      return checkStatus;
    }
    console.log(checkStatus);
    return checkStatus;
  };
  const nameSuffixs = [
    { label: 'any suffix', key: '.ordx' },
    { label: '.x', key: '.x' },
    { label: '.btc', key: '.btc' },
    { label: '.sats', key: '.sats' },
    { label: '.pizza', key: '.pizza' },
  ];
  const selectedKeys = useMemo(
    () => (data.suffix ? [data.suffix] : []),
    [data.suffix],
  );
  const nextHanlder = async () => {
    const status = await checkName();
    if (status) {
      onNext?.();
    }
  };
  const nameChange = (name: string) => {
    if (data.suffix === '.ordx') {
      set('name', name?.replace('.', '')?.trim());
    } else {
      set('name', name?.trim());
    }
  };
  useEffect(() => {
    setChecked(false);
    onChange?.(data);
  }, [data]);

  return (
    <div>
      <div className="mb-4 text-center">
        <p>{t('pages.inscribe.name.description')}</p>
        <p className="text-gray-500 whitespace-pre-line">
          {t('pages.inscribe.name.description_1')}
        </p>
      </div>
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
            placeholder={t('pages.inscribe.name.name_placeholder')}
            endContent={
              <Select
                size="sm"
                placeholder={t('pages.inscribe.name.select_placeholder')}
                color="primary"
                className="w-48"
                selectedKeys={selectedKeys}
                onChange={(e) => set('suffix', e.target.value as any)}
              >
                {nameSuffixs.map((v) => (
                  <SelectItem key={v.key}>{v.label}</SelectItem>
                ))}
              </Select>
            }
          />
        </div>
      </div>
      <div className="w-60 mx-auto flex justify-center">
        <WalletConnectBus>
          <Button
            className="mx-auto block"
            color="primary"
            isDisabled={!data.name || loading}
            onClick={nextHanlder}
          >
            {checked ? t('buttons.next') : 'Check'}
          </Button>
        </WalletConnectBus>
      </div>
    </div>
  );
};
