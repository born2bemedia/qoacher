import { getTranslations } from 'next-intl/server';

export const DailyStructurePersonalDisciplineProducts = async () => {
  const t = await getTranslations('personalCoachingProducts');

  return [
    {
      id: 'personal-system-design',
      title: t('personalSystemDesign', { fallback: 'Personal System Design' }),
      description: t('personalSystemDesignDescription', {
        fallback: 'Build a sustainable, tailored system for your time, energy, and commitments.',
      }),
      price: 5200,
    },
    {
      id: 'habit-overhaul-program',
      title: t('habitOverhaulProgram', { fallback: 'Habit Overhaul Program' }),
      description: t('habitOverhaulProgramDescription', {
        fallback: 'Replace harmful or unproductive habits with realistic, high-return routines.',
      }),
      price: 6000,
    },
    {
      id: 'mental-clutter-clearing',
      title: t('mentalClutterClearing', { fallback: 'Mental Clutter Clearing' }),
      description: t('mentalClutterClearingDescription', {
        fallback: 'Sessions to reduce mental overload and restore cognitive clarity.',
      }),
      price: 4700,
    },
    {
      id: 'focus-and-execution-coaching',
      title: t('focusAndExecutionCoaching', { fallback: 'Focus and Execution Coaching' }),
      description: t('focusAndExecutionCoachingDescription', {
        fallback: 'Practical coaching to eliminate distractions and follow through on plans.',
      }),
      price: 5500,
    },
    {
      id: 'self-discipline-rebuild-plan',
      title: t('selfDisciplineRebuildPlan', { fallback: 'Self-Discipline Rebuild Plan' }),
      description: t('selfDisciplineRebuildPlanDescription', {
        fallback: 'Targeted support to recover self-control after periods of disorganization or avoidance.',
      }),
      price: 6100,
    },
    {
      id: 'consistency-strengthening-process',
      title: t('consistencyStrengtheningProcess', { fallback: 'Consistency Strengthening Process' }),
      description: t('consistencyStrengtheningProcessDescription', {
        fallback: 'Accountability and structure to build momentum and maintain long-term progress.',
      }),
      price: 5800,
    },
  ];
}; 