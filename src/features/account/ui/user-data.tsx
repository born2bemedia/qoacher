'use client';

import { ChangePassword } from '@/features/change-password/ui/change-password';
import { UserBillingForm } from '@/features/change-user-info/ui/user-billing-form';
import { UserInfoForm } from '@/features/change-user-info/ui/user-info-form';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

import type { User } from '@/core/user/model/types';

export const UserData = ({ user }: { user: User }) => {
  return (
    <section className="flex w-full flex-col gap-10 p-6 border border-[rgba(128,128,128,0.15)]">
      <div className="flex flex-col gap-3">
        <Title as="h2" size="2xl">
          Your Data
        </Title>
        <span className="opacity-50">
          <Text>Check, edit, and add your personal information anytime.</Text>
        </span>
      </div>
      <Divider />
      <UserInfoForm user={user} />
      <UserBillingForm user={user} />
      <ChangePassword user={user} />
    </section>
  );
};
