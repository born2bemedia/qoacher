'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const ContactsBanner = () => {
  const t = useTranslations('contactsBanner');

  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-[48px] py-[96px] max-md:px-[16px] max-md:py-[64px]">
      <Title color="light" size="4xl" zIndex={2} className="text-center">
        {t('title', {
          fallback: 'Because Life Shouldn’t Run You',
        })}
      </Title>
      <Text zIndex={2} color="light" className="w-[344px] text-center max-md:w-full">
        <span
          className="text-center underline"
          dangerouslySetInnerHTML={{
            __html: t('text1', {
              fallback: 'Because Life Shouldn’t Run You',
            }),
          }}
        />
        <br />
        <span
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: t('text2', {
              fallback:
                'At Qoacher, we believe personal change is possible — with the right structure, tools, and support. ',
            }),
          }}
        />
      </Text>

      <div className="absolute inset-0 z-1 bg-black/60"></div>
      <Image
        className="z-0 object-cover"
        src={'/images/contacts/banner.png'}
        alt="hero"
        fill
        unoptimized
      />
    </section>
  );
};
