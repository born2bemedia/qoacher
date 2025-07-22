'use client';

import { useTranslations } from 'next-intl';

import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const WhyYouNeed = () => {
  const t = useTranslations('whyYouNeed');

  const without = [
    t('without1', {
      fallback: 'Repeating cycles of effort followed by burnout and quitting',
    }),
    t('without2', {
      fallback: 'Years lost to vague goals and inconsistent action',
    }),
    t('without3', {
      fallback: 'Good intentions that never turn into habits or results',
    }),
    t('without4', {
      fallback:
        'Personal growth delayed by distractions, pressure, and lack of focus',
    }),
    t('without5', {
      fallback: 'Frustration from knowing what to do but not following through',
    }),
  ];

  const withItems = [
    t('with1', {
      fallback:
        'Steady progress through realistic structure and long-term guidance',
    }),
    t('with2', {
      fallback: 'Clear direction with consistent steps toward defined outcomes',
    }),
    t('with3', {
      fallback: 'Tangible routines and systems that hold over time',
    }),
    t('with4', {
      fallback:
        'Sustained improvement through accountability and priority alignment',
    }),
    t('with5', {
      fallback: 'Long-term behavioral change reinforced by expert coaching',
    }),
  ];

  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-[508px] flex-col gap-3 text-center max-md:w-full">
        <Title as="h2" size="3xl" className="text-center">
          {t('becauseLifeShouldntRunYou', {
            fallback: 'Why You Need Coacher',
          })}
        </Title>
      </FadeIn>
      <FadeIn className="mx-auto flex w-[800px] items-center text-center max-md:w-full max-md:flex-col">
        <div className="w-1/2 max-md:w-full border-t-1 border-b-1 border-l-1 border-t-[#E9E9E9] border-b-[#E9E9E9] border-l-[#E9E9E9]">
          <Title
            as="h3"
            size="2xl"
            className="border-b-1 border-b-[#E9E9E9] p-6 text-left"
          >
            {t('without', {
              fallback: 'Without Support',
            })}
          </Title>
          <ul className="p-6">
            {without.map(item => (
              <li
                key={item}
                className="border-b-[#E9E9E9] text-left text-[14px] not-last:mb-6 not-last:border-b-1 not-last:pb-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 max-md:w-full border-t-1 border-b-1 border-l-1 border-t-[#292929] border-b-[#292929] border-l-[#292929] bg-black">
          <Title
            as="h3"
            size="2xl"
            className="border-b-1 border-b-[#292929] p-6 text-left text-white"
          >
            {t('with', {
              fallback: 'With Coacher',
            })}
          </Title>
          <ul className="p-6">
            {withItems.map(item => (
              <li
                key={item}
                className="border-b-[#292929] text-left text-[14px] text-white not-last:mb-8 not-last:border-b-1 not-last:pb-8"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </SectionLayout>
  );
};
