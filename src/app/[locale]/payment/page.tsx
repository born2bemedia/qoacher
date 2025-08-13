import type { Metadata } from 'next';

import { Hero, PaymentContent } from './components';

export const metadata: Metadata = {
  title: 'Thank You For Your Order | Qoacher',
  openGraph: {
    title: 'Thank You For Your Order | Qoacher',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You For Your Order | Qoacher',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentPage() {
  return (
    <main>
      <Hero />
      <PaymentContent />
    </main>
  );
}
