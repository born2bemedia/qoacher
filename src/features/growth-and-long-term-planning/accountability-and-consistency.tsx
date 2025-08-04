import { getTranslations } from 'next-intl/server';

export const AccountabilityAndConsistencyProducts = async () => {
  const t = await getTranslations('accountabilityAndConsistencyProducts');

  return [
    {
      id: 'long-term-execution-coaching',
      title: t('longTermExecutionCoaching', { fallback: 'Long-Term Execution Coaching' }),
      description: t('longTermExecutionCoachingDescription', {
        fallback: 'Support and review sessions to keep momentum and make continuous progress.',
      }),
      price: 7800,
    },
    {
      id: 'personal-accountability-protocol',
      title: t('personalAccountabilityProtocol', { fallback: 'Personal Accountability Protocol' }),
      description: t('personalAccountabilityProtocolDescription', {
        fallback: 'Create structured check-ins, feedback loops, and scorecards for your goals.',
      }),
      price: 6200,
    },
    {
      id: 'motivation-maintenance-plan',
      title: t('motivationMaintenancePlan', { fallback: 'Motivation Maintenance Plan' }),
      description: t('motivationMaintenancePlanDescription', {
        fallback: 'Keep your drive alive through mental reframing and deep motivational anchoring.',
      }),
      price: 6000,
    },
    {
      id: 'procrastination-elimination-system',
      title: t('procrastinationEliminationSystem', { fallback: 'Procrastination Elimination System' }),
      description: t('procrastinationEliminationSystemDescription', {
        fallback: 'Root-cause coaching and behavioral correction for chronic avoidance and delay.',
      }),
      price: 6900,
    },
    {
      id: 'sustainable-goal-management',
      title: t('sustainableGoalManagement', { fallback: 'Sustainable Goal Management' }),
      description: t('sustainableGoalManagementDescription', {
        fallback: 'Turn large goals into realistic stages with checkpoints, buffers, and review triggers.',
      }),
      price: 7100,
    },
    {
      id: 'high-stakes-goal-accountability',
      title: t('highStakesGoalAccountability', { fallback: 'High-Stakes Goal Accountability' }),
      description: t('highStakesGoalAccountabilityDescription', {
        fallback: 'Dedicated coaching to keep you on track with your most critical goals',
      }),
      price: 7200,
    },
  ];
};
