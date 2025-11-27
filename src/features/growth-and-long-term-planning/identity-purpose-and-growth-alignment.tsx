import { getTranslations } from 'next-intl/server';

export const IdentityPurposeAndGrowthAlignmentProducts = async () => {
  const t = await getTranslations('identityPurposeAndGrowthAlignmentProducts');

  return [
    {
      id: 'personal-alignment-strategy',
      title: t('personalAlignmentStrategy', { fallback: 'Personal Alignment Strategy' }),
      description: t('personalAlignmentStrategyDescription', {
        fallback: 'Define who you are becoming and ensure your daily actions reflect that path.',
      }),
      price: 2400,
    },
    {
      id: 'deep-purpose-exploration',
      title: t('deepPurposeExploration', { fallback: 'Deep Purpose Exploration' }),
      description: t('deepPurposeExplorationDescription', {
        fallback: 'Clarify your purpose beyond performance, roles, or achievements.',
      }),
      price: 3200,
    },
    {
      id: 'identity-integration-coaching',
      title: t('identityIntegrationCoaching', { fallback: 'Identity Integration Coaching' }),
      description: t('identityIntegrationCoachingDescription', {
        fallback: 'Resolve internal contradictions and unify the roles, values, and vision.',
      }),
      price: 2200,
    },
    {
      id: 'growth-tracking-reflection-system',
      title: t('growthTrackingReflectionSystem', {
        fallback: 'Growth Tracking & Reflection System',
      }),
      description: t('growthTrackingReflectionSystemDescription', {
        fallback: 'Design a personal review process to track improvement across all key areas.',
      }),
      price: 1100,
    },
    {
      id: 'emotional-maturity-responsibility-coaching',
      title: t('emotionalMaturityResponsibilityCoaching', {
        fallback: 'Emotional Maturity & Responsibility Coaching',
      }),
      description: t('emotionalMaturityResponsibilityCoachingDescription', {
        fallback: 'Shift from reactive to grounded action in personal and professional life.',
      }),
      price: 1700,
    },
    {
      id: 'life-direction-reset',
      title: t('lifeDirectionReset', { fallback: 'Life Direction Reset' }),
      description: t('lifeDirectionResetDescription', {
        fallback: 'A deep, structured process to redefine who you are, what you stand for.',
      }),
      price: 3000,
    },
  ];
};
