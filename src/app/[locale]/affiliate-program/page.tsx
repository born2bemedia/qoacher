import type { Metadata } from 'next';

import {
  AffiliateProgramCriteria,
  AffiliateProgramHero,
  AffiliateProgramWantJoin,
  AffiliateProgramWhoCanJoin,
  AffiliateProgramWhyJoin,
} from './components';
import { AreYouCoach } from '@/app/[locale]/(home)/components';

export const metadata: Metadata = {
  title: 'Affiliate Program | Qoacher',
  description:
    'Join the Qoacher Affiliate Program and grow your audience monetisation through coaching referrals, educational content, and long-term partnership opportunities.',
  openGraph: {
    title: 'Affiliate Program | Qoacher',
    description:
      'Join the Qoacher Affiliate Program and grow your audience monetisation through coaching referrals, educational content, and long-term partnership opportunities.',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Program | Qoacher',
    description:
      'Join the Qoacher Affiliate Program and grow your audience monetisation through coaching referrals, educational content, and long-term partnership opportunities.',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default function AffiliateProgramPage() {
  return (
    <main>
      <AffiliateProgramHero />
      <AffiliateProgramWhoCanJoin />
      <AffiliateProgramCriteria />
      <AffiliateProgramWhyJoin />
      <AffiliateProgramWantJoin />
      <AreYouCoach />
    </main>
  );
}
