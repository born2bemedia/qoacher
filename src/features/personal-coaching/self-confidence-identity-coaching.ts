import { getTranslations } from 'next-intl/server';

export const SelfConfidenceIdentityCoachingProducts = async () => {
  const t = await getTranslations('personalCoachingProducts');

  return [
    {
      id: 'self-worth-restoration-plan',
      title: t('selfWorthRestorationPlan', { fallback: 'Self-Worth Restoration Plan' }),
      description: t('selfWorthRestorationPlanDescription', {
        fallback: 'Comprehensive deep work on identity damage, self-worth gaps, and external validation patterns.',
      }),
      price: 7000,
    },
    {
      id: 'confidence-in-decision-making',
      title: t('confidenceInDecisionMaking', { fallback: 'Confidence in Decision-Making' }),
      description: t('confidenceInDecisionMakingDescription', {
        fallback: 'Targeted coaching to reduce overthinking, fear of judgment, and indecision.',
      }),
      price: 5000,
    },
    {
      id: 'personal-identity-rebuilding',
      title: t('personalIdentityRebuilding', { fallback: 'Personal Identity Rebuilding' }),
      description: t('personalIdentityRebuildingDescription', {
        fallback: 'Structured process to reconnect with personal identity, values, and inner direction.',
      }),
      price: 6200,
    },
    {
      id: 'inner-critic-deconstruction',
      title: t('innerCriticDeconstruction', { fallback: 'Inner Critic Deconstruction' }),
      description: t('innerCriticDeconstructionDescription', {
        fallback: 'Identify and dismantle internal self-sabotaging narratives with guided sessions.',
      }),
      price: 4500,
    },
    {
      id: 'secure-self-expression-coaching',
      title: t('secureSelfExpressionCoaching', { fallback: 'Secure Self-Expression Coaching' }),
      description: t('secureSelfExpressionCoachingDescription', {
        fallback: 'Support to confidently express opinions, emotions, and preferences without fear.',
      }),
      price: 4700,
    },
    {
      id: 'public-persona-alignment',
      title: t('publicPersonaAlignment', { fallback: 'Public Persona Alignment' }),
      description: t('publicPersonaAlignmentDescription', {
        fallback: 'Coaching for aligning how you\'re seen with who you are — online and in life.',
      }),
      price: 5600,
    },
  ];
}; 