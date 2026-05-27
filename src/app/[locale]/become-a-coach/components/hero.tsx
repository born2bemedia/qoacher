'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const BecomeACoachHero = () => {
  const t = useTranslations('becomeACoachPage');

  return (
    <section className="relative flex h-[850px] flex-col items-center justify-center gap-3 p-[165px] max-md:h-[700px] max-md:px-4 relative">
      <Title color="light" size="5xl" zIndex={2} className="text-center">
        {t('heroTitle', {
          fallback: 'Share Your Experience.',
        })}
        <br />
        {t('heroTitleSecond', {
          fallback: 'Help People Move Forward.',
        })}
      </Title>
      <Text zIndex={2} color="light" className="text-center">
        {t('heroDescription', {
          fallback:
            'Have coaching experience and want to bring clarity, structure, and support to people who need it most?',
        })}
        <br />
        {t('heroDescriptionTwo', {
          fallback: 'Join Qoacher!',
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
