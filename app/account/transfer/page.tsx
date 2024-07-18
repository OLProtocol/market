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
  Tabs,
  Tab,
  Textarea,
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
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { getAssetsSummary, submitBatchOrders } from '@/api';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

export default function SellPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    assets_name,
    assets_type,
    list,
    reset,
    unit,
    amountUnit,
    changeAmountUnit,
    changeUnit,
    changePrice,
    changeStatus,
  } = useSellStore((state) => state);
  const [selectedTab, setSelectedTab] = useState('single');
  const [singleAddress, setSingleAddress] = useState('');
  const [multipleAddresses, setMultipleAddresses] = useState('');
  console.log('app.account.sell.page: list: ', list);
  const { network, address, btcWallet } = useReactWalletStore((state) => state);
  const toAddressList = useMemo(() => {
    if (selectedTab === 'single') {
      return [singleAddress];
    } else {
      return multipleAddresses
        .split('\n')
        .map((address) => address.trim())
        .filter((address) => address !== '');
    }
  }, [multipleAddresses, singleAddress, selectedTab]);

  const transferHandler = async () => {
    for (let i = 0; i < list.length; i++) {
      const { price, assets_list } = list[i];
      const _p = amountUnit === 'btc' ? btcToSats(price) : price;
      if (Number(_p) < 330) {
        notification.error({
          message: t('notification.list_failed_title'),
          description: t('notification.list_failed_min_amount'),
        });
        return;
      }
    }
    setLoading(true);
    try {
      const batchOrderPsbt = await buildBatchSellOrder({
        inscriptionUtxos: list,
        address,
        network,
        unit: amountUnit,
      });
      console.log('Batch Order PSBT', batchOrderPsbt);
      const signedPsbts = await btcWallet?.signPsbt(batchOrderPsbt);
      console.log('Batch Order raw', signedPsbts);
      if (signedPsbts) {
        const psbts = splitBatchSignedPsbt(signedPsbts, network);
        const orders = list.map((v, j) => {
          const { assets_list } = v;
          let asset;
          if (assets_type === 'ticker') {
            asset = assets_list.find((a) => a.assets_name === assets_name);
          } else {
            asset = assets_list.find((a) => a.assets_type === assets_type);
          }
          return {
            assets_name: asset.assets_name,
            assets_type: asset.assets_type,
            raw: psbts[j],
          };
        });
        const res = await submitBatchOrders({
          address,
          orders: orders,
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
  const cycleFill = () => {
    const addresses = multipleAddresses;
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
      setMultipleAddresses(newAddressList.join('\n'));
    }
  };
  return (
    <div className="py-2 max-w-3xl mx-auto">
      <div className="md:flex justify-between gap-4">
        <div className="flex-1 mb-2 md:mb-0">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn className="text-sm md:text-base">
                {t('common.item')}
              </TableColumn>
            </TableHeader>
            <TableBody>
              {list.map((item, i) => (
                <TableRow key={item.utxo}>
                  <TableCell>
                    <div className="mb-2 flex flex-wrap items-center gap-4">
                      {item.assets_list?.map((v) => (
                        <div key={v.assets_name}>
                          <div>
                            <span className="text-gray-400">
                              {v.assets_type === 'ns' ? 'Name' : 'Ticker'}：
                            </span>
                            <span>{v.assets_name}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">
                              {t('common.asset_num')}：
                            </span>
                            <span>{v.amount}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <span className="text-gray-400 mr-4">Sats:</span>
                      {item.value}
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div>
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
                    value={singleAddress}
                    onChange={(e) => setSingleAddress(e.target.value)}
                  />
                </div>
              </div>
            </Tab>
            <Tab key="multiple" title="To Multiple Adddress">
              <div className="mb-4">
                <div className="mb-2">
                  Multiple Adddress ({toAddressList.length}):
                </div>
                <Textarea
                  placeholder="Enter multiple addresses, one per line"
                  value={multipleAddresses}
                  onChange={(e) => setMultipleAddresses(e.target.value)}
                  className="mb-2"
                />
                <div className="flex">
                  <Button
                    color={'primary'}
                    onClick={cycleFill}
                    className="w-full"
                  >
                    {t('pages.inscribe.step_three.cycle_fill', {
                      len: list.length,
                    })}
                  </Button>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Button
        color="primary"
        isLoading={loading}
        className="w-full"
        onClick={transferHandler}
      >
        {t('common.transfer')}
      </Button>
    </div>
  );
}
