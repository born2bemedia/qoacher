'use client';

import { useTranslations } from 'next-intl';

import type { Package } from '@/shared/lib/types/type';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

import { Checkmark } from '../../icons/outline';
import { Button } from '../atoms/button';

export const PackagesLayout = ({ packages }: { packages: Package[] }) => {
  const t = useTranslations('packagesLayout');

  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-full flex-col gap-3 text-center max-md:w-full">
        <Title as="h2" className="text-center uppercase text-[32px] mb-20 max-md:text-[24px] max-md:mb-12">
          {t('description', {
            fallback:
              'This happens. One service won’t fix it all — that’s why we built discounted packages for the biggest challenges.',
          })}
        </Title>
      </FadeIn>
      <div className="flex flex-wrap gap-6 w-[1110px] mx-auto justify-center max-md:w-full">
        {packages.map((pack) => (
          <FadeIn
            key={pack.id}
            className="w-[calc(50%-12px)] max-md:w-full flex flex-col justify-between gap-12 p-6 border-1 border-[#E9E9E9]"
          >
            <div className="flex flex-col gap-6">
              <Title
                as="h2"
                className="text-left text-[32px] pb-6 border-b-1 border-[#E9E9E9] h-[120px]"
              >
                {pack.title}
              </Title>
              <Title as="h4" className="text-left text-[18px] ">
                {t('whoItsFor', {
                  fallback: 'Who it’s for:',
                })}
              </Title>
              <Text className="text-[14px]">{pack.whoItsFor}</Text>
              <Title as="h4" className="text-left text-[18px] ">
                {t('includes', {
                  fallback: 'Includes:',
                })}
              </Title>
              <ul className="flex flex-col gap-3">
                {pack.includes.map((include) => (
                  <li key={include} className="flex items-center gap-2">
                    <span className="w-[18px] h-[18px] flex items-center justify-center">
                      <Checkmark />
                    </span>
                    <Text className="text-[14px] w-[calc(100% - 26px)]">{include}</Text>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[40px]">
              <div className="flex flex-row gap-6 items-center max-md:flex-col">
                <div className="flex flex-col gap-3 opacity-50 w-[50%] max-md:w-full">
                  <Text className="text-[14px]">
                    {t('separately', {
                      fallback: 'Total if booked separately:',
                    })}
                  </Text>
                  <Title className="text-[24px]">€{pack.separately}</Title>
                </div>
                <div className="flex flex-col gap-3 w-[50%] max-md:w-full">
                  <Text className="text-[14px]">
                    {t('price', {
                      fallback: 'Your price:',
                    })}
                  </Text>
                  <Title className="text-[24px]">€{pack.price}</Title>
                </div>
              </div>
              <Button className="w-full text-center justify-center">
                {t('order', {
                  fallback: 'Order Now',
                })}
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionLayout>
  );
};
