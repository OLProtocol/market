import { Tabs, Tab, Button, Input } from '@nextui-org/react';
import { useMemo, useState, useEffect } from 'react';
import { useMap, useList } from 'react-use';
import { InscribeRemoveItem } from './InscribeRemoveItem';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { v4 as uuidV4 } from 'uuid';
import { FeeShow } from './FeeShow';
import { generatePrivateKey, generateInscription } from '@/lib/inscribe';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useCalcFee } from '@/lib/hooks';
import { OrderItemType, useCommonStore, useOrderStore } from '@/store';

import { useTranslation } from 'react-i18next';

interface Brc20SetpOneProps {
  list: any[];
  type: any;
  metadata: any;
  ordxUtxo?: any;
  onItemRemove?: (index: number) => void;
  onRemoveAll?: () => void;
  onAddOrder?: (order: OrderItemType) => void;
}
export const InscribeStepThree = ({
  list,
  type,
  ordxUtxo,
  onItemRemove,
  metadata,
  onAddOrder,
  onRemoveAll,
}: Brc20SetpOneProps) => {
  const { t } = useTranslation();
  const { feeRate, discount } = useCommonStore((state) => state);
  const { network, address: currentAccount } = useReactWalletStore();
  const [data, { set }] = useMap({
    toSingleAddress: currentAccount,
    toMultipleAddresses: '',
  });
  const [loading, setLoading] = useState(false);
  const { add: addOrder, changeStatus } = useOrderStore((state) => state);
  // const { serviceStatus } = useCommonStore((state) => state);

  const files = useMemo(() => {
    return list;
  }, [list]);

  const clacFee = useCalcFee({
    feeRate: feeRate.value,
    files,
    discount,
  });
  const submit = async () => {
    if (loading) return;
    setLoading(true);
    const secret = generatePrivateKey();
    const inscription = generateInscription({
      metadata,
      secret,
      files,
      network,
      feeRate: feeRate.value,
    });
    const orderId = uuidV4();
    const order: OrderItemType = {
      orderId,
      type,
      inscription,
      secret,
      fee: clacFee,
      metadata,
      toAddress: [data.toSingleAddress],
      feeRate: feeRate.value,
      files,
      network,
      status: 'pending',
      createAt: Date.now().valueOf(),
    };
    addOrder(order);
    onAddOrder?.(order);
    setLoading(false);
  };
  const calcHex = (file: any) => {
    if (file.fileHex) {
      return file.hex + file.fileHex;
    } else if (file.parent) {
      return file.hex + file.parent;
    } else {
      return file.hex;
    }
  };
  useEffect(() => {
    if (currentAccount) {
      set('toSingleAddress', currentAccount);
    }
  }, [currentAccount]);
  return (
    <div>
      <div className="text-lg font-bold flex justify-between mb-2">
        <span>
          {list.length} {t('pages.inscribe.step_three.items')}
        </span>
        <Button size="sm" onClick={onRemoveAll}>
          {t('buttons.remove_all')}
        </Button>
      </div>
      <div className="max-h-[30rem] overflow-y-auto p-4 bg-gray-800 rounded-xl mb-4">
        <div className="w-full py-4 flex flex-col gap-2">
          {list.map((item, index) => (
            <InscribeRemoveItem
              key={index}
              onRemove={() => onItemRemove?.(index)}
              label={index + 1}
              hex={calcHex(item)}
              value={item.show}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-2">{t('pages.inscribe.step_three.to_single')}</div>
        <div>
          <Input
            placeholder="Basic usage"
            value={data.toSingleAddress}
            onChange={(e) => set('toSingleAddress', e.target.value)}
          />
        </div>
      </div>
      {/* <div className='mb-4'>
        <div className='mb-3'>{t('pages.inscribe.step_three.select_fee')}</div>
        <BtcFeeRate onChange={feeRateChange} />
      </div> */}
      {/*<div className='mb-4'>
        <BtcFeeCalc
          feeRate={feeRate}
          padding={padding}
          networkFee={networkFee}
          total={totalFees}
          overheadFee={overhead}
        />
      </div> */}
      <div className="mb-4">
        <p>{t('pages.inscribe.step_three.address_hint')}</p>
      </div>
      <div>
        <FeeShow
          // serviceFee={clacFee.serviceFee}
          // discountServiceFee={clacFee.discountServiceFee}
          totalInscriptionSize={clacFee.totalInscriptionSize}
          feeRate={feeRate.value}
          discount={discount}
          filesLength={files.length}
          totalFee={clacFee.totalFee}
          discountTotalFee={clacFee.discountTotalFee}
          networkFee={clacFee.networkFee}
        />
      </div>
      <div className="w-60 mx-auto flex justify-center">
        <WalletConnectBus>
          <Button
            size="md"
            isLoading={loading}
            color="primary"
            onClick={submit}
          >
            {t('buttons.submit_payment')}
          </Button>
        </WalletConnectBus>
      </div>
    </div>
  );
};
