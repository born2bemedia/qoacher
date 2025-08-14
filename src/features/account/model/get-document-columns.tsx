import type { useTranslations } from 'next-intl';
import type { ColumnDef } from '@tanstack/react-table';

import { Text } from '@/shared/ui/components/atoms/text';

import { DocumentLinks } from '../ui/document-links';
import type { Document } from './types';

export const getDocumentColumns = (
  t: ReturnType<typeof useTranslations>
): ColumnDef<Document>[] => [
  {
    accessorKey: 'service',
    header: () => <Text>{t('columns.service', { fallback: 'Service' })}</Text>,
    cell: (info) => <Text>{info.getValue<string[]>().join(', ')}</Text>,
  },
  {
    accessorKey: 'date',
    header: () => <Text>{t('columns.date', { fallback: 'Order date' })}</Text>,
    cell: (info) => {
      const date = new Date(info.getValue<string>());
      return <Text>{date.toISOString().split('T')[0]}</Text>;
    },
  },
  {
    accessorKey: 'notes',
    header: () => <Text>{t('columns.notes', { fallback: 'Notes' })}</Text>,
    cell: (info) => <Text>{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'docs',
    header: () => <Text>{t('columns.notes', { fallback: 'Notes' })}</Text>,
    cell: (info) => <DocumentLinks values={info.getValue<Document['docs']>()} />,
  },
];
