import type { Metadata } from 'next';

import {
  BecauseLifeRunYou,
  CoachingThatFits,
  ForOngoingWorks,
  Hero,
  NeedExtraSupport,
  ProgramsThatHelp,
  StartSmall,
} from './components';

export const metadata: Metadata = {
  title: 'Life and Career Coaching | Qoacher',
  description:
    'Discover how expert coaching can help you gain control, improve relationships, advance your career, and achieve long-term personal growth.',
  openGraph: {
    title: 'Life and Career Coaching | Qoacher',
    description:
      'Discover how expert coaching can help you gain control, improve relationships, advance your career, and achieve long-term personal growth.',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life and Career Coaching | Qoacher',
    description:
      'Discover how expert coaching can help you gain control, improve relationships, advance your career, and achieve long-term personal growth.',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <CoachingThatFits />
      <ForOngoingWorks />
      <ProgramsThatHelp />
      <BecauseLifeRunYou />
      <StartSmall />
      <NeedExtraSupport />
    </main>
  );
}
