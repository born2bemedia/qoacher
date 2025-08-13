import { v } from '@/shared/lib/forms';

export const changeUserInfoSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  lastName: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  email: v.pipe(v.string(), v.email('Invalid email address.')),
  phone: v.pipe(v.string(), v.minLength(5, 'This field must be filled.')),
});

export type EditUserSchema = v.InferOutput<typeof changeUserInfoSchema>;

export const changeUserBillingSchema = v.object({
  street: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  addressLine2: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  country: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  city: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
  zip: v.pipe(v.string(), v.minLength(1, 'This field must be filled.')),
});

export type EditUserBillingSchema = v.InferOutput<typeof changeUserBillingSchema>;
