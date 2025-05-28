'use client';

import Image from 'next/image';

import { Button, Text, Title } from '@/shared/ui/components/atoms';
import {
  FadeIn,
  HorizontalLayout,
  SectionLayout,
} from '@/shared/ui/components/templates';

export const ForOngoingWorks = () => {
  return (
    <SectionLayout>
      <HorizontalLayout>
        <FadeIn className="flex flex-col gap-12">
          <section className="flex flex-col gap-6">
            <Title as="h2" size="3xl">
              For Ongoing Work and Bigger Goals
            </Title>
            <Text>
              If your situation touches multiple areas — work, relationships,
              personal direction — our packages are built to support you with a
              structured, ongoing approach.
            </Text>
          </section>
          <Button>Check Packages</Button>
        </FadeIn>
        <Image
          className="h-[450px] w-1/2 object-cover max-md:w-full"
          src="/images/home/tiger-4.jpg"
          alt="tiger4"
          width={531}
          height={450}
          unoptimized
        />
      </HorizontalLayout>
    </SectionLayout>
  );
};
