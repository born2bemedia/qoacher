'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const Hero = ({
  description,
  imgUrl,
  title,
}: {
  title: ReactNode;
  description: ReactNode;
  imgUrl: string;
}) => {
  return (
    <section className="relative flex h-[850px] flex-col items-center justify-center gap-3 p-[165px] max-md:h-[700px] max-md:px-4">
      <Title color="light" size="5xl" zIndex={1} className="text-center">
        {title}
      </Title>
      <Text zIndex={1} color="light" className="text-center">
        {description}
      </Text>
      <Image
        className="z-0 object-cover"
        src={imgUrl}
        alt="hero"
        fill
        unoptimized
      />
    </section>
  );
};
