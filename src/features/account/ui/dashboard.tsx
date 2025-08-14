'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Divider } from '@/shared/ui/components/atoms/divider';
import { Table } from '@/shared/ui/components/atoms/table';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { CheckList } from '@/shared/ui/icons/fill/check-list';
import { RepairGear } from '@/shared/ui/icons/fill/repair-gear';
import { TwoBox } from '@/shared/ui/icons/fill/two-box';

import { getDashboardColumns } from '../model/get-dashboard-columns';
import { useTabsStore } from '../model/tabs.store';
import type { Order, OrderStatus } from '../model/types';
import { OrderCard } from './order-card';

const getButtons = ({
  t,
  onAllOrdersClick,
}: {
  t: ReturnType<typeof useTranslations>;
  onAllOrdersClick: () => void;
}) => [
  { label: t('allOrders', { fallback: 'All Orders' }), onClick: onAllOrdersClick },
  { label: t('services', { fallback: 'Services' }), icon: RepairGear, url: '/services' },
  { label: t('packages', { fallback: 'Packages' }), icon: TwoBox, url: '/packages' },
  { label: t('programs', { fallback: 'Programs' }), icon: CheckList, url: '/programs' },
];

export const Dashboard = ({ data }: { data: Order[] }) => {
  const t = useTranslations('dashboard');

  const { setActiveTab } = useTabsStore();

  const columns = getDashboardColumns(t);

  return (
    <section className="flex w-full flex-col gap-10 p-6 border border-[rgba(128,128,128,0.15)]">
      <div className="flex flex-col gap-3">
        <Title as="h2" size="2xl" uppercase>
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
        <Title as="h3" size="xl" uppercase>
          {t('yourRecentOrders', { fallback: 'Your recent orders' })}
        </Title>
        <div className="max-lg:hidden">
          <Table data={data} columns={columns} />
        </div>
        <div className="hidden max-lg:flex flex-col gap-6">
          {data.map((order) => (
            <OrderCard
              key={order.orderId}
              value={
                order as unknown as Omit<Order, 'status' | 'date'> & {
                  orderStatus: OrderStatus;
                  orderDate: string;
                  service: string[];
                }
              }
            />
          ))}
        </div>
        <footer className="flex items-center gap-6 max-lg:flex-col">
          {getButtons({ t, onAllOrdersClick: () => setActiveTab('orders') }).map(
            ({ label, icon: Icon, onClick, url }) =>
              url ? (
                <Link key={label} href={url} className="w-full">
                  <Button variant="support" fullWidth>
                    <Icon />
                    {label}
                  </Button>
                </Link>
              ) : (
                <Button key={label} onClick={onClick} fullWidth>
                  {label}
                </Button>
              )
          )}
        </footer>
      </div>
    </section>
  );
};
