'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const Services = () => {
  const t = useTranslations('becomeACoachServices');

  const items = [
    {
      id: 'coaching-sessions',
      title: t('itemTitleOne', {
        fallback: 'Coaching Sessions',
      }),
      text: t('itemTextOne', {
        fallback: 'Work one-on-one with clients.',
      }),
    },
    {
      id: 'digital-programs',
      title: t('itemTitleTwo', {
        fallback: 'Digital Programs',
      }),
      text: t('itemTextTwo', {
        fallback: 'Create structured self-paced programs.',
      }),
    },
    {
      id: 'consultations',
      title: t('itemTitleThree', {
        fallback: 'Consultations',
      }),
      text: t('itemTextThree', {
        fallback: 'Provide expert guidance for specific situations.',
      }),
    },
    {
      id: 'educational-services',
      title: t('itemTitleFour', {
        fallback: 'Educational Services',
      }),
      text: t('itemTextFour', {
        fallback: 'Offer workshops, learning materials, and support sessions.',
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
                  fallback: 'Earn Through Professional Services',
                })}
              </Title>
              <div className="p-6 border-[#E9E9E9] border-1 space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-[#E9E9E9] pb-6 last:border-b-0 last:pb-0"
                  >
                    <Text weight={700} className="mb-2 leading-[1.286]">
                      {item.title}
                    </Text>

                    <Text className="leading-[1.286]">{item.text}</Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-md:order-1">
              <Image
                className="h-full w-full object-cover max-md:h-[358px]"
                src="/images/about-the-project/details1.png"
                alt="service"
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
