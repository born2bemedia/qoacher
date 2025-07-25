import { useTranslations } from 'next-intl';

import { isPhoneValid, v } from '@/shared/lib/forms';

export const ContactFormSchema = () => {
  const t = useTranslations('contactForm');

  return v.object({
    name: v.pipe(
      v.string(),
      v.minLength(1, t('name_error', { fallback: 'Please enter your name' })),
    ),
    email: v.pipe(
      v.string(),
      v.email(t('email_error', { fallback: 'Please provide your email' })),
    ),
    phone: v.pipe(
      v.string(),
      v.minLength(
        1,
        t('phone_error', { fallback: 'Please provide your phone number' }),
      ),
      v.custom(
        value => isPhoneValid(String(value)),
        t('phone_error', { fallback: 'Please enter a valid phone number' }),
      ),
    ),
    message: v.pipe(
      v.string(),
      v.minLength(
        3,
        t('message_error', { fallback: 'Please write a short message' }),
      ),
    ),
  });
};
