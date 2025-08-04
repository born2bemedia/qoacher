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
      price: 6800,
    },
    {
      id: 'deep-purpose-exploration',
      title: t('deepPurposeExploration', { fallback: 'Deep Purpose Exploration' }),
      description: t('deepPurposeExplorationDescription', {
        fallback: 'Clarify your purpose beyond performance, roles, or achievements.',
      }),
      price: 7500,
    },
    {
      id: 'identity-integration-coaching',
      title: t('identityIntegrationCoaching', { fallback: 'Identity Integration Coaching' }),
      description: t('identityIntegrationCoachingDescription', {
        fallback: 'Resolve internal contradictions and unify the roles, values, and vision.',
      }),
      price: 6400,
    },
    {
      id: 'growth-tracking-reflection-system',
      title: t('growthTrackingReflectionSystem', { fallback: 'Growth Tracking & Reflection System' }),
      description: t('growthTrackingReflectionSystemDescription', {
        fallback: 'Design a personal review process to track improvement across all key areas.',
      }),
      price: 5700,
    },
    {
      id: 'emotional-maturity-responsibility-coaching',
      title: t('emotionalMaturityResponsibilityCoaching', { fallback: 'Emotional Maturity & Responsibility Coaching' }),
      description: t('emotionalMaturityResponsibilityCoachingDescription', {
        fallback: 'Shift from reactive to grounded action in personal and professional life.',
      }),
      price: 6900,
    },
    {
      id: 'life-direction-reset',
      title: t('lifeDirectionReset', { fallback: 'Life Direction Reset' }),
      description: t('lifeDirectionResetDescription', {
        fallback: 'A deep, structured process to redefine who you are, what you stand for.',
      }),
      price: 7300,
    },
  ];
};
