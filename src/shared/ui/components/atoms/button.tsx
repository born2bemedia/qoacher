'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 ease-in-out px-8 py-4 cursor-pointer',
  {
    variants: {
      variant: {
        dark: 'text-white bg-black border border-black hover:text-white hover:border-jet-black hover:bg-jet-black',
        light:
          'text-black bg-white border border-black hover:bg-light-gray hover:border-light-gray hover:text-black',
        grey: 'text-black bg-light-gray border border-light-gray hover:bg-gray hover:border-gray',
        support:
          'bg-[rgb(0_0_0_/_0.05)] text-black hover:border-[rgb(0_0_0_/_0.1)] hover:bg-[rgb(0_0_0_/_0.1)]',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const Button = ({
  children,
  variant,
  className,
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonVariants) => (
  <button
    className={cn(
      buttonVariants({ variant }),
      fullWidth ? 'w-full justify-center' : 'w-max',
      className
    )}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);
