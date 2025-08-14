'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const WhatOffers = () => {
  const t = useTranslations('programsWhatOffers');

  return (
    <>
      <FadeIn>
        <SectionLayout
          className={cn(
            'items-center flex-row gap-[124px] max-[1150px]:flex-col-reverse max-md:gap-8'
          )}
        >
          <Image
            className="h-[470px] w-1/2 object-cover max-[1150px]:w-full max-md:h-[358px]"
            src="/images/programs/what-offers.png"
            alt="service"
            width={493}
            height={470}
            unoptimized
          />
          <div className="flex w-1/2 flex-col gap-6 max-[1150px]:w-full">
            <Title as="h3" size="2xl" className="pb-6 text-[32px] border-b-1 border-[#E9E9E9]">
              <span
                dangerouslySetInnerHTML={{
                  __html: t('title', {
                    fallback: 'What Qoacher Offers',
                  }),
                }}
              />
            </Title>
            <div className="flex flex-col gap-6">
              <Title as="h3" size="2xl" className="text-[24px]">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('title2', {
                      fallback: 'A Qoacher Program is a self‑paced coaching course sent by email.',
                    }),
                  }}
                />
              </Title>
              <Text className="text-[14px]">
                {t('text1', {
                  fallback: 'Join anytime, and receive 10 lessons you can read when it suits you.',
                })}
              </Text>
              <Text className="text-[14px]">
                {t('text2', {
                  fallback:
                    'You can ask questions while in the program. If we see that your challenge goes beyond the program, we’ll suggest a personalized solution.',
                })}
              </Text>
            </div>
          </div>
        </SectionLayout>
      </FadeIn>
    </>
  );
};
