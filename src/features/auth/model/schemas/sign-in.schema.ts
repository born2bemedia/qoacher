import { v } from '@/shared/lib/forms';

export const signInSchema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email address')),
  password: v.pipe(v.string(), v.minLength(2, 'Password is required')),
});
