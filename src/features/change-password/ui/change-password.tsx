'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { Title } from '@/shared/ui/components/atoms/title';
import { FormRow } from '@/shared/ui/components/molecules/form-row';
import { CancelIcon } from '@/shared/ui/icons/fill/cancel';
import { DriveIcon } from '@/shared/ui/icons/fill/drive';
import { EditIcon } from '@/shared/ui/icons/fill/edit';

import { changePassword } from '../api/change-password';
import { changePasswordSchema } from '../model/schema';
import type { User } from '@/core/user/model/types';

export const ChangePassword = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);

  const t = useTranslations('changePassword');

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
    validators: {
      onSubmit: changePasswordSchema,
    },
    onSubmit: async (data) => {
      const res = await changePassword({
        ...data.value,
        userId: user?.id ?? -1,
      });

      console.log('res', res);

      if (res.message === 'Updated successfully.') {
        notifySuccess(t('success', { fallback: 'Password changed successfully' }));
        reset();
        setIsEditing(false);
      } else {
        console.error(res);
        notifyWarning(
          t('error', {
            fallback: 'Password change failed. Please try again later.',
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
        <Field name="currentPassword">
          {(field) => (
            <TextField
              type="password"
              label={t('fields.currentPassword', { fallback: 'Current Password' })}
              name={field.name}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
        <Field name="newPassword">
          {(field) => (
            <TextField
              type="password"
              label={t('fields.newPassword', { fallback: 'New Password' })}
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
    </form>
  );
};
