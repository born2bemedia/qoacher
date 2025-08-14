'use client';

import { useTranslations } from 'next-intl';

import { addToCart } from '@/features/cart/api/add-to-cart';

import { downloadFile } from '@/shared/lib/utils/download-file';
import { notifySuccess } from '@/shared/lib/utils/notify';
import { Button } from '@/shared/ui/components/atoms/button';
import { Divider } from '@/shared/ui/components/atoms/divider';
import { NoAvailable } from '@/shared/ui/components/atoms/no-available';
import { Text } from '@/shared/ui/components/atoms/text';
import { DownloadIcon } from '@/shared/ui/icons/fill/download-icon';
import { RetryIcon } from '@/shared/ui/icons/fill/retry';

import type { Order, OrderStatus as OrderStatusDef, OriginalOrder } from '../model/types';
import { OrderStatus } from './order-status';

export const FullOrderCard = ({
  value,
  originalOrders,
}: {
  value: Omit<Order, 'status' | 'date' | 'service'> & {
    orderStatus: OrderStatusDef;
    orderDate: string;
    service: string[];
    invoiceUrl: string;
  };
  originalOrders: OriginalOrder[];
}) => {
  const t = useTranslations('orderCard');

  const order = originalOrders.filter((o) => o.orderId === value.orderId);

  return (
    <article className="flex flex-col gap-4 p-6 w-full border border-[rgba(128,128,128,0.15)]">
      <div className="flex items-center justify-between">
        <Text color="gray">{t('orderId', { fallback: 'Order ID' })}</Text>
        <Text>{value.orderId}</Text>
      </div>
      <Divider />
      <div className="flex items-center gap-20 justify-between">
        <Text color="gray">{t('service', { fallback: 'Service' })}</Text>
        <Text className="text-right">{value.service.join(', ')}</Text>
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <Text color="gray">{t('price', { fallback: 'Price' })}</Text>
        <Text>€{value.price}</Text>
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <Text color="gray">{t('date', { fallback: 'Date' })}</Text>
        <Text>{new Date(value.orderDate).toISOString().split('T')[0]}</Text>
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <Text color="gray">{t('orderStatus', { fallback: 'Status' })}</Text>
        <OrderStatus value={value.orderStatus} />
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <Text color="gray">{t('invoice', { fallback: 'Invoice' })}</Text>
        {value.invoiceUrl ? (
          <Button className="px-4" variant="support" onClick={() => downloadFile(value.invoiceUrl)}>
            <DownloadIcon />
            {t('download', { fallback: 'Download' })}
          </Button>
        ) : (
          <NoAvailable offAlign />
        )}
      </div>
      <Divider />
      <div className="flex items-center justify-between">
        <Text color="gray">{t('reorder', { fallback: 'Reorder' })}</Text>
        <Button
          className="px-4"
          onClick={() => {
            order.forEach((o) => {
              addToCart({ id: o.title, ...o });
            });
            window.location.href = '/cart';
            notifySuccess('Product added to cart');
          }}
        >
          <RetryIcon />
          {t('reorder', { fallback: 'Reorder' })}
        </Button>
      </div>
    </article>
  );
};
