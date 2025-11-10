'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { FooterNavigation } from '@/shared/config/footer-navigation';
import { PolicyNavigation } from '@/shared/config/policy-navigation';
import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';
import { FacebookIcon, InstagramIcon, XIcon } from '@/shared/ui/icons/fill/socials';
import { MailIcon } from '@/shared/ui/icons/outline/mail';
import { PhoneIcon } from '@/shared/ui/icons/outline/phone';

import { Link as NavLink } from '@/i18n/navigation';

export const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="border-light-gray flex flex-col gap-12 border-t px-[100px] py-12 max-md:px-4">
      <section className="flex max-md:items-center justify-between max-md:flex-col max-md:gap-12">
        <section className="flex w-[350px] flex-col gap-6 max-md:w-full max-md:text-center">
          <Image src="/logo.svg" alt="logo" width={136} height={30} />
          <Text size="sm" weight={300}>
            Optivida Ltd
          </Text>
          <Text size="sm" weight={300}>
            {t('companyDescription', {
              fallback:
                'Expert support for personal growth, relationships, and career development in today’s demanding world.',
            })}
          </Text>
          <Text size="sm" weight={300}>
            {t('registeredAddress', {
              fallback: 'Registered address:',
            })}
            <br />
            2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE
          </Text>
          <Text size="sm" weight={300}>
            {t('registeredNumber', {
              fallback: 'Registered number:',
            })}
            <br />
            16755428
          </Text>
          <Text size="sm" weight={300}>
            {t('officeAddress', {
              fallback: 'Office address:',
            })}
            <br />
            Office GI.1.07, 60 Grays Inn Rd, London, United Kingdom, WC1X 8LU
          </Text>
          <div className="flex items-center gap-6 max-md:justify-center">
            <Link
              href="https://www.facebook.com/qoachercom/ "
              className="flex items-center justify-center"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/qoacher/"
              className="flex items-center justify-center"
            >
              <InstagramIcon />
            </Link>
            <Link href="https://x.com/qoachercom" className="flex items-center justify-center">
              <XIcon />
            </Link>
          </div>
        </section>
        <nav className="flex gap-6 max-md:flex-col max-md:items-center max-md:gap-12 max-md:text-center">
          <section className="flex gap-6">
            <div className="flex max-w-[150px] flex-col gap-6 max-md:text-center">
              {FooterNavigation()
                .slice(0, 4)
                .map((item) => (
                  <NavLink key={item.label} href={item.href}>
                    <Text size="sm" weight={300}>
                      {item.label}
                    </Text>
                  </NavLink>
                ))}
            </div>
            <div className="flex max-w-[150px] flex-col gap-6 max-md:text-center">
              {FooterNavigation()
                .slice(4, 7)
                .map((item) => (
                  <NavLink key={item.label} href={item.href}>
                    <Text size="sm" weight={300}>
                      {item.label}
                    </Text>
                  </NavLink>
                ))}
            </div>
          </section>
          <section className="flex gap-6">
            <div className="flex max-w-[150px] flex-col gap-6 max-md:text-center">
              {FooterNavigation()
                .slice(7, 10)
                .map((item) => (
                  <NavLink key={item.label} href={item.href}>
                    <Text size="sm" weight={300}>
                      {item.label}
                    </Text>
                  </NavLink>
                ))}
            </div>
            <div className="flex max-w-[150px] flex-col gap-6 max-md:text-center">
              <span className="flex items-center gap-1.5">
                <PhoneIcon />
                <Link href="tel:+447460102445">
                  <Text size="sm" weight={300}>
                    +447460102445
                  </Text>
                </Link>
              </span>
              <span className="flex items-center gap-1.5">
                <MailIcon />
                <Link href="mailto:info@qoacher.com">
                  <Text size="sm" weight={300}>
                    info@qoacher.com
                  </Text>
                </Link>
              </span>
            </div>
          </section>
        </nav>
      </section>
      <Divider />
      <section className="flex items-center justify-between max-md:flex-col max-md:gap-8">
        <nav className="flex items-center gap-6 max-md:grid max-md:grid-cols-2 max-md:gap-6">
          {PolicyNavigation().map((n) => (
            <NavLink key={n.label} href={n.href}>
              <Text key={n.label} size="sm" weight={300}>
                {n.label}
              </Text>
            </NavLink>
          ))}
        </nav>
        <Text size="sm" weight={300}>
          © {new Date().getFullYear()}{' '}
          {t('allRightsReserved', {
            fallback: 'All rights reserved.',
          })}{' '}
          Optivida Ltd
        </Text>
      </section>
    </footer>
  );
};
