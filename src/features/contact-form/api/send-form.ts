'use server';

import sgMail from '@sendgrid/mail';

import { requestFormBody } from '@/features/email-letters/request-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { ContactForm } from '../schema/schemas';

export async function sendContactForm(data: ContactForm) {
  try {
    const { email, message, name, phone } = data;

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: FROM_EMAIL,
      from: FROM_EMAIL,
      subject: `New Contact Request`,
      html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    const userMsg = {
      to: email,
      from: FROM_EMAIL,
      subject: 'Qoacher: Your Request Has Been Received',
      html: requestFormBody({ username: name }),
    };

    await sgMail.send(msg);
    await sgMail.send(userMsg);

    return { message: 'Fund access request sent successfully.', success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return {
      message: 'Failed to send fund access request.',
      error: errorMessage,
      success: false,
    };
  }
}
