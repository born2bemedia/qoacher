'use client';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

import st from './hero.module.css';

export const Hero = () => {
  return (
    <section className={cn(st.bg, 'h-[315px] flex justify-center items-center text-center')}>
      <div className="flex flex-col gap-3">
        <Title as="h1" size="5xl" color="light">
          Thank You for Your Order
        </Title>
        <Text color="light" weight={300}>
          You’re one step away from your major life challenge. Complete your payment to <br />{' '}
          activate your order.
        </Text>
      </div>
    </section>
  );
};
