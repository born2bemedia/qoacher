'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const StartSmall = () => {
  const t = useTranslations('startSmall');

  return (
    <SectionLayout className="gap-12">
      <Title as="h2" size="3xl" className="text-center">
        {t('startSmallTitle', {
          fallback: 'Start Small. Grow Steady.',
        })}
      </Title>
      <FadeIn className="relative flex flex-col items-center justify-center gap-6 p-12 text-center max-md:px-4 max-md:py-12">
        <Title as="h3" size="2xl" color="light" className="z-10">
          {t('notReadyForCoaching', {
            fallback: 'Not ready for coaching?',
          })}
        </Title>
        <div className="z-10 mx-auto flex w-[344px] flex-col gap-3 max-md:w-full">
          <Text color="light">
            {t('startWithOurFreeGuides', {
              fallback: 'Start with our free guides.',
            })}
          </Text>
          <Text color="light">
            {t('readPracticalOnSiteArticles', {
              fallback:
                'Read practical, on-site articles with tools, reflection exercises, and simple step-by-step methods to help you improve on your own.',
            })}
          </Text>
        </div>
        <Link href="/self-improvement" className="z-10">
          <Button variant="light" className="z-10">
            {t('learnMore', { fallback: 'Learn More' })}
          </Button>
        </Link>
        <Image
          className="object-cover"
          src="/images/home/banner.png"
          alt="Start Small. Grow Steady."
          unoptimized
          fill
        />
      </FadeIn>
    </SectionLayout>
  );
};
