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
import { useEffect, useMemo } from 'react';
import {
  parseUtxo,
  buildSellOrder,
  btcToSats,
  satsToBitcoin,
} from '@/lib/utils';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { submitOrder } from '@/api';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export default function SellPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const { list, reset } = useSellStore((state) => state);
  const { network, address } = useReactWalletStore((state) => state);
  const [
    priceList,
    { updateAt: updateAt, set: setList, clear: clearList, removeAt },
  ] = useList<string>([]);
  const listItems = async () => {
    for (let i = 0; i < list.length; i++) {
      try {
        const item = list[i];
        const inscriptionUtxo = {
          ...parseUtxo(item.utxo),
          value: item.value,
        };
        const orderRaw = await buildSellOrder({
          inscriptionUtxo,
          amount: 1,
          total: btcToSats(Number(priceList[i])),
          network,
          address,
        });
        const res = await submitOrder({ address, raw: orderRaw });
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
      } catch (error: any) {
        console.error('List failed', error);
        notification.error({
          message: t('notification.list_failed_title'),
          description: error.message,
        });
      }
    }
  };
  const priceChange = (i, v: any) => {
    updateAt(i, v);
  };
  const inputBlur = (i) => {
    if (Number(priceList[i]) < 0.00000546) {
      updateAt(i, '0.00000546');
    }
  };
  const totalPrice = useMemo(
    () => priceList.reduce((a, b) => Number(a) + Number(b), 0) || 0,
    [priceList],
  );
  console.log('priceList', priceList);
  useEffect(() => {
    setList(Array.from(list).fill('0'));
  }, [list, setList]);

  return (
    <div>
      <div className="md:flex justify-between gap-4">
        <div className="flex-1 overflow-hidden mb-2 md:mb-0">
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
                      value={priceList[i]}
                      onChange={(e) => priceChange(i, e.target.value)}
                      onBlur={() => inputBlur(i)}
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
        <Card className="w-full md:w-60">
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
