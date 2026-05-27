'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLifeStyleBlog } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';

export const LifeStyleBlog = () => {
  const { title, description, linkTitle } = useLifeStyleBlog();

  return (
    <>
      <FadeIn className="relative flex flex-col items-center justify-center gap-6 py-16 px-4 md:py-24 md:px-12 text-center max-md:px-4 max-md:py-12">
        <div className="z-10 text-center">
          <Title as="h2" size="3xl" color="light" className="leading-[1.4063] mb-6">
            {title}
          </Title>
          <Text color="light" className="leading-[1.286]">
            {description}
          </Text>
        </div>

        <Link href="/affiliate-program" className="z-10">
          <Button
            variant="light"
            className="z-10 text-sm border-none leading-[1.286] min-w-45 justify-center"
          >
            {linkTitle}
          </Button>
        </Link>

        <Image
          className="object-cover"
          src="/images/home/life-style-blog.jpg"
          alt="Have a Lifestyle Blog?"
          unoptimized
          fill
        />
      </FadeIn>
    </>
  );
};
