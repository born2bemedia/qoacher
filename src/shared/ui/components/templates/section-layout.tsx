'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils';

export const SectionLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={cn(
      'flex flex-col px-[165px] py-[100px] max-md:px-4 max-md:py-16',
      className,
    )}
  >
    {children}
  </section>
);
