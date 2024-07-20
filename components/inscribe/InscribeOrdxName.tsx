import { Textarea, Button } from '@nextui-org/react';
import { useEffect, useState, useMemo } from 'react';
import { useMap } from 'react-use';
import { notification } from 'antd';
import { ordx } from '@/api';
import { tryit } from 'radash';
import { clacTextSize } from '@/lib/inscribe';
import { useTranslation } from 'react-i18next';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';

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
  const [data, { set }] = useMap<any>({
    type: 'mint',
    name: '',
    names: [],
    suffix: '',
  });
  const checkName = async () => {
    let checkStatus = true;

    const lines = data.name
      .split('\n')
      .map((a) => a.trim())
      .filter((v) => !!v);
    if (lines.length === 0) {
      return false;
    }
    setLoading(true);
    let mintedArr: string[] = [];
    const checkedArr: string[] = [];
    let formatErrArr: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const textSize = clacTextSize(line);
      if (textSize < 3 || textSize > 32) {
        formatErrArr.push(line);
      } else if (
        line.endsWith('.') ||
        line.startsWith('.') ||
        line.split('.').length > 2
      ) {
        formatErrArr.push(line);
      } else if (checkedArr.includes(line)) {
        formatErrArr.push(line);
      }
      if (!checkedArr.includes(line)) {
        checkedArr.push(line);
      }
    }
    if (formatErrArr.length > 0) {
      const errorText = formatErrArr
        .map((v) => `Name "${v}" is not valid.`)
        .join('\n');
      console.log(errorText);

      setErrorText(errorText);
      return false;
    }
    console.log(formatErrArr);
    const [error, res] = await tryit(ordx.checkNsNames)({
      names: lines,
      network,
    });
    setLoading(false);
    if (error || !res?.data) {
      notification.error({
        message: t('notification.system_error'),
      });
      throw error;
    }
    const checkArr = res?.data || [];
    formatErrArr = checkArr
      .filter((v: any) => v.result === -1)
      .map((v) => v.name);
    mintedArr = checkArr.filter((v: any) => v.result === 1).map((v) => v.name);
    // const { data: nameData } = res || {};
    if (formatErrArr.length > 0) {
      const errorText = formatErrArr
        .map((v) => `Name "${v}" is not valid.`)
        .join('\n');
      console.log(errorText);

      setErrorText(errorText);
      return false;
    }
    console.log(mintedArr);
    if (mintedArr.length > 0) {
      const errorText = mintedArr
        .map((v: any) => `Name "${v}" is already taken.`)
        .join('\n');
      setErrorText(errorText);
      return false;
    }
    set('names', lines);
    console.log(checkStatus);
    return checkStatus;
  };
  // const nameSuffixs = [
  //   { label: 'any suffix', key: '.ordx' },
  //   { label: '.x', key: '.x' },
  //   { label: '.btc', key: '.btc' },
  //   { label: '.sats', key: '.sats' },
  //   { label: '.pizza', key: '.pizza' },
  // ];
  const selectedKeys = useMemo(
    () => (data.suffix ? [data.suffix] : []),
    [data.suffix],
  );
  const nextHandler = async () => {
    setErrorText('');
    if (!checked) {
      const checkStatus = await checkName();
      setChecked(checkStatus);
    } else {
      onNext?.();
    }
  };
  const nameChange = (value: string) => {
    set('name', value);
    // setErrorText('');
    setChecked(false);
  };
  useEffect(() => {
    onChange?.(data);
  }, [data]);

  return (
    <div>
      <div className="mb-4 text-center">
        <p>{t('pages.inscribe.name.description')}</p>
        <p className="text-gray-500 whitespace-pre-line">
          {t('pages.inscribe.name.description_1')}
        </p>
        <p className="text-red-500 whitespace-pre-line">
          {t('pages.inscribe.name.description_2')}
        </p>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          {/* <div className="w-52">{t('pages.inscribe.name.input_name')}</div> */}
          <Textarea
            disableAutosize
            rows={5}
            placeholder={t('pages.inscribe.name.name_placeholder')}
            value={data.name}
            onChange={(e) => nameChange(e.target.value)}
          />
        </div>
        {errorText && (
          <div className="mb-2 text-xl text-center text-red-500 whitespace-pre-wrap overflow-y-auto max-h-40">
            {errorText}
          </div>
        )}
        {/* <Input
            value={data.name}
            className="flex-1"
            onChange={(e) => {
              nameChange(e.target.value);
            }}
            onBlur={onBlur}
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
          /> */}
      </div>
      <div className="w-60 mx-auto flex justify-center">
        <WalletConnectBus>
          <Button
            className="mx-auto block"
            color="primary"
            onClick={nextHandler}
          >
            {checked ? t('buttons.next') : 'Check'}
          </Button>
        </WalletConnectBus>
      </div>
    </div>
  );
};
