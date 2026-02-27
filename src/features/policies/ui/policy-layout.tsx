'use client';

import { Title } from '@/shared/ui/components/atoms/title';

export const PolicyLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {

  return (
    <main className="flex max-lg:w-full max-lg:py-[64px] max-lg:px-4 py-[100px] flex-col gap-12 w-[840px] mx-auto">
      <section className="flex flex-col gap-3">
        <Title as="h1" size="5xl">
          Qoacher {title}
        </Title>  
      </section>
      {children}
    </main>
  );
};
