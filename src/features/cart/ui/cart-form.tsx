'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { getCart } from '@/features/cart/api/get-cart';
import { cartSchema } from '@/features/cart/model/cart.schema';

import { useForm } from '@/shared/lib/forms';
import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { Checkbox } from '@/shared/ui/components/atoms/checkbox';
import { Divider } from '@/shared/ui/components/atoms/divider';
import { PhoneField } from '@/shared/ui/components/atoms/phone-field';
import { Text } from '@/shared/ui/components/atoms/text';
import { TextField } from '@/shared/ui/components/atoms/text-field';
import { Title } from '@/shared/ui/components/atoms/title';
import { CountryAutocomplete } from '@/shared/ui/components/molecules/country-autocomplete';
import { FormRow } from '@/shared/ui/components/molecules/form-row';

import { clearCart } from '../api/clear-cart';
import { makeOrder } from '../api/make-order';
import type { User } from '@/core/user/model/types';

export const CartForm = ({ user }: { user?: User }) => {
  const router = useRouter();

  const t = useTranslations('cart');

  const cart = getCart();

  const totalPrice = cart.reduce((acc: number, item: { price: number }) => acc + item.price, 0);

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      phone: user?.phone ?? '',
      email: user?.email ?? '',
      street: user?.street ?? '',
      addressLine2: user?.addressLine2 ?? '',
      city: user?.city ?? '',
      country: user?.country ?? '',
      zip: user?.zip ?? '',
      isAgreeRefund: false,
      isAgreeTerms: false,
    },
    validators: {
      onSubmit: cartSchema,
    },
    onSubmit: async (data) => {
      const res = await makeOrder({ billing: data.value, products: cart, user, totalPrice });

      if (res?.message === 'Order successfully created.') {
        notifySuccess(
          t('success', { fallback: 'Order successfully created. Please proceed to payment.' })
        );
        clearCart();
        router.push('/payment');
      } else {
        console.error(res);
        notifyWarning(t('warning', { fallback: 'Something went wrong, please try again.' }));
      }
    },
  });

  return (
    <form
      className="flex gap-6 max-lg:flex-col px-[165px] py-[64px] max-md:py-8 max-md:px-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <section className="w-1/2 max-lg:w-full border border-[rgba(128,128,128,0.15)] flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-6 pb-6">
          <Title size="2xl" color="dark" className="uppercase">
            {t('title', { fallback: 'Your Choice' })}
          </Title>
          {cart.map((item: { title: string; price: number; id: string }) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <section className="flex flex-col gap-10 pt-6">
          <div className="flex flex-col gap-5">
            <Title size="2xl" color="dark" className="uppercase">
              {t('personalDetails', { fallback: 'Personal Details' })}
            </Title>
            <FormRow>
              <Field name="firstName">
                {(field) => (
                  <TextField
                    placeholder={t('firstName', { fallback: 'First Name' })}
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
                    placeholder={t('lastName', { fallback: 'Last Name' })}
                    name={field.name}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                  />
                )}
              </Field>
            </FormRow>
            <Field name="email">
              {(field) => (
                <TextField
                  type="email"
                  placeholder={t('email', { fallback: 'Email' })}
                  name={field.name}
                  value={String(field.state.value)}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                />
              )}
            </Field>
          </div>
          <div className="flex flex-col gap-5">
            <Title size="2xl" color="dark" className="uppercase">
              {t('yourAddress', { fallback: 'Your Address' })}
            </Title>
            <FormRow>
              <Field name="street">
                {(field) => (
                  <TextField
                    type="text"
                    placeholder={t('addressLine1', { fallback: 'Address Line 1' })}
                    name={field.name}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                  />
                )}
              </Field>
              <Field name="addressLine2">
                {(field) => (
                  <TextField
                    type="text"
                    placeholder={t('addressLine2', { fallback: 'Address Line 2' })}
                    name={field.name}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                  />
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field name="city">
                {(field) => (
                  <TextField
                    type="text"
                    placeholder={t('city', { fallback: 'City' })}
                    name={field.name}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                  />
                )}
              </Field>
              <Field name="country">
                {(field) => (
                  <CountryAutocomplete
                    placeholder={t('country', { fallback: 'Country/Region' })}
                    initialValue={String(field.state.value)}
                    onChange={(value) => field.handleChange(value)}
                    hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                  />
                )}
              </Field>
            </FormRow>
            <FormRow>
              <Field name="zip">
                {(field) => (
                  <TextField
                    type="text"
                    placeholder={t('zip', { fallback: 'ZIP' })}
                    name={field.name}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                  />
                )}
              </Field>
              <Field name="phone">
                {(field) => (
                  <PhoneField
                    placeholder={t('phone', { fallback: 'Phone Number' })}
                    name={field.name}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={(value) => field.handleChange(value)}
                    hint={field.state.meta.errors.map((error) => error?.message).join(', ')}
                  />
                )}
              </Field>
            </FormRow>
          </div>
          <div className="flex flex-col gap-5">
            <Title size="2xl" color="dark" className="uppercase">
              {t('paymentMethod', { fallback: 'Payment Method' })}
            </Title>
            <Text color="gray">{t('wireTransfer', { fallback: 'Wire Transfer' })}</Text>
          </div>
        </section>
      </section>
      <section className="w-1/2 max-lg:w-full sticky max-lg:relative max-lg:top-0 top-24 h-max p-6 border border-[rgba(128,128,128,0.15)] flex flex-col gap-10">
        <Title size="2xl">{t('orderSummary', { fallback: 'Order Summary' })}</Title>
        <section className="flex flex-col gap-5">
          {cart.map((item: { title: string; price: number; id: string }) => (
            <div key={item.id} className="flex items-center justify-between">
              <Text className="max-w-[60%]">{item.title}</Text>
              <Text color="gray">€{item.price.toLocaleString()}</Text>
            </div>
          ))}
        </section>
        <Divider />
        <div className="flex items-center justify-between">
          <Text size="lg" weight={500}>
            {t('total', { fallback: 'Total' })}
          </Text>
          <Text size="lg" weight={500}>
            €{totalPrice.toLocaleString()}
          </Text>
        </div>
        <div className="flex flex-col gap-3">
          <Field name="isAgreeTerms">
            {(field) => (
              <Checkbox
                name={field.name}
                label={
                  <>
                    {t('isAgreeTerms.0', { fallback: 'I have read and agree to the website' })}{' '}
                    <Link href="/terms-of-use" className="underline">
                      {t('isAgreeTerms.1', { fallback: 'Terms of Use' })}
                    </Link>
                  </>
                }
                checked={field.state.value}
                onCheckedChange={(e) => field.handleChange(e === 'indeterminate' ? false : e)}
                intent={field.state.meta.errors.length ? 'danger' : 'default'}
              />
            )}
          </Field>
          <Field name="isAgreeRefund">
            {(field) => (
              <Checkbox
                name={field.name}
                label={
                  <>
                    {t('isAgreeRefund.0', { fallback: 'I have read and agree to the' })}{' '}
                    <Link href="/refund-policy" className="underline">
                      {t('isAgreeRefund.1', { fallback: 'Refund Policy' })}
                    </Link>
                  </>
                }
                checked={field.state.value}
                onCheckedChange={(e) => field.handleChange(e === 'indeterminate' ? false : e)}
                intent={field.state.meta.errors.length ? 'danger' : 'default'}
              />
            )}
          </Field>
        </div>
        <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit} fullWidth>
              {isSubmitting
                ? t('ordering', { fallback: 'Ordering...' })
                : t('orderNow', { fallback: 'Order Now' })}
            </Button>
          )}
        </Subscribe>
      </section>
    </form>
  );
};

const CartItem = ({ item }: { item: { title: string; price: number; id: string } }) => {
  return (
    <div className="flex items-center justify-between gap-5 p-6 border border-black/10 bg-[#FAFAFA]">
      <Title size="lg" weight={500}>
        {item.title}
      </Title>
      <Text size="lg" weight={500}>
        €{item.price.toLocaleString()}
      </Text>
    </div>
  );
};
