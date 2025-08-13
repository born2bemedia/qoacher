import { getTranslations } from 'next-intl/server';

import { PolicySection } from '@/features/policies/ui/polict-section';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';

import { List } from '@/shared/ui/components/atoms/list';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export default async function PrivacyPolicy() {
  const t = await getTranslations('privacyPolicy');

  return (
    <PolicyLayout title={t('title')} updateType="effective">
      <PolicySection>
        <Text>
          {t('0.text.0')} <span className="font-bold">[Company Name]</span>, {t('0.text.1')}{' '}
          <span className="font-bold">[Registration Number]</span>, {t('0.text.2')}{' '}
          <span className="font-bold">[Registered Address]</span> {t('0.text.3')}
        </Text>
        <Text>{t('0.text.4')}</Text>
        <Text>{t('0.text.5')}</Text>
        <List
          values={[t('0.list.0'), t('0.list.1'), t('0.list.2'), t('0.list.3'), t('0.list.4')]}
        />
        <Text>{t('0.text.6')}</Text>
        <Title as="h2" size="2xl">
          {t('0.text.7')}
        </Title>
        <Text>{t('0.text.8')}</Text>
        <Title as="h3" size="xl">
          {t('0.text.9')}
        </Title>
        <Text>{t('0.text.10')}</Text>
        <List
          values={[
            t('0.list.5'),
            t('0.list.6'),
            t('0.list.7'),
            t('0.list.8'),
            t('0.list.9'),
            t('0.list.10'),
            t('0.list.11'),
          ]}
        />
        <Text>{t('0.text.11')}</Text>
        <Title as="h2" size="2xl">
          {t('0.text.12')}
        </Title>
        <Text>{t('0.text.13')}</Text>
        <Text>{t('0.text.14')}</Text>
        <List values={[t('0.list.12'), t('0.list.13'), t('0.list.14'), t('0.list.15')]} />
        <Text>{t('0.text.15')}</Text>
        <Title as="h2" size="2xl">
          {t('0.text.16')}
        </Title>
        <Text>{t('0.text.17')}</Text>
        <List
          values={[
            t('0.list.16'),
            t('0.list.17'),
            t('0.list.18'),
            t('0.list.19'),
            t('0.list.20'),
            t('0.list.21'),
            t('0.list.22'),
          ]}
        />
        <Text>
          {t('0.text.18')} <span className="font-bold">{t('0.text.19')}</span> {t('0.text.20')}
        </Text>
        <Text>{t('0.text.21')}</Text>
      </PolicySection>
      <PolicySection heading={t('1.title')}>
        <Text>
          {t('1.text.0')} <span className="font-bold">{t('1.text.1')}</span> {t('1.text.2')}
        </Text>
        <Text>
          {t('1.text.3')} <span className="font-bold">{t('1.text.4')}</span> {t('1.text.5')}
        </Text>
        <List values={[t('1.list.0'), t('1.list.1'), t('1.list.2')]} />
        <Text>{t('1.text.6')}</Text>
        <List values={[t('1.list.3'), t('1.list.4'), t('1.list.5')]} />
        <Text>{t('1.text.7')}</Text>
        <Text>{t('1.text.8')}</Text>
        <List values={[t('1.list.6'), t('1.list.7'), t('1.list.8')]} />
        <Text>{t('1.text.9')}</Text>
      </PolicySection>
      <PolicySection heading={t('2.title')}>
        <Text>{t('2.text')}</Text>
      </PolicySection>
      <PolicySection heading={t('3.title')}>
        <Text>{t('3.text.0')}</Text>
        <Text>{t('3.text.1')}</Text>
        <List
          values={[
            <span key={0}>
              <span className="font-bold">{t('3.list.0')}</span> {t('3.list.1')}
            </span>,
            <span key={1}>
              <span className="font-bold">{t('3.list.2')}</span> {t('3.list.3')}
            </span>,
          ]}
        />
        <Text>{t('3.text.2')}</Text>
        <Text>{t('3.text.3')}</Text>
        <List values={[t('3.list.5'), t('3.list.6'), t('3.list.7')]} />
        <Text>{t('3.text.4')}</Text>
        <Text>{t('3.text.5')}</Text>
      </PolicySection>
      <PolicySection heading={t('4.title')}>
        <Text>{t('4.text.0')}</Text>
        <Text>{t('4.text.1')}</Text>
      </PolicySection>
      <PolicySection heading={t('5.title')}>
        <Text>{t('5.text.0')}</Text>
        <Text>{t('5.text.1')}</Text>
      </PolicySection>
      <PolicySection heading={t('6.title')}>
        <Text>{t('6.text.0')}</Text>
        <Text>{t('6.text.1')}</Text>
        <Text>{t('6.text.2')}</Text>
      </PolicySection>
      {/* <PolicySection heading={t('7.title')}>
        <Text>{t('7.text.0')}</Text>
        <List
          values={[
            '[Insert Registered Company Name]',
            '[Insert Registered Company Address]',
            'Email: [Insert Contact Email]',
            'Phone: [Insert Phone Number]',
          ]}
        />
        <Text>
          {t('7.text.1')} <br />{' '}
          <Link href="https://qoacher.com/" className="font-bold underline">
            https://qoacher.com/
          </Link>
        </Text>
        <Text>{t('7.text.2')}</Text>
      </PolicySection> */}
    </PolicyLayout>
  );
}
