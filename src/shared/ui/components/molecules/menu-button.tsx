'use client';

import type { ReactNode } from 'react';

import { ChevronDown } from '../../icons/outline/chevron-down';

export const MenuButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="flex cursor-pointer items-center gap-1 py-4 outline-none"
      onClick={onClick}
    >
      {children}
      <ChevronDown />
    </button>
  );
};
