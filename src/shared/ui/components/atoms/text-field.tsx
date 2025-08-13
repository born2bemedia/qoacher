'use client';

import type { InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';

const textFieldVariants = cva(
  'p-4 disabled:bg-[rgba(128,128,128,0.1)] disabled:border-[#808080]/50 text-sm font-thin text-[#6B6B6B] transition-all duration-300 focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-white border border-[#808080]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;

export const TextField = ({
  className,
  hint,
  variant,
  label,
  ...args
}: InputHTMLAttributes<HTMLInputElement> & {
  hint?: string;
  label?: string;
} & TextFieldVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-2">
      {hint && (
        <span className={cn('absolute top-[-20px] left-0', label && 'hidden')}>
          <Text color="danger" size="sm">
            {hint}
          </Text>
        </span>
      )}
      {label && !hint ? <Text>{label}</Text> : null}
      {label && hint ? (
        <Text color="danger" size="sm">
          {hint}
        </Text>
      ) : null}
      <input className={cn(textFieldVariants({ variant }), className)} {...args} />
    </label>
  );
};
