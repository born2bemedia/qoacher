import { getTranslations } from 'next-intl/server';

import { ContactFrame } from '@/features/contact-form/ui/contact-frame';
import { AccountabilityAndConsistencyProducts } from '@/features/growth-and-long-term-planning/accountability-and-consistency';
import { HabitSystemsAndDailyStructureProducts } from '@/features/growth-and-long-term-planning/habit-systems-and-daily-structure';
import { IdentityPurposeAndGrowthAlignmentProducts } from '@/features/growth-and-long-term-planning/identity-purpose-and-growth-alignment';
import { LongTermPersonalPlanningProducts } from '@/features/growth-and-long-term-planning/long-term-personal-planning';

import { Hero } from '@/shared/ui/components/organisms/hero';
import { Products } from '@/shared/ui/components/templates/products';

import { WantToGear } from './components/want-to-gear';
import { WhyYouNeed } from './components/why-you-need';

export default async function GrowthAndLongTermPlanningPage() {
  const t = await getTranslations('growthAndLongTermPlanning');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Coaching for Growth That Lasts',
        })}
        description={t('description', {
          fallback:
            'Habits. Direction. Long-term focus. We help you stay aligned and keep moving forward.',
        })}
        imgUrl="/images/growth/hero.png"
      />
      <WhyYouNeed />
      <Products
        title={t('habitSystemsAndDailyStructureTitle', {
          fallback: 'Habit Systems & Daily Structure',
        })}
        products={await HabitSystemsAndDailyStructureProducts()}
      />
      <Products
        title={t('longTermPersonalPlanningTitle', {
          fallback: 'Long-Term Personal Planning',
        })}
        products={await LongTermPersonalPlanningProducts()}
      />
      <Products
        title={t('accountabilityAndConsistencyTitle', {
          fallback: 'Accountability & Consistency',
        })}
        products={await AccountabilityAndConsistencyProducts()}
      />
      <Products
        title={t('identityPurposeAndGrowthAlignmentTitle', {
          fallback: 'Identity, Purpose & Growth Alignment',
        })}
        products={await IdentityPurposeAndGrowthAlignmentProducts()}
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
