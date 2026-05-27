'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const AffiliateProgramHero = () => {
  const t = useTranslations('affiliateProgramPageHero');

  return (
    <section className="relative flex h-[850px] flex-col items-center justify-center gap-3 p-[165px] max-md:h-[700px] max-md:px-4 relative">
      <Title color="light" size="5xl" zIndex={2} className="text-center">
        {t('title', {
          fallback: 'Grow With Qoacher',
        })}
      </Title>
      <Text zIndex={2} color="light" className="text-center">
        {t('description', {
          fallback:
            'Have an audience interested in personal growth, career development, relationships, or self-improvement?',
        })}
        <br />
        {t('descriptionTwo', {
          fallback: 'Join the Qoacher Affiliate Program!',
        })}
      </Text>
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      <Image
        className="z-0 object-cover"
        src="/images/become-a-coach/hero.jpg"
        alt="hero"
        fill
        unoptimized
      />
    </section>
  );
};
