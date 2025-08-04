import { getTranslations } from 'next-intl/server';

export const LongTermPersonalPlanningProducts = async () => {
  const t = await getTranslations('longTermPersonalPlanningProducts');

  return [
    {
      id: 'personal-growth-roadmap',
      title: t('personalGrowthRoadmap', { fallback: 'Personal Growth Roadmap' }),
      description: t('personalGrowthRoadmapDescription', {
        fallback: 'Develop a 12-month action plan based on your goals, values, and intentions.',
      }),
      price: 7400,
    },
    {
      id: 'five-year-vision-execution-strategy',
      title: t('fiveYearVisionExecutionStrategy', { fallback: 'Five-Year Vision & Execution Strategy' }),
      description: t('fiveYearVisionExecutionStrategyDescription', {
        fallback: 'Clarify your five-year direction with practical planning and accountability.',
      }),
      price: 8200,
    },
    {
      id: 'life-structure-design',
      title: t('lifeStructureDesign', { fallback: 'Life Structure Design' }),
      description: t('lifeStructureDesignDescription', {
        fallback: 'Organize your life by domains (career, personal, health, etc.) for ongoing balance.',
      }),
      price: 7000,
    },
    {
      id: 'lifestyle-alignment-coaching',
      title: t('lifestyleAlignmentCoaching', { fallback: 'Lifestyle Alignment Coaching' }),
      description: t('lifestyleAlignmentCoachingDescription', {
        fallback: 'Bridge the gap between how you\'re living and what you actually value.',
      }),
      price: 6600,
    },
    {
      id: 'values-based-decision-framework',
      title: t('valuesBasedDecisionFramework', { fallback: 'Values-Based Decision Framework' }),
      description: t('valuesBasedDecisionFrameworkDescription', {
        fallback: 'Build a filter to make all future decisions in line with your principles and purpose.',
      }),
      price: 5900,
    },
    {
      id: 'major-life-transition-blueprint',
      title: t('majorLifeTransitionBlueprint', { fallback: 'Major Life Transition Blueprint' }),
      description: t('majorLifeTransitionBlueprintDescription', {
        fallback: 'Comprehensive plan for handling big changes — career shifts, relocation…',
      }),
      price: 7600,
    },
  ];
};
