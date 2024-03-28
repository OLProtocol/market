import { Input, Slider } from '@nextui-org/react';
import { useState, useMemo, useEffect, use } from 'react';
import { BtcFeeRateItem } from './BtcFeeRateItem';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useTranslation } from 'react-i18next';

interface BtcFeeRate {
  onChange?: ({ value, type }: any) => void;
  feeRateData?: any;
  value?: number;
  feeType?: string;
}
export const BtcFeeRate = ({
  onChange,
  feeRateData,
  value,
  feeType,
}: BtcFeeRate) => {
  const { t } = useTranslation();
  const { network } = useReactWalletStore((state) => state);
  const [type, setType] = useState('Normal');
  const [customValue, setCustomValue] = useState(1);
  const [economyValue, setEconomyValue] = useState(1);
  const [normalValue, setNormalValue] = useState(1);
  const [minFee, setMinFee] = useState(1);
  const [maxFee, setMaxFee] = useState(500);

  const clickHandler = (_type: string, value: number) => {
    if (type === _type) {
      return;
    }
    setType(_type);
    onChange?.({
      type: _type,
      value,
    });
  };
  const setRecommendFee = async () => {
    const defaultFee = network === 'testnet' ? 1 : 50;
    setCustomValue(feeRateData?.fastestFee || defaultFee);
    setEconomyValue(feeRateData?.hourFee || defaultFee);
    setNormalValue(feeRateData?.halfHourFee || defaultFee);
    setMinFee(feeRateData?.minimumFee || defaultFee);
    onChange?.(feeRateData?.halfHourFee || defaultFee);
    setType('Normal');
  };
  const list = useMemo(
    () => [
      {
        label: t('common.fee_economy'),
        name: 'Economy',
        value: economyValue,
      },
      {
        label: t('common.fee_normal'),
        name: 'Normal',
        value: normalValue,
      },
      {
        label: t('common.fee_custom'),
        name: 'Custom',
        value: customValue,
      },
    ],
    [economyValue, normalValue, customValue],
  );
  useEffect(() => {
    setRecommendFee();
  }, [feeRateData]);
  useEffect(() => {
    if (type === 'Custom') {
      onChange?.({ value: customValue, type: 'Custom' });
    }
  }, [customValue]);
  useEffect(() => {
    if (feeType === 'Custom' && value) {
      setCustomValue(value);
      setType(feeType);
    } else if (feeType) {
      setType(feeType);
    }
  }, [feeType, value]);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-2">
        {list.map((item) => (
          <BtcFeeRateItem
            className={
              type === item.label ? ' border-orange-400 ' : 'border-gray-500'
            }
            key={item.label}
            label={item.name}
            value={item.value}
            onClick={() => clickHandler(item.label, item.value)}
          />
        ))}
      </div>
      {/* {economyValue > 100 && (
        <div className="text-sm text-orange-400 mb-2">
          {t("pages.inscribe.fee.high_hint")}
        </div>
      )} */}
      {type === 'Custom' && (
        <div className="flex items-center gap-4">
          <Input
            type="number"
            className="w-30"
            placeholder="1"
            value={customValue.toString()}
            onChange={(e) => setCustomValue(Number(e.target.value))}
          />
          <Slider
            size="sm"
            step={1}
            maxValue={maxFee}
            minValue={minFee}
            value={customValue}
            className="flex-1"
            onChange={(e) => {
              setCustomValue(e as number);
            }}
          />
        </div>
      )}
    </div>
  );
};
