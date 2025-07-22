'use client';

import Image from 'next/image';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { HorizontalLayout } from '@/shared/ui/components/templates/horizontal-layout';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const ProgramsThatHelp = () => {
  return (
    <SectionLayout>
      <HorizontalLayout reverse>
        <FadeIn className="flex flex-col gap-12">
          <section className="flex flex-col gap-6">
            <Title as="h2" size="3xl">
              Programs That Help You Start Without the Pressure
            </Title>
            <Text>
              <b className="font-normal">
                Not ready for individual coaching? Start with a program.
              </b>{' '}
              Our programs are short, structured, and focused on specific
              topics. You receive step-by-step guidance by email and can request
              support during the program. It’s a simple way to see how we work —
              and how much real change is possible.
            </Text>
          </section>
          <Button>Check Packages</Button>
        </FadeIn>
        <Image
          className="h-[450px] w-1/2 object-cover max-md:w-full"
          src="/images/home/tiger-5.jpg"
          alt="tiger5"
          width={531}
          height={450}
          unoptimized
        />
      </HorizontalLayout>
    </SectionLayout>
  );
};
