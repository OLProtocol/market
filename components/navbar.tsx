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
import { ThemeSwitch } from '@/components/theme-switch';
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from '@/components/icons';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
// import useTranslation from 'next-translate/useTranslation';
import { usePathname } from 'next/navigation';
import { useState, useMemo, useRef, useEffect } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { getUtxoByValue, ordxSWR, getBTCPrice } from '@/api';
import { useCommonStore, useUtxoStore } from '@/store';
import { useReactWalletStore } from 'btc-connect/dist/react';

const WalletButton = dynamic(
  () => import('../components/wallet/WalletConnectButton') as any,
  { ssr: false },
);

export const Navbar = () => {
  const { address, network } = useReactWalletStore();
  const { setHeight, setBtcPrice } = useCommonStore();
  const { setList } = useUtxoStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  const { data: heightData } = ordxSWR.useBtcHeight(network as any);
  const { data, trigger: getUtxos } = useSWRMutation(
    `getUtxoByValue-${address}-${network}`,
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
  const navMenus = useMemo(
    () => [
      {
        label: t('pages.market.title'),
        href: '/',
        isActive: true,
      },
      {
        label: t('pages.inscribe.title'),
        href: '/inscribe',
        isActive: true,
      },
      {
        label: t('pages.tools.title'),
        href: '/tools',
        isActive: false,
      },
      {
        label: t('pages.my_assets.title'),
        href: '/account',
        isActive: false,
      },
    ],
    [i18n.language],
  );
  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      isMenuOpen={isMenuOpen}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              radius="none"
              src="/logo.png"
              alt="logo"
              className="w-14 h-14"
            />
            <p className="font-bold text-purple-500/90">SAT20Market</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navMenus.map((item) => (
            <NavbarItem key={item.href} isActive={isActive(item.href)}>
              <Link href={item.href} color="foreground">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className=" basis-1/5 sm:basis-full" justify="end">
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden sm:flex">
          <FeerateSelectButton />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link> */}
          {/* <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link> */}
          {/* <Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link> */}
          <LanguageSelect />
          {/* <ThemeSwitch /> */}
        </NavbarItem>
        <NavbarItem className="">
          <WalletButton />
        </NavbarItem>
        <NavbarItem className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarItem>
        {/* <NavbarItem className="hidden md:flex">
					<Button
            isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button>
				</NavbarItem> */}
      </NavbarContent>
      {isMenuOpen && (
        <NavbarMenu>
          {/* {searchInput} */}
          <div className="flex flex-col gap-2">
            <NavbarMenuItem>
              <div className="flex items-center gap-4">
                <FeerateSelectButton />
                <ThemeSwitch />
                <LanguageSelect />
              </div>
            </NavbarMenuItem>
            <Divider />
            {navMenus.map((item) => (
              <NavbarMenuItem key={item.href}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      )}

      <UpdateVersionModal />
    </NextUINavbar>
  );
};
