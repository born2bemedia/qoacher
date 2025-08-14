'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';

import { Text } from './text';

export const NoAvailable = ({ offAlign }: { offAlign?: boolean }) => {
  const t = useTranslations('noAvailable');

  return (
    <div
      className={cn(
        'py-4 w-max px-1.5 bg-black/5 flex flex-col items-center justify-center gap-1',
        !offAlign && 'mx-auto'
      )}
    >
      <Text color="gray" weight={500} uppercase>
        {t('not')}
      </Text>
      <Text color="gray" weight={500} uppercase>
        {t('available')}
      </Text>
    </div>
  );
};
