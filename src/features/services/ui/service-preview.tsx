'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const ServicePreview = ({
  title,
  text,
  buttonUrl,
  reverse,
  imgUrl,
}: {
  title: string;
  text: string;
  buttonUrl: string;
  imgUrl: string;
  reverse?: boolean;
}) => {
  return (
    <FadeIn>
      <SectionLayout
        className={cn(
          'items-center gap-[124px] max-md:flex-col-reverse max-md:gap-16',
          reverse ? 'flex-row-reverse' : 'flex-row',
        )}
      >
        <div className="flex w-1/2 flex-col gap-6 max-md:w-full">
          <Title as="h2" size="2xl">
            {title}
          </Title>
          <Text>{text}</Text>
          <Link href={buttonUrl}>
            <Button>Find Solution</Button>
          </Link>
        </div>
        <Image
          className="h-[470px] w-1/2 object-cover max-md:w-full"
          src={imgUrl}
          alt="service"
          width={493}
          height={470}
          unoptimized
        />
      </SectionLayout>
    </FadeIn>
  );
};
