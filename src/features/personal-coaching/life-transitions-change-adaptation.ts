import { getTranslations } from 'next-intl/server';

export const LifeTransitionsChangeAdaptationProducts = async () => {
  const t = await getTranslations('personalCoachingProducts');

  return [
    {
      id: 'life-reset-strategy',
      title: t('lifeResetStrategy', { fallback: 'Life Reset Strategy' }),
      description: t('lifeResetStrategyDescription', {
        fallback: 'Full strategic review of your current situation, past decisions, and desired direction.',
      }),
      price: 6500,
    },
    {
      id: 'adaptation-after-major-change',
      title: t('adaptationAfterMajorChange', { fallback: 'Adaptation After Major Change' }),
      description: t('adaptationAfterMajorChangeDescription', {
        fallback: 'Support after loss, divorce, relocation, or any high-impact life transition.',
      }),
      price: 7200,
    },
    {
      id: 'redefining-priorities-coaching',
      title: t('redefiningPrioritiesCoaching', { fallback: 'Redefining Priorities Coaching' }),
      description: t('redefiningPrioritiesCoachingDescription', {
        fallback: 'Work through values conflict and life overload to redefine what matters most.',
      }),
      price: 4900,
    },
    {
      id: 'emotional-baggage-processing',
      title: t('emotionalBaggageProcessing', { fallback: 'Emotional Baggage Processing' }),
      description: t('emotionalBaggageProcessingDescription', {
        fallback: 'Sessions focused on closure, release, and moving forward with emotional clarity.',
      }),
      price: 6800,
    },
    {
      id: 'role-reintegration-plan',
      title: t('roleReintegrationPlan', { fallback: 'Role Reintegration Plan' }),
      description: t('roleReintegrationPlanDescription', {
        fallback: 'Support in managing new personal roles (parent, caregiver, leader, etc.) with clarity and stability.',
      }),
      price: 5600,
    },
    {
      id: 'identity-shift-coaching',
      title: t('identityShiftCoaching', { fallback: 'Identity Shift Coaching' }),
      description: t('identityShiftCoachingDescription', {
        fallback: 'Guidance for major internal change that affects personal lifestyle, work, or relationships.',
      }),
      price: 6300,
    },
  ];
}; 