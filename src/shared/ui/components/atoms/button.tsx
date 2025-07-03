'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'transition duration-300 flex items-center gap-2 ease-in-out px-8 py-4 cursor-pointer',
  {
    variants: {
      variant: {
        dark: 'text-white bg-black border border-black hover:border-jet-black hover:bg-jet-black',
        light:
          'text-black bg-white border border-black hover:bg-light-gray hover:border-light-gray',
        grey: 'text-black bg-light-gray border border-light-gray hover:bg-gray hover:border-gray',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  },
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
      className,
    )}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);
