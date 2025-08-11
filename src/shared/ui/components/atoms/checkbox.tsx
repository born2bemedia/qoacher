'use client';

import { type ReactNode, useId } from 'react';
import { type CheckboxProps, Indicator, Root } from '@radix-ui/react-checkbox';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/components/atoms/text';
import { Check } from '@/shared/ui/icons/fill/check';

export const Checkbox = ({
  label,
  onCheckedChange,
  checked = false,
  id,
  intent = 'default',
  ...props
}: {
  label?: ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  id?: string;
  intent?: 'default' | 'danger';
} & CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <Root
        className={cn(
          'flex h-[18px] w-[18px] flex-shrink-0 cursor-pointer items-center justify-center border bg-transparent transition-all duration-300 ease-in-out data-[state=checked]:bg-black',
          intent === 'danger'
            ? 'border-[#FF5151] hover:shadow-[0_0_0_1px_#FF5151] focus:shadow-[0_0_0_1px_#FF5151]'
            : 'border-black hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_1px_black]'
        )}
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
      >
        <Indicator className="mt-0.5">
          <Check />
        </Indicator>
      </Root>
      <label htmlFor={checkboxId}>
        <Text color="gray" weight={300}>
          {label}
        </Text>
      </label>
    </div>
  );
};
