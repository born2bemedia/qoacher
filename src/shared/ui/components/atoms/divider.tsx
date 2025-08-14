'use client';

import { cn } from '@/shared/lib/utils';

export const Divider = ({ className }: { className?: string }) => (
  <span className={cn('bg-light-gray h-px w-full', className)} />
);
