'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const ArticleHero = ({
  imgUrl,
  title,
  subtitle,
  category,
}: {
  title: string;
  subtitle: ReactNode;
  imgUrl: string;
  category: string;
}) => {
  return (
    <section className="relative px-[165px] py-[80px] max-md:px-4">
      <div className="flex flex-col items-start justify-center gap-3 w-[840px] mx-auto max-md:w-full">
        <div className="py-3 px-6  bg-white z-12 relative">
          <Title as="h3" className="text-[16px] max-md:text-[14px]">
            {category}
          </Title>
        </div>
        <Title color="light" size="5xl" zIndex={2} className="text-left">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </Title>
        <Text zIndex={2} color="light" className="text-left">
          {subtitle}
        </Text>
        <div className="absolute inset-0 z-10 bg-black/50"></div>
      </div>
      <Image className="z-0 object-cover" src={imgUrl} alt="hero" fill unoptimized />
    </section>
  );
};
