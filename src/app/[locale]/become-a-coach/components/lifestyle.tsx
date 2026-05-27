'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const BecomeACoachLifestyle = () => {
  const t = useTranslations('becomeACoachLifestyle');

  return (
    <SectionLayout className="gap-12">
      <FadeIn className="relative flex flex-col items-center justify-center gap-6 p-12 text-center max-md:px-4 max-md:py-12">
        <Title as="h2" size="2xl" color="light" className="text-center leading-[1.375] z-10">
          {t('title', {
            fallback: 'Have a Lifestyle Blog?',
          })}
        </Title>
        <div className="z-10 mx-auto flex w-[344px] flex-col gap-3 max-md:w-full">
          <Text color="light" className="leading-[1.286]">
            {t('description', {
              fallback: 'See the Qoacher Affiliate Program.',
            })}
          </Text>
        </div>
        <Link href="/affiliate-program" className="z-10">
          <Button variant="light" className="z-10 text-sm border-none leading-[1.286]">
            {t('checkNow', { fallback: 'Check Now' })}
          </Button>
        </Link>
        <Image
          className="object-cover"
          src="/images/become-a-coach/lifestyle.jpg"
          alt="Start Small. Grow Steady."
          unoptimized
          fill
        />
      </FadeIn>
    </SectionLayout>
  );
};
