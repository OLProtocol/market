'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Kbd,
  Link,
  Image,
  Input,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { LanguageSelect } from '@/components/LanguageSelect';
import NextLink from 'next/link';
import { UpdateVersionModal } from './UpdateVersionModal';
import { FeerateSelectButton } from '@/components/fee/FeerateSelectButton';
import { SearchIcon } from '@/components/icons';
import { useTranslation } from 'react-i18next';
// import useTranslation from 'next-translate/useTranslation';
import { usePathname } from 'next/navigation';
import { useState, useMemo, useRef, useEffect } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { getUtxoByValue, ordxSWR, getBTCPrice } from '@/api';
import { useCommonStore, useUtxoStore } from '@/store';
import { Icon } from '@iconify/react';
import { useReactWalletStore } from '@sat20/btc-connect/dist/react';
import { ChainSelect } from '@/components/ChainSelect';
import { NetworkSelect } from '@/components/NetworkSelect';


const WalletButton = dynamic(
  () => import('../components/wallet/WalletConnectButton') as any,
  { ssr: false },
);

export const Navbar = () => {
  const { address, network } = useReactWalletStore();
  const { setHeight, setBtcPrice, runtimeEnv, setEnv, chain } = useCommonStore();
  const { setList } = useUtxoStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const { data: heightData } = ordxSWR.useBtcHeight(network as any);
  const { data, trigger: getUtxos } = useSWRMutation(
    `getUtxoByValue-${address}-${chain}-${network}`,
    () => getUtxoByValue({ address, network, value: 500 }),
  );
  const { data: btcData } = useSWR(`getBTCPrice`, () => getBTCPrice());

  useEffect(() => {
    if (data?.data?.length) {
      const list = data.data?.map((item: any) => ({
        status: 'unspend',
        location: 'remote',
        utxo: `${item.txid}:${item.vout}`,
        ...item,
      }));
      setList(list);
    }
  }, [data]);

  useEffect(() => {
    const height = heightData?.data?.height;
    if (height) {
      setHeight(height);
    }
  }, [heightData]);
  useEffect(() => {
    if (btcData?.data?.amount) {
      setBtcPrice(btcData?.data?.amount);
    }
  }, [btcData]);
  useEffect(() => {
    if (address && network) {
      getUtxos();
    }
  }, [address, network]);
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm',
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  const isActive = (href: string) => {
    return pathname === href;
  };
  const navMenus = useMemo(() => {
    
    const menus = [
      // {
      //   label: t('pages.home.title'),
      //   href: '/',
      //   isActive: true,
      // },
      {
        label: t('pages.market.title'),
        href: runtimeEnv === 'dev' ? '/market' : '/market.html',
        isActive: true,
      },
      {
        label: t('pages.inscribe.title'),
        href: runtimeEnv === 'dev' ? '/inscribe' : '/inscribe.html',
        isActive: true,
      },
      {
        label: t('pages.explorer.title'),
        href: network === 'testnet' ? 'https://testnet.sat20.org/browser/app/' : 'https://mainnet.sat20.org/browser/app/',
        target: '_blank',
        isActive: true,
      },

      {
        label: t('pages.my_assets.title'),
        href: runtimeEnv === 'dev' ? '/account' : '/account.html',
        isActive: false,
      },
    ];
    if (runtimeEnv !== 'prod') {
      menus.push({
        label: t('pages.tools.title'),
        href: runtimeEnv === 'dev' ? '/tools' : '/tools.html',
        isActive: false,
      });
    }
    return menus;
  }, [i18n.language, runtimeEnv]);
  useEffect(() => {
    if (location.hostname.startsWith('test')) {
      setEnv('test');
    } else if (location.hostname.indexOf('ordx') > -1) {
      setEnv('prod');
    }
  }, []);
  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      isMenuOpen={isMenuOpen}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "px-2 sm:px-6", // 修改 header 的 padding
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        
        <NavbarBrand as="li" className="gap-[2px] sm:gap-2 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href="https://ordx.market/"
          >
            <Image
              radius="none"
              src="/logo.png"
              alt="logo"
              classNames={{
                wrapper: 'w-14 h-14 min-w-14',
              }}
              style={{
                width: '56px', // 确保宽度为 56px
                height: '56px', // 确保高度为 56px
              }}
            />
            <p className="font-bold text-xl bg-gradient-to-tr from-[#8000cc] to-[#cc098b] bg-clip-text text-transparent hidden md:block">
              SATSWAP
            </p>
          </NextLink>
        </NavbarBrand>
        <NavbarItem className="sm:hidden flex">
          <FeerateSelectButton />
        </NavbarItem>
        {/* <NavbarItem className="sm:hidden flex">
          <LanguageSelect />
        </NavbarItem> */}
       

       <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navMenus.map((item) => (
            <NavbarItem
              key={item.href}
              isActive={isActive(item.href)}
              className="relative group"
            >
              <NextLink
                href={item.href}
                target={item.target}
                color="foreground"
                className="relative flex items-center py-5"
              >
                {item.label}
                {/* 渐变下划线 */}
                <span
                  className={`absolute left-0 bottom-[-2px] h-[2px] w-full bg-gradient-to-r from-[#8000cc] to-[#a0076d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isActive(item.href) ? 'scale-x-100' : ''
                  }`}
                ></span>
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className=" basis-1/6 sm:basis-full" justify="end">        
        <NavbarItem className="hidden sm:flex gap-2">
          <NetworkSelect />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ChainSelect />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <FeerateSelectButton />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <LanguageSelect />
        </NavbarItem>        
        <NavbarItem className="">
          <WalletButton />
        </NavbarItem>
        <NavbarItem className="lg:hidden h-full">
          <NavbarMenuToggle></NavbarMenuToggle>
        </NavbarItem>
      </NavbarContent>
      {isMenuOpen && (
        <NavbarMenu>
          <div className="flex flex-col gap-2">
            <NavbarMenuItem>
              <div className="flex items-center gap-2 sm:gap-4">
                {/* <FeerateSelectButton /> */}
                {/* <LanguageSelect />                 */}                
                <NetworkSelect />
                <ChainSelect />
                <LanguageSelect /> 
              </div>
            </NavbarMenuItem>
            <Divider />
            {navMenus.map((item) => (
              <NavbarMenuItem key={item.href}>
                <Link href={item.href} className='text-gray-400 py-4 text-sm' onPress={() => setIsMenuOpen(false)}>
                  <Icon icon="mdi-light:chevron-right" className=" text-gray-400 text-lg" />{item.label}
                </Link>
                <hr className="border-gray-700/90" />
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      )}

      <UpdateVersionModal />
    </NextUINavbar>
  );
};
