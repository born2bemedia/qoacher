'use client';

import type { InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms';

const textFieldVariants = cva(
  'p-4 text-sm font-thin text-[#6B6B6B] transition-all duration-300 focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-white border border-[#808080]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  hint,
  variant,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  hint?: string;
} & TextFieldVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-1.5">
      {hint && (
        <span className="absolute top-[-20px] left-0">
          <Text color="danger" size="sm">
            {hint}
          </Text>
        </span>
      )}
      <input
        className={cn(textFieldVariants({ variant }), className)}
        {...args}
      />
    </label>
  );
};
