import type { Metadata } from 'next';

import { getUserOrders } from '@/features/account/api/get-orders';

import { AccountContainer } from './components';

export const metadata: Metadata = {
  title: 'My Account | Qoacher',
  openGraph: {
    title: 'My Account | Qoacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Account | Qoacher',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AccountPage() {
  const { dashboardOrders, fullOrders, originalOrders } = await getUserOrders();

  return (
    <AccountContainer
      orders={dashboardOrders.slice(0, 2)}
      fullOrders={fullOrders}
      originalOrders={originalOrders}
    />
  );
}
