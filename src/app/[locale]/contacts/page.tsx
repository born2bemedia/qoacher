import type { Metadata } from 'next';

import { ContactMain, ContactsBanner, PracticalTools } from './components';

export const metadata: Metadata = {
  title: 'Contact Us | Qoacher',
  description:
    'Reach Qoacher for questions, support, or to start your coaching journey today. Our team is ready to provide guidance, answer your inquiries, and help you take the next step toward lasting change. ',
  openGraph: {
    title: 'Contact Us | Qoacher',
    description:
      'Reach Qoacher for questions, support, or to start your coaching journey today. Our team is ready to provide guidance, answer your inquiries, and help you take the next step toward lasting change. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Qoacher',
    description:
      'Reach Qoacher for questions, support, or to start your coaching journey today. Our team is ready to provide guidance, answer your inquiries, and help you take the next step toward lasting change. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default async function PackagesPage() {
  return (
    <main>
      <ContactMain />
      <PracticalTools />
      <ContactsBanner />
    </main>
  );
}
