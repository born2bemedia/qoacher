'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const PolicyLayout = ({
  children,
  title,
  updateType = 'lastUpdate',
}: {
  children: React.ReactNode;
  title: string;
  updateType?: 'lastUpdate' | 'effectiveDate' | 'effective';
}) => {
  const t = useTranslations('policies');

  return (
    <main className="flex max-lg:w-full max-lg:py-[64px] max-lg:px-4 py-[100px] flex-col gap-12 w-[840px] mx-auto">
      <section className="flex flex-col gap-3">
        <Title as="h1" size="5xl">
          Qoacher {title}
        </Title>
        <Text>
          {t(updateType, { fallback: 'Last Updated:' })} <span>07-12-2025</span>
        </Text>
      </section>
      {children}
    </main>
  );
};
