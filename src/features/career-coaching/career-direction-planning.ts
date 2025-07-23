import { getTranslations } from 'next-intl/server';

export const CareerDirectionPlanningProducts = async () => {
  const t = await getTranslations('careerCoachingProducts');

  return [
    {
      id: 'career-diagnostic-session',
      title: t('careerDiagnosticSession', { fallback: 'Career Diagnostic Session' }),
      description: t('careerDiagnosticSessionDescription', {
        fallback: 'One-on-one session to evaluate your current position and explore directions.',
      }),
      price: 4800,
    },
    {
      id: 'career-change-strategy',
      title: t('careerChangeStrategy', { fallback: 'Career Change Strategy' }),
      description: t('careerChangeStrategyDescription', {
        fallback: 'Step-by-step planning for changing industries, roles, or working models.',
      }),
      price: 9200,
    },
    {
      id: 'post-burnout-career-reset',
      title: t('postBurnoutCareerReset', { fallback: 'Post-Burnout Career Reset' }),
      description: t('postBurnoutCareerResetDescription', {
        fallback: 'Guidance to rebuild clarity and motivation after burnout or career fatigue.',
      }),
      price: 7800,
    },
    {
      id: 'midlife-career-reinvention-plan',
      title: t('midlifeCareerReinventionPlan', { fallback: 'Midlife Career Reinvention Plan' }),
      description: t('midlifeCareerReinventionPlanDescription', {
        fallback: 'For professionals 35+ looking to shift direction without losing momentum.',
      }),
      price: 8300,
    },
    {
      id: 'purpose-strengths-alignment-session',
      title: t('purposeStrengthsAlignmentSession', {
        fallback: 'Purpose & Strengths Alignment Session',
      }),
      description: t('purposeStrengthsAlignmentSessionDescription', {
        fallback: 'Clarify core motivations and how they align with possible roles or fields.',
      }),
      price: 5200,
    },
    {
      id: 'work-life-rebalancing-plan',
      title: t('workLifeRebalancingPlan', { fallback: 'Work-Life Rebalancing Plan' }),
      description: t('workLifeRebalancingPlanDescription', {
        fallback: 'Adjust your work strategy to avoid long-term stress and overcommitment.',
      }),
      price: 6400,
    },
  ];
};
