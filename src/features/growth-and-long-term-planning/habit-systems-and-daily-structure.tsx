import { getTranslations } from 'next-intl/server';

export const HabitSystemsAndDailyStructureProducts = async () => {
  const t = await getTranslations('habitSystemsAndDailyStructureProducts');

  return [
    {
      id: 'habit-architecture-intensive',
      title: t('habitArchitectureIntensive', { fallback: 'Habit Architecture Intensive' }),
      description: t('habitArchitectureIntensiveDescription', {
        fallback: 'Build a high-retention habit structure tailored to your lifestyle and long-term goals.',
      }),
      price: 6300,
    },
    {
      id: 'daily-routine-engineering',
      title: t('dailyRoutineEngineering', { fallback: 'Daily Routine Engineering' }),
      description: t('dailyRoutineEngineeringDescription', {
        fallback: 'Design a high-functioning day structure based on your energy and workload.',
      }),
      price: 5800,
    },
    {
      id: 'morning-evening-protocol-setup',
      title: t('morningEveningProtocolSetup', { fallback: 'Morning and Evening Protocol Setup' }),
      description: t('morningEveningProtocolSetupDescription', {
        fallback: 'Develop consistent opening and closing routines to anchor productivity.',
      }),
      price: 5200,
    },
    {
      id: 'time-ownership-strategy',
      title: t('timeOwnershipStrategy', { fallback: 'Time Ownership Strategy' }),
      description: t('timeOwnershipStrategyDescription', {
        fallback: 'Shift from time pressure to control — structure your day-to-day for clarity.',
      }),
      price: 6000,
    },
    {
      id: 'distraction-elimination-coaching',
      title: t('distractionEliminationCoaching', { fallback: 'Distraction Elimination Coaching' }),
      description: t('distractionEliminationCoachingDescription', {
        fallback: 'Target digital, emotional, and behavioral distractions with personalized reduction tools.',
      }),
      price: 5900,
    },
    {
      id: 'habit-failure-recovery-plan',
      title: t('habitFailureRecoveryPlan', { fallback: 'Habit Failure Recovery Plan' }),
      description: t('habitFailureRecoveryPlanDescription', {
        fallback: 'Address the causes behind inconsistency, self-sabotage, and unproductive patterns.',
      }),
      price: 6100,
    },
  ];
};
