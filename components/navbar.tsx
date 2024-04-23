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
import { useTranslation } from 'react-i18next';
// import useTranslation from 'next-translate/useTranslation';
import { Logo } from '@/components/icons';
import { useState } from 'react';

const WalletButton = dynamic(
  () => import('../components/walllet/WalletConnectButton') as any,
  { ssr: false },
);

export const Navbar = () => {
  const { t, i18n } = useTranslation();

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

  const handle = (label: string) => {
    let temp: any = [];
    navMenus.forEach((item) => {
      if (item.label === label) {
        item.isActive = true;
        item.style = 'text-white';
      } else {
        item.isActive = false;
        item.style = 'text-slate-300';
      }
      temp.push(item)
    })
    setNavMenus(temp);
  }
  const [navMenus, setNavMenus] = useState([
    { label: t('pages.market.title'), href: '/', isActive: true, style: 'text-white' },
    { label: t('buttons.my_assets'), href: '/account', isActive: false, style: 'text-slate-300' },
  ]);
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className='bg-gray-800'>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              radius="none"
              src="/logo.jpg"
              alt="logo"
              className="w-8 h-8"
            />
            <p className="font-bold text-inherit">OrdX</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navMenus.map((item) => (
            <NavbarItem key={item.href} isActive={item.isActive}>
              <Link href={item.href} className={item.style} onClick={() => handle(item.label)}>{item.label}</Link>
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
          <ThemeSwitch />
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

      <UpdateVersionModal />
    </NextUINavbar>
  );
};
