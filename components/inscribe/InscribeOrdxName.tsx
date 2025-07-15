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
import { Icon } from '@iconify/react';

interface InscribeTextProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
  value?: { name: string; type: string }; // New prop
}
export const InscribeOrdxName = ({ onNext, onChange, value }: InscribeTextProps) => {
  const { t } = useTranslation();
  const { network } = useReactWalletStore();
  const [errorText, setErrorText] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [removeArr, setRemoveArr] = useState<string[]>([]);
  const [data, { set }] = useMap<any>({
    type: value?.type || 'mint',
    name: value?.name || '',
    names: [],
    suffix: '',
  });
  const nameList = useMemo(() => {
    const lines = data.name
      .split('\n')
      .map((a) => a.trim())
      .filter((v) => !!v);
    return lines;
  }, [data.name]);

  const checkName = async () => {
    console.log(`Current Selected Suffix: ${selectedSuffix}`); // Print the currently selected suffix
    let checkStatus = true;
  
    const lines = data.name
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => !!line);
  
      // Process lines by appending the selected suffix if not already present
        const updatedLines = lines.map((line) => {
      // 只判断有后缀的
      const hasValidSuffix = nameSuffixs
        .filter(suffix => suffix.key)
        .some(suffix => line.endsWith(suffix.key));
      // 如果没后缀且当前选中的是 no suffix，也算合法
      const processedLine = hasValidSuffix
        ? line
        : selectedSuffix
          ? `${line}${selectedSuffix}`
          : line;
      console.log(`Processed Line: ${processedLine}`, '/selectedSuffix=', selectedSuffix);
      return processedLine;
    });
  
    set('name', updatedLines.join('\n')); // Update the name with processed lines
    set('names', updatedLines); // Ensure names are updated with suffixes for inscription
  
    if (updatedLines.length === 0) {
      return false;
    }
    if (updatedLines.length > 1000) {
      notification.error({
        message: t('pages.inscribe.name.error_3'),
      });
      return false;
    }
  
    let mintedArr: string[] = [];
    const checkedArr: string[] = [];
    let formatErrArr: string[] = [];
    for (let i = 0; i < updatedLines.length; i++) {
      const line = updatedLines[i];
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
      setRemoveArr(formatErrArr);
      setErrorText(errorText);
      return false;
    }
    setLoading(true);
    const [error, res] = await tryit(ordx.checkNsNames)({
      names: updatedLines,
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
    if (formatErrArr.length > 0) {
      const errorText = formatErrArr
        .map((v) => `Name "${v}" is not valid.`)
        .join('\n');
      setErrorText(errorText);
      setRemoveArr(formatErrArr);
      return false;
    }
    if (mintedArr.length > 0) {
      const errorText = mintedArr
        .map((v: any) => `Name "${v}" is already taken.`)
        .join('\n');
      setErrorText(errorText);
      setRemoveArr(mintedArr);
      return false;
    }
    return checkStatus;
  };

  const nameSuffixs = [
    { label: 'No', key: '' },
    { label: '.btc', key: '.btc' },
    { label: '.sats', key: '.sats' },
    { label: '.x', key: '.x' },   
    { label: '.pizza', key: '.pizza' },
  ];
  const [selectedSuffix, setSelectedSuffix] = useState(nameSuffixs[0].key); // Default to "no suffix"

  const selectedKeys = useMemo(
    () => (data.suffix ? [data.suffix] : []),
    [data.suffix],
  );

   const nextHandler = async () => {
    console.log(`Current Selected Suffix: ${selectedSuffix}`); // Print the currently selected suffix
    setErrorText('');
    if (!checked) {
      const checkStatus = await checkName();
      setChecked(checkStatus);
    } else {
      // Ensure all names have the selected suffix before proceeding
      const lines = data.name
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => !!line);
  
      const validatedLines = lines.map((line) => {
        const hasValidSuffix = nameSuffixs.some((suffix) => line.endsWith(suffix.key));
        const processedLine = hasValidSuffix ? line : `${line}${selectedSuffix}`;
        console.log(`Validated Line for Next Step: ${processedLine}`); // Print each validated name
        return processedLine;
      });
  
      set('name', validatedLines.join('\n')); // Update the name with validated lines
      set('names', validatedLines); // Ensure names are updated with suffixes for inscription
      onNext?.();
    }
  };

  const removeHandler = () => {
    const lines = data.name
      .split('\n')
      .map((a) => a.trim())
      .filter((v) => !!v);
    const newLines = lines.filter((v) => !removeArr.includes(v));
    set('name', newLines.join('\n'));
    setRemoveArr([]);
    setErrorText('');
    setChecked(false);
  };
  // const nameChange = (value: string) => {
  //   set('name', value);
  //   // setErrorText('');
  //   setChecked(false);
  // };
  // useEffect(() => {
  //   if (value) {
  //     set('type', value.type);
  //     set('name', value.name);
  //   }
  // }, [value]);
  useEffect(() => {
    onChange?.(data);
  }, [data]);

  return (
    <div>
      <div className="text-center my-3 text-zinc-300">
        {t('pages.inscribe.name.description_3')}
      </div>
      <div className="flex gap-2 sm:gap-4 mb-2">
      <a
          href="/files/5d.txt"
          download="5d.txt"
          className="flex-1 h-20 bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-100  flex justify-center items-center text-zinc-300 text-lg border border-zinc-800 rounded-2xl"
        >
          5D
          <Icon icon="mdi:download" className="w-5 h-5 ml-2 text-zinc-400" />
        </a>
        <a
          href="/files/4l-btc.txt"
          download="4l-btc.txt"
          className="flex-1 h-20 bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-100 flex justify-center items-center text-zinc-300 text-lg border border-zinc-800 rounded-2xl"
        >
          4L-btc
          <Icon icon="mdi:download" className="w-5 h-5 ml-2 text-zinc-400" />
        </a>
      </div>
      <div className="mb-4 text-center">
        <p className='text-zinc-300'>{t('pages.inscribe.name.description')}</p>
        <p className="text-gray-500 whitespace-pre-line">
          {t('pages.inscribe.name.description_1')}
        </p>
        {/* <p className="text-red-500 whitespace-pre-line">
          {t('pages.inscribe.name.description_2')}
        </p> */}
      </div>
      <div className="mb-4">
      <div className="mb-4 flex gap-2">
          {nameSuffixs.map((suffix) => (
            <div
              key={suffix.key}
              className={`cursor-pointer px-4 py-2 rounded-md ${
                selectedSuffix === suffix.key ? 'bg-gradient-to-r from-[#8100ccc2] to-[#a0076dd5] text-white' : 'bg-zinc-800 text-zinc-200'
              }`}
              onClick={() => setSelectedSuffix(suffix.key)}
            >
              {suffix.label}
            </div>
          ))}
        </div>
        <div className="mb-2">
          {/* <div className="w-52">{t('pages.inscribe.name.input_name')}</div> */}
          <Textarea
            disableAnimation
            disableAutosize
            classNames={{
              input: 'resize-y min-h-[140px]',
            }}
            placeholder={t('pages.inscribe.name.name_placeholder')}
            value={data.name}
            onChange={(e) => set('name', e.target.value)} // 直接更新 data.name
          />
        </div>
        {errorText && (
          <div className="mb-2 text-xl text-center text-red-500 whitespace-pre-wrap overflow-y-auto max-h-40">
            {errorText}
          </div>
        )}
      </div>
      <div className="w-60 mx-auto flex justify-center gap-4">
        <WalletConnectBus>
          <Button
            className="mx-auto"
            color="primary"
            isLoading={loading}
            onClick={nextHandler}
          >
            {checked ? t('buttons.next') : 'Check'} （{nameList.length}）
          </Button>
        </WalletConnectBus>
        {removeArr.length > 0 && (
          <Button className="mx-auto " color="danger" onClick={removeHandler}>
            Remove Error Name
          </Button>
        )}
      </div>
    </div>
  );
};
