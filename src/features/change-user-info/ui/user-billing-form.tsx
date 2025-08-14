'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { Title } from '@/shared/ui/components/atoms/title';
import { CountryAutocomplete } from '@/shared/ui/components/molecules/country-autocomplete';
import { FormRow } from '@/shared/ui/components/molecules/form-row';
import { CancelIcon } from '@/shared/ui/icons/fill/cancel';
import { DriveIcon } from '@/shared/ui/icons/fill/drive';
import { EditIcon } from '@/shared/ui/icons/fill/edit';

import { editUserBilling } from '../api/edit-user-billing';
import { changeUserBillingSchema } from '../model/schema';
import type { User } from '@/core/user/model/types';

export const UserBillingForm = ({ user }: { user: User }) => {
  const [isEditing, setIsEditing] = useState(false);

  const t = useTranslations('userBillingForm');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      street: user.street ?? '',
      addressLine2: user.addressLine2 ?? '',
      country: user.country ?? '',
      city: user.city ?? '',
      zip: user.zip ?? '',
    },
    validators: {
      onSubmit: changeUserBillingSchema,
    },
    onSubmit: async (values) => {
      const res = await editUserBilling({ ...values.value, id: user.id });

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
        <Field name="street">
          {(field) => (
            <TextField
              type="text"
              label={t('fields.addressLine1', { fallback: 'Address Line 1' })}
              name={field.name}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
        <Field name="addressLine2">
          {(field) => (
            <TextField
              type="text"
              label={t('fields.addressLine2', { fallback: 'Address Line 2' })}
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
        <Field name="city">
          {(field) => (
            <TextField
              type="text"
              label={t('fields.city', { fallback: 'City' })}
              name={field.name}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
        <Field name="country">
          {(field) => (
            <CountryAutocomplete
              label={t('fields.country', { fallback: 'Country/Region' })}
              initialValue={String(field.state.value)}
              onChange={(value) => field.handleChange(value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
      </FormRow>
      <div className="flex w-[49%]">
        <Field name="zip">
          {(field) => (
            <TextField
              type="text"
              label={t('fields.zip', { fallback: 'ZIP' })}
              name={field.name}
              value={String(field.state.value)}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
              disabled={!isEditing}
            />
          )}
        </Field>
      </div>
    </form>
  );
};
