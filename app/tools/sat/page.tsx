'use client';

import { getSatsByAddress } from "@/api";
import { Button, Card, CardBody, CardHeader, Divider, Input, Table, TableBody, TableColumn, TableHeader, Tooltip } from "@nextui-org/react";
import { notification } from "antd";
import { useReactWalletStore } from "btc-connect/dist/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useList, useMap } from "react-use";


export default function RareSats() {
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const { address: currentAccount, network } = useReactWalletStore((state) => state);
    const [satList, { set: setSatList }] = useList<any>(
        [],
    );

    const [address, setAddress] = useState('');
    const [searchSatList, { set: setSearchSatList }] = useMap<any>({
        items: []
    });

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
        setLoading(true);
        setSatList([]);
        const res = await getSatsByAddress({
            address: address,
            sats: searchSatList.items.map(item => Number(item.sat)),
            network,
        });

        if (res.code !== 0) {
            setLoading(false);
            notification.error({
                message: t('notification.search_rare_sats_failed_title'),
                description: res.msg,
            });
            return;
        }
        if (res.data === null) {
            setLoading(false);
            notification.error({
                message: t('notification.search_rare_sats_failed_title'),
                description: 'No data',
            });
            return;
        }
        setLoading(false);
        setSatList(res.data);
    };

    useEffect(() => {
        setSearchSatList('items', [
            {
                id: 1,
                sat: '766947282572069',
            },
            {
                id: 2,
                sat: '623624999999999',
            },
            {
                id: 3,
                sat: '1832757499999999',
            },
        ]);
    }, [currentAccount]);

    return (
        <div className="flex flex-col max-w-7xl mx-auto pt-8">
            <Card>
                <CardBody>
                    {searchSatList.items.map((item, i) => (
                        <div className="flex gap-2 pb-2" key={i}>
                            <Input
                                width={'60%'}
                                value={item.sat}
                                startContent={
                                    <div className="pointer-events-none flex items-center w-3/12">
                                        <span className="text-default-500 text-small">
                                            Sat
                                        </span>
                                    </div>
                                }
                            />
                            <Button radius="full" onClick={addSat}>
                                +
                            </Button>
                            <Button radius="full" onClick={() => removeSat(item.id)}>
                                -
                            </Button>
                        </div>
                    ))}

                    <Divider className="mt-4 mb-4" />
                    <div className="flex w-full">
                        <Input
                            width={'60%'}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            startContent={
                                <div className="pointer-events-none flex items-center w-3/12">
                                    <span className="text-default-500 text-small">
                                        BTC Address
                                    </span>
                                </div>
                            }
                        />
                        <Tooltip content="Fill the BTC address of the current account">
                            <Button onClick={() => setAddress(currentAccount)}>
                                +
                            </Button>
                        </Tooltip>
                    </div>
                    <Divider className="mt-4 mb-4" />
                    <Button size='md' color="primary" variant="bordered" onKeyDown={handleKeyDown} isLoading={loading} onClick={doSearch}>
                        Search
                    </Button>
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
                            <TableColumn className="text-sm md:text-base">
                                {t('pages.tools.search_sat.table_col1')}
                            </TableColumn>
                            <TableColumn className="text-sm md:text-base">
                                {t('pages.tools.search_sat.table_col2')}
                            </TableColumn>
                            <TableColumn className="text-sm md:text-base">
                                {t('pages.tools.search_sat.table_col3')}
                            </TableColumn>
                            <TableColumn className="text-sm md:text-base">
                                {t('pages.tools.search_sat.table_col4')}
                            </TableColumn>
                        </TableHeader>
                        <TableBody emptyContent={"No datas."}>
                            {satList.map((item, i) => (
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
