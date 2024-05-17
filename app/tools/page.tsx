'use client';
import { WalletConnectBus } from '@/components/wallet/WalletConnectBus';
import { Card, CardBody, CardHeader, Avatar, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function ToolsPage() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const clickHandler = (item) => {
    const { type, path } = item;
    if (type === 'route') {
      router.push(path);
    }
  };

  const toSearchRareSats = () => {
    router.push(`/tools/sat`);
  };
  const tools = [
    {
      name: 'T',
      icon: '',
      title: t('pages.tools.transaction.title'),
      desc: t('pages.tools.transaction.description'),
      path: '/tools/sat',
      type: 'route',
      btnText: t('pages.tools.transaction.btn_split'),
    },
    {
      name: 'T',
      icon: '',
      title: t('pages.inscribe.title'),
      desc: t('pages.inscribe.description'),
      path: '/inscribe',
      type: 'route',
      btnText: t('pages.tools.transaction.btn_split'),
    },
  ];
  return (
    <div className="min-h-[10rem] grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 sm:gap-4 mt-4 mb-4">
      {tools.map((item, i) => (
        <Card className="max-w-[340px]" key={i}>
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar name={item.name} className="text-2xl" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  {item.title}
                </h4>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small justify-center items-center">
            <div className="flex flex-col gap-1 pt-0 items-start justify-center">
              <p className="text-gray-500 pb-4 tracking-[0.06em]">
                {item.desc}
              </p>
            </div>
            <WalletConnectBus className="mx-auto mt-1 block">
              <Button
                className="inline-block  border-transparent h-7 tracking-[0.2em] text-small line-clamp-1 py-0 bg-primary-300 rounded-lg shadow-lg font-sans uppercase"
                onClick={() => clickHandler(item)}
              >
                {item.btnText}
              </Button>
            </WalletConnectBus>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
