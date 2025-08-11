'use client';

import type { ReactNode } from 'react';

export const FormRow = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-5 max-md:flex-col">{children}</div>
);
