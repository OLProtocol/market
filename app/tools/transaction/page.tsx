'use client';
import {
  getOrdxAddressHolders,
  getOrdxSummary,
  getSats,
  getUtxoByValue,
  addChargedTask,
} from '@/api';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import {
  buildTransaction,
  calcNetworkFee,
  hideStr,
  signAndPushPsbt,
} from '@/lib';
import { useCommonStore } from '@/store';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Tooltip,
} from '@nextui-org/react';
import { notification } from 'antd';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useList, useMap } from 'react-use';
import { Select as AntSelect } from 'antd';

export default function TransferTool() {
  const { t, i18n } = useTranslation();
  const [fee, setFee] = useState(0);
  const { feeRate } = useCommonStore((state) => state);
  const [loading, setLoading] = useState(false);
  const { address, network, publicKey } = useReactWalletStore((state) => state);

  const [inputList, { set: setInputList }] = useMap<any>({
    items: [
      {
        id: 1,
        value: {
          ticker: '',
          utxo: '',
          sats: 0,
          unit: 'sats',
          description: '',
        },
        options: {
          tickers: [],
          utxos: [],
        },
      },
    ],
  });

  const [outputList, { set: setOutputList }] = useMap<any>({
    items: [],
  });

  const [balance, { set: setBalance }] = useMap<any>({
    sats: 0,
    unit: 'sats',
  });

  const [tickerList, { set: setTickerList }] = useList<any>([]);

  const handleTickerSelectChange = (itemId, ticker) => {
    // const ticker = e.target.value;
    inputList.items[itemId - 1].value.ticker = ticker;
    inputList.items[itemId - 1].value.sats = 0;
    inputList.items[itemId - 1].value.unit = 'sats';
    inputList.items[itemId - 1].value.utxo = '';
    inputList.items[itemId - 1].value.utxos = [];
    const selectTicker =
      tickerList?.find((item) => item.ticker === ticker) || [];
    let utxos = selectTicker.utxos;
    if (inputList.items.length > 1) {
      inputList.items.forEach((inItem, index) => {
        if (index !== itemId - 1) {
          utxos = utxos.filter(
            (utxo) => utxo.txid + ':' + utxo.vout !== inItem.value.utxo,
          );
          utxos = [...new Set(utxos)];
        }
      });
    }

    inputList.items[itemId - 1].options.utxos = utxos;

    setInputList('items', inputList.items);
  };

  const handleUtxoSelectChange = (itemId, utxo) => {
    // const utxo = e.target.value;
    const txid = utxo.split(':')[0];
    const vout = Number(utxo.split(':')[1]);
    console.log('input list = ', inputList);

    const utxoObj = inputList.items[itemId - 1].options.utxos.find(
      (item) => item.txid === txid && item.vout === vout,
    );

    inputList.items[itemId - 1].value.sats = utxoObj?.value || 0;
    inputList.items[itemId - 1].value.utxo = utxo;

    let description = '';
    if (utxoObj.assetamount) {
      description = utxoObj.assetamount + ' Asset/';
    }
    description += utxoObj.value + ' sats';
    inputList.items[itemId - 1].value.description = description;

    setInputList('items', inputList.items);
    calculateBalance();
  };

  const handleInputUnitSelectChange = (itemId, e) => {
    const unit = e.target.value;
    inputList.items[itemId - 1].value.unit = unit;
    setInputList('items', inputList.items);
  };

  const handleOutputUnitSelectChange = (itemId: number, e: any) => {
    const unit = e.target.value;
    inputList.items[itemId - 1].value.unit = unit;
    setInputList('items', inputList.items);
  };

  const handleBalanceUnitSelectChange = (e: any) => {
    const unit = e.target.value;
    setBalance('unit', unit);
  };

  const addInputItem = () => {
    const tickers = tickerList?.map((item) => item.ticker) || [];

    const newId = inputList.items.length + 1;
    const newItem = {
      id: newId,
      value: {
        ticker: '',
        utxo: '',
        sats: 0,
        unit: 'sats',
      },
      options: {
        tickers: tickers,
        utxos: [],
      },
    };

    setInputList('items', [...inputList.items, newItem]);
  };

  const removeInputItem = (id: number) => {
    if (inputList.items.length > 1) {
      const tmpItems = inputList.items.filter((item) => item.id !== id);
      tmpItems.forEach((item, index) => {
        item.id = index + 1;
      });
      setInputList('items', tmpItems);
    }
  };

  const addOuputItem = () => {
    const newId = outputList.items.length + 1;
    const newItem = {
      id: newId,
      value: {
        sats: 0,
        unit: 'sats',
        address: '',
      },
    };

    setOutputList('items', [...outputList.items, newItem]);
  };

  const removeOutputItem = (id: number) => {
    if (outputList.items.length > 1) {
      const tmpItems = outputList.items.filter((item) => item.id !== id);
      tmpItems.forEach((item, index) => {
        item.id = index + 1;
      });
      setOutputList('items', tmpItems);
    }
  };

  const setBtcAddress = (itemId: number, address: string) => {
    outputList.items[itemId - 1].value.address = address;
    setOutputList('items', outputList.items);
  };

  const setOutputSats = (itemId: number, sats: string) => {
    const unit = outputList.items[itemId - 1].value.unit;
    if (unit === 'sats') {
      outputList.items[itemId - 1].value.sats = Number(sats);
    } else {
      outputList.items[itemId - 1].value.sats = Number(sats) * 100000000;
    }

    setOutputList('items', outputList.items);
  };

  const outputSatsOnBlur = (e) => {
    console.log(e);
    calculateBalance();
  };

  const calculateBalance = async () => {
    let inTotal = 0;
    let outTotal = 0;
    inputList.items.map((v) => {
      inTotal += v.value.sats;
    });
    if (inTotal === 0) {
      return;
    }

    outputList.items.map((v) => {
      outTotal += v.value.sats;
    });
    if (outTotal === 0) {
      return;
    }

    const utxos = inputList.items.map((v) => {
      return {
        txid: v.value.utxo.split(':')[0],
        vout: Number(v.value.utxo.split(':')[1]),
        value: v.value.sats,
      };
    });

    const fee = await calcNetworkFee({
      utxos,
      outputs: outputList.items.map((v) => ({
        address: v.value.address,
        value: v.value.sats,
      })),
      feeRate: feeRate.value,
      network,
      address: address,
      publicKey,
    });
    setFee(fee);
    setBalance('sats', inTotal - outTotal - fee);
  };

  const getTickers = async () => {
    const tickers: any[] = [];

    let res = await getOrdxSummary({
      address: address,
      network,
    });

    if (res.code !== 0) {
      notification.error({
        message: t('notification.transaction_title'),
        description: res.msg,
      });
      return;
    }
    const detail = res.data.detail;

    detail.map(async (item) => {
      res = await getOrdxAddressHolders({
        start: 0,
        limit: 10000,
        address: address,
        ticker: item.ticker,
        network: network,
      });
      const utxosOfTicker: any[] = [];
      if (res.code === 0) {
        const details = res.data.detail;
        details.map((detail) => {
          const utxo = {
            txid: detail.utxo.split(':')[0],
            vout: Number(detail.utxo.split(':')[1]),
            value: detail.amount,
            assetamount: detail.assetamount,
          };
          utxosOfTicker.push(utxo);
        });
      }
      tickers.push({
        ticker: item.ticker,
        utxos: utxosOfTicker,
      });
    });

    return tickers;
  };

  const getAvialableTicker = async () => {
    let res = await getUtxoByValue({
      address: address,
      value: 0,
      network,
    });
    if (res.code !== 0) {
      notification.error({
        message: t('notification.transaction_title'),
        description: res.msg,
      });
      return;
    }

    return {
      ticker: t('pages.tools.transaction.available_utxo'),
      utxos: res.data,
    };
  };

  const getRareSatTicker = async () => {
    const data = await getSats({
      address: address,
      network,
    });

    let tickers: any[] = [];

    if (data.code === 0) {
      data.data.map((item) => {
        let hasRareStats = false;
        if (item.sats && item.sats.length > 0) {
          item.sats.map((sat) => {
            if (sat.satributes && sat.satributes.length > 0) {
              hasRareStats = true;
              return;
            }
          });
        }

        if (hasRareStats) {
          const utxo = {
            txid: item.utxo.split(':')[0],
            vout: Number(item.utxo.split(':')[1]),
            value: item.value,
          };

          if (tickers.length === 0) {
            tickers.push({
              ticker:
                t('pages.tools.transaction.rare_sats') +
                '-' +
                item.sats[0].satributes[0],
              utxos: [utxo],
            });
          } else {
            let utxoExist = false;
            tickers.map((obj) => {
              obj.utxos.map((tmp) => {
                if (tmp === utxo.txid + ':' + utxo.vout) {
                  utxoExist = true; // utxo already exists
                  return;
                }
              });
            });
            if (!utxoExist) {
              // utxo does not exist
              if (
                tickers.some(
                  (obj) =>
                    obj['ticker'] ===
                    t('pages.tools.transaction.rare_sats') +
                      '-' +
                      item.sats[0].satributes[0],
                )
              ) {
                // the type of rare sat already exists
                tickers = tickers.map((obj) => {
                  if (
                    obj['ticker'] ===
                    t('pages.tools.transaction.rare_sats') +
                      '-' +
                      item.sats[0].satributes[0]
                  ) {
                    return {
                      ticker: obj['ticker'],
                      utxos: [...obj.utxos, utxo],
                    };
                  } else {
                    return obj;
                  }
                });
              } else {
                tickers.push({
                  ticker:
                    t('pages.tools.transaction.rare_sats') +
                    '-' +
                    item.sats[0].satributes[0],
                  utxos: [utxo],
                });
              }
            }
          }
        }
      });
    }

    return tickers;
  };
  const getAllTickers = async () => {
    const tickers = await getTickers();
    const avialableTicker = await getAvialableTicker();
    tickers?.push(avialableTicker);

    const rareSatTickers = await getRareSatTicker();

    const combinedArray = tickers?.concat(rareSatTickers);

    setTickerList(combinedArray || []);
  };

  const splitHandler = async () => {
    if (!address) {
      return;
    }
    setLoading(true);

    try {
      const inTotal = inputList.items.reduce((acc, cur) => {
        return acc + cur.value.sats;
      }, 0);

      const outTotal = outputList.items.reduce((acc, cur) => {
        return acc + cur.value.sats;
      }, 0);

      const utxos = inputList.items.map((v) => {
        return {
          txid: v.value.utxo.split(':')[0],
          vout: Number(v.value.utxo.split(':')[1]),
          value: v.value.sats,
        };
      });

      const fee = await calcNetworkFee({
        utxos,
        outputs: outputList.items.map((v) => ({
          address: v.value.address,
          value: v.value.sats,
        })),
        feeRate: feeRate.value,
        network,
        address: address,
        publicKey,
      });
      if (inTotal - outTotal - fee < 0) {
        setLoading(false);
        notification.error({
          message: t('notification.transaction_title'),
          description: 'Not enough sats',
        });
        return;
      }

      const psbt = await buildTransaction({
        utxos,
        outputs: outputList.items.map((v) => ({
          address: v.value.address,
          value: v.value.sats,
        })),
        feeRate: feeRate.value,
        network,
        address: address,
        publicKey,
      });

      const txid = await signAndPushPsbt(psbt);
      // const type = 'split_sats';
      // const resp = await addChargedTask({ address, fee, txid, type });
      // setLoading(false);
      // if (resp.code !== 0) {
      //   notification.error({
      //     message: t('notification.transaction_title'),
      //     description: resp.msg || 'Split & Send failed',
      //   });
      // } else {
      //   notification.success({
      //     message: t('notification.transaction_title'),
      //     description: 'Split & Send success',
      //   });
      // }
    } catch (error: any) {
      console.log('error(transfer sats) = ', error);
      setLoading(false);
      notification.error({
        message: t('notification.transaction_title'),
        description: error.message || 'Split & Send failed',
      });
    }
  };

  useEffect(() => {
    calculateBalance();
  }, [feeRate, inputList, outputList]);

  useEffect(() => {
    setTickerList([]);
    setInputList('items', [
      {
        id: 1,
        value: {
          ticker: '',
          utxo: '',
          sats: 0,
          unit: 'sats',
        },
        options: {
          tickers: [],
          utxos: [],
        },
      },
    ]);
    setBalance('sats', 0);
    setBalance('unit', 'sats');

    setFee(0);
    setOutputList('items', [
      {
        id: 1,
        value: {
          sats: 0,
          unit: 'sats',
          address: '',
        },
      },
    ]);
    getAllTickers();
  }, [address]);
  return (
    <div className="flex flex-col max-w-7xl mx-auto pt-8">
      <Card>
        <CardHeader>
          <h1>{t('pages.tools.transaction.title')}</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <div>
            <div>
              <h6>{t('pages.tools.transaction.input')}</h6>
            </div>
            <div className="pt-2">
              {inputList.items.map((item, i) => (
                <div className="flex gap-2 pb-2" key={i}>
                  <AntSelect
                    placeholder="Select Ticker"
                    className={'w-[30%] h-10'}
                    value={item.value?.ticker ? item.value?.ticker : undefined}
                    options={
                      tickerList?.map((utxo) => ({
                        label: <div>{utxo.ticker}</div>,
                        value: utxo.ticker,
                      })) || []
                    }
                    onChange={(e) => handleTickerSelectChange(item.id, e)}
                  ></AntSelect>
                  <AntSelect
                    placeholder="Select UTXO"
                    className="w-[40%] h-10"
                    value={
                      inputList.items[i]?.value?.utxo
                        ? inputList.items[i]?.value?.utxo
                        : undefined
                    }
                    options={
                      inputList.items[i]?.options?.utxos.map((utxo) => ({
                        label: (
                          <div>
                            {utxo.assetamount && utxo.assetamount + ' Asset/'}
                            {utxo.value +
                              ' sats - ' +
                              hideStr(utxo.txid + ':' + utxo.vout)}
                          </div>
                        ),
                        value: utxo.txid + ':' + utxo.vout,
                      })) || []
                    }
                    onChange={(e) => handleUtxoSelectChange(item.id, e)}
                  ></AntSelect>
                  <Input
                    key={'input-sat-' + item.id}
                    className={'w-[20%]'}
                    placeholder="0"
                    value={
                      item.value.unit === 'sats'
                        ? item.value.sats
                        : item.value.sats / 100000000
                    }
                    endContent={
                      <div className="flex items-center">
                        <select
                          className="outline-none border-0 bg-transparent text-default-400 text-small"
                          value={item.value.unit}
                          onChange={(e) =>
                            handleInputUnitSelectChange(item.id, e)
                          }
                        >
                          <option>sats</option>
                          <option>btc</option>
                        </select>
                      </div>
                    }
                  />
                  <Button radius="full" onClick={addInputItem}>
                    +
                  </Button>
                  <Button
                    radius="full"
                    onClick={() => removeInputItem(item.id)}
                  >
                    -
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Divider className="my-4" />
          <div>
            <div>
              <h6>{t('pages.tools.transaction.output')}</h6>
            </div>
            <div className="pt-2">
              {outputList.items.map((item, i) => (
                <div className="flex gap-2 pb-2" key={i}>
                  <div className="flex w-[70%]">
                    <Input
                      placeholder="BTC Address"
                      value={item.value.address}
                      onChange={(e) => setBtcAddress(item.id, e.target.value)}
                    />
                    <Tooltip content="Fill the BTC address of the current account">
                      <Button onClick={() => setBtcAddress(item.id, address)}>
                        +
                      </Button>
                    </Tooltip>
                  </div>
                  <Input
                    key={'output-sat-' + item.id}
                    className={'w-[20%]'}
                    style={{ height: '48px' }}
                    placeholder="0"
                    value={
                      item.value.unit === 'sats'
                        ? item.value.sats
                        : item.value.sats / 100000000
                    }
                    onChange={(e) => setOutputSats(item.id, e.target.value)}
                    onBlur={(e) => outputSatsOnBlur(e)}
                    endContent={
                      <div className="flex items-center">
                        <select
                          className="outline-none border-0 bg-transparent text-default-400 text-small"
                          value={item.value.unit}
                          onChange={(e) =>
                            handleOutputUnitSelectChange(item.id, e)
                          }
                        >
                          <option>sats</option>
                          <option>btc</option>
                        </select>
                      </div>
                    }
                  />
                  <Button radius="full" onClick={addOuputItem}>
                    +
                  </Button>
                  <Button
                    radius="full"
                    onClick={() => removeOutputItem(item.id)}
                  >
                    -
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Divider className="my-4" />
          <div>
            <div className="flex gap-2 pb-2">
              <h6>{t('pages.tools.transaction.balance')}</h6>
              <span className="text-gray-400 text-sm font-light pt-1">
                ({t('pages.tools.transaction.balance_des')})
              </span>
            </div>
            <div>
              <div className="flex gap-2 pb-2">
                <Input
                  width={'60%'}
                  value={address}
                  startContent={
                    <div className="pointer-events-none flex items-center w-3/12">
                      <span className="text-default-500 text-small">
                        Current Address
                      </span>
                    </div>
                  }
                />

                <Input
                  key={'balance-sat'}
                  className={'w-[30%]'}
                  style={{ height: '48px' }}
                  placeholder="0"
                  value={
                    balance.unit === 'sats'
                      ? balance.sats
                      : balance.sats / 100000000
                  }
                  endContent={
                    <div className="flex items-center">
                      <select
                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                        value={balance.unit}
                        onChange={(e) => handleBalanceUnitSelectChange(e)}
                      >
                        <option>sats</option>
                        <option>btc</option>
                      </select>
                    </div>
                  }
                />
                <ButtonGroup className={'w-[10%]'}>{/* 占位 */}</ButtonGroup>
              </div>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <WalletConnectBus className="mx-auto mt-20 block">
            <Button color="primary" onClick={splitHandler} isLoading={loading}>
              {t('pages.tools.transaction.btn_send')}
            </Button>
          </WalletConnectBus>
          <span className="text-gray-400 text-sm font-light pl-4">
            ({t('pages.tools.transaction.network_fee')}: {fee + ' sats'})
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
