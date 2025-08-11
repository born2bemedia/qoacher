'use server';

import type { RegistrationSchema } from '../model/schemas/registration.schema';

export async function registerUser(userDTO: Omit<RegistrationSchema, 'confirmPassword'>) {
  const res = await fetch(`${process.env.SERVER_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...userDTO, role: 'customer' }),
  });
  const result = await res.json();

  if (!result.errors) {
    return { success: true };
  } else {
    return { success: false, user: null };
  }
}
