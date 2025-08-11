'use client';

import Link from 'next/link';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';

export const RegistrationSuccess = () => {
  return (
    <section className="flex flex-col gap-6 text-center">
      <Text>Registration successful. You can now sign in to your account.</Text>
      <Link href="/sign-in">
        <Button fullWidth>Continue</Button>
      </Link>
    </section>
  );
};
