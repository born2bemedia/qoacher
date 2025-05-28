'use client';

import { cn } from '@/shared/lib/utils';

export const HorizontalLayout = ({
  children,
  gap = 48,
  reverse = false,
}: {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
}) => (
  <section
    className={cn(
      'flex items-center max-md:flex-col-reverse max-md:items-start',
      reverse && 'flex-row-reverse',
    )}
    style={{ gap: `${gap}px` }}
  >
    {children}
  </section>
);
