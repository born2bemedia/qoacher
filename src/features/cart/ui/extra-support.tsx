'use client';

import Image from 'next/image';

import { useForm } from '@/shared/lib/forms';
import { notifySuccess } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { TextArea } from '@/shared/ui/components/atoms/text-area';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { Title } from '@/shared/ui/components/atoms/title';

import { supportSchema } from '../model/support.schema';

export const ExtraSupport = () => {
  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    validators: {
      onSubmit: supportSchema,
    },
    onSubmit: (data) => {
      console.log(data);
      reset();
      notifySuccess('Message sent successfully');
    },
  });

  return (
    <section className="flex flex-col gap-12 px-[165px] py-[100px] max-md:px-3 max-md:py-8">
      <section className="flex flex-col gap-3 items-center text-center">
        <Title size="3xl" weight={400}>
          Need Extra Support?
        </Title>
        <Text>
          Don’t hesitate to contact us. We’re available 24/7 to help you move forward, <br />{' '}
          overcome obstacles, and choose the right path for your growth.
        </Text>
      </section>
      <section className="flex gap-6 max-md:flex-col">
        <form
          className="flex flex-col gap-6 w-1/2 max-md:w-full"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit().catch((err) => console.error(err));
          }}
        >
          <Field name="name">
            {(field) => (
              <TextField
                name={field.name}
                placeholder="Name"
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                hint={field.state.meta.errors.map((err) => err?.message).join(', ')}
              />
            )}
          </Field>
          <Field name="phone">
            {(field) => (
              <TextField
                name={field.name}
                placeholder="Phone"
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                hint={field.state.meta.errors.map((err) => err?.message).join(', ')}
              />
            )}
          </Field>
          <Field name="phone">
            {(field) => (
              <TextField
                name={field.name}
                placeholder="Phone"
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                hint={field.state.meta.errors.map((err) => err?.message).join(', ')}
              />
            )}
          </Field>
          <Field name="message">
            {(field) => (
              <TextArea
                name={field.name}
                placeholder="Message"
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                hint={field.state.meta.errors.map((err) => err?.message).join(', ')}
              />
            )}
          </Field>
          <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <Button type="submit" disabled={!canSubmit} fullWidth>
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            )}
          </Subscribe>
        </form>
        <Image
          className="w-1/2 max-md:w-full h-[468px] object-cover"
          src="/images/cart/form.jpg"
          alt="form"
          height={494}
          width={543}
        />
      </section>
    </section>
  );
};
