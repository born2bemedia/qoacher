'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const AffiliateProgramWhyJoin = () => {
  const t = useTranslations('affiliateProgramWhyJoin');

  const listOne = [
    {
      id: 'audience-monetisation',
      title: t('audienceMonetisationTitle', {
        fallback: 'Additional Audience Monetisation',
      }),
      text: t('audienceMonetisationText', {
        fallback: 'Earn through relevant referrals and partner opportunities.',
      }),
    },
    {
      id: 'platform-content-value',
      title: t('platformContentValueTitle', {
        fallback: 'Valuable Content for Your Platform',
      }),
      text: t('platformContentValueText', {
        fallback:
          'Use expert materials, guides, and educational resources to support your audience.',
      }),
    },
  ];

  const listTwo = [
    {
      id: 'flexible-partnership',
      title: t('flexiblePartnershipTitle', {
        fallback: 'Flexible Partnership Model',
      }),
      text: t('flexiblePartnershipText', {
        fallback: 'Promote Qoacher in a way that fits your platform and content style.',
      }),
    },
    {
      id: 'long-term-collaboration',
      title: t('longTermCollaborationTitle', {
        fallback: 'Long-Term Collaboration',
      }),
      text: t('longTermCollaborationText', {
        fallback: 'Build an ongoing partnership with a growing coaching platform.',
      }),
    },
  ];

  return (
    <>
      <FadeIn>
        <SectionLayout className="gap-20">
          <Title as="h2" size="3xl" className="leading-[1.4063] text-center">
            {t('title', {
              fallback: 'Why Join Qoacher',
            })}
          </Title>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-lg:order-1">
              <Image
                className="h-full w-full object-cover"
                src="/images/affiliate-program/why-join-one.jpg"
                alt="service"
                width={531}
                height={450}
                unoptimized
              />
            </div>

            <div className="space-y-6 max-lg:order-2">
              {listOne?.map((item) => (
                <div key={item.id} className="border border-light-gray p-6">
                  <Title
                    as="h3"
                    size="lg"
                    className="leading-[1.389] mb-3 pb-3 border-b border-light-gray"
                  >
                    {item.title}
                  </Title>

                  <Text className="leading-[1.286]">{item.text}</Text>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 max-lg:order-2">
              {listTwo?.map((item) => (
                <div key={item.id} className="border border-light-gray p-6">
                  <Title
                    as="h3"
                    size="lg"
                    className="leading-[1.389] mb-3 pb-3 border-b border-light-gray"
                  >
                    {item.title}
                  </Title>

                  <Text className="leading-[1.286]">{item.text}</Text>
                </div>
              ))}
            </div>

            <div className="max-md:order-1">
              <Image
                className="h-full w-full object-cover"
                src="/images/affiliate-program/why-join-two.jpg"
                alt="service"
                width={531}
                height={450}
                unoptimized
              />
            </div>
          </div>
        </SectionLayout>
      </FadeIn>
    </>
  );
};
