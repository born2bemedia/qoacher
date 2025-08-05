'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Title } from '@/shared/ui/components/atoms/title';

export const WeHere = () => {
  const t = useTranslations('weHere');

  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-[48px] py-[96px] max-md:px-[16px] max-md:py-[64px]">
      <Title color="light" size="4xl" zIndex={2} className="text-center">
        {t('title', {
          fallback: 'We’re here to reinvent your life — it’s up to you where to start.',
        })}
      </Title>

      <div className="relative z-2 flex justify-center gap-6 max-md:w-full">
        <Link href="/services" className="max-md:w-1/2">
          <Button
            variant="light"
            className="w-[200px] items-center justify-center border-1 border-white bg-transparent px-3 text-center text-white max-md:w-full"
          >
            {t('button1', { fallback: 'Services' })}
          </Button>
        </Link>
        <Link href="/contacts" className="max-md:w-1/2">
          <Button
            variant="light"
            className="w-[200px] items-center justify-center border-1 border-white px-3 text-center max-md:w-full"
          >
            {t('button2', { fallback: 'Contact Us' })}
          </Button>
        </Link>
      </div>

      <div className="absolute inset-0 z-1 bg-black/60"></div>
      <Image
        className="z-0 object-cover"
        src={'/images/about-the-project/we-here.png'}
        alt="hero"
        fill
        unoptimized
      />
    </section>
  );
};
