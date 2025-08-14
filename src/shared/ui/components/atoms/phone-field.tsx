'use client';

import { defaultCountries, PhoneInput, type PhoneInputProps } from 'react-international-phone';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { excludedCountries } from '@/shared/lib/countries';
import { useCountryCode } from '@/shared/lib/hooks/use-country-code';
import { cn } from '@/shared/lib/utils/styles';

import 'react-international-phone/style.css';
import { Text } from './text';

const phoneFieldVariants = cva(
  '!p-4 disabled:!bg-[rgba(128,128,128,0.1)] disabled:!border-[#808080]/50 transition-all !rounded-none !text-sm !font-thin !text-[#6B6B6B] duration-300 !w-full !h-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: '!border !border-[#808080] !bg-transparent',
        secondary: '!border !border-[#323232] !bg-transparent',
      },
      intent: {
        primary: '',
        danger: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'primary',
    },
  }
);

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;

export const PhoneField = ({
  variant = 'primary',
  intent,
  hint,
  label,
  disabled,
  ...args
}: PhoneInputProps & PhoneFieldVariants & { hint?: string; label?: string }) => {
  const country = useCountryCode();

  return (
    <label className="relative w-full flex flex-col gap-2">
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
      <PhoneInput
        defaultCountry={
          defaultCountries.some(([, iso2]) => iso2 === country && !excludedCountries.includes(iso2))
            ? country
            : 'us'
        }
        className={cn('!h-[54px]', intent === 'danger' && '!border !border-[#FF4141]')}
        inputClassName={cn(
          phoneFieldVariants({
            variant,
            intent,
          })
        )}
        countries={defaultCountries.filter(([, iso2]) => !excludedCountries.includes(iso2))}
        countrySelectorStyleProps={{
          buttonClassName: cn(
            '!h-full !bg-transparent !border !rounded-none !pr-3 !pl-2.5',
            variant === 'primary' ? '!border-[#808080]' : '!border-[#323232]',
            disabled && '!border-[#808080]/50 !bg-[rgba(128,128,128,0.1)]'
          ),
          dropdownStyleProps: {
            className: '!outline-none',
          },
        }}
        disabled={disabled}
        {...args}
      />
    </label>
  );
};
