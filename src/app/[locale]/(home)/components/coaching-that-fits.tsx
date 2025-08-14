'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const CoachingThatFits = () => {
  const t = useTranslations('coachingThatFits');

  const items = [
    {
      title: t('careerCoaching', { fallback: 'Career Coaching' }),
      description: {
        question: t('careerCoachingQuestion', {
          fallback: 'Feel stuck, lost, or unsure what to do next in your work life?',
        }),
        answer: t('careerCoachingAnswer', {
          fallback: 'We help you make clear decisions about your job, direction, or next step.',
        }),
      },
      url: '/career-coaching',
    },
    {
      title: t('personalCoaching', { fallback: 'Personal Coaching' }),
      description: {
        question: t('personalCoachingQuestion', {
          fallback: 'Tired, overwhelmed, or unable to focus on yourself?',
        }),
        answer: t('personalCoachingAnswer', {
          fallback: 'We help you reduce pressure, regain energy, and handle daily challenges.',
        }),
      },
      url: '/personal-coaching',
    },
    {
      title: t('relationshipAndCommunicationCoaching', {
        fallback: 'Relationship & Communication Coaching',
      }),
      description: {
        question: t('relationshipAndCommunicationCoachingQuestion', {
          fallback: 'Struggling with conflict, unclear boundaries, or feeling misunderstood? ',
        }),
        answer: t('relationshipAndCommunicationCoachingAnswer', {
          fallback: 'We help you improve how you talk, listen, and connect with others.',
        }),
      },
      url: '/communication-and-relationship-coaching',
    },
    {
      title: t('growthAndLongTermSupport', {
        fallback: 'Growth & Long-Term Support',
      }),
      description: {
        question: t('growthAndLongTermSupportQuestion', {
          fallback: 'You’ve tried on your own — but the change doesn’t last?',
        }),
        answer: t('growthAndLongTermSupportAnswer', {
          fallback:
            'We help you stay consistent, build better habits, and move forward step by step.',
        }),
      },
      url: '/growth-and-long-term-planning',
    },
  ];

  return (
    <SectionLayout className="gap-12">
      <FadeIn className="max-md:text-center">
        <Title as="h2" size="3xl">
          {t('coachingThatFitsYourLife', {
            fallback: 'Coaching That Fits Your Life',
          })}
        </Title>
      </FadeIn>
      <FadeIn className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
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
  url,
}: {
  title: string;
  description: {
    question: string;
    answer: string;
  };
  url: string;
}) => {
  const t = useTranslations('coachingThatFits');

  return (
    <article className="border-light-gray flex min-h-[231px] flex-col gap-12 border p-6">
      <section className="flex flex-col gap-6">
        <Title size="lg">{title}</Title>
        <Text size="sm" weight={400}>
          {description.question} <span className="font-light">{description.answer}</span>
        </Text>
      </section>
      <Link href={url}>
        <Button className="mt-auto">{t('explore', { fallback: 'Explore' })}</Button>
      </Link>
    </article>
  );
};
