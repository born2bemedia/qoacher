'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { useDialogStore } from '@/shared/ui/components/atoms/dialog';
import { Text } from '@/shared/ui/components/atoms/text';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { WaitMessageIcon } from '@/shared/ui/icons/fill/wait-message';

import { registerUser } from '../api/register-user';
import { registrationSchema } from '../model/schemas/registration.schema';

const RegistrationSuccess = dynamic(
  () => import('./registration-success').then((mod) => mod.RegistrationSuccess),
  {
    ssr: false,
  }
);

export const RegistrationForm = () => {
  const t = useTranslations('registration');

  const { registerContent, setIsOpen, registerIcon } = useDialogStore();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validators: {
      onSubmit: registrationSchema,
    },
    onSubmit: async (data) => {
      const { success } = await registerUser({
        email: data.value.email,
        password: data.value.password,
        firstName: data.value.firstName,
        lastName: data.value.lastName,
      });

      if (success) {
        registerContent({
          title: t('success.title', { fallback: 'Account created!' }),
          content: <RegistrationSuccess />,
        });
        registerIcon(<WaitMessageIcon />);
        setIsOpen(true);
      } else {
        notifyWarning(
          t('success.warning', { fallback: 'Something went wrong — please refresh and try again' })
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
      <Field name="firstName">
        {(field) => (
          <TextField
            placeholder={t('fields.firstName', { fallback: 'First Name' })}
            name={field.name}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
          />
        )}
      </Field>
      <Field name="lastName">
        {(field) => (
          <TextField
            placeholder={t('fields.lastName', { fallback: 'Last Name' })}
            name={field.name}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
          />
        )}
      </Field>
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
      <Field name="confirmPassword">
        {(field) => (
          <TextField
            placeholder={t('fields.confirmPassword', { fallback: 'Confirm Password' })}
            type="password"
            name={field.name}
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
          />
        )}
      </Field>
      <Text className="text-center" color="gray">
        {t('fields.agree.0', { fallback: 'By creating an account, you agree to our' })}{' '}
        <Link className="underline" href="/terms-of-use">
          {t('fields.agree.1', { fallback: 'Terms of Use' })}
        </Link>{' '}
        {t('fields.agree.2', { fallback: 'and' })}{' '}
        <Link className="underline" href="/privacy-policy">
          {t('fields.agree.3', { fallback: 'Privacy Policy' })}
        </Link>
        .
      </Text>
      <div className="flex flex-col gap-3">
        <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit} className="justify-center" fullWidth>
              {isSubmitting
                ? t('fields.creating', { fallback: 'Creating...' })
                : t('fields.createAccount', { fallback: 'Create Account' })}
            </Button>
          )}
        </Subscribe>
        <Text color="gray" className="text-center">
          {t('fields.alreadyHaveAccount', { fallback: 'Already have an account?' })}{' '}
          <Link href="/sign-in" className="text-black underline">
            {t('fields.signIn', { fallback: 'Sign In!' })}
          </Link>
        </Text>
      </div>
    </form>
  );
};
