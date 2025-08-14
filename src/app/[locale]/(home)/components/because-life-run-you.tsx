'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const BecauseLifeRunYou = () => {
  const t = useTranslations('becauseLifeRunYou');

  const items = [
    {
      title: t('lifeMovesTooFast', {
        fallback: 'Life moves too fast',
      }),
      description: t('lifeMovesTooFastDescription', {
        fallback: 'People are overwhelmed by constant demands, decisions, and pressure.',
      }),
    },
    {
      title: t('mostFeelLikeTheyAreJustReacting', {
        fallback: 'Most feel like they’re just reacting',
      }),
      description: t('mostFeelLikeTheyAreJustReactingDescription', {
        fallback: 'There’s no time to think, plan, or choose — only to respond to what’s urgent.',
      }),
    },
    {
      title: t('growthGetsPushedAside', {
        fallback: 'Growth gets pushed aside',
      }),
      description: t('growthGetsPushedAsideDescription', {
        fallback: 'Personal priorities are delayed. Real needs are ignored. Nothing changes.',
      }),
    },
    {
      title: t('adviceIsntEnough', {
        fallback: 'Advice isn’t enough',
      }),
      description: t('adviceIsntEnoughDescription', {
        fallback:
          'Information is everywhere. What’s missing is structure, support, and accountability.',
      }),
    },
    {
      title: t('progressNeedsASystem', {
        fallback: 'Progress needs a system',
      }),
      description: t('progressNeedsASystemDescription', {
        fallback: 'Without clarity and consistency, motivation fades and problems repeat.',
      }),
    },
    {
      title: t('thatsWhyWeBuiltThisProject', {
        fallback: 'That’s why we built this project',
      }),
      description: t('thatsWhyWeBuiltThisProjectDescription', {
        fallback: 'To help people grow, act, and take control — with expert support at every step.',
      }),
    },
  ];

  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-[508px] flex-col gap-3 text-center max-md:w-full">
        <Title as="h2" size="3xl" className="text-center">
          {t('becauseLifeShouldntRunYou', {
            fallback: 'Because Life Shouldn’t Run You',
          })}
        </Title>
        <Text>
          {t('becauseLifeShouldntRunYouDescription', {
            fallback:
              'We didn’t build this project just to offer coaching. We built it to give people a way to take back control — with real tools and real support.',
          })}
        </Text>
      </FadeIn>
      <FadeIn className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </FadeIn>
      <Link href="/about-the-project">
        <FadeIn className="mx-auto">
          <Button>{t('learnMore', { fallback: 'Learn More' })}</Button>
        </FadeIn>
      </Link>
    </SectionLayout>
  );
};

const Card = ({ title, description }: { title: string; description: string }) => (
  <article className="border-light-gray flex flex-col gap-6 border p-6">
    <Title as="h3" size="lg">
      {title}
    </Title>
    <Text>{description}</Text>
  </article>
);
