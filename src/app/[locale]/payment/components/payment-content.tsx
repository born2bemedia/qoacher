'use client';

import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { CopyIcon } from '@/shared/ui/icons/fill/copy';

export const PaymentContent = () => {
  const t = useTranslations('payment.paymentDetails');

  return (
    <section className="flex flex-col gap-[64px] px-[165px] py-[64px] max-lg:py-8 max-md:px-4">
      <Title as="h2" color="dark" size="3xl" className="text-center max-lg:text-[20px]">
        {t('title', {
          fallback:
            'To complete your purchase, please make a bank transfer using the details below. Include the payment reference exactly as shown to ensure your order is processed without delays.',
        })}
      </Title>
      <PaymentDetails />
    </section>
  );
};

const PaymentDetails = () => {
  const t = useTranslations('payment.paymentDetails');

  return (
    <section className="flex w-[600px] max-lg:w-full mx-auto flex-col gap-12 p-6 border border-[#E9E9E9]">
      <Title color="dark" size="3xl" className="text-center">
        {t('subtitle', {
          fallback: 'Pay via Bank Transfer',
        })}
      </Title>
      <Detail label="IBAN" value="[iban]" />
      <Detail label="BIC / SWIFT" value="[BIC / SWIFT]" />
      <Detail label={t('recipient', { fallback: 'Recipient' })} value="[Recipient]" />
      <Detail
        label={t('recipientAddress', { fallback: 'Recipient Address' })}
        value="[Recipient Address]"
      />
      <Detail label={t('bankName', { fallback: 'Bank Name' })} value="[Bank Name]" />
      <div className="flex flex-col gap-2">
        <Detail label={t('reference', { fallback: 'Reference (Mandatory)' })} value="[Reference]" />
        <Text className="opacity-50">
          {t('referenceDescription', {
            fallback: 'Enter the reference exactly as shown above when making your payment.',
          })}
        </Text>
      </div>
    </section>
  );
};

const Detail = ({ value, label }: { value: string; label: string }) => {
  const t = useTranslations('payment.paymentDetails');

  const copyHandle = () => {
    navigator.clipboard.writeText(value);
    toast.success(t('copied', { fallback: 'Copied to clipboard' }));
  };

  return (
    <article className="flex flex-col gap-2">
      <Text>{label}</Text>
      <section className="flex">
        <div className="flex p-6 w-full border border-[#808080]">
          <Text>{value}</Text>
        </div>
        <button
          onClick={copyHandle}
          className="p-4 cursor-pointer bg-black flex items-center gap-2 hover:border-jet-black hover:bg-jet-black transition duration-300 ease-in-out"
        >
          <CopyIcon />
          <Text color="light">{t('copy', { fallback: 'Copy' })}</Text>
        </button>
      </section>
    </article>
  );
};
