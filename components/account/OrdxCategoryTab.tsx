import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import useSWR from 'swr';
import { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Icon } from '@iconify/react';
import { getAddressAssetsValue } from '@/api';
import { satsToBitcoin } from '@/lib/utils';
import { BtcPrice } from '@/components/BtcPrice';

interface IOrdxCategoryTabProps {
  onChange?: (key: string) => void;
}
export const OrdxCategoryTab = ({ onChange }: IOrdxCategoryTabProps) => {
  const { t } = useTranslation();
  const { address, balance, network } = useReactWalletStore((state) => state);

  const [totalSatValue, setTotalSatValue] = useState(0);
  const swrKey = useMemo(() => {
    return `/ordx/getAddressAssetsValue-${address}-${network}`;
  }, [address, network]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressAssetsValue(address),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  const list = useMemo(() => {
    return [
      {
        label: 'SAT20 Token',
        key: 'ticker',
        value: 1000000,
      },
      {
        label: 'Rare Sats',
        key: 'exotic',
        value: 1000,
      },
      {
        label: 'Pure Name',
        key: 'ns',
        value: 10000,
      },
      {
        label: 'Ordinals NFT',
        key: 'ordinals',
        value: 100000,
      },
    ];
  }, []);
  const [selected, setSelected] = useState(list[0].key);
  useEffect(() => {
    console.log(data);
    if (data?.data) {
      setTotalSatValue(data.data?.total_value || 0);
    }
  }, [data]);
  useEffect(() => {
    if (selected) {
      onChange?.(selected);
    }
  }, []);
  useEffect(() => {
    if (selected) {
      onChange?.(selected);
    }
  }, [selected]);

  console.log(selected);
  return (
    <div className="flex flex-wrap gap-8">
      {list.map((item) => (
        <Card
          isHoverable
          isPressable
          className={`px-2 w-48 max-w-full ${selected === item.key ? 'bg-gray-100' : ''}`}
          key={item.key}
          onPress={() => {
            console.log(item.key);
            setSelected(item.key);
          }}
        >
          <CardHeader>
            <span className="text-base md:text-lg font-mono text-gray-400">
              {item.label}
            </span>
          </CardHeader>
          <Divider className="divide-inherit divide-dashed" />
          <CardBody className="text-left text-md font-thin leading-8">
            <div className="flex">
              <Icon icon="cryptocurrency-color:btc" className="mr-1 mt-2" />
              {satsToBitcoin(item.value)}
            </div>
            <div className="flex text-sm md:font-bold">
              <span className="text-yellow-400 w-5"> &nbsp;$</span>
              <span className="text-gray-400 h-5">
                <BtcPrice btc={satsToBitcoin(item.value)} />
              </span>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
