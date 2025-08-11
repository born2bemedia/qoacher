import { v } from '@/shared/lib/forms';

export const registrationSchema = v.pipe(
  v.object({
    firstName: v.pipe(v.string(), v.minLength(1, 'First name is required')),
    lastName: v.pipe(v.string(), v.minLength(1, 'Last name is required')),
    email: v.pipe(v.string(), v.email('Invalid email address')),
    password: v.pipe(v.string(), v.minLength(8, 'Password must be at least 8 characters long')),
    confirmPassword: v.pipe(
      v.string(),
      v.minLength(8, 'Password must be at least 8 characters long')
    ),
  }),
  v.forward(
    v.partialCheck(
      [['password'], ['confirmPassword']],
      (input) => input.password === input.confirmPassword,
      'The two passwords do not match.'
    ),
    ['confirmPassword']
  )
);

export type RegistrationSchema = v.InferOutput<typeof registrationSchema>;
