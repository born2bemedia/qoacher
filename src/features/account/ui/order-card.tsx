'use client';

import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';

import type { Order, OrderStatus as OrderStatusDef } from '../model/types';
import { OrderStatus } from './order-status';

export const OrderCard = ({
  value,
}: {
  value: Omit<Order, 'status' | 'date' | 'service'> & {
    orderStatus: OrderStatusDef;
    orderDate: string;
    service: string[];
  };
}) => {
  const t = useTranslations('orderCard');

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
    </article>
  );
};
