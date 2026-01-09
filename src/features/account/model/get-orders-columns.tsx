import { type useTranslations } from 'next-intl';
import type { ColumnDef } from '@tanstack/react-table';

import { addToCart } from '@/features/cart/api/add-to-cart';

import { downloadFile } from '@/shared/lib/utils/download-file';
import { notifySuccess } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { NoAvailable } from '@/shared/ui/components/atoms/no-available';
import { Text } from '@/shared/ui/components/atoms/text';
import { DownloadIcon } from '@/shared/ui/icons/fill/download-icon';
import { RetryIcon } from '@/shared/ui/icons/fill/retry';

import { OrderStatus } from '../ui/order-status';
import type { FullOrder, OriginalOrder } from './types';

export const getOrdersColumns = (
  t: ReturnType<typeof useTranslations>,
  originalOrders: OriginalOrder[],
  setActiveCart: () => void
): ColumnDef<FullOrder>[] => [
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
  {
    accessorKey: 'invoiceUrl',
    header: () => <Text>{t('columns.download', { fallback: 'Download' })}</Text>,
    cell: (info) => {
      const url = info.getValue<string>();

      return url ? (
        <Button
          variant="support"
          className="px-1.5 mx-auto gap-2"
          onClick={() => downloadFile(url)}
        >
          <DownloadIcon />
          {t('columns.download', { fallback: 'Download' })}
        </Button>
      ) : (
        <NoAvailable />
      );
    },
  },
  {
    accessorKey: 'ordering',
    header: () => <Text>{t('columns.ordering', { fallback: 'Ordering' })}</Text>,
    cell: (info) => {
      const orderId = info.row.original.orderId;

      const order = originalOrders.filter((o) => o.orderId === orderId);

      return (
        <Button
          className="px-2 mx-auto"
          onClick={() => {
            order.forEach((o) => {
              addToCart({ id: o.title, ...o });
            });
            setActiveCart();
            window.location.href = '/cart';
            notifySuccess('Product added to cart');
          }}
        >
          <RetryIcon />
          {t('columns.reorder', { fallback: 'Reorder' })}
        </Button>
      );
    },
  },
];
