import type { useTranslations } from 'next-intl';
import type { ColumnDef } from '@tanstack/react-table';

import { Text } from '@/shared/ui/components/atoms/text';

import { OrderStatus } from '../ui/order-status';
import type { Order } from './types';

export const getDashboardColumns = (t: ReturnType<typeof useTranslations>): ColumnDef<Order>[] => [
  {
    accessorKey: 'orderId',
    header: () => <Text>{t('columns.orderId', { fallback: 'Order ID' })}</Text>,
    cell: (info) => <Text>#{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: 'service',
    header: () => <Text>{t('columns.service', { fallback: 'Service' })}</Text>,
    cell: (info) => <Text>{info.getValue<string[]>().join(', ')}</Text>,
  },
  {
    accessorKey: 'price',
    header: () => <Text>{t('columns.price', { fallback: 'Price' })}</Text>,
    cell: (info) => <Text>€{info.getValue<number>()}</Text>,
  },
  {
    accessorKey: 'orderDate',
    header: () => <Text>{t('columns.date', { fallback: 'Order date' })}</Text>,
    cell: (info) => {
      const date = new Date(info.getValue<string>());
      return <Text>{date.toISOString().split('T')[0]}</Text>;
    },
  },
  {
    accessorKey: 'orderStatus',
    header: () => <Text>{t('columns.orderStatus', { fallback: 'Order status' })}</Text>,
    cell: (info) => (
      <OrderStatus value={info.getValue<string>() as 'completed' | 'pending' | 'failed'} />
    ),
  },
];
