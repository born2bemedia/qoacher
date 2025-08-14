'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const WhyYouNeed = () => {
  const t = useTranslations('whyYouNeedCoaching');

  const without = [
    {
      title: t('without1Title', {
        fallback: '5–8 years',
      }),
      description: t('without1Description', {
        fallback: 'Average time to make a career shift through trial and error.',
      }),
    },
    {
      title: t('without2Title', {
        fallback: '6–12 months',
      }),
      description: t('without2Description', {
        fallback: 'Typical job search duration with low response rate.',
      }),
    },
    {
      title: t('without3Title', {
        fallback: '10–30% salary gap',
      }),
      description: t('without3Description', {
        fallback: 'When entering negotiations unprepared.',
      }),
    },
  ];

  const withItems = [
    {
      title: t('with1Title', {
        fallback: '12–18 months',
      }),
      description: t('with1Description', {
        fallback: 'With a clear plan and focused support.',
      }),
    },
    {
      title: t('with2Title', {
        fallback: '2–3 months',
      }),
      description: t('with2Description', {
        fallback: 'With targeted applications and a refined profile.',
      }),
    },
    {
      title: t('with3Title', {
        fallback: '10–30% salary increase',
      }),
      description: t('with3Description', {
        fallback: 'With structured negotiation coaching.',
      }),
    },
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
          <Title as="h3" size="2xl" className="border-b-1 border-b-[#E9E9E9] p-6 text-left">
            {t('without', {
              fallback: 'Yourself',
            })}
          </Title>
          <ul className="p-6">
            {without.map((item) => (
              <li
                key={item.title}
                className="border-b-[#E9E9E9] text-left text-[14px] not-last:mb-6 not-last:border-b-1 not-last:pb-6"
              >
                <Title as="h4" size="xl" className="text-left mb-3">
                  {item.title}
                </Title>
                <Text className="text-left">{item.description}</Text>
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
            {withItems.map((item) => (
              <li
                key={item.title}
                className="border-b-[#292929] text-left text-[14px] text-white not-last:mb-12 not-last:border-b-1 not-last:pb-12"
              >
                <Title as="h4" size="xl" className="text-left text-white mb-3">
                  {item.title}
                </Title>
                <Text className="text-left text-white">{item.description}</Text>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </SectionLayout>
  );
};
