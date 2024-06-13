'use client';

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
import { Upload, Modal, Table, notification } from 'antd';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { useEffect, useMemo, useState } from 'react';
import { useMap } from 'react-use';
import { hideStr, calcTimeBetweenBlocks } from '@/lib/utils';
import { clacTextSize, encodeBase64, base64ToHex } from '@/lib/inscribe';
import { generateMempoolUrl } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { ordx, ordxSWR } from '@/api';
import { useUtxoStore } from '@/store';
import { useCommonStore } from '@/store';
import { ColumnsType } from 'antd/es/table';
// import { CopyButton } from '@/components/CopyButton';

const { Dragger } = Upload;

interface InscribeOrdxProps {
  onNext?: () => void;
  onChange?: (data: any) => void;
  onUtxoChange?: (data: any) => void;
}

export const InscribeOrdx = ({
  onNext,
  onChange,
  onUtxoChange,
}: InscribeOrdxProps) => {
  const { address: currentAccount, network, connected } = useReactWalletStore();
  const { btcHeight } = useCommonStore((state) => state);
  const { t } = useTranslation();
  const { selectUtxosByAmount } = useUtxoStore();
  // const { state } = useLocation();
  const [time, setTime] = useState({ start: undefined, end: undefined } as any);
  const [showRepeat, setShowRepeat] = useState(false);
  const [contentType, setContentType] = useState('');
  const [data, { set }] = useMap<any>({
    type: 'mint',
    mode: 'fair',
    tick: '',
    amount: 1,
    limitPerMint: 10000,
    repeatMint: 1,
    block_start: 0,
    block_end: 0,
    rarity: '',
    // cn: 0,
    trz: 0,
    selfmint: '0',
    max: '',
    file: '',
    relateInscriptionId: '',
    fileName: '',
    fileType: '',
    blockChecked: true,
    rarityChecked: false,
    cnChecked: false,
    trzChecked: false,
    isSpecial: false,
    des: '',
    mintRarity: '',
    sat: 0,
    utxos: [],
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
      notification.error({
        message: t('notification.system_error'),
      });
      console.error('Failed to fetch ordxUTXO:', error);
      throw error;
    }
  };
  const getOrdXInfo = async (tick: string) => {
    // If there is no data in localStorage, fetch it
    try {
      const key = `${network}_${tick}`;
      const cachedData = localStorage.getItem(key);

      const info = await ordx.getOrdxInfo({ tick, network });
      if (info) {
        localStorage.setItem(key, JSON.stringify(info));
      }
      return info;
    } catch (error) {
      notification.error({
        message: t('notification.system_error'),
      });
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
      setLoading(true);
      console.log('data', data);
      console.log(contentType);
      if (contentType === 'text/html' && !data.isSpecial) {
        const utxos = selectUtxosByAmount(Math.max(data.amount, 546));
        console.log('utxos', utxos);
        if (!utxos.length) {
          console.log('缺少utxos');
          return;
        }
        let utxosRanges = await Promise.all(
          utxos.map((v) => ordx.exoticUtxo({ utxo: v.utxo, network })),
        );
        utxosRanges = utxosRanges.map((v, i) => ({
          ...v.data,
          ...utxos[i],
        }));
        set('utxos', utxosRanges as any);
      }
      setLoading(false);
      onNext?.();
    }
  };
  const checkTick = async (blur: boolean = false) => {
    if (blur && !connected) {
      return;
    }
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
      const permissionInfo = await ordx.getTickerPermission({
        ticker: data.tick,
        network,
        address: currentAccount,
      });
      const selfMintAmount = permissionInfo?.data?.amount || 0;
      setTickLoading(false);

      const {
        rarity,
        startBlock,
        endBlock,
        limit,
        contenttype,
        inscriptionId,
        max,
        totalMinted,
        selfmint,
      } = info.data || {};

      if (data.type === 'mint') {
        const isSpecial =
          rarity !== 'unknow' && rarity !== 'common' && !!rarity;
        if (data.isSpecial !== isSpecial) {
          set('isSpecial', isSpecial);
        }
        setShowRepeat(true);
        let status = 'Completed';
        if (isSpecial) {
          setShowRepeat(false);
          status = 'Minting';
        } else if (max) {
          if (selfmint > 0) {
            setShowRepeat(false);
            status = permissionInfo?.data?.amount > 0 ? 'Minting' : 'Project';
          } else if (totalMinted < max) {
            status = 'Minting';
          }
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
        console.log('status', status);
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
        if (status === 'Project') {
          checkStatus = false;
          setErrorText(t('pages.inscribe.ordx.error_17', { tick: data.tick }));
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
        if (contenttype === 'text/html') {
          set('relateInscriptionId', inscriptionId);
          setContentType(contenttype);
          setShowRepeat(false);
        }
        if (blur) {
          let maxAmount = Number(limit);
          if (selfmint > 0) {
            maxAmount = Math.min(selfMintAmount, maxAmount);
          }
          set('amount', maxAmount);
          set('mintRarity', rarity);
        } else if (isSpecial) {
          setSpecialStatus(true);
          const resp = await getOrdxUtxoByType('customized', 1);
          console.log('resp', resp);
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
        } else {
          if (data.blockChecked) {
            if (data.block_start < minBlockStart) {
              checkStatus = false;
              setErrorText(
                t('pages.inscribe.ordx.error_9', { block: minBlockStart }),
              );
              return checkStatus;
            }
            if (data.block_start >= data.block_end) {
              checkStatus = false;
              setErrorText(t('pages.inscribe.ordx.error_10'));
              return checkStatus;
            }
          }
          if (data.rarityChecked) {
            if (!data.rarity) {
              checkStatus = false;
              setErrorText(t('pages.inscribe.ordx.error_11'));
              return checkStatus;
            }
          }
          // if (data.cnChecked) {
          //   if (data.cn < 1) {
          //     checkStatus = false;
          //     setErrorText(t('pages.inscribe.ordx.error_12'));
          //     return checkStatus;
          //   }
          // }
          console.log(data.max, data.limitPerMint);
          if (data.max && data.max < data.limitPerMint) {
            checkStatus = false;
            setErrorText(t('pages.inscribe.ordx.error_16'));
            return checkStatus;
          }
          if (data.mode === 'fair') {
            console.log(data.blockChecked);
            console.log(data.rarityChecked);
            if (!(data.blockChecked || data.rarityChecked)) {
              checkStatus = false;
              setErrorText(t('pages.inscribe.ordx.error_13'));
              return checkStatus;
            }
          } else if (data.mode === 'project') {
            if (!data.max) {
              checkStatus = false;
              setErrorText(t('pages.inscribe.ordx.error_14'));
              return checkStatus;
            }
            if (
              data.selfmint !== '100' &&
              !(data.block_start && data.block_end && data.blockChecked)
            ) {
              checkStatus = false;
              setErrorText(t('pages.inscribe.ordx.error_15'));
              return checkStatus;
            }
          }
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
    setUtxoList([]);
    set('tick', value.trim());
  };
  const ontickBlur = async () => {
    await checkTick(true);
    const cleanValue = data.tick.replace(/[^\w\u4e00-\u9fa5]/g, '');
    if (data.tick !== cleanValue) {
      setUtxoList([]);
    }
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

  const buttonDisabled = useMemo(() => {
    return !data.tick;
  }, [data]);

  const onBlockBLur = () => {
    calcTimeBetweenBlocks({
      height: btcHeight,
      start: data.block_start,
      end: data.block_end,
      network,
    }).then(setTime);
  };
  const handleUtxoChange = (utxo: any) => {
    setTickChecked(false);
    setAllowSpecialBeyondStatus(false);
    const firstOffset = utxo.sats[0].offset;
    if (firstOffset >= 546) {
      return;
    }
    setSelectedUtxo(utxo.utxo);

    const satData = utxoList.filter((item) => item.utxo === utxo.utxo)[0];
    set('sat', satData?.sats?.[0].start);
    if (satData) {
      // onUtxoChange?.(satData);
      const utxo = satData.utxo;
      const txid = utxo.split(':')[0];
      const vout = Number(utxo.split(':')[1]);
      set('utxos', [
        {
          ...satData,
          txid,
          vout,
        },
      ] as any[]);
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
        const href = generateMempoolUrl({
          network,
          path: `tx/${txid}`,
        });
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
  const minBlockStart = useMemo(() => {
    return btcHeight + (network === 'testnet' ? 10 : 1010);
  }, [btcHeight]);
  useEffect(() => {
    if (btcHeight) {
      const block_start = btcHeight + (network === 'testnet' ? 10 : 1010);
      const block_end = btcHeight + 4320;
      set('block_start', block_start);
      set('block_end', block_end);
      calcTimeBetweenBlocks({
        height: btcHeight,
        start: block_start,
        end: block_end,
        network,
      }).then(setTime);
    }
  }, [btcHeight]);
  useEffect(() => {
    console.log('data chagne');
    if (data.type === 'deploy') {
      setTickChecked(false);
    }
    onChange?.(data);
  }, [data]);
  return (
    <div className="p-4">
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
      {data.type === 'deploy' && (
        <div className="flex items-center mb-4">
          <div className="w-52">{t('pages.inscribe.ordx.deploy_mode')}</div>
          <RadioGroup
            orientation="horizontal"
            onValueChange={(e) => set('mode', e)}
            value={data.mode}
          >
            <Radio value="fair">
              {t('pages.inscribe.ordx.deploy_mode_fair')}
            </Radio>
            <Radio value="project">
              {t('pages.inscribe.ordx.deploy_mode_project')}
            </Radio>
          </RadioGroup>
        </div>
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
            onBlur={() => {
              ontickBlur();
            }}
            maxLength={32}
            type="text"
            placeholder={t('pages.inscribe.ordx.tick_placeholder')}
          />
        </div>
        {data.type === 'deploy' && (
          <>
            <div className="flex items-center mb-4">
              <div className="w-52">{t('common.max')}</div>
              <Input
                type="number"
                className="flex-1"
                value={data.max?.toString()}
                onChange={(e) => {
                  set('max', e.target.value);
                }}
                min={0}
              ></Input>
            </div>
            {data.mode === 'project' && (
              <div className="flex items-center mb-4">
                <div className="w-52">{t('common.selfmint')}</div>
                <Input
                  type="number"
                  className="flex-1"
                  value={data.selfmint?.toString()}
                  onChange={(e) => {
                    let value: any = e.target.value;
                    if (value) {
                      value = value.replace('.', '');
                      value = parseInt(value);
                      value = Math.min(value, 100);
                      value = Math.max(value, 0);
                    }
                    set('selfmint', value.toString());
                  }}
                  endContent="%"
                  max={100}
                  min={0}
                ></Input>
              </div>
            )}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-52">
                  {t('common.block')}{' '}
                  <span className="text-xs">
                    （
                    {t('pages.inscribe.ordx.current_height', {
                      height: btcHeight,
                    })}
                    ）
                  </span>
                </div>
                <div className="flex-1 flex items-center">
                  <Checkbox
                    isDisabled={data.mode === 'fair'}
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
                      min={minBlockStart}
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
                      min={minBlockStart}
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
            </div>
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
            {/* <div className="flex items-center  mb-4">
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
            </div> */}
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
            <div className="flex items-center  mb-4">
              <div className="w-52">{t('pages.inscribe.ordx.deploy_file')}</div>
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
                  <p className="dark:text-white">
                    {t('pages.inscribe.files.upload_des_1')}
                  </p>
                  <p className="dark:text-white">
                    {t('pages.inscribe.files.upload_des_2')}
                  </p>
                </Dragger>
              </div>
            </div>
          </>
        )}
        {data.type == 'mint' && (
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
                  setTickChecked(false);
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
            {tickChecked && showRepeat && (
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-52">{t('common.repeat_mint')}</div>
                  <div className="flex-1">
                    <div className="flex gap-2 items-center">
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
                        step={1}
                        maxValue={10}
                        minValue={1}
                        value={[data.repeatMint]}
                        className="max-w-md"
                        onChange={(e) => set('repeatMint', e[0])}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
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
