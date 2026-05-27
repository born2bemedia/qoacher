import type { Metadata } from 'next';

import {
  BecomeACoachCriteria,
  BecomeACoachHero,
  BecomeACoachLifestyle,
  BecomeACoachLookingFor,
  BecomeACoachWantJoin,
  BecomeACoachWhyJoin,
  Services,
} from './components';

export const metadata: Metadata = {
  title: 'Become a Coach | Qoacher',
  description:
    'Join Qoacher as a professional coach, consultant, or educator and help clients through coaching sessions, digital programs, consultations, and educational services.',
  openGraph: {
    title: 'Become a Coach | Qoacher',
    description:
      'Join Qoacher as a professional coach, consultant, or educator and help clients through coaching sessions, digital programs, consultations, and educational services.',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Coach | Qoacher',
    description:
      'Join Qoacher as a professional coach, consultant, or educator and help clients through coaching sessions, digital programs, consultations, and educational services.',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default function BecomeACoachPage() {
  return (
    <main>
      <BecomeACoachHero />
      <Services />
      <BecomeACoachLookingFor />
      <BecomeACoachCriteria />
      <BecomeACoachWhyJoin />
      <BecomeACoachWantJoin />
      <BecomeACoachLifestyle />
    </main>
  );
}
