'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const WantToGear = () => {
  const t = useTranslations('wantToGear');

  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-[48px] py-[96px] max-md:px-[16px] max-md:py-[64px]">
      <Title color="light" size="5xl" zIndex={2} className="text-center">
        {t('wantToBuild', {
          fallback: 'Want to Go Deeper?',
        })}
      </Title>
      <Text zIndex={2} color="light" className="w-[344px] text-center max-md:w-full">
        <span
          dangerouslySetInnerHTML={{
            __html: t('wantToGearDescription', {
              fallback:
                'If you&apos;re not ready for individual coaching, try one of our structured career-focused programs. If you already know your needs are broader, explore our complete coaching packages.',
            }),
          }}
        />
      </Text>
      <div className="relative z-2 flex justify-center gap-6 max-md:w-full">
        <Link href="/programs">
          <Button
            variant="light"
            className="w-[200px] items-center justify-center border-1 border-white bg-transparent px-3 text-center text-white max-md:w-full max-md:px-8"
          >
            {t('careerPrograms', { fallback: 'Career Programs' })}
          </Button>
        </Link>
        <Link href="/packages">
          <Button
            variant="light"
            className="w-[200px] items-center justify-center border-1 border-white px-3 text-center max-md:w-full max-md:px-8"
          >
            {t('packages', { fallback: 'Packages' })}
          </Button>
        </Link>
      </div>
      <div className="absolute inset-0 z-1 bg-black/60"></div>
      <Image
        className="z-0 object-cover"
        src={'/images/growth/hero.png'}
        alt="hero"
        fill
        unoptimized
      />
    </section>
  );
};
