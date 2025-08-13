'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/components/atoms/text';

export const PolicyTable = ({
  data,
}: {
  data: {
    type: string;
    purpose: string;
  }[];
}) => {
  const t = useTranslations('policies');

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-[rgb(128_128_128_/_0.15)]">
        <thead>
          <tr className="">
            <th className="px-4 py-2 text-left font-bold border-b border-r border-[rgb(128_128_128_/_0.15)]">
              <Text weight={600}>{t('type')}</Text>
            </th>
            <th className="px-4 py-2 text-left font-bold border-b border-[rgb(128_128_128_/_0.15)]">
              <Text weight={600}>{t('purpose')}</Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b border-t border-[rgb(128_128_128_/_0.15)]">
              <td className="px-4 py-2 border-r border-[rgb(128_128_128_/_0.15)]">
                <Text weight={500}>{item.type}</Text>
              </td>
              <td className="px-4 py-2">
                <Text>{item.purpose}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
