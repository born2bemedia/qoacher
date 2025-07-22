'use client';

import type { TextareaHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';

const textAreaVariants = cva(
  'p-4 text-sm font-thin text-[#6B6B6B] h-[150px] resize-none transition-all duration-300 focus:outline-none',
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

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  hint,
  variant,
  ...args
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hint?: string;
} & TextAreaVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-1.5">
      {hint && (
        <span className="absolute top-[-20px] left-0">
          <Text color="danger" size="sm">
            {hint}
          </Text>
        </span>
      )}
      <textarea
        className={cn(textAreaVariants({ variant }), className)}
        {...args}
      />
    </label>
  );
};
