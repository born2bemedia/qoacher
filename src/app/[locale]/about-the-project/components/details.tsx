'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const Details = () => {
  const t = useTranslations('aboutTheProjectDetails');

  return (
    <>
      <FadeIn>
        <SectionLayout
          className={cn('items-center flex-row gap-[124px] max-md:flex-col-reverse max-md:gap-16')}
        >
          <div className="flex w-1/2 flex-col gap-6 max-md:w-full">
            <Title as="h2" size="2xl">
              {t('title1', {
                fallback: 'The Facts You Can’t Ignore',
              })}
            </Title>
            <div className="p-6 border-[#E9E9E9] border-1">
              <Text className="mb-6 border-b border-[#E9E9E9] pb-6">
                {t('text1', {
                  fallback: 'Stress levels have tripled in the last 30 months.',
                })}
              </Text>
              <Text className="mb-6 border-b border-[#E9E9E9] pb-6">
                {t('text2', {
                  fallback:
                    'The ability of individuals to influence their own lives has dropped by 46% since 2022.',
                })}
              </Text>
              <Text>
                {t('text3', {
                  fallback:
                    'The average time it takes someone to make a major life shift on their own is 5 years.',
                })}
              </Text>
            </div>
          </div>
          <Image
            className="h-[470px] w-1/2 object-cover max-md:w-full max-md:h-[358px]"
            src="/images/about-the-project/details1.png"
            alt="service"
            width={493}
            height={470}
            unoptimized
          />
        </SectionLayout>
      </FadeIn>
      <FadeIn>
        <SectionLayout
          className={cn(
            'items-center flex-row-reverse gap-[124px] max-md:flex-col-reverse max-md:gap-16'
          )}
        >
          <div className="flex w-1/2 flex-col gap-6 max-md:w-full">
            <Title as="h2" size="2xl">
              {t('title2', {
                fallback: 'The truth is harsh',
              })}
            </Title>
            <Text>
              {t('text4', {
                fallback:
                  'The modern pace of life is not slowing down. Without deliberate, structured coaching, you’re not just standing still — you’re falling behind.',
              })}
            </Text>
          </div>
          <Image
            className="h-[470px] w-1/2 object-cover max-md:w-full max-md:h-[358px]"
            src="/images/about-the-project/details2.png"
            alt="service"
            width={493}
            height={470}
            unoptimized
          />
        </SectionLayout>
      </FadeIn>
    </>
  );
};
