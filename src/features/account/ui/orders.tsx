'use client';

import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Table } from '@/shared/ui/components/atoms/table';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

import { getOrdersColumns } from '../model/get-orders-columns';
import type { FullOrder, Order, OrderStatus, OriginalOrder } from '../model/types';
import { FullOrderCard } from './full-order-card';
import { OtherServices } from './other-services';

export const Orders = ({
  data,
  originalOrders,
}: {
  data: FullOrder[];
  originalOrders: OriginalOrder[];
}) => {
  const t = useTranslations('orders');

  const columns = getOrdersColumns(t, originalOrders);

  return (
    <section className="flex flex-col gap-6">
      <section className="flex w-full flex-col gap-10 p-6 border border-[rgba(128,128,128,0.15)]">
        <div className="flex flex-col gap-3">
          <Title as="h2" size="2xl">
            {t('yourAccount', { fallback: 'Your Account' })}
          </Title>
          <span className="opacity-50">
            <Text>
              {t('description', {
                fallback:
                  'Programs. Packages. Progress. Everything in one place to move you forward.',
              })}
            </Text>
          </span>
        </div>
        <Divider />
        <div className="flex flex-col gap-6">
          <Title as="h3" size="xl">
            {t('yourRecentOrders', { fallback: 'Your recent orders' })}
          </Title>
          <div className="max-[1340px]:hidden">
            <Table data={data} columns={columns} />
          </div>
          <div className="hidden max-[1340px]:flex flex-col gap-6">
            {data.map((order) => (
              <FullOrderCard
                key={order.orderId}
                value={
                  order as unknown as Omit<Order, 'status' | 'date' | 'service'> & {
                    orderStatus: OrderStatus;
                    orderDate: string;
                    service: string[];
                    invoiceUrl: string;
                  }
                }
                originalOrders={originalOrders}
              />
            ))}
          </div>
        </div>
      </section>
      <OtherServices />
    </section>
  );
};
