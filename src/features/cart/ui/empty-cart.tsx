'use client';

import Link from 'next/link';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { BoxesIcon } from '@/shared/ui/icons/fill/boxes';
import { CartIcon } from '@/shared/ui/icons/fill/cart';
import { GearIcon } from '@/shared/ui/icons/fill/gear';
import { TodoIcon } from '@/shared/ui/icons/fill/todo';

import { ExtraSupport } from './extra-support';

const getButton = () => [
  {
    icon: <GearIcon />,
    label: 'Services',
    url: '/services',
  },
  {
    icon: <BoxesIcon />,
    label: 'Packages',
    url: '/packages',
  },
  {
    icon: <TodoIcon />,
    label: 'Programs',
    url: '/programs',
  },
];

export const EmptyCart = () => {
  return (
    <section className="flex flex-col">
      <section className="flex h-[700px] flex-col gap-12 items-center justify-center px-[165px] py-[64px] max-md:px-3 max-md:py-8">
        <div className="flex flex-col gap-6 items-center">
          <CartIcon />
          <div className="flex flex-col gap-3">
            <Title size="3xl" weight={400}>
              The Cart Is Empty
            </Title>
            <Text>Here’s how you can start your way forward:</Text>
          </div>
        </div>
        <div className="flex items-center gap-6 max-md:flex-col max-md:w-full">
          {getButton().map((item) => (
            <Link key={item.label} href={item.url} className="w-full">
              <Button className="max-md:w-full max-md:justify-center">
                {item.icon} {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </section>
      <ExtraSupport />
    </section>
  );
};
