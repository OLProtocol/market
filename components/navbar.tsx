'use client';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Divider,
  Kbd,
  Link,
  Image,
  Input,
} from '@nextui-org/react';
import { useMemo } from 'react';
import { WalletConnectButton } from '@/components/walllet/WalletConnectButton';
import { LanguageSelect } from '@/components/LanguageSelect';
import NextLink from 'next/link';
import clsx from 'clsx';
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
import { useTranslation } from 'next-export-i18n';
import { Logo } from '@/components/icons';

export const Navbar = () => {
  const { t } = useTranslation();
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
  const navMenus = useMemo(
    () => [{ label: t('pages.market.title'), href: '/' }],
    [],
  );
  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBordered>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logo.jpg" alt="logo" className="w-8 h-8" />
            <p className="font-bold text-inherit">OrdX</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {navMenus.map((item) => (
            <NavbarItem key={item.href}>
              <Link href={item.href}>{item.label}</Link>
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
          <WalletConnectButton />
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

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="flex flex-col gap-2">
          <NavbarMenuItem>
            <div className="flex items-center gap-4">
              <FeerateSelectButton />
              <ThemeSwitch />
            </div>
          </NavbarMenuItem>
          <Divider />
          {navMenus.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      <UpdateVersionModal />
    </NextUINavbar>
  );
};
