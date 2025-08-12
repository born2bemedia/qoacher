'use client';

import { Title } from '@/shared/ui/components/atoms/title';

export const PolicySection = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: string;
}) => {
  return (
    <section className="flex flex-col gap-6">
      {heading ? (
        <Title as="h2" size="2xl">
          {heading}
        </Title>
      ) : null}
      <section className="flex flex-col gap-5">{children}</section>
    </section>
  );
};
