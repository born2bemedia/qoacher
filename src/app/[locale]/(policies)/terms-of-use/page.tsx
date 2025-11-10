import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicySection } from '@/features/policies/ui/polict-section';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';

import { List } from '@/shared/ui/components/atoms/list';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const metadata: Metadata = {
  title: 'Terms of Use | Qoacher',
  openGraph: {
    title: 'Terms of Use | Qoacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Qoacher',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function TermsOfUse() {
  const t = await getTranslations('policies.termsOfUse');

  return (
    <PolicyLayout title={t('title')}>
      <PolicySection>
        <Text>
          {t('0.text.0', {
            fallback:
              'Welcome to Qoacher. These Terms of Use ("Terms") govern your access to and use of our website, email-based coaching programs, digital content, and any related services provided through or in connection with Qoacher (collectively, the "Site"). Qoacher is a brand operated by',
          })}{' '}
          <span className="font-bold">Optivida Ltd</span>.
          {/* {t('0.text.1', { fallback: 'a company registered under number' })}{' '}
          <span className="font-bold">[Registration Number]</span>,{' '}
          {t('0.text.2', { fallback: 'with its registered address at' })}{' '}
          <span className="font-bold">[Registered Address]</span>. */}
        </Text>
      </PolicySection>
      <PolicySection heading={t('1.title')}>
        <Text>
          {t('1.text.0', {
            fallback:
              'By accessing or using the Site, you confirm that you have read, understood, and agree to be legally bound by these Terms, along with our',
          })}{' '}
          <Link href="/privacy-policy" className="font-bold underline">
            {t('1.text.1', { fallback: 'Privacy Policy' })}
          </Link>{' '}
          {t('1.text.2', {
            fallback:
              'and any other terms or guidelines we may reference. If you do not accept these terms, you may not use our services. These Terms apply to all visitors and users, regardless of whether you make a purchase or access free content.',
          })}
        </Text>
      </PolicySection>
      <PolicySection heading={t('2.title')}>
        <Text>
          {t('2.text.0', { fallback: 'We encourage you to review our' })}{' '}
          <Link href="/privacy-policy" className="font-bold underline">
            {t('2.text.1', { fallback: 'Privacy Policy' })}
          </Link>{' '}
          {t('2.text.2', {
            fallback:
              "before using the Site. It explains how we collect, use, and store your personal information. If there's any inconsistency between these Terms and the Privacy Policy, the Privacy Policy will apply.",
          })}
        </Text>
      </PolicySection>
      <PolicySection heading={t('3.title')}>
        <Text>
          {t('3.text.0', {
            fallback:
              'Our content and services are designed for individuals aged 18 and older. While some topics may be relevant to younger audiences, Qoacher does not market or deliver services to users under 18.',
          })}
        </Text>
        <Text>
          {t('3.text.1', {
            fallback:
              'If you are under 18, you may only use the Site under the supervision of a parent or guardian. We do not knowingly collect personal information from children under 13. If you believe a minor has submitted information to us, please contact us at',
          })}{' '}
          <Link href="mailto:info@qoacher.com" className="font-bold underline">
            info@qoacher.com
          </Link>{' '}
          {t('3.text.2', { fallback: 'so we can address the issue.' })}
        </Text>
        <Title as="h3" size="lg">
          {t('3.text.3', { fallback: 'Ownership and Use of Content' })}
        </Title>
        <Text>
          {t('3.text.4', {
            fallback:
              'All content made available through the Site, including but not limited to text, graphics, branding elements, downloadable materials, and course content (collectively, "Content"), is the property of',
          })}{' '}
          <span className="font-bold">Optivida Ltd</span>{' '}
          {t('3.text.5', {
            fallback:
              'or its partners and is protected under applicable copyright, trademark, and intellectual property laws.',
          })}
        </Text>
        <Text>
          {t('3.text.6', {
            fallback:
              'Using our Site does not grant you ownership or license rights in any Content unless explicitly stated. You may view or download parts of the Site for your personal and non-commercial use only, provided that:',
          })}
        </Text>
        <List values={[t('3.list.0'), t('3.list.1'), t('3.list.2')]} />
        <Text>
          {t('3.text.7', {
            fallback:
              'Any use beyond the above requires our prior written consent. We reserve all rights not explicitly granted in these Terms. ',
          })}
        </Text>
      </PolicySection>
      <PolicySection heading={t('4.title')}>
        <Text>
          {t('4.text.0', {
            fallback:
              'The name Qoacher, our logo, service names, visual elements, and all branding found across our website and communications are the exclusive property of',
          })}{' '}
          <span className="font-bold">Optivida Ltd</span>{' '}
          {t('4.text.1', {
            fallback:
              'whether registered or unregistered (“Qoacher Marks”). Any use, reproduction, or display of these marks without our prior written approval is strictly prohibited.',
          })}
        </Text>
        <Text>
          {t('4.text.2', {
            fallback:
              'References to third-party trademarks, service marks, logos, or brand names on the Site belong to their respective owners. You may not use, imitate, or reference them without express written consent from the rightful owner. Unauthorized use of the Qoacher Marks or any third-party brand assets displayed on the Site is a violation of intellectual property rights and is not allowed under any circumstances.',
          })}
        </Text>
        <Title as="h3" size="lg">
          {t('4.text.3', { fallback: 'Feedback and Suggestions' })}
        </Title>
        <Text>
          {t('4.text.4', {
            fallback:
              'Any feedback, ideas, suggestions, or content you submit to us about Qoacher—whether through the website, email, or any other channel—becomes the sole and unrestricted property of',
          })}{' '}
          <span className="font-bold">Optivida Ltd</span>.
        </Text>
        <Text>
          {t('4.text.5', {
            fallback:
              'By submitting feedback, you grant us full rights to use, modify, publish, or incorporate it into our services or communications without limitation and compensation or credit. Please only share suggestions with us if you’re comfortable with this.',
          })}
        </Text>
      </PolicySection>
      <PolicySection heading={t('5.title')}>
        <Text>
          {t('5.text.0', {
            fallback:
              'By using Qoacher, you agree to provide accurate, up-to-date information whenever requested, including during registration or payment. You are responsible for keeping your contact details current and ensuring that any image or information you provide (such as a profile picture) is lawfully used and does not infringe upon third-party rights.',
          })}
        </Text>
        <Text>
          {t('5.text.1', {
            fallback:
              'If you create an account, you are solely responsible for keeping your login credentials confidential and secure. All activity under your account—whether authorized or not—remains your responsibility. If you suspect any unauthorized use, you should update your password immediately.',
          })}
        </Text>
        <Text>
          {t('5.text.2', {
            fallback:
              'You agree to use the Site lawfully and respectfully. You may not introduce harmful code (such as viruses, worms, or trojans), interfere with the platform’s normal operations, or engage in scraping, tampering, or unauthorized access to protected content.',
          })}
        </Text>
        <Text>
          {t('5.text.3', {
            fallback:
              'Violation of these Terms may result in restricted access, account termination, or legal action.',
          })}
        </Text>
      </PolicySection>
      <PolicySection heading={t('6.title')}>
        <Text>
          {t('6.text.0', {
            fallback:
              'All articles, programs, and guidance provided on the Qoacher website — including content from our coaches — are intended solely for informational and educational purposes. While we offer structured coaching programs, practical suggestions, and professional perspectives on topics such as career change, personal growth, and communication,',
          })}{' '}
          <span className="font-bold">
            {t('6.text.1', {
              fallback:
                'none of this content should be interpreted as a directive, obligation, or guaranteed outcome.',
            })}
          </span>
        </Text>
        <Text>
          {t('6.text.2', {
            fallback:
              'Qoacher does not offer legal, medical, psychological, tax, or financial advice. Any decision to change your career, life direction, habits, or relationships — including when, how, or whether to change at all — remains entirely your responsibility.',
          })}
        </Text>
        <Text>
          {t('6.text.3', {
            fallback:
              'You are encouraged to use your judgment and, where appropriate, consult licensed professionals before acting on any suggestions received through our site or during coaching sessions.',
          })}
        </Text>
        <Text>
          {t('6.text.4', {
            fallback: 'By using our services, you acknowledge and agree that:',
          })}
        </Text>
        <List values={[t('6.list.0'), t('6.list.1'), t('6.list.2'), t('6.list.3')]} />
        <Text>
          {t('6.text.5', {
            fallback:
              'Coaching at Qoacher is designed to support you — not to decide for you. The change is yours to define, and yours alone to make.',
          })}
        </Text>
      </PolicySection>
      <PolicySection heading={t('7.title')}>
        <Text>
          {t('7.text.0', {
            fallback:
              'The Qoacher website may contain links to external websites for informational or reference purposes only. These links are provided as a convenience to users and do not imply any affiliation, endorsement, or partnership with the operators of those sites.',
          })}
        </Text>
        <Text>{t('7.text.1')}</Text>
        <Text>{t('7.text.2')}</Text>
        <Text>{t('7.text.3')}</Text>
      </PolicySection>
      <PolicySection heading={t('8.title')}>
        <Text>
          {t('8.text.0', {
            fallback:
              'All fees for services offered by Qoacher must be paid in full in advance. Payments are non-refundable under any circumstances.',
          })}
        </Text>
        <Text>
          {t('8.text.1')} <span className="font-bold">{t('8.text.2')}</span> {t('8.text.3')}{' '}
          <span className="font-bold">{t('8.text.4')}</span> {t('8.text.5')}
        </Text>
        <Text>{t('8.text.6')}</Text>
        <Text>{t('8.text.7')}</Text>
      </PolicySection>
      <PolicySection heading={t('9.title')}>
        <Text>
          {t('9.text.0')} <span className="font-bold">{t('9.text.1')}</span> {t('9.text.2')}{' '}
          <span className="font-bold">{t('9.text.3')}</span> {t('9.text.4')}
        </Text>
        <Text>
          {t('9.text.5')} <span className="font-bold">{t('9.text.6')}</span> {t('9.text.7')}
        </Text>
        <Text>{t('9.text.8')}</Text>
        <Text>{t('9.text.9')}</Text>
      </PolicySection>
      <PolicySection heading={t('10.title')}>
        <Text>
          {t('10.text.0')} <span className="font-bold">{t('10.text.1')}</span> {t('10.text.2')}{' '}
        </Text>
        <Text>{t('10.text.3')}</Text>
        <Text>
          {t('10.text.4')} <span className="font-bold">{t('10.text.5')}</span> {t('10.text.6')}
        </Text>
      </PolicySection>
      <PolicySection heading={t('11.title')}>
        <Text>{t('11.text.0')}</Text>
        <Text>{t('11.text.1')}</Text>
      </PolicySection>
      <PolicySection heading={t('12.title')}>
        <Text>{t('12.text.0')}</Text>
      </PolicySection>
      <PolicySection heading={t('13.title')}>
        <Text>{t('13.text.0')}</Text>
      </PolicySection>
      <PolicySection heading={t('14.title')}>
        <Text>
          {t('14.text.0')} <span className="font-bold">{t('14.text.1')}</span> {t('14.text.2')}{' '}
          <span className="font-bold">{t('14.text.3')}</span> {t('14.text.4')}
        </Text>
      </PolicySection>
      <PolicySection heading={t('15.title')}>
        <Text>{t('15.text.0')}</Text>
      </PolicySection>
      <PolicySection heading={t('16.title')}>
        <Text>{t('16.text.0')}</Text>
      </PolicySection>
      <PolicySection heading={t('17.title')}>
        <Text>{t('17.text.0')}</Text>
      </PolicySection>
      <PolicySection heading={t('18.title')}>
        <Text>{t('18.text.0')}</Text>
        <List
          values={[
            'Optivida Ltd',
            '2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4 7AE',
            'info@qoacher.com',
            '+447460102445',
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}
