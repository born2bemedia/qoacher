import { getTranslations } from 'next-intl/server';

import { ContactFrame } from '@/features/contact-form/ui/contact-frame';
import { ServicePreview } from '@/features/services/ui/service-preview';

import { Hero } from '@/shared/ui/components/organisms/hero';

export default async function ServicesPage() {
  const t = await getTranslations('services');

  return (
    <main>
      <Hero
        title={
          t('chooseTheCoaching', {
            fallback: 'Choose the Coaching <br /> That Fits Your Situation',
          })
        }
        description={t('careerPersonalLifeRelationshipsLongTermGrowth', {
          fallback:
            'Career. Personal life. Relationships. Long-term growth.',
        })}
        imgUrl="/images/services/hero.jpg"
      />
      <ServicePreview
        title={t('careerCoaching', {
          fallback: 'Career Coaching',
        })}
        text={t('careerCoachingDescription', {
          fallback:
            "If you’re stuck, lost, or thinking about changing direction, we help you make clear decisions, prepare for the next step, and take control of your work life.",
        })}
        buttonUrl="/career-coaching"
        imgUrl="/images/services/1.png"
      />
      <ServicePreview
        title={t('personalCoaching', {
          fallback: 'Personal Coaching',
        })}
        text={t('personalCoachingDescription', {
          fallback:
            'For people who feel drained, overwhelmed, or disconnected from themselves. We help you rebuild focus, stability, and personal clarity.',
        })}
        buttonUrl="/personal-coaching"
        imgUrl="/images/services/2.png"
        reverse
      />
      <ServicePreview
        title={t('communicationAndRelationshipCoaching', {
          fallback: 'Communication and Relationship Coaching',
        })}
        text={t('communicationAndRelationshipCoachingDescription', {
          fallback:
            'Support for handling conflict, setting boundaries, and improving connection — whether at home, work, or anywhere between.',
        })}
        buttonUrl="/communication-and-relationship-coaching"
        imgUrl="/images/services/3.png"
      />
      <ServicePreview
        title={t('growthAndLongTermPlanning', {
          fallback: 'Growth and Long-Term Planning',
        })}
        text={t('growthAndLongTermPlanningDescription', {
          fallback:
            'For those who want structure over time. We help you build habits, maintain progress, and stay aligned with where you\'re going.',
        })}
        buttonUrl="/growth-and-long-term-planning"
        imgUrl="/images/services/4.png"
        reverse
      />
      <ContactFrame
        title={t('needHelpChoosingACoachingPath', {
          fallback: 'Need Help Choosing a Coaching Path?',
        })}
        description={t('needHelpChoosingACoachingPathDescription', {
          fallback:
            'Don’t hesitate to reach out. We’re available 24/7 to help you understand your options and find the right coaching for your situation.',
        })}
      />
    </main>
  );
}
