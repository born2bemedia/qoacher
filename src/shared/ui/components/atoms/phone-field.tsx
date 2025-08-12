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
  '!p-4 transition-all !border !rounded-none !text-sm !font-thin !text-[#6B6B6B] duration-300 !w-full !h-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: '!border-[#808080] !bg-white',
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
  variant,
  intent,
  hint,
  ...args
}: PhoneInputProps & PhoneFieldVariants & { hint?: string }) => {
  const country = useCountryCode();

  return (
    <label className="relative w-full">
      {hint && (
        <span className="absolute top-[-20px] left-0">
          <Text color="danger" size="sm">
            {hint}
          </Text>
        </span>
      )}
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
            '!h-full bg-white !border !border-[#808080] !rounded-none !pr-3 !pl-2.5'
          ),
          dropdownStyleProps: {
            className: '!outline-none',
          },
        }}
        {...args}
      />
    </label>
  );
};
