'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

const ContactForm = dynamic(
  () => import('@/features/contact-form/ui').then(mod => mod.ContactForm),
  { ssr: false },
);

export const ContactFrame = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-[580px] flex-col items-center gap-3 text-center max-md:w-full">
        <Title as="h2" size="3xl" className="text-center">
          {title}
        </Title>
        <Text className="text-center">{description}</Text>
      </FadeIn>
      <FadeIn className="flex h-[466px] gap-6 max-md:h-full max-md:flex-col">
        <ContactForm layoutClassName="w-1/2 max-md:w-full" />
        <Image
          className="h-full w-1/2 object-cover max-md:h-[494px] max-md:w-full"
          src="/images/home/leafs.jpg"
          alt="leafs"
          width={543}
          height={494}
        />
      </FadeIn>
    </SectionLayout>
  );
};
