import { v } from '@/shared/lib/forms';

export const supportSchema = v.object({
  name: v.pipe(v.string(), v.minLength(3, 'Please provide your name')),
  phone: v.pipe(v.string(), v.minLength(5, 'Please provide your phone number')),
  email: v.pipe(v.string(), v.email('Please provide a valid email address')),
  message: v.pipe(v.string(), v.minLength(1, 'Please provide a message')),
});
