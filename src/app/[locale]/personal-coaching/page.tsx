import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ContactFrame } from '@/features/contact-form/ui/contact-frame';
import { DailyStructurePersonalDisciplineProducts } from '@/features/personal-coaching/daily-structure-personal-discipline';
import { EmotionalStabilityStressRecoveryProducts } from '@/features/personal-coaching/emotional-stability-stress-recovery';
import { LifeTransitionsChangeAdaptationProducts } from '@/features/personal-coaching/life-transitions-change-adaptation';
import { SelfConfidenceIdentityCoachingProducts } from '@/features/personal-coaching/self-confidence-identity-coaching';

import { Hero } from '@/shared/ui/components/organisms/hero';
import { Products } from '@/shared/ui/components/templates/products';

import { WantToGear } from './components/want-to-gear';
import { WhyYouNeed } from './components/why-you-need';

export const metadata: Metadata = {
  title: 'Personal Coaching | Qoacher',
  description:
    'Explore personal coaching to overcome stress, restore balance, build confidence, and create lasting positive change in your life. ',
  openGraph: {
    title: 'Personal Coaching | Qoacher',
    description:
      'Explore personal coaching to overcome stress, restore balance, build confidence, and create lasting positive change in your life. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Coaching | Qoacher',
    description:
      'Explore personal coaching to overcome stress, restore balance, build confidence, and create lasting positive change in your life. ',
    images: ['https://qoacher.com/meta.jpg'],
  },
};

export default async function PersonalCoachingPage() {
  const t = await getTranslations('personalCoaching');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Personal Coaching <br/>That Helps You Regain Control',
        })}
        description={t('description', {
          fallback:
            'Stress. Overload. Uncertainty. We help you find balance, focus, and direction.',
        })}
        imgUrl="/images/personal-coaching/hero.png"
      />
      <WhyYouNeed />
      <Products
        title={t('emotionalStabilityStressRecoveryTitle', {
          fallback: 'Emotional Stability & Stress Recovery',
        })}
        products={await EmotionalStabilityStressRecoveryProducts()}
      />
      <Products
        title={t('selfConfidenceIdentityCoachingTitle', {
          fallback: 'Self-Confidence & Identity Coaching',
        })}
        products={await SelfConfidenceIdentityCoachingProducts()}
      />
      <Products
        title={t('lifeTransitionsChangeAdaptationTitle', {
          fallback: 'Life Transitions & Change Adaptation',
        })}
        products={await LifeTransitionsChangeAdaptationProducts()}
      />
      <Products
        title={t('dailyStructurePersonalDisciplineTitle', {
          fallback: 'Daily Structure & Personal Discipline',
        })}
        products={await DailyStructurePersonalDisciplineProducts()}
      />
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
