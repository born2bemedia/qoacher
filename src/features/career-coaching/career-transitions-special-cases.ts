import { getTranslations } from 'next-intl/server';

export const CareerTransitionsSpecialCasesProducts = async () => {
  const t = await getTranslations('careerCoachingProducts');

  return [
    {
      id: 'returning-to-work-strategy',
      title: t('returningToWorkStrategy', { fallback: 'Returning to Work Strategy' }),
      description: t('returningToWorkStrategyDescription', {
        fallback: 'Support for parents, caregivers, or individuals returning after a break.',
      }),
      price: 5000,
    },
    {
      id: 'relocation-career-planning',
      title: t('relocationCareerPlanning', { fallback: 'Relocation Career Planning' }),
      description: t('relocationCareerPlanningDescription', {
        fallback: 'Coaching for professionals moving to new countries or regions.',
      }),
      price: 6800,
    },
    {
      id: 'freelance-self-employment-planning',
      title: t('freelanceSelfEmploymentPlanning', {
        fallback: 'Freelance or Self-Employment Planning',
      }),
      description: t('freelanceSelfEmploymentPlanningDescription', {
        fallback: 'Helping you structure a solo career with income planning and role clarity.',
      }),
      price: 7300,
    },
    {
      id: 'second-career-planning-50-plus',
      title: t('secondCareerPlanning50Plus', { fallback: 'Second Career Planning (50+)' }),
      description: t('secondCareerPlanning50PlusDescription', {
        fallback:
          'Strategic planning for late-career changes, phased retirements, or passion projects.',
      }),
      price: 5900,
    },
    {
      id: 'exit-strategy-coaching',
      title: t('exitStrategyCoaching', { fallback: 'Exit Strategy Coaching' }),
      description: t('exitStrategyCoachingDescription', {
        fallback: 'Prepare for resignation, role exit, or company closure with professionalism.',
      }),
      price: 5400,
    },
    {
      id: 'career-clarity-intensive',
      title: t('careerClarityIntensive', { fallback: 'Career Clarity Intensive (3 sessions)' }),
      description: t('careerClarityIntensiveDescription', {
        fallback: 'Structured short-term program to explore your options and make a decision.',
      }),
      price: 8200,
    },
  ];
};
