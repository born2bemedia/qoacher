'use client';

import type { ReactNode } from 'react';

import { Text } from '@/shared/ui/components/atoms/text';

export const List = ({ values }: { values: ReactNode[] }) => (
  <ul className="ml-4 flex list-disc flex-col gap-2 text-black">
    {values.map((value, index) => (
      <li key={index}>
        <Text>{value}</Text>
      </li>
    ))}
  </ul>
);
