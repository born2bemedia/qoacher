'use client';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const textVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    weight: {
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
    color: {
      dark: 'text-black',
      light: 'text-white',
      danger: 'text-danger',
      gray: 'text-[#6B6B6B]',
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
    size: 'sm',
    weight: 300,
    color: 'dark',
    zIndex: 0,
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  size,
  weight,
  color,
  zIndex,
  className,
}: { children: React.ReactNode; className?: string } & TextVariants) => {
  return <p className={cn(textVariants({ size, weight, color, zIndex }), className)}>{children}</p>;
};
