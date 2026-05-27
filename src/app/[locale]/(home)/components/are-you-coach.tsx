'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useAreYouCoach } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const AreYouCoach = () => {
  const { title, description, linkTitle } = useAreYouCoach();

  return (
    <SectionLayout>
      <section className="flex md:items-center lg:gap-x-31 gap-x-16 gap-y-16 max-md:flex-col">
        <Image
          className="h-[470px] w-1/2 object-cover max-md:w-full"
          src="/images/home/are-you-coach.jpg"
          alt="Are You a Coach?"
          width={493}
          height={470}
          unoptimized
        />

        <FadeIn className="flex flex-col gap-6">
          <section className="flex flex-col gap-6">
            <Title as="h2" size="3xl">
              {title}
            </Title>
            <Text>{description}</Text>
          </section>
          <Link href="/become-a-coach">
            <Button className="text-sm leading-[1.286] border-none">{linkTitle}</Button>
          </Link>
        </FadeIn>
      </section>
    </SectionLayout>
  );
};
