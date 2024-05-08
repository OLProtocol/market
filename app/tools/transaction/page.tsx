'use client';
import { getOrdxAddressHolders, getOrdxSummary, getSats, getUtxoByValue } from "@/api";
import { calcNetworkFee, hideStr } from "@/lib";
import { useCommonStore } from "@/store";
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Image, Input, Select, SelectItem, Tooltip } from "@nextui-org/react";
import { useReactWalletStore } from "btc-connect/dist/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useList, useMap } from "react-use";

export default function Transaction() {
  const { t, i18n } = useTranslation();
  const [fee, setFee] = useState(0);
  const { feeRate } = useCommonStore((state) => state);
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
        },
        options: {
          tickers: [],
          utxos: [],
        },
      },
    ],
  });

  const [outputList, { set: setOutputList }] = useMap<any>({
    items: []
  });

  const [balance, { set: setBalance }] = useMap<any>({
    sats: 0,
    unit: 'sats',
  });

  const [tickerList, { set: setTickerList }] = useList<any>([]);

  const handleTickerSelectChange = (itemId, e) => {
    const ticker = e.target.value;
    inputList.items[itemId - 1].value.ticker = ticker;
    inputList.items[itemId - 1].value.sats = 0;
    inputList.items[itemId - 1].value.unit = 'sats';
    inputList.items[itemId - 1].value.utxo = '';
    inputList.items[itemId - 1].value.utxos = [];
    const selectTicker = tickerList?.find((item) => item.ticker === ticker) || [];
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

  const handleUtxoSelectChange = (itemId, e) => {
    const utxo = e.target.value;
    const txid = utxo.split(':')[0];
    const vout = Number(utxo.split(':')[1]);
    console.log('input list = ', inputList);
    inputList.items[itemId - 1].value.sats =
      inputList.items[itemId - 1].options.utxos.find(
        (item) => item.txid === txid && item.vout === vout,
      )?.value || 0;
    inputList.items[itemId - 1].value.utxo = utxo;
    setInputList('items', inputList.items);
    calculateBalance();
  };

  const handleInputUnitSelectChange = (itemId: number, e: any) => {
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

    let data = await getOrdxSummary({
      address: address,
      network,
    });

    if (data.code !== 0) {
      alert(data.msg);
      return;
    }
    const detail = data.data.detail;

    detail.map(async (item) => {
      data = await getOrdxAddressHolders({
        start: 0,
        limit: 10000,
        address: address,
        ticker: item.ticker,
        network: network,
      });
      const utxosOfTicker: any[] = [];
      if (data.code === 0) {
        const details = data.data.detail;
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
    let data = await getUtxoByValue({
      address: address,
      value: 0,
      network,
    });
    if (data.code !== 0) {
      alert(data.msg);
      return;
    }

    return {
      ticker: t('pages.tools.transaction.available_utxo'),
      utxos: data.data,
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
          })
        }

        if (hasRareStats) {
          const utxo = {
            txid: item.utxo.split(':')[0],
            vout: Number(item.utxo.split(':')[1]),
            value: item.value,
          };

          if (tickers.length === 0) {
            tickers.push({
              ticker: t('pages.tools.transaction.rare_sats') + '-' + item.sats[0].satributes[0],
              utxos: [utxo],
            });
          } else {
            let utxoExist = false;
            tickers.map((obj) => {
              obj.utxos.map((tmp) => {
                if (tmp === utxo.txid + ':' + utxo.vout) {
                  utxoExist = true;// utxo already exists
                  return;
                }
              })
            })
            if (!utxoExist) {// utxo does not exist
              if (tickers.some((obj) => obj['ticker'] === t('pages.tools.transaction.rare_sats') + '-' + item.sats[0].satributes[0])) { // the type of rare sat already exists
                tickers = tickers.map((obj) => {
                  if (obj['ticker'] === t('pages.tools.transaction.rare_sats') + '-' + item.sats[0].satributes[0]) {
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
                  ticker: t('pages.tools.transaction.rare_sats') + '-' + item.sats[0].satributes[0],
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

  };

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
    <div className='flex flex-col max-w-7xl mx-auto pt-8'>
      <Card>
        <CardHeader>
          <h1>{t('pages.tools.transaction.title')}</h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <div>
            <div>
              <h6>
                {t('pages.tools.transaction.input')}
              </h6>
            </div>
            <div className="pt-2">
              {inputList.items.map((item, i) => (
                <div className="flex gap-2 pb-2">
                  <Select
                    label="Select Ticker"
                    size="sm"
                    className={'w-[20%]'}
                    style={{ height: '40px' }}
                    selectionMode="single"
                    value={item.value?.ticker ? item.value?.ticker : undefined}
                    onChange={(e) => {
                      handleTickerSelectChange(item.id, e)
                    }}
                  >
                    {tickerList?.map((utxo) => (
                      <SelectItem key={utxo.ticker} value={utxo.ticker}>
                        {utxo.ticker}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Select UTXO"
                    size="sm"
                    className={'w-[50%]'}
                    style={{ height: '40px' }}
                    selectionMode="single"
                    value={item?.value?.utxo ? item?.value?.utxo : undefined}
                    onChange={(e) =>
                      handleUtxoSelectChange(item.id, e)
                    }
                  >
                    {item?.options?.utxos.map((utxo) => (
                      <SelectItem key={utxo.txid + ':' + utxo.vout} value={utxo.txid + ':' + utxo.vout}>
                        {/* {utxo.assetamount && utxo.assetamount + ' Asset/'}
                      {utxo.value + ' sats - ' + hideStr(utxo.txid + ':' + utxo.vout)} */}
                        {utxo.txid + ':' + utxo.vout}
                      </SelectItem>
                    ))}
                  </Select>
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
                          onChange={(e) => handleInputUnitSelectChange(item.id, e)}
                        >
                          <option>sats</option>
                          <option>btc</option>
                        </select>
                      </div>
                    }
                  />
                  <Button radius="full" onClick={addInputItem}>+</Button>
                  <Button radius="full" onClick={() => removeInputItem(item.id)}>-</Button>
                </div>
              ))}
            </div>
          </div>
          <Divider className="my-4" />
          <div>
            <div>
              <h6>
                {t('pages.tools.transaction.output')}
              </h6>
            </div>
            <div className="pt-2">
              {outputList.items.map((item, i) => (
                <div className="flex gap-2 pb-2">
                  <div className="flex w-[70%]">
                    <Input
                      placeholder="BTC Address"
                      value={item.value.address}
                      onChange={(e) => setBtcAddress(item.id, e.target.value)}
                    />
                    <Tooltip content="Fill the BTC address of the current account">
                      <Button onClick={() => setBtcAddress(item.id, address)}>+</Button>
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
                    endContent={
                      <div className="flex items-center">
                        <select
                          className="outline-none border-0 bg-transparent text-default-400 text-small"
                          value={item.value.unit}
                          onChange={(e) => handleOutputUnitSelectChange(item.id, e)}
                        >
                          <option>sats</option>
                          <option>btc</option>
                        </select>
                      </div>
                    }
                  />
                  <Button radius="full" onClick={addOuputItem}>+</Button>
                  <Button radius="full" onClick={() => removeOutputItem(item.id)}>-</Button>
                </div>
              ))}
            </div>
          </div>
          <Divider className="my-4" />
          <div>
            <div className="flex gap-2 pb-2">
              <h6>
                {t('pages.tools.transaction.balance')}
              </h6>
              <span className='text-gray-400 text-sm font-light pt-1'>({t('pages.tools.transaction.balance_des')})</span>
            </div>
            <div>
              <div className="flex gap-2 pb-2">
                <Input
                  width={'60%'}
                  value={address}
                  startContent={
                    <div className="pointer-events-none flex items-center w-3/12">
                      <span className="text-default-400 text-small">Current Address</span>
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

                <ButtonGroup className={'w-[10%]'}>
                  {/* 占位 */}
                </ButtonGroup>
              </div>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button color="primary" onClick={splitHandler}>
            Send
          </Button>
          <span className='text-gray-400 text-sm font-light'>({'Fee: ' + fee + ' sats'})</span>
        </CardFooter>
      </Card>
    </div>
  );
}