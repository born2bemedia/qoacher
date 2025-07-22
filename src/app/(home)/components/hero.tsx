'use client';

import Image from 'next/image';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const Hero = () => {
  return (
    <SectionLayout className="gap-24 py-[165px] max-md:gap-8">
      <FadeIn className="flex flex-col items-center justify-between gap-3 text-center">
        <Title align="center">Life Doesn’t Rule You. You Do.</Title>
        <Text size="sm">
          Personal. Relationships. Career. Emotional well-being.
        </Text>
      </FadeIn>
      <FadeIn className="flex items-end gap-3 max-md:hidden">
        <Image
          className="h-[420px] w-[40%] object-cover"
          src="/images/home/tiger-1.jpg"
          alt="tiger-1"
          width={420}
          height={420}
          unoptimized
        />
        <Image
          className="h-[340px] w-[20%] object-cover"
          src="/images/home/tiger-2.jpg"
          alt="tiger-2"
          width={246}
          height={340}
          unoptimized
        />
        <Image
          className="h-[420px] w-[40%] object-cover"
          src="/images/home/tiger-3.jpg"
          alt="tiger-3"
          width={420}
          height={420}
          unoptimized
        />
      </FadeIn>
      <FadeIn className="hidden flex-col gap-3 max-md:flex">
        <Image
          className="h-[358px] w-full object-cover"
          src="/images/home/tiger-2.jpg"
          alt="tiger-2"
          width={246}
          height={340}
          unoptimized
        />
        <section className="flex gap-3">
          <Image
            className="h-[173px] w-full object-cover"
            src="/images/home/tiger-1.jpg"
            alt="tiger-1"
            width={420}
            height={420}
            unoptimized
          />
          <Image
            className="h-[173px] w-full object-cover"
            src="/images/home/tiger-3.jpg"
            alt="tiger-3"
            width={420}
            height={420}
            unoptimized
          />
        </section>
      </FadeIn>
    </SectionLayout>
  );
};
