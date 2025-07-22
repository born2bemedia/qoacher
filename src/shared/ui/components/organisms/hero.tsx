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
  title: string;
  description: ReactNode;
  imgUrl: string;
}) => {
  return (
    <section className="relative flex h-[850px] flex-col items-center justify-center gap-3 p-[165px] max-md:h-[700px] max-md:px-4 relative">
      <Title color="light" size="5xl" zIndex={2} className="text-center">
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </Title>
      <Text zIndex={2} color="light" className="text-center">
        {description}
      </Text>
      <div className="absolute inset-0 z-10 bg-black/50"></div>
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
