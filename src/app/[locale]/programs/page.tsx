import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ContactFrame } from '@/features/contact-form/ui/contact-frame';
import { ProgramsProducts } from '@/features/programs/programs';

import { Hero } from '@/shared/ui/components/organisms/hero';
import { ProgramsLayout } from '@/shared/ui/components/templates/programs-layout';

import { HowToStart, WhatOffers } from './components';

export const metadata: Metadata = {
  title: 'Life Coaching Programs | Qoacher',
  description:
    'Explore life coaching programs designed to address complex challenges with complete, multi-service solutions. ',
  openGraph: {
    title: 'Life Coaching Programs | Qoacher',
    description:
      'Explore life coaching programs designed to address complex challenges with complete, multi-service solutions. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Life Coaching Programs | Qoacher',
    description:
      'Explore life coaching programs designed to address complex challenges with complete, multi-service solutions. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default async function ProgramsPage() {
  const t = await getTranslations('programs');
  const programs = await ProgramsProducts();

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Programs That <br/>Start Your Change',
        })}
        description={t('description', {
          fallback: 'Boundaries. Balance. Focus. Step-by-step guidance.',
        })}
        imgUrl="/images/programs/hero.png"
      />
      <WhatOffers />
      <HowToStart />
      <ProgramsLayout programs={programs} />
      <ContactFrame
        title={t('needExtraSupport', {
          fallback: 'Need Extra Support?',
        })}
        description={t('needExtraSupportDescription', {
          fallback:
            'Don’t hesitate to contact us. We’re available 24/7 to help you choose the right service and take the next step with confidence.',
        })}
      />
    </main>
  );
}
