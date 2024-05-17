'use client';
import { Button, ButtonGroup, Card, CardBody } from '@nextui-org/react';
// import { useLocation } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react';
import { random } from 'radash';
import { useEffect, useMemo, useRef, useState } from 'react';
// import { BtcHeightAlert } from '@/components/BtcHeightAlert';
// import { InscribeBrc20 } from './components/InscribeBrc20';
import { InscribeOrdx } from '@/components/inscribe/InscribeOrdx';
import { InscribeText } from '@/components/inscribe/InscribeText';
import { InscribeFiles } from '@/components/inscribe/InscribeFiles';
import { InscribeStepTwo } from '@/components/inscribe/InscribeStepTwo';
import { InscribeStepThree } from '@/components/inscribe/InscribeStepThree';
import { useMap, useList } from 'react-use';
import { InscribingOrderModal } from '@/components/inscribe/InscribingOrderModal';
import {
  removeObjectEmptyValue,
  generteFiles,
  hexString,
  generateSeedByUtxos,
} from '@/lib/inscribe';
import { useTranslation } from 'react-i18next';
import { OrderList } from '@/components/inscribe/OrderList';
// import { useCommonStore } from '@/store';
type InscribeType = 'text' | 'brc20' | 'brc100' | 'files' | 'ordx';

