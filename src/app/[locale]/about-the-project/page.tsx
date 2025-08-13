import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { Hero } from '@/shared/ui/components/organisms/hero';

import { Details, Diplomas, OurTeam, WeHere, WhoWeAre } from './components';

export const metadata: Metadata = {
  title: 'About Us | Qoacher',
  description:
    'Discover Qoacher’s mission, values, and experienced coaching team dedicated to helping you take control of your life and achieve lasting change.',
  openGraph: {
    title: 'About Us | Qoacher',
    description:
      'Discover Qoacher’s mission, values, and experienced coaching team dedicated to helping you take control of your life and achieve lasting change.',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Qoacher',
    description:
      'Discover Qoacher’s mission, values, and experienced coaching team dedicated to helping you take control of your life and achieve lasting change.',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default async function AboutTheProjectPage() {
  const t = await getTranslations('aboutTheProject');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Because Life Won’t  <br/>Wait for You to Catch Up',
        })}
        description={t('description', {
          fallback: 'Clarity. Direction. Strength. The support modern life demands.',
        })}
        imgUrl="/images/about-the-project/hero.png"
      />
      <Details />
      <WhoWeAre />
      <OurTeam />
      <Diplomas />
      <WeHere />
    </main>
  );
}
