'use client';

import { useTranslations } from 'next-intl';

import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const WhyYouNeed = () => {
  const t = useTranslations('whyYouNeedPersonal');

  const without = [
    t('without1', {
      fallback: 'Health decline caused by prolonged stress and emotional overload',
    }),
    t('without2', {
      fallback: 'Burnout and shutdown from constant overload and no recovery time',
    }),
    t('without3', {
      fallback: 'Damaged relationships due to avoiding personal issues',
    }),
    t('without4', {
      fallback:
        'Long-term inaction caused by self-doubt and hesitation',
    }),
    t('without5', {
      fallback: 'Ongoing repetition of destructive habits and thought patterns',
    }),
  ];

  const withItems = [
    t('with1', {
      fallback:
        'Restored emotional stability and improved daily functioning',
    }),
    t('with2', {
      fallback: 'Sustainable energy levels and renewed mental clarity',
    }),
    t('with3', {
      fallback: 'Repaired communication and stronger personal connections',
    }),
    t('with4', {
      fallback:
        'Confident decision-making and consistent personal progress',
    }),
    t('with5', {
      fallback: 'Noticeable behavior change and healthier life patterns',
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
