import { getTranslations } from 'next-intl/server';

export const EmotionalStabilityStressRecoveryProducts = async () => {
  const t = await getTranslations('personalCoachingProducts');

  return [
    {
      id: 'stress-exposure-review',
      title: t('stressExposureReview', { fallback: 'Stress Exposure Review' }),
      description: t('stressExposureReviewDescription', {
        fallback: 'Full assessment of personal and environmental stress factors with actionable insights.',
      }),
      price: 3800,
    },
    {
      id: 'emotional-regulation-intensive',
      title: t('emotionalRegulationIntensive', { fallback: 'Emotional Regulation Intensive' }),
      description: t('emotionalRegulationIntensiveDescription', {
        fallback: 'Practical sessions to identify triggers, regulate emotional responses, and reduce reactivity.',
      }),
      price: 5200,
    },
    {
      id: 'burnout-recovery-planning',
      title: t('burnoutRecoveryPlanning', { fallback: 'Burnout Recovery Planning' }),
      description: t('burnoutRecoveryPlanningDescription', {
        fallback: 'Structured recovery plan including habit shifts, boundary setting, and lifestyle correction.',
      }),
      price: 6400,
    },
    {
      id: 'energy-management-strategy',
      title: t('energyManagementStrategy', { fallback: 'Energy Management Strategy' }),
      description: t('energyManagementStrategyDescription', {
        fallback: 'Analysis and redesign of energy-draining patterns across personal and professional life.',
      }),
      price: 4800,
    },
    {
      id: 'crisis-resilience-coaching',
      title: t('crisisResilienceCoaching', { fallback: 'Crisis Resilience Coaching' }),
      description: t('crisisResilienceCoachingDescription', {
        fallback: 'Crisis-specific support to stabilize, refocus, and protect decision-making ability.',
      }),
      price: 5600,
    },
    {
      id: 'emotional-health-mapping',
      title: t('emotionalHealthMapping', { fallback: 'Emotional Health Mapping' }),
      description: t('emotionalHealthMappingDescription', {
        fallback: 'Evaluation of long-term emotional patterns with development of a stabilization roadmap.',
      }),
      price: 4900,
    },
  ];
}; 