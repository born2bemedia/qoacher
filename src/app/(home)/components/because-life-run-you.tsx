'use client';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

const items = [
  {
    title: 'Life moves too fast',
    description:
      'People are overwhelmed by constant demands, decisions, and pressure.',
  },
  {
    title: 'Most feel like they’re just reacting',
    description:
      'There’s no time to think, plan, or choose — only to respond to what’s urgent.',
  },
  {
    title: 'Growth gets pushed aside',
    description:
      'Personal priorities are delayed. Real needs are ignored. Nothing changes.',
  },
  {
    title: 'Advice isn’t enough',
    description:
      'Information is everywhere. What’s missing is structure, support, and accountability.',
  },
  {
    title: 'Progress needs a system',
    description:
      'Without clarity and consistency, motivation fades and problems repeat.',
  },
  {
    title: 'That’s why we built this project',
    description:
      'To help people grow, act, and take control — with expert support at every step.',
  },
];

export const BecauseLifeRunYou = () => {
  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-[508px] flex-col gap-3 text-center max-md:w-full">
        <Title as="h2" size="3xl" className="text-center">
          Because Life Shouldn’t Run You
        </Title>
        <Text>
          We didn’t build this project just to offer coaching. We built it to
          give people a way to take back control — with real tools and real
          support.
        </Text>
      </FadeIn>
      <FadeIn className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
        {items.map(item => (
          <Card key={item.title} {...item} />
        ))}
      </FadeIn>
      <FadeIn className="mx-auto">
        <Button>Learn More</Button>
      </FadeIn>
    </SectionLayout>
  );
};

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <article className="border-light-gray flex flex-col gap-6 border p-6">
    <Title as="h3" size="lg">
      {title}
    </Title>
    <Text>{description}</Text>
  </article>
);
