import { getTranslations } from 'next-intl/server';

import { CareerDirectionPlanningProducts } from '@/features/career-coaching/career-direction-planning';
import { CareerTransitionsSpecialCasesProducts } from '@/features/career-coaching/career-transitions-special-cases';
import { InterviewPositioningCoachingProducts } from '@/features/career-coaching/interview-positioning-coaching';
import { JobSearchSupportProducts } from '@/features/career-coaching/job-search-support';
import { ContactFrame } from '@/features/contact-form/ui/contact-frame';

import { Hero } from '@/shared/ui/components/organisms/hero';
import { Products } from '@/shared/ui/components/templates/products';

import { WantToGear } from './components/want-to-gear';
import { WhyYouNeed } from './components/why-you-need';

export default async function CareerCoachingPage() {
  const t = await getTranslations('careerCoaching');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Career Coaching That <br/>Helps You Take Control',
        })}
        description={t('description', {
          fallback: 'Direction. Decisions. Change. We help you move forward with clarity.',
        })}
        imgUrl="/images/career-coaching/hero.png"
      />
      <WhyYouNeed />
      <Products
        title={t('careerDirectionPlanningTitle', {
          fallback: 'Career Direction & Planning',
        })}
        products={await CareerDirectionPlanningProducts()}
      />
      <Products
        title={t('jobSearchSupportTitle', {
          fallback: 'Job Search Support',
        })}
        products={await JobSearchSupportProducts()}
      />
      <Products
        title={t('interviewPositioningCoachingTitle', {
          fallback: 'Interview & Positioning Coaching',
        })}
        products={await InterviewPositioningCoachingProducts()}
      />
      <Products
        title={t('careerTransitionsSpecialCasesTitle', {
          fallback: 'Career Transitions & Special Cases',
        })}
        products={await CareerTransitionsSpecialCasesProducts()}
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
