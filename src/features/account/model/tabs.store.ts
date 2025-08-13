import type { useTranslations } from 'next-intl';
import { create } from 'zustand';

export type Tab = 'main' | 'orders' | 'yourData' | 'documents';

export const useTabsStore = create<{
  getTabs: (t: ReturnType<typeof useTranslations>) => {
    label: string;
    tab: Tab;
  }[];
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}>((set) => ({
  getTabs: (t: ReturnType<typeof useTranslations>) => [
    {
      label: t('main', { fallback: 'Main' }),
      tab: 'main',
    },
    {
      label: t('orders', { fallback: 'Orders' }),
      tab: 'orders',
    },
    {
      label: t('yourData', { fallback: 'Your Date' }),
      tab: 'yourData',
    },
    {
      label: t('documents', { fallback: 'Documents' }),
      tab: 'documents',
    },
  ],
  activeTab: 'main',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
