'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { PhoneField } from '@/shared/ui/components/atoms/phone-field';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { Title } from '@/shared/ui/components/atoms/title';
import { FormRow } from '@/shared/ui/components/molecules/form-row';
import { CancelIcon } from '@/shared/ui/icons/fill/cancel';
import { DriveIcon } from '@/shared/ui/icons/fill/drive';
import { EditIcon } from '@/shared/ui/icons/fill/edit';

import { editUser } from '../api/edit-user-info';
import { changeUserInfoSchema } from '../model/schema';
import type { User } from '@/core/user/model/types';

export const UserInfoForm = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);

  const t = useTranslations('userInfoForm');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      email: user.email ?? '',
      phone: user.phone ?? '',
    },
    validators: {
      onSubmit: changeUserInfoSchema,
    },
    onSubmit: async (values) => {
      const res = await editUser({ ...values.value, id: user.id ?? -1 });

      if (res.message === 'Updated successfully.') {
        setIsEditing(false);
        notifySuccess(t('success', { fallback: 'User updated successfully' }));
      } else {
        notifyWarning(
          t('error', {
            fallback: 'Failed to update user. Please try again later.',
          })
        );
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch((err) => console.error(err));
      }}
    >
      <div className="flex justify-between max-lg:flex-col max-lg:gap-5">
        <Title size="xl" as="h3" uppercase>
          {t('title')}
        </Title>
        <div className="flex items-center gap-4">
          {isEditing ? (
            <>
              <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                {([canSubmit, isSubmitting]) => (
                  <Button className="p-4" disabled={!canSubmit} type="submit">
                    <DriveIcon />
                    {isSubmitting
                      ? t('saving', { fallback: 'Saving...' })
                      : t('save', { fallback: 'Save' })}
                  </Button>
                )}
              </Subscribe>
              <Button className="p-4" variant="support" onClick={() => setIsEditing(false)}>
                <CancelIcon />
                {t('cancel')}
              </Button>
            </>
          ) : (
            <Button className="p-4" onClick={() => setIsEditing(true)}>
              <EditIcon />
              {t('edit')}
            </Button>
          )}
        </div>
      </div>
      <FormRow>
        <Field name="firstName">
          {(field) => (
            <TextField
              label={t('fields.firstName', { fallback: 'First Name' })}
              name={field.name}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
        <Field name="lastName">
          {(field) => (
            <TextField
              label={t('fields.lastName', { fallback: 'Last Name' })}
              name={field.name}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
      </FormRow>
      <FormRow>
        <Field name="email">
          {(field) => (
            <TextField
              label={t('fields.email', { fallback: 'Email' })}
              type="email"
              name={field.name}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
        <Field name="phone">
          {(field) => (
            <PhoneField
              name={field.name}
              label={t('fields.phone', { fallback: 'Phone' })}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(value) => field.handleChange(value)}
              hint={field.state.meta.errors.map((err) => err?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
      </FormRow>
    </form>
  );
};
