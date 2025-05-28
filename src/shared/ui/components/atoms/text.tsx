'use client';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

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
    },
  },
  defaultVariants: {
    size: 'sm',
    weight: 300,
    color: 'dark',
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

export const Text = ({
  children,
  size,
  weight,
  color,
}: { children: React.ReactNode } & TextVariants) => {
  return <p className={textVariants({ size, weight, color })}>{children}</p>;
};
