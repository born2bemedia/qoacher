'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/components/atoms/button';
import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const BecomeACoachLookingFor = () => {
  const t = useTranslations('becomeACoachLookingFor');

  const items = [
    {
      id: 'career-coaches',
      title: t('careerCoaches', {
        fallback: 'Career Coaches',
      }),
      description: t('careerCoachesDescription', {
        fallback: 'Career growth, burnout, interviews, leadership.',
      }),
    },
    {
      id: 'personal-growth-coaches',
      title: t('personalGrowthCoaches', {
        fallback: 'Personal Growth Coaches',
      }),
      description: t('personalGrowthCoachesDescription', {
        fallback: 'Stress, confidence, productivity, mindset.',
      }),
    },
    {
      id: 'communication-specialists',
      title: t('communicationSpecialists', {
        fallback: 'Communication Specialists',
      }),
      description: t('communicationSpecialistsDescription', {
        fallback: 'Relationships, boundaries, conflict resolution.',
      }),
    },
    {
      id: 'long-term-support-coaches',
      title: t('longTermSupportCoaches', {
        fallback: 'Long-Term Support Coaches',
      }),
      description: t('longTermSupportCoachesDescription', {
        fallback: 'Accountability, planning, consistency, habit building.',
      }),
    },
    {
      id: 'educators-program-creators',
      title: t('educatorsAndProgramCreators', {
        fallback: 'Educators & Program Creators',
      }),
      description: t('educatorsAndProgramCreatorsDescription', {
        fallback: 'Guides, workshops, structured learning programs.',
      }),
    },
  ];

  return (
    <SectionLayout className="gap-12">
      <FadeIn>
        <Title as="h2" size="3xl" className="text-center">
          {t('title', {
            fallback: 'Who We’re Looking For',
          })}
        </Title>
      </FadeIn>
      <FadeIn className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-6">
        {items.map((item, index) => (
          <article
            key={item.id}
            className={cn(
              'border-light-gray flex flex-col gap-3 border p-6',
              index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
            )}
          >
            <Title as="h3" size="lg" className="leading-[1.389]">
              {item.title}
            </Title>
            <Divider className="bg-light-gray" />
            <Text className="leading-[1.286]">{item.description}</Text>
          </article>
        ))}
      </FadeIn>
      <Link href="/services">
        <FadeIn>
          <Button className="mx-auto text-sm leading-[1.286] border-none">
            {t('checkOurServices', { fallback: 'Check our services' })}
          </Button>
        </FadeIn>
      </Link>
    </SectionLayout>
  );
};
