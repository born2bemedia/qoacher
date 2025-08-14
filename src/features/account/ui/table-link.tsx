'use client';

import Link from 'next/link';

export const TableLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="text-[#4C73D8] text-sm underline font-light" target="_blank">
      {children}
    </Link>
  );
};
