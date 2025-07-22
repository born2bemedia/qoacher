'use client';

import Link from 'next/link';

import { footerNavigation, policyNavigation } from '@/shared/config/routes';
import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';

export const Footer = () => {
  return (
    <footer className="border-light-gray flex flex-col gap-12 border-t px-[100px] py-12 max-md:px-4">
      <section className="flex items-center justify-between max-md:flex-col max-md:gap-12">
        <nav className="flex gap-6 max-md:flex-col max-md:items-center max-md:gap-12 max-md:text-center">
          <section className="flex gap-6">
            <div className="flex max-w-[150px] flex-col gap-6 max-md:text-center">
              {footerNavigation.slice(0, 4).map(item => (
                <Link key={item.label} href={item.href}>
                  <Text size="sm" weight={300}>
                    {item.label}
                  </Text>
                </Link>
              ))}
            </div>
            <div className="flex max-w-[150px] flex-col gap-6 max-md:text-center">
              {footerNavigation.slice(4, 7).map(item => (
                <Link key={item.label} href={item.href}>
                  <Text size="sm" weight={300}>
                    {item.label}
                  </Text>
                </Link>
              ))}
            </div>
          </section>
          <div className="flex max-w-[150px] flex-col gap-6 max-md:text-center">
            {footerNavigation.slice(7, 10).map(item => (
              <Link key={item.label} href={item.href}>
                <Text size="sm" weight={300}>
                  {item.label}
                </Text>
              </Link>
            ))}
          </div>
        </nav>
        <section className="flex w-[350px] flex-col gap-6 max-md:w-full max-md:text-center">
          <Text size="sm" weight={300}>
            [COMPANY]
          </Text>
          <Text size="sm" weight={300}>
            Expert support for personal growth, relationships, and career
            development in today’s demanding world.
          </Text>
          <Text size="sm" weight={300}>
            Registered address:
          </Text>
          <Text size="sm" weight={300}>
            Registered number:
          </Text>
          <Text size="sm" weight={300}>
            Office address:
          </Text>
        </section>
      </section>
      <Divider />
      <section className="flex items-center justify-between max-md:flex-col max-md:gap-8">
        <nav className="flex items-center gap-6 max-md:grid max-md:grid-cols-2 max-md:gap-6">
          {policyNavigation.map(n => (
            <Link key={n.label} href={n.href}>
              <Text key={n.label} size="sm" weight={300}>
                {n.label}
              </Text>
            </Link>
          ))}
        </nav>
        <Text size="sm" weight={300}>
          © {new Date().getFullYear()} All rights reserved. Coacher
        </Text>
      </section>
    </footer>
  );
};
