'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  Root,
} from '@radix-ui/react-dropdown-menu';

import { DeIcon } from '@/shared/ui/icons/countries/de';
import { GbIcon } from '@/shared/ui/icons/countries/gb';
import { ItIcon } from '@/shared/ui/icons/countries/it';
import { ChevronDown } from '@/shared/ui/icons/fill/chevron-down';

import { Text } from '../atoms/text';

export const LangSwitcher = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations('langSwitcher');

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = useCallback(
    (value: string) => {
      const segments = pathname.split('/');
      segments[1] = value;
      const newPath = segments.join('/');
      router.replace(newPath);
    },
    [pathname, router]
  );

  const languages = [
    { value: 'en', icon: <GbIcon />, label: t('en', { fallback: 'English' }) },
    { value: 'de', icon: <DeIcon />, label: t('de', { fallback: 'German' }) },
    { value: 'it', icon: <ItIcon />, label: t('it', { fallback: 'Italian' }) },
  ];

  return (
    <Root open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="cursor-pointer flex items-center gap-2 bg-black/5 p-4.5 outline-0">
        <div className="flex items-center gap-1">
          {languages.find((lang) => lang.value === locale)?.icon}
          <Text uppercase>{languages.find((lang) => lang.value === locale)?.value}</Text>
        </div>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="z-[900] flex w-max animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] flex-col bg-[#F2F2F2] data-[side=bottom]:animate-[slideUpAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=left]:animate-[slideRightAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=right]:animate-[slideLeftAndFade_400ms_cubic-bezier(0.16,1,0.3,1)] data-[side=top]:animate-[slideDownAndFade_400ms_cubic-bezier(0.16,1,0.3,1)]"
        >
          {languages.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => {
                setOpen(false);
                switchLanguage(option.value);
              }}
              className="flex cursor-pointer items-center gap-2 p-3 outline-0 transition duration-300 ease-in-out hover:bg-black/5"
            >
              {option.icon}
              <Text>{option.label}</Text>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </Root>
  );
};
