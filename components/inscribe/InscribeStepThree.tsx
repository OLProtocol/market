import { Tabs, Tab, Button, Input, Textarea } from '@nextui-org/react';
import { useMemo, useState, useEffect } from 'react';
import { useMap, useList } from 'react-use';
import { InscribeRemoveItem } from './InscribeRemoveItem';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { Checkbox } from '@nextui-org/checkbox';
import { isTaprootAddress } from '@/lib/wallet';
import { v4 as uuidV4 } from 'uuid';
import { FeeShow } from './FeeShow';
import { generatePrivateKey, generateInscription } from '@/lib/inscribe';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
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
  const [errText, setErrText] = useState('');
  const {
    network,
    address: currentAccount,
    btcWallet,
    connector,
  } = useReactWalletStore();
  const [data, { set }] = useMap({
    toSingleAddress: currentAccount,
    toMultipleAddresses: '',
  });
  const [loading, setLoading] = useState(false);
  const { add: addOrder, changeStatus } = useOrderStore((state) => state);
  // const { serviceStatus } = useCommonStore((state) => state);
  const [selected, setSelected] = useState(false);
  const [tightSelected, setTightSelected] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>('single');

  const files = useMemo(() => {
    return list;
  }, [list]);

  const oneUtxo = useMemo(() => selected, [selected]);

  const checkToAddressIsTaproot = (address: string[]) => {
    for (const addr of address) {
      if (!isTaprootAddress(addr, network)) {
        setErrText(t('pages.inscribe.step_three.error_3'));
        return false;
      }
    }
    return true;
  };
  const toAddressList = useMemo(() => {
    if (selectedTab === 'single') {
      return [data.toSingleAddress];
    } else {
      return data.toMultipleAddresses
        .split('\n')
        .map((address) => address.trim())
        .filter((address) => address !== '');
    }
  }, [data.toMultipleAddresses, data.toSingleAddress, selectedTab]);
  const totalInscriptionSize = useMemo(() => {
    return tightSelected
      ? Math.max(330, files.length)
      : files.reduce((acc, cur) => acc + cur.amount, 0);
  }, [files, tightSelected]);
  const submit = async () => {
    if (loading) return;
    setErrText('');
    const _files: any[] = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (tightSelected) {
        f.amount = 1;
        f.offset = i;
      }
      _files.push(f);
    }
    console.log('_files', _files);
    const secret = generatePrivateKey();
    const feeObj: any = {
      networkFee: 0,
      serviceFee: 0,
      totalFee: 0,
      discountServiceFee: 0,
      totalInscriptionSize: 0,
    };
    const inscription = generateInscription({
      metadata,
      secret,
      files: _files,
      network,
      feeRate: feeRate.value,
    });
    const outputLength = oneUtxo || tightSelected ? 1 : files.length;

    const baseSize = 84;
    const totalSize = baseSize + inscription.txsize;
    const weight = baseSize * 3 + totalSize;
    const txHeaderSize = 12; // 版本号 + 输入计数 + 输出计数 + 锁定时间 + 见证标记和标志
    const inputSize = 41; // 每个输入的大小
    const outputSize = 52; // 每个输出的大小
    const witnessSize = inscription.txsize; // 每个输入的见证数据大小

    const numInputs = 1;

    // 计算原始大小
    const rawSize =
      txHeaderSize +
      inputSize * numInputs +
      outputSize * outputLength +
      witnessSize;

    // 计算剥离大小
    const strippedSize =
      txHeaderSize + inputSize * numInputs + outputSize * outputLength;

    // 计算总权重
    const totalWeight = strippedSize * 4 + witnessSize * numInputs;

    // 计算虚拟大小
    const vSize = totalWeight / 4;
    console.log(`witnessSize: ${witnessSize} bytes`);
    console.log(`Raw size: ${rawSize} bytes`);
    console.log(`Stripped size: ${strippedSize} bytes`);
    console.log(`Total weight: ${totalWeight} WU`);
    console.log(`Virtual size: ${vSize} vBytes`);

    feeObj.networkFee = Math.ceil(vSize * feeRate.value);
    let totalFee = feeObj.networkFee + totalInscriptionSize;
    const oneFee = 1000 + Math.ceil(totalInscriptionSize * 0.01);
    feeObj.serviceFee = Math.ceil(oneFee);
    feeObj.discountServiceFee = Math.ceil((oneFee * (100 - discount)) / 100);
    feeObj.totalInscriptionSize = totalInscriptionSize;
    feeObj.totalFee = totalFee;

    const orderId = uuidV4();
    const toAddresses = toAddressList;
    console.log('toAddresses===========' + toAddresses);
    if (toAddresses.length === 0) {
      setErrText(t('pages.inscribe.step_three.error_1'));
      return;
    }
    if (
      !oneUtxo &&
      toAddresses.length > 1 &&
      toAddresses.length !== files.length
    ) {
      setErrText(t('pages.inscribe.step_three.error_2'));
      return;
    }
    const checkStatus = checkToAddressIsTaproot(toAddresses);
    if (!checkStatus) {
      return;
    }
    const order: OrderItemType = {
      orderId,
      type,
      inscription,
      secret,
      oneUtxo,
      fee: feeObj,
      metadata,
      toAddress: toAddresses,
      feeRate: feeRate.value,
      files: _files,
      network,
      status: 'pending',
      createAt: Date.now().valueOf(),
    };
    addOrder(order);
    onAddOrder?.(order);
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
  const cycleFill = () => {
    const addresses = data.toMultipleAddresses;
    const addressList = addresses
      .split('\n')
      .map((address) => address.trim())
      .filter((a) => a !== '');
    const len = list.length || 10;
    const newAddressList: string[] = [];
    if (addressList.length < len) {
      for (let i = 0; i < len; i++) {
        newAddressList.push(addressList[i % addressList.length]);
      }
      set('toMultipleAddresses', newAddressList.join('\n'));
    }
  };
  const getWalletAddresses = async () => {
    if (loading) return;
    setLoading(true);
    try {
      let addresses: string[] = [];
      console.log(btcWallet);

      if (btcWallet?.connector) {
        if (btcWallet.connector.id === 'unisat') {
          console.log(connector as any);
          addresses = await (
            btcWallet.connector as any
          ).unisat.requestAccounts();
        } else if (btcWallet.connector.id === 'okx') {
          addresses = await (
            btcWallet.connector as any
          ).okxwallet.requestAccounts();
        }
      }
      console.log('addresses=' + addresses);
      // set('toMultipleAddresses', addresses.join('\n'));
    } catch (error) {
      console.error(error);
      // setErrText(t('pages.inscribe.step_three.error_4'));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (currentAccount) {
      set('toSingleAddress', currentAccount);
      // set('toMultipleAddresses', data.toMultipleAddresses);
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

      <Tabs
        aria-label="address tabs"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key as string)}
      >
        <Tab key="single" title={t('pages.inscribe.step_three.to_single')}>
          <div className="mb-4">
            <div className="mb-2">
              {t('pages.inscribe.step_three.to_single')}
            </div>
            <div>
              <Input
                placeholder="Basic usage"
                value={data.toSingleAddress}
                onChange={(e) => set('toSingleAddress', e.target.value)}
              />
            </div>
          </div>
          {files.length > 1 && (
            <>
              <div className="mb-4">
                <Checkbox
                  isSelected={selected}
                  onValueChange={(value) => setSelected(value)}
                >
                  {t('pages.inscribe.step_three.output_one_utxo')}
                </Checkbox>
              </div>
              <div className="mb-4">
                <Checkbox
                  isSelected={tightSelected}
                  onValueChange={(value) => setTightSelected(value)}
                >
                  {t('pages.inscribe.step_three.tight_one_utxo')}
                </Checkbox>
              </div>
            </>
          )}
        </Tab>
        <Tab key="multiple" title="To Multiple Adddress">
          <div className="mb-4">
            <div className="mb-2">
              Multiple Adddress ({toAddressList.length}):
            </div>
            <Textarea
              placeholder="Enter multiple addresses, one per line"
              value={data.toMultipleAddresses}
              onChange={(e) => set('toMultipleAddresses', e.target.value)}
              className="mb-2"
            />
            {/* <Button
                size="sm"
                onClick={() => {
                  getWalletAddresses();
                }}
              ></Button> */}
            <div className="flex">
              <Button color={'primary'} onClick={cycleFill}>
                {t('pages.inscribe.step_three.cycle_fill', {
                  len: list.length,
                })}
              </Button>
            </div>
          </div>
        </Tab>
      </Tabs>
      <div className="mb-4">
        <p>{t('pages.inscribe.step_three.address_hint')}</p>
      </div>
      <div>
        <FeeShow
          totalInscriptionSize={totalInscriptionSize}
          feeRate={feeRate.value}
          filesLength={files.length}
        />
      </div>
      {errText && (
        <div className="text-red-500 text-center my-2">{errText}</div>
      )}
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
