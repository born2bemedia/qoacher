import { getTranslations } from 'next-intl/server';

export const CouplesCoachingProducts = async () => {
  const t = await getTranslations('communicationAndRelationshipCoachingProducts');

  return [
    {
      id: 'couple-communication-analysis',
      title: t('coupleCommunicationAnalysis', { fallback: 'Couple Communication Analysis' }),
      description: t('coupleCommunicationAnalysisDescription', {
        fallback: 'Detailed review of how you interact — and what needs to shift.',
      }),
      price: 900,
    },
    {
      id: 'conflict-resolution-coaching',
      title: t('conflictResolutionCoaching', { fallback: 'Conflict Resolution Coaching' }),
      description: t('conflictResolutionCoachingDescription', {
        fallback: 'Structure and tools to resolve recurring disagreements without escalation.',
      }),
      price: 1300,
    },
    {
      id: 'emotional-safety-restoration',
      title: t('emotionalSafetyRestoration', { fallback: 'Emotional Safety Restoration' }),
      description: t('emotionalSafetyRestorationDescription', {
        fallback: 'Work through emotional distance, criticism, or trust gaps.',
      }),
      price: 1600,
    },
    {
      id: 'reconnection-plan',
      title: t('reconnectionPlan', { fallback: 'Reconnection Plan' }),
      description: t('reconnectionPlanDescription', {
        fallback: 'For desperate couples feeling distant or emotionally disconnected.',
      }),
      price: 1200,
    },
    {
      id: 'life-stage-transition-coaching',
      title: t('lifeStageTransitionCoaching', { fallback: 'Life Stage Transition Coaching' }),
      description: t('lifeStageTransitionCoachingDescription', {
        fallback: 'Support for parenting, relocation, career shifts, or health changes.',
      }),
      price: 1000,
    },
    {
      id: 'value-alignment-coaching',
      title: t('valueAlignmentCoaching', { fallback: 'Value Alignment Coaching' }),
      description: t('valueAlignmentCoachingDescription', {
        fallback:
          'Work through lifestyle, financial, or belief differences to build a stronger foundation.',
      }),
      price: 1400,
    },
  ];
};
