'use client';

import type { ElementType, JSX, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const titleVariants = cva(
  'transition duration-300 ease-in-out leading-[120%] font-ledger',
  {
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
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: '5xl',
      color: 'dark',
      weight: 400,
      align: 'left',
    },
  },
);

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  color,
  weight,
  size,
  align,
  className,
  as = 'h1',
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & TitleVariants) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(titleVariants({ color, weight, size, align }), className)}
    >
      {children}
    </Tag>
  );
};
