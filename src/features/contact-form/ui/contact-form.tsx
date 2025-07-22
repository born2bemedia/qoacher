'use client';

import dynamic from 'next/dynamic';

import { useForm } from '@/shared/lib/forms';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/components/atoms/button';
import { useDialogStore } from '@/shared/ui/components/atoms/dialog';
import { TextArea } from '@/shared/ui/components/atoms/text-area';
import { TextField } from '@/shared/ui/components/atoms/text-field';

import { contactFormSchema } from '../lib';

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
  const { registerContent, setIsOpen } = useDialogStore();

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    validators: {
      onChange: contactFormSchema,
    },
    onSubmit: data => {
      console.log(data);
      registerContent({
        title: 'Success!',
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
        handleSubmit().catch(console.error);
      }}
      className={cn('flex flex-col gap-6', layoutClassName)}
    >
      <Field name="name">
        {field => (
          <TextField
            name={field.name}
            placeholder="Name"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map(err => err?.message).join(', ')}
          />
        )}
      </Field>
      <Field name="phone">
        {field => (
          <TextField
            name={field.name}
            placeholder="Name"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map(err => err?.message).join(', ')}
          />
        )}
      </Field>
      <Field name="email">
        {field => (
          <TextField
            name={field.name}
            placeholder="Email"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map(err => err?.message).join(', ')}
          />
        )}
      </Field>
      <Field name="message">
        {field => (
          <TextArea
            name={field.name}
            placeholder="Message"
            value={String(field.state.value)}
            onBlur={field.handleBlur}
            onChange={e => field.handleChange(e.target.value)}
            hint={field.state.meta.errors.map(err => err?.message).join(', ')}
          />
        )}
      </Field>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button type="submit" fullWidth disabled={!canSubmit}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
