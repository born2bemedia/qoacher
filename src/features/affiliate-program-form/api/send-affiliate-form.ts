'use server';

import sgMail from '@sendgrid/mail';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

export type AffiliateFormData = {
  name: string;
  audienceCount: string;
  mediaLink1: string;
  mediaLink2: string;
  mediaLink3: string;
  geo: string;
  aboutMedia: string;
};

export async function sendAffiliateForm(data: AffiliateFormData) {
  const { name, audienceCount, mediaLink1, mediaLink2, mediaLink3, geo, aboutMedia } = data;

  const links = [mediaLink1, mediaLink2, mediaLink3].filter(Boolean);

  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const linksHtml = links
      .map((link, index) => `<p><strong>Media link ${index + 1}:</strong> <a href="${link}">${link}</a></p>`)
      .join('');

    const msg = {
      to: FROM_EMAIL,
      from: FROM_EMAIL,
      subject: `New affiliate application: ${name}`,
      html: `
      <h2>Qoacher Affiliate Program Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Audience count:</strong> ${audienceCount}</p>
      ${linksHtml}
      <p><strong>GEO:</strong> ${geo}</p>
      <p><strong>About your media:</strong></p>
      <p>${aboutMedia.replaceAll('\n', '<br />')}</p>
    `,
    };

    await sgMail.send(msg);

    return { message: 'Application sent successfully.', success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending affiliate application:', errorMessage);
    return {
      message: 'Failed to send application.',
      error: errorMessage,
      success: false,
    };
  }
}
