'use client';

import Image from 'next/image';

import { ContactForm } from '@/features/contact-form/ui';

import { Text, Title } from '@/shared/ui/components/atoms';
import { FadeIn, SectionLayout } from '@/shared/ui/components/templates';

export const NeedExtraSupport = () => {
  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-[508px] flex-col items-center gap-3 text-center max-md:w-full">
        <Title as="h2" size="3xl">
          Need Extra Support?
        </Title>
        <Text>
          Don’t hesitate to contact us. We’re available 24/7 to help you move
          forward, overcome obstacles, and choose the right path for your
          growth.
        </Text>
      </FadeIn>
      <FadeIn className="flex h-[466px] gap-6 max-md:h-full max-md:flex-col">
        <ContactForm layoutClassName="w-1/2 max-md:w-full" />
        <Image
          className="h-full w-1/2 object-cover max-md:h-[494px] max-md:w-full"
          src="/images/home/tiger-6.jpg"
          alt="tiger-6"
          width={543}
          height={494}
        />
      </FadeIn>
    </SectionLayout>
  );
};
