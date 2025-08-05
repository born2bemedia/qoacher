'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const PracticalTools = () => {
  const t = useTranslations('practicalTools');

  const items = [
    {
      title: t('title1', {
        fallback: 'Self-Improvement Articles',
      }),
      description: t('description1', {
        fallback: 'Actionable guides and exercises, for free.',
      }),
      link: '#',
      buttonText: t('buttonText1', {
        fallback: 'Explore Free Guides',
      }),
      icon: '/images/contacts/icon1.svg',
    },
    {
      title: t('title2', {
        fallback: 'Step-by-Step Email Programs',
      }),
      description: t('description2', {
        fallback: 'No calls, no pressure — just structured help to get you started.',
      }),
      link: '/programs',
      buttonText: t('buttonText2', {
        fallback: 'Browse Programs',
      }),
      icon: '/images/contacts/icon2.svg',
    },
    {
      title: t('title3', {
        fallback: 'Complete Coaching Packages',
      }),
      description: t('description3', {
        fallback: 'Explore ongoing support systems tailored to you.',
      }),
      link: '/career-coaching',
      buttonText: t('buttonText3', {
        fallback: 'View Coaching Packages',
      }),
      icon: '/images/contacts/icon3.svg',
    },
  ];

  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-[508px] flex-col gap-3 text-center max-md:w-full">
        <Title as="h2" size="3xl" className="text-center">
          {t('title', {
            fallback: 'Practical Tools While You Wait',
          })}
        </Title>
        <Text>
          {t('subtitle', {
            fallback:
              'If you’re not ready for 1-on-1 coaching yet, here’s what you can explore today:',
          })}
        </Text>
      </FadeIn>
      <FadeIn className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </FadeIn>
    </SectionLayout>
  );
};

const Card = ({
  title,
  description,
  link,
  buttonText,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  icon: string;
}) => (
  <article className="border-light-gray flex flex-col gap-12 border p-6 justify-between">
    <div className="flex flex-col gap-6">
      <Image src={icon} alt={title} width={52} height={52} />
      <Title as="h3" size="lg">
        {title}
      </Title>
      <Text>{description}</Text>
    </div>
    <Link href={link}>
      <Button>{buttonText}</Button>
    </Link>
  </article>
);
