import Image from 'next/image';

import { SignInForm } from '@/features/auth/ui/sign-in-form';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export default function SignInPage() {
  return (
    <main className="flex items-center max-lg:flex-col max-lg:items-start">
      <Image
        src="/images/auth/log-hero.jpg"
        alt="Registration Hero"
        width={1000}
        height={826}
        className="w-1/2 h-[826px] object-cover max-lg:w-full max-lg:h-[200px]"
        unoptimized
      />
      <section className="w-1/2 max-lg:w-full px-[165px] flex flex-col gap-12 max-lg:py-8 max-lg:px-4">
        <div className="flex flex-col gap-3 text-center">
          <Title size="3xl" weight={400}>
            Sign In to Your Account
          </Title>
          <Text color="gray">Small steps. Real shifts. It starts here.</Text>
        </div>
        <Divider />
        <SignInForm />
      </section>
    </main>
  );
}
