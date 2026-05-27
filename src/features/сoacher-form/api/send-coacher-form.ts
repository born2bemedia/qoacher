'use server';

import sgMail from '@sendgrid/mail';

import { requestFormBody } from '@/features/email-letters/request-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

export async function sendCoacherForm(formData: FormData) {
  const name = String(formData.get('name') ?? '').trim();
  const yearsOfExperience = String(formData.get('yearsOfExperience') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const phone = String(formData.get('phone') ?? '').trim();
  const areaOfExpertise = String(formData.get('areaOfExpertise') ?? '').trim();
  const cvLink = String(formData.get('cvLink') ?? '').trim();
  const cvFile = formData.get('cvFile');

  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const attachments =
      cvFile instanceof File && cvFile.size > 0
        ? [
            {
              content: Buffer.from(await cvFile.arrayBuffer()).toString('base64'),
              filename: cvFile.name.replaceAll(/[/\\]/g, '_').slice(0, 200) || 'cv',
              type: cvFile.type || undefined,
              disposition: 'attachment' as const,
            },
          ]
        : undefined;

    const adminMsg = {
      to: FROM_EMAIL,
      from: FROM_EMAIL,
      subject: `New coach application: ${name}`,
      html: `
      <h2>New coach application (Join Qoacher)</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Years of experience:</strong> ${yearsOfExperience}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Area of expertise:</strong></p>
      <p>${areaOfExpertise.replaceAll('\n', '<br />')}</p>
      ${cvLink ? `<p><strong>CV link:</strong> <a href="${cvLink}">${cvLink}</a></p>` : ''}
      <p><strong>CV file:</strong> ${cvFile instanceof File && cvFile.size > 0 ? cvFile.name : '(none)'}</p>
    `,
      ...(attachments ? { attachments } : {}),
    };

    const userMsg = {
      to: email,
      from: FROM_EMAIL,
      subject: 'Qoacher: Your application has been received',
      html: requestFormBody({ username: name }),
    };

    await sgMail.send(adminMsg);
    await sgMail.send(userMsg);

    return { message: 'Application sent successfully.', success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending coach application:', errorMessage);
    return {
      message: 'Failed to send application.',
      error: errorMessage,
      success: false,
    };
  }
}
