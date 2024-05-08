'use client';
import { getSats, getUtxoByValue } from "@/api";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useReactWalletStore } from "btc-connect/dist/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMap } from "react-use";

export default function Transaction() {
    const { t, i18n } = useTranslation();
    const [fee, setFee] = useState(0);
    const { address, network } = useReactWalletStore((state) => state);

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

    const [tickerList, setTickerList] = useState<any[]>();

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

        setTickerList(combinedArray);
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
                        {inputList.items.map((item, i) => (
                            <div>

                            </div>
                        ))}
                    </div>
                    <Divider />
                    <div>
                        <div>
                            <h6>
                                {t('pages.tools.transaction.output')}
                            </h6>
                        </div>
                        <div>

                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}