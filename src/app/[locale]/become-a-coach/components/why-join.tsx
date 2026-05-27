'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const BecomeACoachWhyJoin = () => {
  const t = useTranslations('becomeACoachWhyJoin');

  const listOne = [
    {
      id: 'flexible-work',

      title: t('listOneTitleOne', {
        fallback: 'Flexible Work',
      }),

      text: t('listOneTextOne', {
        fallback: 'Manage your own schedule.',
      }),
    },

    {
      id: 'multiple-income-streams',

      title: t('listOneTitleTwo', {
        fallback: 'Multiple Income Streams',
      }),

      text: t('listOneTextTwo', {
        fallback: 'Earn through sessions, programs, and consulting.',
      }),
    },
  ];

  const listTwo = [
    {
      id: 'long-term-growth',

      title: t('listTwoTitleOne', {
        fallback: 'Long-Term Growth',
      }),

      text: t('listTwoTextOne', {
        fallback: 'Build your professional presence with Qoacher.',
      }),
    },

    {
      id: 'access-to-clients',

      title: t('listTwoTitleTwo', {
        fallback: 'Access to Clients',
      }),

      text: t('listTwoTextTwo', {
        fallback: 'Connect with users actively looking for support.',
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
                src="/images/become-a-coach/why-join-one.jpg"
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
                src="/images/become-a-coach/why-join-two.jpg"
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
