'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const AffiliateProgramCriteria = () => {
  const t = useTranslations('affiliateProgramCriteria');

  const items = [
    {
      id: 'active-audience',
      text: t('activeAudience', {
        fallback: 'Active audience or community (5K min)',
      }),
    },
    {
      id: 'relevant-niche',
      text: t('relevantNiche', {
        fallback: 'Relevant content or niche',
      }),
    },
    {
      id: 'consistent-publishing',
      text: t('consistentPublishing', {
        fallback: 'Consistent publishing activity',
      }),
    },
    {
      id: 'professional-presence',
      text: t('professionalPresence', {
        fallback: 'Professional and trustworthy online presence',
      }),
    },
    {
      id: 'growth-oriented-audience',
      text: t('growthOrientedAudience', {
        fallback: 'Audience interested in growth, education, career, or lifestyle topics',
      }),
    },
  ];

  return (
    <>
      <FadeIn>
        <SectionLayout
          className={cn('items-center flex-row gap-[124px] max-md:flex-col-reverse max-md:gap-16')}
        >
          <div className="grid lg:grid-cols-2 gap-x-16 lg:gap-x-31 gap-y-16 items-center">
            <div className="max-md:order-2">
              <Title as="h2" size="2xl" className="leading-[1.375] mb-6">
                {t('title', {
                  fallback: 'Qualification Criteria',
                })}
              </Title>
              <div className="p-6 border-[#E9E9E9] border-1 space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-[#E9E9E9] pb-6 flex gap-2 items-center last:border-b-0 last:pb-0"
                  >
                    <div className="shrink-0">
                      <Image
                        src="/images/become-a-coach/carbon-checkmark-outline.svg"
                        alt="Icon"
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    </div>
                    <Text className="leading-[1.286]">{item.text}</Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-md:order-1">
              <Image
                className="h-full w-full object-cover"
                src="/images/affiliate-program/criteria.jpg"
                alt="Qualification Criteria"
                width={493}
                height={470}
                unoptimized
              />
            </div>
          </div>
        </SectionLayout>
      </FadeIn>
    </>
  );
};
