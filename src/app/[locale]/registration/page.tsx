import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { RegistrationForm } from '@/features/auth/ui/registration-form';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const metadata: Metadata = {
  title: 'Registration | Qoacher',
  openGraph: {
    title: 'Registration | Qoacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Registration | Qoacher',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RegistrationPage() {
  const t = await getTranslations('registration');

  return (
    <main className="flex items-center max-lg:flex-col max-lg:items-start">
      <Image
        src="/images/auth/reg-hero.jpg"
        alt="Registration Hero"
        width={1000}
        height={826}
        className="w-1/2 h-[826px] object-cover max-lg:w-full max-lg:h-[200px]"
        unoptimized
      />
      <section className="w-1/2 max-lg:w-full px-[165px] flex flex-col gap-12 max-lg:py-8 max-lg:px-4">
        <div className="flex flex-col gap-3 text-center">
          <Title size="3xl" weight={400}>
            {t('title', { fallback: 'Create an account' })}
          </Title>
          <Text color="gray">
            {t('description', { fallback: 'Every big change starts small. This is yours.' })}
          </Text>
        </div>
        <Divider />
        <RegistrationForm />
      </section>
    </main>
  );
}
