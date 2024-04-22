'use client';

import {
  Divider,
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
} from '@nextui-org/react';
import { notification } from 'antd';
import { useSellStore } from '@/store';
import { useList } from 'react-use';
import { useEffect, useMemo, useState } from 'react';
import {
  parseUtxo,
  buildSellOrder,
  btcToSats,
  satsToBitcoin,
  splitBatchSignedPsbt,
  buildBatchSellOrder,
} from '@/lib/utils';
import { Decimal } from 'decimal.js';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { submitOrder } from '@/api';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export default function SellPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { list, reset, changePrice, changeStatus } = useSellStore(
    (state) => state,
  );
  const { network, address, btcWallet } = useReactWalletStore((state) => state);
  const listItems = async () => {
    const psbts: string[] = [];
    let successCount = 0;
    setLoading(true);
    try {
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.status !== 'pending') {
          successCount++;
          continue;
        }
        const inscriptionUtxo = {
          ...parseUtxo(item.utxo),
          value: item.value,
        };
        const orderPsbt = await buildSellOrder({
          inscriptionUtxo,
          amount: 1,
          total: btcToSats(Number(list[i].price)),
          network,
          address,
        });
        psbts.push(orderPsbt);
        const signPsbt = await btcWallet?.signPsbt(orderPsbt);
        console.log('Order raw', signPsbt);
        const res = await submitOrder({ address, raw: signPsbt });
        if (res.code === 200) {
          notification.success({
            message: t('notification.list_success_title'),
            description: t('notification.list_success_description'),
          });
          changeStatus(item.utxo, 'confirmed');
          successCount++;
        } else {
          notification.error({
            message: t('notification.list_failed_title'),
            description: res.msg,
          });
        }
      }
      setLoading(false);
      if (successCount === list.length) {
        reset();
        router.back();
      }
      // console.log('PSBTS', psbts);
      // const signedPsbts = await btcWallet?.signPsbts(psbts);
      // console.log('Signed PSBTs', signedPsbts);
      // const batchOrderPsbt = await buildBatchSellOrder({
      //   inscriptionUtxos: list,
      //   address,
      //   network,
      // });
      // const signedPsbts = await btcWallet?.signPsbt(batchOrderPsbt);
      // console.log('Batch Order raw', signedPsbts);
      // if (signedPsbts) {
      //   const psbts = splitBatchSignedPsbt(signedPsbts);
      //   console.log('PSBTS', psbts);
      // }
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
    if (currentUtxo && Number(currentUtxo.price) < 0.00000546) {
      changePrice(utxo, '0.00000546');
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
    <div>
      <div className="md:flex justify-between gap-4">
        <div className="flex-1 mb-2 md:mb-0">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>{t('common.item')}</TableColumn>
              <TableColumn>{t('common.unit_rice')}</TableColumn>
              <TableColumn>{t('common.amount')}</TableColumn>
            </TableHeader>
            <TableBody>
              {list.map((item, i) => (
                <TableRow key={item.utxo}>
                  <TableCell>
                    <div>
                      Ticker：
                      {item.tickers?.map((v) => ` ${v.ticker}`)?.join('-')}
                    </div>
                    <div>
                      Inscription：
                      {item.tickers
                        ?.map((v) => `# ${v.inscriptionnum}`)
                        ?.join('-')}
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
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">
                            BTC
                          </span>
                        </div>
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
              {t('common.your_profits')}: {totalPrice} BTC
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
