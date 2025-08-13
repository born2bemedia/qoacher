'use server';

import type { ChangePasswordSchema } from '../model/schema';

export const changePassword = async ({
  currentPassword: password,
  newPassword: confirmPassword,
  userId,
}: ChangePasswordSchema & { userId: number }) => {
  const res = await fetch(`${process.env.SERVER_URL}/api/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, confirmPassword }),
  });

  return await res.json();
};
