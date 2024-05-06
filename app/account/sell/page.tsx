'use client';

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Spinner,
  Snippet,
} from '@nextui-org/react';
import { notification } from 'antd';
import { useSellStore } from '@/store';
import { use, useEffect, useMemo, useState } from 'react';
import {
  satsToBitcoin,
  splitBatchSignedPsbt,
  buildBatchSellOrder,
  hideStr,
  btcToSats,
} from '@/lib/utils';
import { Decimal } from 'decimal.js';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { getTickerSummary, submitBatchOrders } from '@/api';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

export default function SellPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { list, reset, changeUnit, changePrice, changeStatus } = useSellStore(
    (state) => state,
  );
  const { network, address, btcWallet } = useReactWalletStore((state) => state);
  const ticker = useMemo(() => list?.[0]?.tickers?.[0].ticker, [list]);
  const { data, isLoading: isSummaryLoading } = useSWR(
    `getTickerSummary-${ticker}`,
    () => getTickerSummary({ ticker }),
  );
  const summary = useMemo(() => data?.data?.summary || {}, [data]);
  useEffect(() => {
    if (summary.lowest_price) {
      for (const item of list) {
        if (item.unit === 'btc') {
          changePrice(item.utxo, summary.lowest_price);
        } else {
          changePrice(item.utxo, satsToBitcoin(summary.lowest_price));
        }
      }
    }
  }, [summary]);
  const listItems = async () => {
    const psbts: string[] = [];
    setLoading(true);
    try {
      const batchOrderPsbt = await buildBatchSellOrder({
        inscriptionUtxos: list,
        address,
        network,
      });
      console.log('Batch Order PSBT', batchOrderPsbt);
      const signedPsbts = await btcWallet?.signPsbt(batchOrderPsbt);
      console.log('Batch Order raw', signedPsbts);
      if (signedPsbts) {
        const psbts = splitBatchSignedPsbt(signedPsbts, network);
        const res = await submitBatchOrders({
          address,
          raws: psbts,
        });
        if (res.code === 200) {
          notification.success({
            message: t('notification.list_success_title'),
            description: t('notification.list_success_description'),
          });
          reset();
          router.back();
        } else {
          notification.error({
            message: t('notification.list_failed_title'),
            description: res.msg,
          });
        }
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.error('List failed', error);
      notification.error({
        message: t('notification.list_failed_title'),
        description: error.message,
      });
    }
  };
  const inputBlur = (utxo: string) => {
    const currentUtxo = list.find((v) => v.utxo === utxo);
    if (
      currentUtxo &&
      Number(currentUtxo.price) < 0.00000546 &&
      currentUtxo.unit === 'btc'
    ) {
      changePrice(utxo, '0.00000546');
    } else if (
      currentUtxo &&
      Number(currentUtxo.price) < 546 &&
      currentUtxo.unit === 'sats'
    ) {
      changePrice(utxo, '546');
    }
  };
  const onUnitChange = (i: number, utxo: string, unit: 'btc' | 'sats') => {
    console.log('onUnitChange', i, utxo, unit);
    if (unit === list[i].unit || !unit) {
      return;
    }
    for (const item of list) {
      changeUnit(item.utxo, unit);
      if (unit === 'btc') {
        changePrice(item.utxo, satsToBitcoin(item.price));
      } else {
        changePrice(item.utxo, btcToSats(Number(item.price)).toString());
      }
    }
  };
  const totalPrice = useMemo(
    () =>
      list.reduce((a, b) => {
        const decimalA = new Decimal(a);
        const decimalB = new Decimal(Number(b.price));
        return decimalA.plus(decimalB).toNumber();
      }, 0) || 0,
    [list],
  );

  return (
    <div className="py-2">
      <div className="md:flex justify-between gap-4">
        <div className="flex-1 mb-2 md:mb-0">
          {isSummaryLoading ? (
            <Spinner />
          ) : (
            <div className="mb-2 flex items-center gap-6">
              <div className="flex items-center gap-4">
                <span>{t('common.tick')}:</span>
                <span>{summary.ticker}</span>
              </div>
              <div className="flex items-center gap-4">
                <span>{t('common.lowest_price')}:</span>
                <span>{summary.lowest_price} BTC</span>
              </div>
            </div>
          )}
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn className="text-sm md:text-base">
                {t('common.item')}
              </TableColumn>
              <TableColumn className="text-sm md:text-base">
                {t('common.unit_price')}
              </TableColumn>
              <TableColumn className="text-sm md:text-base">
                {t('common.num')}
              </TableColumn>
            </TableHeader>
            <TableBody>
              {list.map((item, i) => (
                <TableRow key={item.utxo}>
                  <TableCell>
                    <div className="mb-2">
                      <span className="text-gray-400">Ticker：</span>
                      {item.tickers?.map((v) => ` ${v.ticker}`)?.join('-')}
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-gray-400">
                          {t('common.asset_num')}：
                        </span>
                        {item.tickers?.map((v) => ` ${v.amount}`)?.join('-')}
                      </div>
                      <div>
                        <span className="text-gray-400">Sats:</span>{' '}
                        {item.value}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400">Utxo：</span>
                      <Snippet
                        codeString={item?.utxo}
                        className="bg-transparent text-gray-500"
                        symbol=""
                        size="lg"
                        variant="flat"
                      >
                        <span className="font-thin">
                          {hideStr(item?.utxo, 6)}
                        </span>
                      </Snippet>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={list[i].price}
                      onChange={(e) => changePrice(item.utxo, e.target.value)}
                      onBlur={() => inputBlur(item.utxo)}
                      endContent={
                        <Select
                          size="sm"
                          color="primary"
                          selectedKeys={[list[i].unit]}
                          onChange={(e) =>
                            onUnitChange(i, item.utxo, e.target.value as any)
                          }
                          className="w-32"
                        >
                          <SelectItem key="btc" value="btc">
                            BTC
                          </SelectItem>
                          <SelectItem key="sats" value="sats">
                            sats
                          </SelectItem>
                        </Select>
                      }
                    />
                  </TableCell>
                  <TableCell>1</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Card className="w-60">
          <CardBody>
            <div>
              {t('common.total')}: {list.length}
            </div>
            <div>
              {t('common.your_profits')}: {totalPrice}{' '}
              {list[0]?.unit === 'btc' ? 'BTC' : 'Sat'}
            </div>
          </CardBody>
          <CardFooter>
            <Button
              isDisabled={totalPrice <= 0}
              color="primary"
              isLoading={loading}
              className="w-full"
              onClick={listItems}
            >
              {t('buttons.list_sale')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
