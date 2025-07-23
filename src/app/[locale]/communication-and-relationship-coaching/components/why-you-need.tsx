'use client';

import { useTranslations } from 'next-intl';

import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const WhyYouNeed = () => {
  const t = useTranslations('whyYouNeedCommunication');

  const without = [
    t('without1', {
      fallback: 'Emotional and social distance caused by unclear or avoided communication',
    }),
    t('without2', {
      fallback: 'Burnout, resentment, and low self-worth from constantly saying yes',
    }),
    t('without3', {
      fallback: 'Ongoing tension and unresolved conflict in daily interactions',
    }),
    t('without4', {
      fallback:
        'Trust breakdowns caused by emotional outbursts or shutdowns',
    }),
    t('without5', {
      fallback: 'Isolation and disconnection from fear of expressing thoughts or needs',
    }),
  ];

  const withItems = [
    t('with1', {
      fallback:
        'Stronger relationships built on clear, honest, and consistent expression',
    }),
    t('with2', {
      fallback: 'Greater self-respect and stability through healthy personal limits',
    }),
    t('with3', {
      fallback: 'Calm, direct conflict resolution that strengthens mutual understanding',
    }),
    t('with4', {
      fallback:
        'Restored trust through regulated responses and open dialogue',
    }),
    t('with5', {
      fallback: 'Deeper connection through confident, authentic communication',
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
