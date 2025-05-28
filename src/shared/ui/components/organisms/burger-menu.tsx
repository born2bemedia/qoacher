'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';

import { navigation } from '@/shared/config/routes';
import { Button, Text } from '@/shared/ui/components/atoms';
import { MenuButton } from '@/shared/ui/components/molecules';
import { BasketIcon, BurgerIcon } from '@/shared/ui/icons/fill';
import { ChevronDown } from '@/shared/ui/icons/outline';

export const BurgerMenu = () => {
  const [openedSubmenus, setOpenedSubmenus] = useState<string[]>([]);

  return (
    <Root>
      <Trigger className="hidden max-lg:block">
        <BurgerIcon />
      </Trigger>
      <Portal>
        <Overlay className="fixed inset-0 top-[55px] animate-[overlayShow_150ms_cubic-bezier(0.16,1,0.3,1)] bg-black/80" />
        <Content className="fixed top-[55px] max-h-[92vh] w-full transform overflow-y-auto bg-white p-[25px] focus:outline-none">
          <Title />
          <Description />
          <section className="flex flex-col gap-4 p-6">
            <ul className="flex flex-col gap-4">
              {navigation.map(n =>
                n.list ? (
                  <section key={n.label}>
                    <MenuButton
                      key={n.label}
                      onClick={() =>
                        setOpenedSubmenus(prev =>
                          prev.includes(n.label)
                            ? prev.filter(label => label !== n.label)
                            : [...prev, n.label],
                        )
                      }
                    >
                      <Text>{n.label}</Text>
                      <ChevronDown />
                    </MenuButton>
                    {openedSubmenus.includes(n.label) && (
                      <section className="flex flex-col">
                        {n.list.map(l => (
                          <Link key={l.label} href={l.href} className="p-4">
                            {l.label}
                          </Link>
                        ))}
                      </section>
                    )}
                  </section>
                ) : (
                  <Link key={n.label} href={n.href} className="py-4">
                    {n.label}
                  </Link>
                ),
              )}
            </ul>
            <section className="flex items-center gap-6">
              <Link href="/cart" className="w-full">
                <Button variant="light" fullWidth>
                  Cart
                  <BasketIcon />
                </Button>
              </Link>
              <Link href="/sign-in" className="w-full">
                <Button fullWidth>Sign in</Button>
              </Link>
            </section>
          </section>
        </Content>
      </Portal>
    </Root>
  );
};
