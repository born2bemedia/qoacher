import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PolicySection } from '@/features/policies/ui/polict-section';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicyTable } from '@/features/policies/ui/policy-table';

import { List } from '@/shared/ui/components/atoms/list';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const metadata: Metadata = {
  title: 'Cookie Policy | Qoacher',
  openGraph: {
    title: 'Cookie Policy | Qoacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Qoacher',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CookiePolicy() {
  const t = await getTranslations('cookiePolicy');

  return (
    <PolicyLayout title={t('title')} updateType="lastUpdate">
      <PolicySection>
        <Title as="h2" size="lg">
          {t('0.text.0')}
        </Title>
        <Text>
          {t('0.text.1')} <br /> {t('0.text.2')}
        </Text>
      </PolicySection>
      <PolicySection heading={t('1.title')}>
        <Text>{t('1.text.0')}</Text>
        <Text>{t('1.text.1')}</Text>
      </PolicySection>
      <PolicySection heading={t('2.title')}>
        <Text>{t('2.text.0')}</Text>
        <List
          values={[
            <span key={0}>
              <span className="font-bold">{t('2.list.0')}</span> {t('2.list.1')}
            </span>,
            <span key={1}>
              <span className="font-bold">{t('2.list.2')}</span> {t('2.list.3')}
            </span>,
            <span key={2}>
              <span className="font-bold">{t('2.list.4')}</span> {t('2.list.5')}
            </span>,
            <span key={3}>
              <span className="font-bold">{t('2.list.6')}</span> {t('2.list.7')}
            </span>,
          ]}
        />
        <Text>{t('2.text.1')}</Text>
      </PolicySection>
      <PolicySection heading={t('6.title')}>
        <Text>{t('6.text.0')}</Text>
        <PolicyTable
          data={[
            {
              type: t('6.table.0.type'),
              purpose: t('6.table.0.purpose'),
            },
            {
              type: t('6.table.1.type'),
              purpose: t('6.table.1.purpose'),
            },
            {
              type: t('6.table.2.type'),
              purpose: t('6.table.2.purpose'),
            },
            {
              type: t('6.table.3.type'),
              purpose: t('6.table.3.purpose'),
            },
          ]}
        />
      </PolicySection>
      <PolicySection heading={t('3.title')}>
        <Text>{t('3.text')}</Text>
      </PolicySection>
      <PolicySection heading={t('4.title')}>
        <Text>{t('4.text')}</Text>
      </PolicySection>
      <PolicySection heading={t('5.title')}>
        <Text>{t('5.text.0')}</Text>
        <Text>{t('5.text.1')}</Text>
        <List
          values={[
            'Optivida Ltd',
            // '[Insert Business Address]',
            'info@qoacher.com',
            '+447447846750',
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}
