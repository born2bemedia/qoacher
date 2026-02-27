import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicySection } from '@/features/policies/ui/polict-section';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';

import { List } from '@/shared/ui/components/atoms/list';
import { Text } from '@/shared/ui/components/atoms/text';

import { Link as NavLink } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Refund Policy | Qoacher',
  openGraph: {
    title: 'Refund Policy | Qoacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | Qoacher',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RefundPolicy() {
  const t = await getTranslations('refundPolicy');

  return (
    <PolicyLayout title={t('title')}>
      <PolicySection>
        <Text>
          {t('0.text.0')} <span className="font-bold">{t('0.text.1')}</span>
        </Text>
        <Text>
          {t('0.text.2')} <span className="font-bold">{t('0.text.3')}</span>
        </Text>
      </PolicySection>
      <PolicySection heading={t('1.title')}>
        <Text>
          {t('1.text.0')} <span className="font-bold">{t('1.text.1')}</span>
          {t('1.text.2')}
        </Text>
        <List
          values={[t('1.list.0'), t('1.list.1'), t('1.list.2'), t('1.list.3'), t('1.list.4')]}
        />
        <Text>{t('1.text.3')}</Text>
      </PolicySection>
      <PolicySection heading={t('2.title')}>
        <Text>
          {t('2.text.0')} <span className="font-bold">{t('2.text.1')}</span>
          {t('2.text.2')} <span className="font-bold">{t('2.text.3')}</span>
          {t('2.text.4')}
        </Text>
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
        <Text>
          {t('2.text.5')} <span className="font-bold">{t('2.text.6')}</span> {t('2.text.7')}
        </Text>
        <List values={[t('2.list.8'), t('2.list.9'), t('2.list.10')]} />
        <Text>
          {t('2.text.8')} <span className="font-bold">{t('2.text.9')}</span> {t('2.text.10')}
        </Text>
      </PolicySection>
      <PolicySection heading={t('3.title')}>
        <Text>
          {t('3.text.0.0')}{' '}
          <NavLink href="/privacy-policy" className="font-bold underline">
            {t('3.text.0.1')}
          </NavLink>{' '}
          {t('3.text.0.2')}
        </Text>
        <List
          values={[
            'Optivida Ltd',
            '2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE',
            'info@qoacher.com',
            '+447460102445',
          ]}
        />
        <Text>
          {t('3.text.1')}
          <br />{' '}
          <Link href="https://qoacher.com/" className="font-bold underline">
            https://qoacher.com/
          </Link>
        </Text>
        <Text>{t('3.text.2')}</Text>
      </PolicySection>
    </PolicyLayout>
  );
}
