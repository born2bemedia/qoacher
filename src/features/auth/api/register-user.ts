'use server';

import type { RegistrationSchema } from '../model/schemas/registration.schema';
import { signInUser } from './sign-in-user';

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
    return await signInUser({ email: userDTO.email, password: userDTO.password });
  } else {
    return { success: false, user: null };
  }
}
