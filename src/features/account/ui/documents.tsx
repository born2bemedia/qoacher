'use client';

import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Table } from '@/shared/ui/components/atoms/table';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

import { getDocumentColumns } from '../model/get-document-columns';
import type { Document } from '../model/types';
import { DocumentCard } from './document-card';
import { OtherServices } from './other-services';

export const Documents = ({ documents }: { documents: Document[] }) => {
  const t = useTranslations('documents');

  const columns = getDocumentColumns(t);

  return (
    <section className="flex flex-col gap-6 w-full">
      <section className="flex w-full flex-col gap-10 p-6 border border-[rgba(128,128,128,0.15)]">
        <div className="flex flex-col gap-3">
          <Title as="h2" size="2xl" uppercase>
            {t('title')}
          </Title>
          <span className="opacity-50">
            <Text>{t('description')}</Text>
          </span>
        </div>
        <Divider />
        <section className="flex flex-col gap-6">
          <Title as="h3" size="xl" uppercase>
            {t('yourRecentOrders')}
          </Title>
          <div className="max-lg:hidden">
            <Table columns={columns} data={documents} />
          </div>
          <div className="lg:hidden flex flex-col gap-6">
            {documents.map((document) => (
              <DocumentCard key={document.orderId} value={document} />
            ))}
          </div>
        </section>
      </section>
      <OtherServices />
    </section>
  );
};
