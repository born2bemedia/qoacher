'use client';

import Image from 'next/image';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const StartSmall = () => {
  return (
    <SectionLayout className="gap-12">
      <Title as="h2" size="3xl" className="text-center">
        Start Small. Grow Steady.
      </Title>
      <FadeIn className="relative flex flex-col items-center justify-center gap-6 p-12 text-center max-md:px-4 max-md:py-12">
        <Title as="h3" size="2xl" color="light" className="z-10">
          Not ready for coaching?
        </Title>
        <div className="z-10 mx-auto flex w-[344px] flex-col gap-3 max-md:w-full">
          <Text color="light">Start with our free guides.</Text>
          <Text color="light">
            Read practical, on-site articles with tools, reflection exercises,
            and simple step-by-step methods to help you improve on your own.
          </Text>
        </div>
        <Button variant="light" className="z-10">
          Learn More
        </Button>
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
