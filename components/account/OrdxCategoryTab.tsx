import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import useSWR from 'swr';
import { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReactWalletStore } from 'btc-connect/dist/react';
import { Icon } from '@iconify/react';
import { getAddressAssetsSummary } from '@/api';
import { satsToBitcoin } from '@/lib/utils';
import { BtcPrice } from '@/components/BtcPrice';

interface IOrdxCategoryTabProps {
  onChange?: (key: string) => void;
}
export const OrdxCategoryTab = ({ onChange }: IOrdxCategoryTabProps) => {
  const { t } = useTranslation();
  const { address, balance, network } = useReactWalletStore((state) => state);

  const swrKey = useMemo(() => {
    return `/ordx/getAddressAssetsSummary-${address}-${network}`;
  }, [address, network]);

  const { data, isLoading, mutate } = useSWR(
    swrKey,
    () => getAddressAssetsSummary(address),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  const list = useMemo(() => {
    const tickerInfo = data?.data?.find((v) => v.assets_type === 'ticker');
    const exoticInfo = data?.data?.find((v) => v.assets_type === 'exotic');
    const nftInfo = data?.data?.find((v) => v.assets_type === 'nft');
    const nsInfo = data?.data?.find((v) => v.assets_type === 'ns');
    console.log(data);
    return [
      {
        label: 'SAT20 Token',
        key: 'ticker',
        value: tickerInfo?.total_value || 0,
      },
      {
        label: 'Rare Sats',
        key: 'exotic',
        value: exoticInfo?.total_value || 0,
      },
      {
        label: 'Pure Name',
        key: 'ns',
        value: nsInfo?.total_value || 0,
      },
      {
        label: 'Ordinals NFT',
        key: 'ordinals',
        value: nftInfo?.total_value || 0,
      },
    ];
  }, [data]);
  const [selected, setSelected] = useState(list[0].key);

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
              {item.value}
            </div>
            <div className="flex text-sm md:font-bold">
              <span className="text-yellow-400 w-5"> &nbsp;$</span>
              <span className="text-gray-400 h-5">
                <BtcPrice btc={item.value} />
              </span>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
