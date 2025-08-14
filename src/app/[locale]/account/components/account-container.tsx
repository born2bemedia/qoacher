'use client';

import { useTabsStore } from '@/features/account/model/tabs.store';
import type { Document, FullOrder, Order, OriginalOrder } from '@/features/account/model/types';
import { Dashboard } from '@/features/account/ui/dashboard';
import { Documents } from '@/features/account/ui/documents';
import { Orders } from '@/features/account/ui/orders';
import { Sidebar } from '@/features/account/ui/sidebar';
import { UserData } from '@/features/account/ui/user-data';

import { useUser } from '@/core/user/model/user.store';

export const AccountContainer = ({
  orders,
  fullOrders,
  originalOrders,
  documents,
}: {
  orders: Order[];
  fullOrders: FullOrder[];
  originalOrders: OriginalOrder[];
  documents: Document[];
}) => {
  const { activeTab } = useTabsStore();

  const { user } = useUser();

  if (!user) {
    return null;
  } else {
    return (
      <main className="px-[100px] py-[64px] max-md:px-4 max-md:py-8 flex gap-6 max-lg:flex-col">
        <Sidebar />
        {activeTab === 'main' && <Dashboard data={orders} />}
        {activeTab === 'orders' && <Orders data={fullOrders} originalOrders={originalOrders} />}
        {activeTab === 'yourData' && <UserData user={user} />}
        {activeTab === 'documents' && <Documents documents={documents} />}
      </main>
    );
  }
};
