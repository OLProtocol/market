import {
  Radio,
  RadioGroup,
  Input,
  Divider,
  Select,
  SelectItem,
  Slider,
  Button,
  Checkbox,
  Tooltip,
} from '@nextui-org/react';
import type { UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
// import { useLocation } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Upload, Modal, Table } from 'antd';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-use';
import { hideStr, calcTimeBetweenBlocks } from '@/lib/utils';
import {
  clacTextSize,
  encodeBase64,
  base64ToHex,
  serializeInscriptionId,
} from '@/lib/inscribe';
import { useTranslation } from 'react-i18next';
import { ordx, ordxSWR } from '@/api';
// import toast from 'react-hot-toast';
import { useCommonStore } from '@/store';
import { ColumnsType } from 'antd/es/table';
// import { CopyButton } from '@/components/CopyButton';

const { Dragger } = Upload;

interface InscribeOrdxProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
  onUtxoChange?: (data: any) => void;
}
// const satTypeList = [

export const InscribeOrdx = ({
  onNext,
  onChange,
  onUtxoChange,
}: InscribeOrdxProps) => {
  const { address: currentAccount, network } = useReactWalletStore();
  const { btcHeight } = useCommonStore((state) => state);
  const { t } = useTranslation();
  // const { state } = useLocation();
  const [time, setTime] = useState({ start: undefined, end: undefined } as any);
  const [data, { set }] = useMap({
    type: 'mint',
    tick: '',
    amount: 1,
    limitPerMint: 10000,
    repeatMint: 1,
    block_start: 0,
    block_end: 0,
    rarity: '',
    // cn: 0,
    trz: 0,
    file: '',
    relateInscriptionId: '',
    fileName: '',
    fileType: '',
    blockChecked: true,
    rarityChecked: false,
    cnChecked: false,
    trzChecked: false,
    des: '',
    mintRarity: '',
    sat: 0,
  });
  const { data: satTypeData } = ordxSWR.useSatTypes({ network });
  const satTypeList = useMemo(() => {
    return satTypeData?.data || [];
  }, [satTypeData]);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const [tickLoading, setTickLoading] = useState(false);
  const [tickChecked, setTickChecked] = useState(false);
  const [specialStatus, setSpecialStatus] = useState(false);
  const [files, setFiles] = useState<any[]>([]);
  const [specialBeyondStatus, setSpecialBeyondStatus] = useState(false);
  const [allowSpecialBeyondStatus, setAllowSpecialBeyondStatus] =
    useState(false);
  const [originFiles, setOriginFiles] = useState<any[]>([]);
  const [utxoList, setUtxoList] = useState<any[]>([]);
  const [selectedUtxo, setSelectedUtxo] = useState('');

  const filesChange: UploadProps['onChange'] = async ({ fileList }) => {
    const originFiles = fileList.map((f) => f.originFileObj);
    // onChange?.(originFiles);
    const file = originFiles[0];
    if (file) {
      const b64 = (await encodeBase64(file as any)) as string;
      const base64 = b64.substring(b64.indexOf('base64,') + 7);
      const hex = base64ToHex(base64);
      set('file', hex);
      set('fileName', file.name);
      if (file.type) {
        set('fileType', file.type);
      }
      setOriginFiles(originFiles);
      setFiles([]);
    }
  };
  const onFilesRemove = async () => {
    set('file', '');
    set('fileName', '');
    set('fileType', '');
  };
  const getOrdxUtxoByType = async (type: string, amount: number) => {
    try {
      const resp = await ordx.getUtxoByType({
        address: currentAccount,
        type,
        amount,
        network,
      });
      return resp;
    } catch (error) {
      // toast.error(t('toast.system_error'));
      console.error('Failed to fetch ordxUTXO:', error);
      throw error;
    }
  };
  const getOrdXInfo = async (tick: string) => {
    // If there is no data in localStorage, fetch it
    try {
      const key = `${network}_${tick}`;
      const cachedData = localStorage.getItem(key);
      // if (cachedData) {
      //   return JSON.parse(cachedData);
      // }
      const info = await ordx.getOrdxInfo({ tick, network });
      if (info) {
        localStorage.setItem(key, JSON.stringify(info));
      }
      return info;
    } catch (error) {
      // toast.error(t('toast.system_error'));
      console.error('Failed to fetch ordXInfo:', error);
      throw error;
    }
  };
  const nextHandler = async () => {
    setErrorText('');
    if (!tickChecked) {
      const checkStatus = await checkTick();

      if (!checkStatus) {
        return;
      }

      setTickChecked(true);
    } else {
      onNext?.();
    }
  };
  const checkTick = async (blur: boolean = false) => {
    setErrorText('');
    setSpecialStatus(false);
    setUtxoList([]);
    setSelectedUtxo('');
    let checkStatus = true;
    if (data.tick === undefined || data.tick === '') {
      checkStatus = false;
      return checkStatus;
    }

    const textSize = clacTextSize(data.tick);
    if (textSize < 3 || textSize == 4 || textSize > 32) {
      checkStatus = false;
      setErrorText(t('pages.inscribe.ordx.error_1'));
      return checkStatus;
    }
    try {
      setTickLoading(true);
      const info = await getOrdXInfo(data.tick);
      setTickLoading(false);

      const {
        rarity,
        trz,
        cn,
        startBlock,
        endBlock,
        limit,
        imgtype,
        inscriptionId,
      } = info.data || {};
      const isSpecial = rarity !== 'unknow' && rarity !== 'common' && !!rarity;
      let status = 'Completed';
      if (isSpecial) {
        status = 'Minting';
      } else if (
        startBlock &&
        endBlock &&
        btcHeight <= endBlock &&
        btcHeight >= startBlock
      ) {
        status = 'Minting';
      } else if (btcHeight < startBlock) {
        status = 'Pending';
      } else {
        status = 'Completed';
      }
      if (data.type === 'mint') {
        if (!info.data) {
          checkStatus = false;
          setErrorText(t('pages.inscribe.ordx.error_4', { tick: data.tick }));
          return checkStatus;
        }
        if (status === 'Pending') {
          checkStatus = false;
          setErrorText(t('pages.inscribe.ordx.error_6', { tick: data.tick }));
          return checkStatus;
        }

        if (status === 'Completed') {
          checkStatus = false;
          setErrorText(t('pages.inscribe.ordx.error_7', { tick: data.tick }));
          return checkStatus;
        }
        if (data.amount > info.data.limit) {
          checkStatus = false;
          setErrorText(
            t('pages.inscribe.ordx.error_5', { limit: info.data.limit }),
          );
          return checkStatus;
        }
        if (imgtype) {
          set('relateInscriptionId', inscriptionId);
        }
        if (blur) {
          set('amount', Number(limit));
          set('mintRarity', rarity);
        } else if (isSpecial) {
          setSpecialStatus(true);
          const resp = await getOrdxUtxoByType(rarity, 1);
          if (resp.code !== 0) {
            checkStatus = false;
            setErrorText(resp.msg);
            return checkStatus;
          }
          if (!resp?.data.length) {
            checkStatus = false;
            setErrorText(`${rarity}类型的特殊聪数量不够`);
            return checkStatus;
          }

          resp.data = resp.data.sort(
            (a, b) =>
              b.sats?.reduce((acc, cur) => {
                return acc + cur.size;
              }, 0) -
              a.sats?.reduce((acc, cur) => {
                return acc + cur.size;
              }, 0),
          );

          setUtxoList(resp.data);
          set('rarity', rarity);
          checkStatus = false;
          return checkStatus;
        }
      } else {
        if (info.data) {
          checkStatus = false;
          setErrorText(t('pages.inscribe.ordx.error_3', { tick: data.tick }));
          return checkStatus;
        }
      }
    } catch (error) {
      setTickLoading(true);
      checkStatus = false;
      console.log('error', error);
      return checkStatus;
    }
    return checkStatus;
  };
  const tickChange = async (value: string) => {
    const cleanValue = value.replace(/-/g, ''); // Remove all hyphens from the string
    setUtxoList([]);
    set('tick', cleanValue);
  };

  const rarityChange = (value: string) => {
    set('rarity', value);
    if (value !== 'common' || !value) {
      set('limitPerMint', 1);
    } else {
      set('limitPerMint', 10000);
    }
  };
  const onBlockChecked = (e: any) => {
    set('blockChecked', e.target.checked);
  };
  const onRarityChecked = (e: any) => {
    set('rarityChecked', e.target.checked);
  };
  const onCnChecked = (e: any) => {
    set('cnChecked', e.target.checked);
  };
  const onTrzChecked = (e: any) => {
    set('trzChecked', e.target.checked);
  };

  const showSat = useMemo(() => {
    return (
      data.mintRarity !== 'common' &&
      data.mintRarity !== 'unknow' &&
      data.mintRarity
    );
  }, [data.mintRarity]);

  const buttonDisabled = useMemo(() => {
    return !data.tick;
  }, [data]);

  // const time = useBlockHeightTime({
  //   height: btcHeight,
  //   start: data.block_start,
  //   end: data.block_end,
  //   network,
  // });
  const onBlockBLur = async () => {
    const res = await calcTimeBetweenBlocks({
      height: btcHeight,
      start: data.block_start,
      end: data.block_end,
      network,
    });
    setTime(res);
  };

  const handleUtxoChange = (utxo: any) => {
    setTickChecked(false);
    setAllowSpecialBeyondStatus(false);
    const firstOffset = utxo.sats[0].offset;
    if (firstOffset >= 546) {
      // toast.error('请先拆分，再铸造。');
      return;
    }
    setSelectedUtxo(utxo.utxo);

    const satData = utxoList.filter((item) => item.utxo === utxo.utxo)[0];
    // satData.sats = satData.sats.sort((a, b) => {
    //   return b.size - a.size;
    // });
    const satSize = satData.sats.reduce((acc, cur) => {
      return acc + cur.size;
    }, 0);
    console.log('satSize', satSize);
    set('sat', satData?.sats?.[0].start);
    if (satData) {
      onUtxoChange?.(satData);
      console.log('satData', satData);
      console.log('satData', data.amount);
      set('amount', satData.amount);
      setTickChecked(true);
      setAllowSpecialBeyondStatus(true);
    }
  };

  const utxoColumns: ColumnsType<any> = [
    {
      title: '',
      dataIndex: '',
      key: '',
      align: 'center',
      render: (t) => {
        return (
          <div className="flex item-center justify-center">
            <input
              type="radio"
              id={t.utxo}
              name="utxo-select"
              value={t.utxo}
              checked={selectedUtxo === t.utxo}
              onChange={() => handleUtxoChange(t)}
            />
          </div>
        );
      },
    },
    {
      title: 'UTXO',
      dataIndex: 'utxo',
      key: 'utxo',
      align: 'center',
      width: '40%',
      render: (t) => {
        const txid = t.replace(/:0$/m, '');
        const href =
          network === 'testnet'
            ? `https://mempool.space/testnet/tx/${txid}`
            : `https://mempool.space/tx/${txid}`;
        return (
          <div className="flex item-center justify-center">
            <Tooltip content={t}>
              <a
                className="text-blue-500 cursor-pointer mr-2"
                href={href}
                target="_blank"
              >
                {hideStr(t)}
              </a>
            </Tooltip>
            {/* <CopyButton text={t} tooltip="Copy Tick" /> */}
          </div>
        );
      },
    },
    {
      title: 'Sats',
      dataIndex: 'value',
      key: 'value',
      align: 'center',
      render: (r) => {
        return <div className="cursor-pointer">{r}</div>;
      },
    },
    {
      title: 'Rare Sats',
      key: 'rareSatSize',
      align: 'center',
      render: (r) => {
        let size = 0;
        if (r !== undefined) {
          size = r.sats.reduce((acc, cur) => {
            return acc + cur.size;
          }, 0);
        }
        return <div className="cursor-pointer">{size}</div>;
      },
    },
    {
      title: 'Offset',
      key: 'offset',
      align: 'center',
      render: (r) => {
        let offset = 0;
        if (r) {
          offset = r.sats[0].offset;
        }
        return <div className="cursor-pointer">{offset}</div>;
      },
    },
  ];

  // useEffect(() => {
  //   if (state?.type === 'ordx') {
  //     const { item } = state;
  //     set('type', 'mint');
  //     set('tick', item.tick);
  //     set('amount', item.limit);
  //     set('mintRarity', item.rarity);
  //   }
  // }, [state]);
  useEffect(() => {
    if (btcHeight) {
      set('block_start', btcHeight);
      set('block_end', btcHeight + 4320);
    }
  }, [btcHeight]);
  useEffect(() => {
    onChange?.(data);
  }, [data]);
  return (
    <div>
      <div className="mb-4 flex justify-center">
        <RadioGroup
          orientation="horizontal"
          onValueChange={(e) => set('type', e)}
          value={data.type}
        >
          <Radio value="mint">{t('common.mint')}</Radio>
          <Radio value="deploy">{t('common.deploy')}</Radio>
        </RadioGroup>
      </div>
      {errorText && (
        <div className="mb-2 text-xl text-center text-red-500">{errorText}</div>
      )}

      <div className="mb-4">
        <div className="flex items-center mb-4">
          <div className="w-52">{t('common.tick')}</div>
          <Input
            value={data.tick}
            className="flex-1"
            onChange={(e) => {
              tickChange(e.target.value);
            }}
            maxLength={32}
            type="text"
            placeholder={t('pages.inscribe.ordx.tick_placeholder')}
          />
        </div>

        {data.type !== 'deploy' && (
          <>
            <div className="flex items-center mb-4">
              <div className="w-52">{t('common.amount')}</div>
              <Input
                type="number"
                className="flex-1"
                value={data.amount?.toString()}
                isDisabled={tickLoading}
                onChange={(e) => {
                  set(
                    'amount',
                    isNaN(Number(e.target.value)) ? 0 : Number(e.target.value),
                  );
                  setSelectedUtxo('');
                }}
                min={1}
              ></Input>
            </div>
            {specialStatus && utxoList.length > 0 && (
              <Table
                bordered
                columns={utxoColumns}
                dataSource={utxoList}
                pagination={false}
              />
            )}
          </>
        )}

        {data.type === 'deploy' && (
          <>
            <div className="flex items-center mb-4">
              <div className="w-52">{t('common.block')}</div>
              <div className="flex-1 flex items-center">
                <Checkbox
                  isSelected={data.blockChecked}
                  onChange={onBlockChecked}
                ></Checkbox>
                <div className="ml-2 flex-1 flex items-center">
                  <Input
                    type="number"
                    value={data.block_start.toString()}
                    className="flex-1"
                    onBlur={onBlockBLur}
                    isDisabled={!data.blockChecked}
                    placeholder="Block start"
                    onChange={(e) =>
                      set(
                        'block_start',
                        isNaN(Number(e.target.value))
                          ? 0
                          : Number(e.target.value),
                      )
                    }
                    min={1}
                  ></Input>
                  <Divider className="w-4 mx-4"></Divider>
                  <Input
                    type="number"
                    value={data.block_end.toString()}
                    isDisabled={!data.blockChecked}
                    className="flex-1"
                    onBlur={onBlockBLur}
                    placeholder="Block End"
                    onChange={(e) =>
                      set(
                        'block_end',
                        isNaN(Number(e.target.value))
                          ? 0
                          : Number(e.target.value),
                      )
                    }
                    min={1}
                  ></Input>
                </div>
              </div>
            </div>
            {time.start && time.end && (
              <div className="ml-60 mb-2 text-xs text-gray-600">
                {t('pages.inscribe.ordx.block_helper', {
                  start: time.start,
                  end: time.end,
                })}
              </div>
            )}

            <div>
              <div className="flex items-center  mb-4">
                <div className="w-52">
                  {t('common.rarity')}
                  <Tooltip content={t('pages.inscribe.ordx.rarity_helper')}>
                    <span className="text-blue-500">
                      (sat
                      <QuestionCircleOutlined />)
                    </span>
                  </Tooltip>
                </div>
                <div className="flex-1 flex items-center">
                  <Checkbox
                    isSelected={data.rarityChecked}
                    onChange={onRarityChecked}
                  ></Checkbox>
                  <div className="ml-2 flex-1">
                    <Select
                      disabled={!data.rarityChecked}
                      placeholder={t('common.select_option')}
                      value={data.rarity}
                      onChange={(e) => rarityChange(e.target.value)}
                    >
                      {satTypeList.map((item) => {
                        return (
                          <SelectItem value={item} key={item}>
                            {item}
                          </SelectItem>
                        );
                      })}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            {/* <FormControl>
              <div className='flex items-center  mb-4'>
                <FormLabel className='w-52' marginBottom={0}>
                  {t('common.cn')}
                  <Tooltip content={t('pages.inscribe.ordx.cn_placeholder')}>
                    <span className='text-blue-500'>
                      (sat
                      <QuestionCircleOutlined />)
                    </span>
                  </Tooltip>
                </FormLabel>
                <div className='flex-1 flex items-center'>
                  <Checkbox
                    checked={data.cnChecked}
                    onChange={onCnChecked}></Checkbox>
                  <div className='ml-2 flex-1'>
                    <NumberInput
                      value={data.cn}
                      isDisabled={!data.cnChecked}
                      placeholder={t('pages.inscribe.ordx.cn_placeholder')}
                      onChange={(_, e) => set('cn', isNaN(e) ? 0 : e)}
                      min={0}>
                      <NumberInputField />
                    </NumberInput>
                  </div>
                </div>
              </div>
            </FormControl> */}
            <div>
              <div className="flex items-center  mb-4">
                <div className="w-52">
                  {t('common.trz')}
                  <Tooltip content={t('pages.inscribe.ordx.trz_placeholder')}>
                    <span className="text-blue-500">
                      (sat
                      <QuestionCircleOutlined />)
                    </span>
                  </Tooltip>
                </div>
                <div className="flex-1 flex items-center">
                  <Checkbox
                    isSelected={data.trzChecked}
                    onChange={onTrzChecked}
                  ></Checkbox>
                  <div className="ml-2 flex-1">
                    <Input
                      type="number"
                      value={data.trz.toString()}
                      placeholder={t('pages.inscribe.ordx.trz_placeholder')}
                      disabled={!data.trzChecked}
                      onChange={(e) =>
                        set(
                          'trz',
                          isNaN(Number(e.target.value))
                            ? 0
                            : Number(e.target.value),
                        )
                      }
                      min={0}
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  mb-4">
                <div className="w-52">{t('common.limit_per_mint')}</div>
                <div className="flex-1">
                  <Input
                    type="number"
                    value={data.limitPerMint.toString()}
                    onChange={(e) =>
                      set(
                        'limitPerMint',
                        isNaN(Number(e.target.value))
                          ? 0
                          : Number(e.target.value),
                      )
                    }
                    min={1}
                  ></Input>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center  mb-4">
                <div className="w-52">{t('common.description')}</div>
                <div className="flex-1">
                  <Input
                    type="text"
                    maxLength={128}
                    value={data.des}
                    onChange={(e) => set('des', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {/* {data.type === 'mint' && showSat && (
          <FormControl>
            <div className='flex items-center  mb-4'>
              <FormLabel className='w-52' marginBottom={0}>
                Sat
              </FormLabel>
              <div className='flex-1'>
                <NumberInput
                  value={data.sat}
                  isDisabled={tickLoading}
                  onChange={(_, e) => set('sat', e)}
                  min={1}>
                  <NumberInputField />
                </NumberInput>
              </div>
            </div>
          </FormControl>
        )} */}
        {data.type === 'deploy' && (
          <div>
            <div className="flex items-center  mb-4">
              <div className="w-52">{t('common.file')}</div>
              <div className="flex-1">
                <Dragger
                  maxCount={1}
                  onRemove={onFilesRemove}
                  listType="picture"
                  beforeUpload={() => false}
                  onChange={filesChange}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    {t('pages.inscribe.files.upload_des_1')}
                  </p>
                  <p className="ant-upload-hint">
                    {t('pages.inscribe.files.upload_des_2')}
                  </p>
                </Dragger>
              </div>
            </div>
          </div>
        )}
        {data.type === 'mint' && tickChecked && !showSat && (
          <div>
            <div className="flex items-center mb-4">
              <div className="w-52">{t('common.repeat_mint')}</div>
              <div className="flex-1">
                <div className="flex">
                  <Input
                    type="number"
                    value={data.repeatMint.toString()}
                    onChange={(e) =>
                      set(
                        'repeatMint',
                        isNaN(Number(e.target.value))
                          ? 0
                          : Math.min(Number(e.target.value), 10),
                      )
                    }
                    min={1}
                    max={10}
                  ></Input>
                  <Slider
                    label="Temperature"
                    step={1}
                    maxValue={10}
                    minValue={1}
                    value={data.repeatMint}
                    className="max-w-md"
                    onChangeEnd={(e) => set('repeatMint', e[0])}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-60 mx-auto flex justify-center">
        <WalletConnectBus>
          <Button
            isLoading={loading}
            isDisabled={buttonDisabled}
            color="primary"
            className="w-60"
            onClick={nextHandler}
          >
            {tickChecked ? t('buttons.next') : 'Check'}
          </Button>
        </WalletConnectBus>
      </div>
    </div>
  );
};
