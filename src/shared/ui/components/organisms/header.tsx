'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Navigation } from '@/shared/config/navigation';
import { cookies } from '@/shared/lib/cookies';
import { Button } from '@/shared/ui/components/atoms/button';
import { Dropdown } from '@/shared/ui/components/atoms/dropdown';
import { Text } from '@/shared/ui/components/atoms/text';
import { BasketIcon } from '@/shared/ui/icons/fill';
import { ChevronDown } from '@/shared/ui/icons/outline';

import { UserIcon } from '../../icons/fill/user';
import { LangSwitcher } from '../molecules/lang-switcher';
import { useUser } from '@/core/user/model/user.store';

const BurgerMenu = dynamic(() => import('./burger-menu').then((mod) => mod.BurgerMenu), {
  ssr: false,
});

export const Header = () => {
  const pathname = usePathname();
  const t = useTranslations('header');

  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUser = cookies.get('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    setUser(parsedUser);
  }, [setUser]);

  return (
    <header className="border-light-gray sticky top-0 z-50 flex items-center justify-between border-b bg-white px-[100px] py-3 max-md:px-4 max-md:py-3">
      <section className="flex items-center gap-16">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={134} height={30} />
        </Link>
        <ul className="flex items-center gap-6 max-lg:hidden">
          {Navigation().map((item) =>
            item.list ? (
              <Dropdown
                pathname={pathname}
                key={item.label}
                trigger={
                  <button className="flex cursor-pointer items-center gap-1 py-4 outline-none">
                    <Text>{item.label}</Text>
                    <ChevronDown />
                  </button>
                }
                values={item.list.map((v) => ({
                  label: <Link href={v.href}>{v.label}</Link>,
                  value: v.href,
                }))}
              />
            ) : (
              <Link key={item.label} href={item.href}>
                <Text>{item.label}</Text>
              </Link>
            )
          )}
        </ul>
      </section>
      <section className="flex items-center gap-6 max-lg:hidden">
        <Link href="/cart">
          <BasketIcon />
        </Link>
        <LangSwitcher />
        {user ? (
          <Link href="/account">
            <Button>
              <UserIcon />
              {user.firstName}
            </Button>
          </Link>
        ) : (
          <Link href="/sign-in">
            <Button>{t('signIn', { fallback: 'Sign in' })}</Button>
          </Link>
        )}
      </section>
      <BurgerMenu />
    </header>
  );
};
