'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';

import { useTabsStore } from '../model/tabs.store';

export const Sidebar = () => {
  const { getTabs, setActiveTab, activeTab } = useTabsStore();

  const t = useTranslations('tabs');

  return (
    <section className="flex max-lg:overflow-x-auto max-lg:p-0 max-lg:flex-row max-lg:w-full max-lg:relative max-lg:top-0 flex-col gap-6 p-6 w-max sticky top-20">
      {getTabs(t).map((item) => (
        <button
          key={item.tab}
          className={cn(
            'text-left p-6 max-lg:w-max max-lg:shrink-0 w-full transition-colors duration-300 cursor-pointer hover:bg-[rgb(128_128_128_/_0.05)]',
            item.tab === activeTab && 'bg-[rgb(128_128_128_/_0.05)]'
          )}
          onClick={() => setActiveTab(item.tab)}
        >
          <Text>{item.label}</Text>
        </button>
      ))}
      <button className="text-left max-lg:w-max max-lg:shrink-0 p-6 w-full transition-colors duration-300 cursor-pointer hover:bg-[rgb(128_128_128_/_0.05)]">
        <Text color="danger">{t('logOut', { fallback: 'Log Out' })}</Text>
      </button>
    </section>
  );
};
