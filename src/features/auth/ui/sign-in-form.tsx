'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { TextField } from '@/shared/ui/components/atoms/text-field';

import { signInUser } from '../api/sign-in-user';
import { signInSchema } from '../model/schemas/sign-in.schema';

export const SignInForm = () => {
  const router = useRouter();

  const t = useTranslations('signIn');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: signInSchema,
    },
    onSubmit: async (data) => {
      const { success } = await signInUser(data.value);

      if (success) {
        notifySuccess(t('success', { fallback: 'Login successful' }));
        router.push('/account');
      } else {
        notifyWarning(
          t('warning', { fallback: 'Something went wrong — please refresh and try again' })
        );
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex flex-col gap-6"
    >
      <Field name="email">
        {(field) => (
          <TextField
            placeholder={t('fields.email', { fallback: 'Email' })}
            type="email"
            name={field.name}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
          />
        )}
      </Field>
      <Field name="password">
        {(field) => (
          <TextField
            placeholder={t('fields.password', { fallback: 'Password' })}
            type="password"
            name={field.name}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
          />
        )}
      </Field>
      <div className="flex flex-col gap-3">
        <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit} className="justify-center" fullWidth>
              {isSubmitting
                ? t('fields.signingIn', { fallback: 'Signing in...' })
                : t('fields.signIn', { fallback: 'Sign In' })}
            </Button>
          )}
        </Subscribe>
        <Text color="gray" className="text-center">
          {t('fields.dontHaveAccount', { fallback: 'Don’t have an account?' })}{' '}
          <Link href="/registration" className="text-black underline">
            {t('fields.createAccount', { fallback: 'Create' })}
          </Link>
        </Text>
      </div>
    </form>
  );
};
