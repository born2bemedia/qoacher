import { getTranslations } from 'next-intl/server';

export const ConflictCommunicationSkillsProducts = async () => {
  const t = await getTranslations('communicationAndRelationshipCoachingProducts');

  return [
    {
      id: 'difficult-conversations-coaching',
      title: t('difficultConversationsCoaching', { fallback: 'Difficult Conversations Coaching' }),
      description: t('difficultConversationsCoachingDescription', {
        fallback: 'Prepare for and navigate high-stakes conversations at home or work.',
      }),
      price: 6000,
    },
    {
      id: 'assertive-communication-training',
      title: t('assertiveCommunicationTraining', { fallback: 'Assertive Communication Training' }),
      description: t('assertiveCommunicationTrainingDescription', {
        fallback: 'Learn how to speak clearly and directly — without being passive or aggressive.',
      }),
      price: 5700,
    },
    {
      id: 'emotional-tone-awareness',
      title: t('emotionalToneAwareness', { fallback: 'Emotional Tone Awareness' }),
      description: t('emotionalToneAwarenessDescription', {
        fallback: 'Improve how your emotions come across and are understood.',
      }),
      price: 4900,
    },
    {
      id: 'conflict-de-escalation-coaching',
      title: t('conflictDeEscalationCoaching', { fallback: 'Conflict De-escalation Coaching' }),
      description: t('conflictDeEscalationCoachingDescription', {
        fallback: 'Techniques to stay calm and focused during arguments and disagreements.',
      }),
      price: 5800,
    },
    {
      id: 'listening-skills-development',
      title: t('listeningSkillsDevelopment', { fallback: 'Listening Skills Development' }),
      description: t('listeningSkillsDevelopmentDescription', {
        fallback: 'Build presence, reduce interruption habits, and improve understanding.',
      }),
      price: 4600,
    },
    {
      id: 'reactivity-reduction-plan',
      title: t('reactivityReductionPlan', { fallback: 'Reactivity Reduction Plan' }),
      description: t('reactivityReductionPlanDescription', {
        fallback: 'Address triggers and reactive behavior that damage conversations and outcomes.',
      }),
      price: 5300,
    },
  ];
};
