import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ArticlesRow } from '@/features/articles-row/ui/articles-row';
import { ContactFrame } from '@/features/contact-form/ui/contact-frame';

import { Hero } from '@/shared/ui/components/organisms/hero';

import { WantToGear } from './components/want-to-gear';

export const metadata: Metadata = {
  title: 'Self Improvement Guides | Qoacher',
  description:
    'Explore articles and guides with practical steps to help you improve focus, build better habits, and achieve personal growth. ',
  openGraph: {
    title: 'Self Improvement Guides | Qoacher',
    description:
      'Explore articles and guides with practical steps to help you improve focus, build better habits, and achieve personal growth. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Improvement Guides | Qoacher',
    description:
      'Explore articles and guides with practical steps to help you improve focus, build better habits, and achieve personal growth. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default async function SelfImprovementPage() {
  const t = await getTranslations('selfImprovement');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Self‑Improvement <br/>Starts Here',
        })}
        description={t('description', {
          fallback: 'Articles. Guides. Insights. Practical steps for a stronger, clearer you.',
        })}
        imgUrl="/images/self-improvement/hero.png"
      />
      <ArticlesRow />
      <WantToGear />
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
