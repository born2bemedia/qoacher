'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/components/atoms/button';
import { useDialogStore } from '@/shared/ui/components/atoms/dialog';
import { TextArea } from '@/shared/ui/components/atoms/text-area';
import { TextField } from '@/shared/ui/components/atoms/text-field';

import { ContactFormSchema } from '../schema/schemas';

const ThankYouDialog = dynamic(
  () => import('./thank-you-dialog').then(mod => mod.ThankYouDialog),
  {
    ssr: false,
  },
);

export const ContactForm = ({
  layoutClassName,
}: {
  layoutClassName?: string;
}) => {
  const t = useTranslations('contactForm');
  const { registerContent, setIsOpen } = useDialogStore();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    validators: {
      onChange: ContactFormSchema(),
    },
    onSubmit: data => {
      console.log(data);

      registerContent({
        title: t('success', { fallback: 'Success!' }),
        content: <ThankYouDialog onClose={() => setIsOpen(false)} />,
      });
      setIsOpen(true);
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(err => console.error(err));
      }}
      className={cn('flex flex-col gap-6', layoutClassName)}
    >
      <Field name="name">
        {field => {
          console.log('Name errors:', field.state.meta.errors);
          return (
            <TextField
              name={field.name}
              placeholder={t('name', { fallback: 'Name' })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map(err => err?.message).join(', ')}
            />
          );
        }}
      </Field>
      <Field name="phone">
        {field => {
          console.log('Phone errors:', field.state.meta.errors);
          return (
            <TextField
              name={field.name}
              placeholder={t('phone', { fallback: 'Phone' })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map(err => err?.message).join(', ')}
            />
          );
        }}
      </Field>
      <Field name="email">
        {field => {
          console.log('Email errors:', field.state.meta.errors);
          return (
            <TextField
              name={field.name}
              placeholder={t('email', { fallback: 'Email' })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map(err => err?.message).join(', ')}
            />
          );
        }}
      </Field>
      <Field name="message">
        {field => {
          console.log('Message errors:', field.state.meta.errors);
          return (
            <TextArea
              name={field.name}
              placeholder={t('message', { fallback: 'Message' })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={e => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map(err => err?.message).join(', ')}
            />
          );
        }}
      </Field>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" fullWidth disabled={!canSubmit}>
            {isSubmitting
              ? t('sending', { fallback: 'Sending...' })
              : t('send', { fallback: 'Send' })}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
