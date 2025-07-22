'use client';

import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const titleVariants = cva('transition duration-300 ease-in-out font-ledger', {
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl max-md:text-3xl',
    },
    color: {
      dark: 'text-black',
      light: 'text-white',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
    zIndex: {
      0: 'z-0',
      1: 'z-10',
      2: 'z-20',
      3: 'z-30',
      4: 'z-40',
      5: 'z-50',
    },
  },
  defaultVariants: {
    size: '5xl',
    color: 'dark',
    weight: 400,
    zIndex: 0,
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  color,
  weight,
  size,
  className,
  zIndex,
  as = 'h1',
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ color, weight, size, zIndex }),
        'leading-[120%]',
        className,
      )}
    >
      {children}
    </Tag>
  );
};
