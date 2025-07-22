import { getTranslations } from 'next-intl/server';

import { ContactFrame } from '@/features/contact-form/ui/contact-frame';

import { Hero } from '@/shared/ui/components/organisms/hero';

import { WantToGear } from './components/want-to-gear';
import { WhyYouNeed } from './components/why-you-need';

export default async function GrowthAndLongTermPlanningPage() {
  const t = await getTranslations('growthAndLongTermPlanning');

  return (
    <main>
      <Hero
        title={
          t('title', {
            fallback: 'Coaching for Growth That Lasts',
          })
        }
        description={t('description', {
          fallback:
            'Habits. Direction. Long-term focus. We help you stay aligned and keep moving forward.',
        })}
        imgUrl="/images/growth/hero.png"
      />
      <WhyYouNeed />
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
