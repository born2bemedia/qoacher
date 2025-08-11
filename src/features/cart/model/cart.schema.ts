import { v } from '@/shared/lib/forms';

export const cartSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(3, 'Please provide your first name')),
  lastName: v.pipe(v.string(), v.minLength(3, 'Please provide your last name')),
  phone: v.pipe(v.string(), v.minLength(5, 'Please provide your phone number')),
  email: v.pipe(v.string(), v.email('Please provide a valid email address')),
  street: v.pipe(v.string(), v.minLength(1, 'Please provide your address')),
  addressLine2: v.pipe(v.string(), v.minLength(1, 'Please provide your address')),
  city: v.pipe(v.string(), v.minLength(1, 'Please provide your city')),
  country: v.pipe(v.string(), v.minLength(1, 'Please provide your country')),
  zip: v.pipe(v.string(), v.minLength(1, 'Please provide your zip code')),
  isAgreeRefund: v.pipe(v.boolean(), v.literal(true, 'Please agree to the refund policy')),
  isAgreeTerms: v.pipe(v.boolean(), v.literal(true, 'Please agree to the terms of use')),
});

export type CartSchema = v.InferOutput<typeof cartSchema>;
