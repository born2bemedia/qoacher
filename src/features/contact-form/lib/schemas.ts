import { isPhoneValid, v } from '@/shared/lib/forms';

export const contactFormSchema = v.object({
  name: v.pipe(v.string(), v.minLength(1, 'Please enter your name')),
  email: v.pipe(v.string(), v.email('Please provide your email')),
  phone: v.pipe(
    v.string(),
    v.minLength(1, 'Please provide your phone number'),
    v.custom(
      value => isPhoneValid(String(value)),
      'Please enter a valid phone number',
    ),
  ),
  message: v.pipe(v.string(), v.minLength(3, 'Please write a short message')),
});
