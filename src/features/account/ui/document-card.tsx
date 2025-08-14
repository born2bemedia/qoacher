'use client';

'use client';

import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';

import type { Document } from '../model/types';
import { DocumentLinks } from './document-links';

export const DocumentCard = ({ value }: { value: Document }) => {
  const t = useTranslations('documentCard');

  return (
    <article className="flex flex-col gap-4 p-6 w-full border border-[rgba(128,128,128,0.15)]">
      <div className="flex flex-col gap-2.5">
        <Text color="gray">{t('service', { fallback: 'Service' })}</Text>
        <Text>{value.service.join(', ')}</Text>
      </div>
      <Divider />
      <div className="flex flex-col gap-2.5">
        <Text color="gray">{t('date', { fallback: 'Date' })}</Text>
        <Text>{new Date(value.date).toISOString().split('T')[0]}</Text>
      </div>
      <Divider />
      <div className="flex flex-col gap-2.5">
        <Text color="gray">{t('notes', { fallback: 'Notes' })}</Text>
        <Text>{value.notes}</Text>
      </div>
      <Divider />
      <div className="flex flex-col gap-2.5">
        <Text color="gray">{t('documents', { fallback: 'Documents' })}</Text>
        <DocumentLinks values={value.docs} />
      </div>
    </article>
  );
};
