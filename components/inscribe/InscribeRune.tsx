import { Input, Button, Slider } from '@nextui-org/react';
import { useEffect, useState, useMemo, use } from 'react';
import { useMap } from 'react-use';
import { notification } from 'antd';
import { ordx } from '@/api';
import { useTranslation } from 'react-i18next';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';

interface InscribeTextProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
}
export const InscribeRune = ({ onNext, onChange }: InscribeTextProps) => {
  const { t } = useTranslation();
  const { network } = useReactWalletStore();
  const [errorText, setErrorText] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [removeArr, setRemoveArr] = useState<string[]>([]);
  const [data, { set }] = useMap<any>({
    type: 'rune',
    action: 'mint',
    runeId: '1:0',
    runeName: 'UNCOMMON•GOODS',
    amount: '1',
    repeat: 1,
  });
  const maxRepeat = 24;
  const nextHandler = async () => {
    onNext?.();
  };
  useEffect(() => {
    onChange?.(data);
  }, [data]);

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <div className="w-20 sm:w-52">{t('common.tick')}</div>
          <Input
            value={data.runeName}
            isReadOnly
            className="flex-1"
            maxLength={32}
            type="text"
            placeholder={t('pages.inscribe.ordx.tick_placeholder')}
          />
        </div>
        <div className="flex items-center mb-4">
          <div className="w-20 sm:w-52">{t('common.amount')}</div>
          <Input
            type="number"
            className="flex-1"
            value={data.amount}
            isReadOnly
            min={1}
          ></Input>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div className="w-52">{t('common.repeat_mint')}</div>
            <div className="flex-1">
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  value={data.repeat.toString()}
                  isDisabled={data.isSpecial}
                  onChange={(e) => {
                    set(
                      'repeat',
                      isNaN(Number(e.target.value))
                        ? 0
                        : Math.min(Number(e.target.value), maxRepeat),
                    );
                  }}
                  min={1}
                  max={maxRepeat}
                ></Input>
                <Slider
                  step={1}
                  maxValue={maxRepeat}
                  minValue={1}
                  isDisabled={data.isSpecial}
                  value={[data.repeat]}
                  className="max-w-md"
                  onChange={(e) => {
                    console.log(e);
                    set('repeat', isNaN(e[0]) ? 0 : e[0]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-60 mx-auto flex justify-center">
        <WalletConnectBus>
          <Button color="primary" className="w-60" onClick={nextHandler}>
            {t('buttons.next')}
          </Button>
        </WalletConnectBus>
      </div>
      {errorText && (
        <div className="mt-2 text-xl text-center text-red-500">{errorText}</div>
      )}
    </div>
  );
};
