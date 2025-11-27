import { getTranslations } from 'next-intl/server';

export const SettingBoundariesProducts = async () => {
  const t = await getTranslations('communicationAndRelationshipCoachingProducts');

  return [
    {
      id: 'boundary-awareness-assessment',
      title: t('boundaryAwarenessAssessment', { fallback: 'Boundary Awareness Assessment' }),
      description: t('boundaryAwarenessAssessmentDescription', {
        fallback: 'Identify where your boundaries are missing, unclear, or violated.',
      }),
      price: 650,
    },
    {
      id: 'saying-no-without-guilt',
      title: t('sayingNoWithoutGuilt', { fallback: 'Saying No Without Guilt' }),
      description: t('sayingNoWithoutGuiltDescription', {
        fallback: 'Coaching for assertive communication without fear or emotional fallout.',
      }),
      price: 900,
    },
    {
      id: 'emotional-overextension-recovery',
      title: t('emotionalOverextensionRecovery', { fallback: 'Emotional Overextension Recovery' }),
      description: t('emotionalOverextensionRecoveryDescription', {
        fallback: 'Address burnout caused by overgiving or people-pleasing.',
      }),
      price: 1100,
    },
    {
      id: 'personal-boundary-strategy',
      title: t('personalBoundaryStrategy', { fallback: 'Personal Boundary Strategy' }),
      description: t('personalBoundaryStrategyDescription', {
        fallback: 'Define clear boundaries across relationships, work, and family life.',
      }),
      price: 1100,
    },
    {
      id: 'dealing-with-pushback',
      title: t('dealingWithPushback', { fallback: 'Dealing with Pushback' }),
      description: t('dealingWithPushbackDescription', {
        fallback: 'Learn how to hold boundaries under pressure, manipulation, or guilt.',
      }),
      price: 1300,
    },
    {
      id: 'internal-boundary-reinforcement',
      title: t('internalBoundaryReinforcement', { fallback: 'Internal Boundary Reinforcement' }),
      description: t('internalBoundaryReinforcementDescription', {
        fallback: 'Work through mental self-overload, overthinking, and poor containment.',
      }),
      price: 1000,
    },
  ];
};
