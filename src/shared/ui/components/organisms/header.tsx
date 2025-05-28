'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { navigation } from '@/shared/config/routes';
import { Button, Dropdown, Text } from '@/shared/ui/components/atoms';
import { MenuButton } from '@/shared/ui/components/molecules';
import { BasketIcon } from '@/shared/ui/icons/fill';
import { ChevronDown } from '@/shared/ui/icons/outline';

const BurgerMenu = dynamic(
  () => import('./burger-menu').then(mod => mod.BurgerMenu),
  {
    ssr: false,
  },
);

export const Header = () => {
  return (
    <header className="border-light-gray relative z-50 flex items-center justify-between border-b px-[100px] py-3 max-md:px-4 max-md:py-3">
      <section className="flex items-center gap-16">
        <Image src="/logo.svg" alt="logo" width={134} height={30} />
        <ul className="flex items-center gap-6 max-lg:hidden">
          {navigation.map(item =>
            item.list ? (
              <Dropdown
                key={item.label}
                trigger={
                  <MenuButton>
                    <Text>{item.label}</Text>
                    <ChevronDown />
                  </MenuButton>
                }
                values={item.list.map(v => ({
                  label: <Link href={v.href}>{v.label}</Link>,
                  value: v.href,
                }))}
              />
            ) : (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </ul>
      </section>
      <section className="flex items-center gap-6 max-lg:hidden">
        <BasketIcon />
        <Button>Sign in</Button>
      </section>
      <BurgerMenu />
    </header>
  );
};
