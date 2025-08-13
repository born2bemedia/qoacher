'use client';

import { useTabsStore } from '@/features/account/model/tabs.store';
import type { FullOrder, Order, OriginalOrder } from '@/features/account/model/types';
import { Dashboard } from '@/features/account/ui/dashboard';
import { Orders } from '@/features/account/ui/orders';
import { Sidebar } from '@/features/account/ui/sidebar';
import { UserData } from '@/features/account/ui/user-data';

import { useUser } from '@/shared/lib/hooks/use-user';

export const AccountContainer = ({
  orders,
  fullOrders,
  originalOrders,
}: {
  orders: Order[];
  fullOrders: FullOrder[];
  originalOrders: OriginalOrder[];
}) => {
  const { activeTab } = useTabsStore();

  const user = useUser();

  return (
    <main className="px-[100px] py-[64px] max-md:px-4 max-md:py-8 flex gap-6 max-lg:flex-col">
      <Sidebar />
      {activeTab === 'main' && <Dashboard data={orders} />}
      {activeTab === 'orders' && <Orders data={fullOrders} originalOrders={originalOrders} />}
      {activeTab === 'yourData' && <UserData user={user} />}
    </main>
  );
};
