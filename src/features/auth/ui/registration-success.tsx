'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';

export const RegistrationSuccess = () => {
  const t = useTranslations('registration.success');

  return (
    <section className="flex flex-col gap-6 text-center">
      <Text>
        {t('description', {
          fallback: 'Registration successful. You can now sign in to your account.',
        })}
      </Text>
      <Link href="/sign-in">
        <Button fullWidth>{t('continue', { fallback: 'Continue' })}</Button>
      </Link>
    </section>
  );
};
