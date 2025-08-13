'use server';

import sgMail from '@sendgrid/mail';

import { registrationBody } from '@/features/email-letters/registration-body';

import { FROM_EMAIL, SENDGRID_API_KEY, SERVER_URL } from '@/shared/config/env';

import type { RegistrationSchema } from '../model/schemas/registration.schema';

export async function registerUser(userDTO: Omit<RegistrationSchema, 'confirmPassword'>) {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    await fetch(`${SERVER_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userDTO, role: 'customer' }),
    });

    const userMsg = {
      to: userDTO.email,
      from: FROM_EMAIL,
      subject: 'Welcome to Qoacher — Your Account Is Ready',
      html: registrationBody({ username: userDTO.firstName }),
    };

    await sgMail.send(userMsg);

    return { success: true };
  } catch {
    return { success: false };
  }
}