export default function Inscribe() {
  // const { state } = useLocation();
  // const toast = useToast();
  // useEffect(() => {
  //   toast({
  //     title: '网维护中',
  //     status: 'warning',
  //     position: 'top',
  //     duration: 100000,
  //     isClosable: true,
  //   });
  // }, []);
  console.log('hexstring:' + hexString('6f7264'));
  const { t } = useTranslation();
  const ordxUtxoRef = useRef<InscribeType>();
  const [step, setStep] = useState(1);
  const [tab, setTab] = useState<any>('files');
  const [files, setFiles] = useState<any[]>([]);
  const [orderId, setOrderId] = useState<string>();
  const [modalShow, setModalShow] = useState(false);
  const [list, { set: setList, clear: clearList, removeAt }] = useList<any>([
    // {
    //   type: 'brc20_transfer',
    //   name: 'well_0',
    //   value: JSON.stringify({
    //     p: 'brc-20',
    //     op: 'transfer',
    //     tick: 'well',
    //     amt: '10000',
    //   }),
    // },
    // {
    //   type: 'text',
    //   value: 'well4',
    // },
  ]);
  const [ordxData, { set: setOrd2Data }] = useMap({
    type: 'mint',
    tick: '',
    amount: 1,
    repeatMint: 1,
    limitPerMint: 10000,
    block: '',
    relateInscriptionId: '',
    // cn: 0,
    trz: 0,
    des: '',
    sat: 0,
    rarity: '',
    mintRarity: '',
    file: '',
    fileName: '',
    fileType: '',
    rarityChecked: false,
    regChecked: false,
    blockChecked: false,
    cnChecked: false,
    trzChecked: false,
    utxos: [],
  });
  const [brc20Data, { set: setBrc20 }] = useMap({
    type: 'mint',
    tick: '',
    amount: 1,
    repeatMint: 1,
    limitPerMint: 1,
    totalSupply: 21000000,
  });
  const [textData, { set: setTextData, reset: resetText }] = useMap({
    type: 'single',
    text: '',
  });
  const brc20Change = (data: any) => {
    setBrc20('type', data.type);
    setBrc20('tick', data.tick);
    setBrc20('amount', data.amount);
    setBrc20('repeatMint', data.repeatMint);
    setBrc20('limitPerMint', data.limitPerMint);
    setBrc20('totalSupply', data.totalSupply);
  };
  const ordxChange = (data: any) => {
    setOrd2Data('type', data.type);
    setOrd2Data('tick', data.tick);
    setOrd2Data('utxos', data.utxos);
    console.log(data.utxos);
    setOrd2Data('amount', data.amount);
    setOrd2Data('file', data.file);
    console.log(data.relateInscriptionId);
    setOrd2Data('relateInscriptionId', data.relateInscriptionId);
    setOrd2Data('fileName', data.fileName);
    setOrd2Data('fileType', data.fileType);
    setOrd2Data('repeatMint', data.repeatMint);
    setOrd2Data('limitPerMint', data.limitPerMint);
    setOrd2Data('block', `${data.block_start}-${data.block_end}`);
    // setOrd2Data('cn', data.cn);
    setOrd2Data('trz', data.trz);
    setOrd2Data('rarity', data.rarity);
    setOrd2Data('des', data.des);
    setOrd2Data('sat', data.sat);
    setOrd2Data('rarityChecked', data.rarityChecked);
    // setOrd2Data('cnChecked', data.cnChecked);
    setOrd2Data('trzChecked', data.trzChecked);
    setOrd2Data('blockChecked', data.blockChecked);
  };
  const onOrdxUtxoChange = (utxo: any) => {
    ordxUtxoRef.current = utxo;
  };
  const brc20Next = async () => {
    const list: any = [];
    if (brc20Data.type === 'mint') {
      for (let i = 0; i < brc20Data.repeatMint; i++) {
        list.push({
          type: 'brc20',
          name: `mint_${i}`,
          value: JSON.stringify({
            p: 'brc-20',
            op: 'mint',
            tick: brc20Data.tick.toString(),
            amt: brc20Data.amount.toString(),
          }),
        });
      }
    } else if (brc20Data.type === 'deploy') {
      list.push({
        type: 'brc20',
        name: 'deploy_0',
        value: JSON.stringify({
          p: 'brc-20',
          op: 'deploy',
          tick: brc20Data.tick.toString(),
          max: brc20Data.totalSupply.toString(),
          lim: brc20Data.limitPerMint.toString(),
        }),
      });
    } else if (brc20Data.type === 'transfer') {
      list.push({
        type: 'brc20',
        name: 'transfer_0',
        value: JSON.stringify({
          p: 'brc-20',
          op: 'transfer',
          tick: brc20Data.tick.toString(),
          amt: brc20Data.amount.toString(),
        }),
      });
    }
    const _files = await generteFiles(list);
    setList(_files);
    setStep(2);
  };
  const ordxNext = async () => {
    const list: any = [];
    if (ordxData.type === 'mint') {
      for (let i = 0; i < ordxData.repeatMint; i++) {
        console.log(ordxData);
        const attrArr: string[] = [];
        if (ordxData.rarity && ordxData.rarity !== 'common') {
          attrArr.push(`rar=${ordxData.rarity}`);
        }
        if (ordxData.trz > 0) {
          attrArr.push(`trz=${ordxData.trz}`);
        }
        let attr;
        if (attrArr.length) {
          attr = attrArr.join(';');
        }
        let ordxValue: any[] = [
          JSON.stringify(
            removeObjectEmptyValue({
              p: 'ordx',
              op: 'mint',
              tick: ordxData.tick.toString().trim(),
              amt: ordxData.amount.toString(),
              sat: ordxData.sat > 0 ? ordxData.sat.toString() : undefined,
            }),
          ),
        ];
        const seed = generateSeedByUtxos(ordxData.utxos, ordxData.amount);
        // if (ordxData.relateInscriptionId) {
        ordxValue = [
          JSON.stringify(
            removeObjectEmptyValue({
              p: 'ordx',
              op: 'mint',
              tick: ordxData.tick.toString().trim(),
              amt: ordxData.amount.toString(),
              sat: ordxData.sat > 0 ? ordxData.sat.toString() : undefined,
              desc: `seed=${seed}`,
            }),
          ),
          {
            type: 'relateInscriptionId',
            name: 'relateInscriptionId',
            value: ordxData.relateInscriptionId,
          },
        ];
        // }
        list.push({
          type: 'ordx',
          name: `mint_${i}`,
          ordxType: 'mint',
          utxos: ordxData.utxos,
          value: ordxValue,
        });
      }
    } else if (ordxData.type === 'deploy') {
      const attrArr: string[] = [];
      if (ordxData.rarityChecked && ordxData.rarity) {
        attrArr.push(`rar=${ordxData.rarity}`);
      }
      if (ordxData.trzChecked && ordxData.trz) {
        attrArr.push(`trz=${ordxData.trz}`);
      }
      let attr;
      if (attrArr.length) {
        attr = attrArr.join(';');
      }
      const value: any[] = [
        JSON.stringify(
          removeObjectEmptyValue({
            p: 'ordx',
            op: 'deploy',
            tick: ordxData.tick.toString().trim(),
            block: ordxData.blockChecked
              ? ordxData.block.toString()
              : undefined,
            lim: ordxData.limitPerMint.toString(),
            attr,
            des: ordxData.des.toString(),
          }),
        ),
      ];
      if (ordxData.file) {
        value.push({
          type: 'file',
          name: ordxData.fileName,
          value: ordxData.file,
          mimeType: ordxData.fileType,
        });
      }
      list.push({
        type: 'ordx',
        name: 'deploy_0',
        ordxType: 'deploy',
        value,
      });
    }
    const _files = await generteFiles(list);
    setList(_files);
    setStep(2);
  };
  const textNext = async () => {
    const list: any = [];
    if (textData.type === 'single') {
      list.push({
        type: 'text',
        value: textData.text,
      });
    } else {
      const lines = textData.text.split('\n');
      lines.forEach((line: string) => {
        list.push({
          type: 'text',
          value: line,
        });
      });
    }
    const _files = await generteFiles(list);
    setList(_files);
    setStep(2);
  };
  const textChange = (type: string, value: string) => {
    setTextData('type', type);
    setTextData('text', value);
  };
  const filesChange = async (files: any[]) => {
    const list = files.map((file) => ({
      type: 'file',
      name: file.name,
      value: file,
    }));
    const _files = await generteFiles(list);
    setList(_files);
    setStep(3);
  };
  const filesNext = () => {
    const list: any = [];
    files.forEach((file) => {
      list.push({
        type: 'file',
        name: file.name,
        value: file,
      });
    });
    console.log(list);
    // setList(list);
    // setStep(2);
  };
  const stepTwoNext = () => {
    setStep(3);
  };
  const stepTwoBack = () => {
    setStep(1);
  };
  const handleTabsChange = (e: any) => {
    const value = e.target.value;
    if (tab !== value) {
      console.log(history);
      history.replaceState(undefined, '');
      setTab(value);
      clearList();
    }
  };
  const onItemRemove = async (index: number) => {
    await removeAt(index);
  };
  const onOrderClick = (item) => {
    // if (['pending', 'paid'].includes(item.status)) {
    setOrderId(item.orderId);
    setModalShow(true);
    // }
  };
  const onAddOrder = (item) => {
    setOrderId(item.orderId);
    setModalShow(true);
  };
  const onModalClose = () => {
    setOrderId(undefined);
    setModalShow(false);
  };
  const onFinished = () => {
    clear();
  };
  const onRemoveAll = () => {
    clear();
  };
  const clear = () => {
    clearList();
    resetText();
  };
  useEffect(() => {
    if (list.length === 0) {
      setStep(1);
      resetText();
    }
  }, [list]);

  const tabList = [
    {
      key: 'files',
      label: t('pages.inscribe.files.name'),
    },
    {
      key: 'text',
      label: t('pages.inscribe.text.name'),
    },
    {
      key: 'ordx',
      label: 'FT',
    },
  ];
  // useEffect(() => {
  //   if (state?.type) {
  //     setTab(state.type);
  //   }
  // }, [state]);
  return (
    <>
      {/* <BtcHeightAlert /> */}
      <div className="flex flex-col max-w-[48rem] mx-auto pt-8">
        <h1 className="text-lg font-bold text-center mb-4">
          {t('pages.inscribe.title')}
        </h1>
        <div className="">
          <div className="flex justify-center mb-4">
            <ButtonGroup>
              {tabList.map((item) => (
                <Button
                  key={item.key}
                  color={tab === item.key ? 'primary' : 'default'}
                  onClick={() => setTab(item.key)}
                >
                  {item.label}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          <Card>
            <CardBody>
              {step === 1 && (
                <>
                  {tab === 'files' && (
                    <InscribeFiles onNext={filesNext} onChange={filesChange} />
                  )}
                  {tab === 'text' && (
                    <InscribeText onNext={textNext} onChange={textChange} />
                  )}
                  {tab === 'ordx' && (
                    <InscribeOrdx
                      onChange={ordxChange}
                      onNext={ordxNext}
                      onUtxoChange={onOrdxUtxoChange}
                    />
                  )}
                </>
              )}
              {step === 2 && (
                <InscribeStepTwo
                  list={list}
                  type={tab}
                  onBack={stepTwoBack}
                  onNext={stepTwoNext}
                />
              )}
              {step === 3 && (
                <InscribeStepThree
                  ordxUtxo={ordxUtxoRef.current}
                  onItemRemove={onItemRemove}
                  onRemoveAll={onRemoveAll}
                  onAddOrder={onAddOrder}
                  list={list}
                  type={tab}
                />
              )}
            </CardBody>
          </Card>
          <div>
            {' '}
            <OrderList onOrderClick={onOrderClick} />{' '}
          </div>
        </div>
        {orderId && (
          <InscribingOrderModal
            show={modalShow}
            orderId={orderId}
            onFinished={onFinished}
            onClose={onModalClose}
          />
        )}
      </div>
    </>
  );
}
