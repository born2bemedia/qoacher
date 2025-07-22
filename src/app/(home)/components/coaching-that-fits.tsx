'use client';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

const items = [
  {
    title: 'Career Coaching',
    description: {
      question:
        'Feel stuck, lost, or unsure what to do next in your work life?',
      answer:
        'We help you make clear decisions about your job, direction, or next step.',
    },
  },
  {
    title: 'Personal Coaching',
    description: {
      question: 'Tired, overwhelmed, or unable to focus on yourself?',
      answer:
        'We help you reduce pressure, regain energy, and handle daily challenges.',
    },
  },
  {
    title: 'Relationship & Communication Coaching',
    description: {
      question:
        'Struggling with conflict, unclear boundaries, or feeling misunderstood? ',
      answer:
        'We help you improve how you talk, listen, and connect with others.',
    },
  },
  {
    title: 'Growth & Long-Term Support',
    description: {
      question: 'You’ve tried on your own — but the change doesn’t last?',
      answer:
        'We help you stay consistent, build better habits, and move forward step by step.',
    },
  },
];

export const CoachingThatFits = () => {
  return (
    <SectionLayout className="gap-12">
      <FadeIn className="max-md:text-center">
        <Title as="h2" size="3xl">
          Coaching That Fits Your Life
        </Title>
      </FadeIn>
      <FadeIn className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {items.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </FadeIn>
    </SectionLayout>
  );
};

const Card = ({
  title,
  description,
}: {
  title: string;
  description: {
    question: string;
    answer: string;
  };
}) => (
  <article className="border-light-gray flex min-h-[231px] flex-col gap-12 border p-6">
    <section className="flex flex-col gap-6">
      <Title size="lg">{title}</Title>
      <Text size="sm" weight={400}>
        {description.question}
        <span className="font-light">{description.answer}</span>
      </Text>
    </section>
    <Button className="mt-auto">Explore</Button>
  </article>
);
