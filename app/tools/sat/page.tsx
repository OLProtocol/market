'use client';

import { addOrderTask, getSatsByAddress } from "@/api";
import { signAndPushPsbt } from "@/lib";
import { useCommonStore } from "@/store";
import { Button, Card, CardBody, CardHeader, Divider, Input, Switch, Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";
import { notification } from "antd";
import { useReactWalletStore } from "btc-connect/dist/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useList, useMap } from "react-use";

export default function RareSats() {
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const { feeRate } = useCommonStore((state) => state);
    const { address: currentAccount, network, publicKey } = useReactWalletStore((state) => state);
    const [utxoList, { set: setUtxoList }] = useList<any>([]);
    const [address, setAddress] = useState('');
    const [searchSatList, { set: setSearchSatList }] = useMap<any>({
        items: []
    });
    const [selectGlobal, setSelectGlobal] = useState(false);
    const serviceFee = 100000; // sats

    const addSat = () => {
        const newId = searchSatList.items.length + 1;
        const newItem = {
            id: newId,
            sat: '',
        };

        setSearchSatList('items', [...searchSatList.items, newItem]);
    }

    const removeSat = (itemId: number) => {
        if (searchSatList.items.length > 1) {
            const tmpItems = searchSatList.items.filter((item) => item.id !== itemId);
            tmpItems.forEach((item, index) => {
                item.id = index + 1;
            });
            setSearchSatList('items', tmpItems);
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            doSearch();
        }
    }

    const doSearch = async () => {
        if (selectGlobal) {
            doSearchInGlobal();
        } else {
            doSearchByAddress();
        }
    }

    const doSearchInGlobal = async () => {
        setLoading(true);
        try {
            const txid = '';
            const parameters = {
                sat_no: searchSatList.items[0].sat,
            }
            const type = 'search_rarity_sats';
            const resp = await addOrderTask({ address, serviceFee, parameters, txid, type }); // 提交任务
            setLoading(false);
            if (resp.code !== 0) {
                notification.error({
                    message: t('notification.search_sats_title'),
                    description: resp.msg || 'Search sats in global failed',
                });
            } else {
                notification.success({
                    message: t('notification.search_sats_title'),
                    description: 'Split & Send success',
                });
            }

        } catch (error: any) {
            console.log('error(search sats) = ', error);
            setLoading(false);
            notification.error({
                message: t('notification.search_sats_title'),
                description: error.message || 'Search sats in global failed',
            });
        }
    };

    const doSearchByAddress = async () => {
        setLoading(true);
        setUtxoList([]);
        const res = await getSatsByAddress({
            address: address,
            sats: searchSatList.items.map(item => Number(item.sat)),
            network,
        });

        if (res.code !== 0) {
            setLoading(false);
            notification.error({
                message: t('notification.search_sats_title'),
                description: res.msg,
            });
            return;
        }
        if (res.data === null) {
            setLoading(false);
            notification.error({
                message: t('notification.search_sats_title'),
                description: 'No data',
            });
            return;
        }
        setLoading(false);
        setUtxoList(res.data);
    };

    const handleSelectAll = (flag) => {
        console.log('flag = ', flag)
        setSelectGlobal(flag);
        setSearchSatList('items', [
            {
                id: 1,
                sat: '',
            },
        ]);
        setAddress('');
    }

    useEffect(() => {
        setSearchSatList('items', [
            {
                id: 1,
                sat: '',
            },
        ]);
    }, [currentAccount]);

    return (
        <div className="flex flex-col max-w-7xl mx-auto pt-8">
            <Card>
                <CardBody>
                    {searchSatList.items.map((item, i) => (
                        <div className="flex w-full gap-2 pb-2" key={i}>
                            <Input
                                className='w-[90%]'
                                value={item.sat}
                                startContent={
                                    <div className="pointer-events-none flex items-center w-[19%] bg-gray-500 justify-center h-full">
                                        <span className="text-small txt-default-500">
                                            Sat
                                        </span>
                                    </div>
                                }
                            />
                            <div className="flex gap-2">
                                <Button radius="full" onClick={addSat}>
                                    +
                                </Button>
                                <Button radius="full" onClick={() => removeSat(item.id)}>
                                    -
                                </Button>
                            </div>
                        </div>
                    ))}
                    <Divider className="mt-4 mb-4" />
                    <div className="flex w-full">
                        <Input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            isDisabled={selectGlobal}
                            startContent={
                                <div className="pointer-events-none flex items-center w-[16%] bg-gray-500 justify-center h-full">
                                    <span className="text-small txt-default-500">
                                        BTC Address
                                    </span>
                                </div>
                            }
                        />
                    </div>
                    <Divider className="mt-4 mb-4" />
                    <div className="flex gap-2 pb-2 justify-end">
                        <Switch defaultSelected={selectGlobal} onValueChange={() => handleSelectAll(!selectGlobal)}>
                            <p className="text-gray-400 font-thin">
                                Search In Global(Fee: 100,000 Sats)
                            </p>
                        </Switch>
                        <Button size='md' color="primary" onKeyDown={handleKeyDown} isLoading={loading} onClick={doSearch}>
                            Search
                        </Button>
                    </div>
                </CardBody>
            </Card>
            <Divider className="mt-4 mb-4" />
            <Card>
                <CardHeader>
                    <h1>{t('pages.tools.search_sat.table_title')}</h1>
                </CardHeader>
                <Divider />
                <CardBody>
                    <Table
                        isHeaderSticky
                        isStriped
                        color="primary"
                        selectionMode="single">
                        <TableHeader>
                            <TableColumn className="text-sm md:text-base font-thin">
                                {t('pages.tools.search_sat.table_col1')}
                            </TableColumn>
                            <TableColumn className="text-sm md:text-base font-thin">
                                {t('pages.tools.search_sat.table_col2')}
                            </TableColumn>
                            <TableColumn className="text-sm md:text-base font-thin">
                                {t('pages.tools.search_sat.table_col3')}
                            </TableColumn>
                            <TableColumn className="text-sm md:text-base font-thin">
                                {t('pages.tools.search_sat.table_col4')}
                            </TableColumn>
                        </TableHeader>
                        <TableBody emptyContent={"No datas."}>
                            {utxoList.map((item, i) => (
                                <TableColumn
                                    key={i}
                                    className="text-sm md:text-base"
                                >
                                    {item.sat}
                                </TableColumn>
                            ))}
                        </TableBody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
}
