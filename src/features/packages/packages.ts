import { getTranslations } from 'next-intl/server';

export const PackagesProducts = async () => {
  const t = await getTranslations('packagesProducts');

  return [
    {
      id: 'burnout-recovery-balance-reset',
      title: t('burnoutRecoveryBalanceReset', { fallback: 'Burnout Recovery & Balance Reset' }),
      whoItsFor: t('burnoutRecoveryBalanceResetWhoItsFor', {
        fallback:
          'Professionals and parents who are exhausted, stressed, and struggling to regain stability.',
      }),
      includes: [
        t('burnoutRecoveryBalanceResetIncludes1', {
          fallback: 'Burnout Recovery Planning',
        }),
        t('burnoutRecoveryBalanceResetIncludes2', {
          fallback: 'Stress Exposure Review',
        }),
        t('burnoutRecoveryBalanceResetIncludes3', {
          fallback: 'Energy Management Strategy',
        }),
        t('burnoutRecoveryBalanceResetIncludes4', {
          fallback: 'Work-Life Rebalancing Plan',
        }),
        t('burnoutRecoveryBalanceResetIncludes5', {
          fallback: 'Habit Overhaul Program',
        }),
      ],
      separately: 27400,
      price: 22500,
    },
    {
      id: 'career-reinvention-blueprint',
      title: t('careerReinventionBlueprint', { fallback: 'Career Reinvention Blueprint' }),
      whoItsFor: t('careerReinventionBlueprintWhoItsFor', {
        fallback: 'People looking for a complete career transformation or pivot.',
      }),
      includes: [
        t('careerReinventionBlueprintIncludes1', {
          fallback: 'Career Diagnostic Session',
        }),
        t('careerReinventionBlueprintIncludes2', {
          fallback: 'Career Change Strategy',
        }),
        t('careerReinventionBlueprintIncludes3', {
          fallback: 'Midlife Career Reinvention Plan',
        }),
        t('careerReinventionBlueprintIncludes4', {
          fallback: 'Purpose & Strengths Alignment Session',
        }),
        t('careerReinventionBlueprintIncludes5', {
          fallback: 'Salary Negotiation Coaching',
        }),
      ],
      separately: 33300,
      price: 27500,
    },
    {
      id: 'relationship-reset-boundaries-mastery',
      title: t('relationshipResetBoundariesMastery', {
        fallback: 'Relationship Reset & Boundaries Mastery',
      }),
      whoItsFor: t('relationshipResetBoundariesMasteryWhoItsFor', {
        fallback:
          'Individuals and couples facing communication struggles, conflict, or poor boundaries.',
      }),
      includes: [
        t('relationshipResetBoundariesMasteryIncludes1', {
          fallback: 'Personal Relationship Coaching (Relationship Clarity Session)',
        }),
        t('relationshipResetBoundariesMasteryIncludes2', {
          fallback: 'Couples Coaching (Conflict Resolution Coaching)',
        }),
        t('relationshipResetBoundariesMasteryIncludes3', {
          fallback: 'Setting Boundaries (Saying No Without Guilt)',
        }),
        t('relationshipResetBoundariesMasteryIncludes4', {
          fallback: 'Difficult Conversations Coaching',
        }),
        t('relationshipResetBoundariesMasteryIncludes5', {
          fallback: 'Emotional Safety',
        }),
      ],
      separately: 30900,
      price: 25600,
    },
    {
      id: 'identity-purpose-deep-dive',
      title: t('identityPurposeDeepDive', {
        fallback: 'Identity & Purpose Deep Dive',
      }),
      whoItsFor: t('identityPurposeDeepDiveWhoItsFor', {
        fallback: 'People feeling lost, disconnected, or unsure of who they are or what they want.',
      }),
      includes: [
        t('identityPurposeDeepDiveIncludes1', {
          fallback: 'Deep Purpose Exploration – €7,500',
        }),
        t('identityPurposeDeepDiveIncludes2', {
          fallback: 'Identity Integration Coaching – €6,400',
        }),
        t('identityPurposeDeepDiveIncludes3', {
          fallback: 'Personal Alignment Strategy – €6,800',
        }),
        t('identityPurposeDeepDiveIncludes4', {
          fallback: 'Emotional Baggage Processing – €6,800',
        }),
        t('identityPurposeDeepDiveIncludes5', {
          fallback: 'Values-Based Decision Framework – €5,900',
        }),
      ],
      separately: 33600,
      price: 28300,
    },
    {
      id: 'full-growth-accountability-system',
      title: t('fullGrowthAccountabilitySystem', {
        fallback: 'Full Growth & Accountability System',
      }),
      whoItsFor: t('fullGrowthAccountabilitySystemWhoItsFor', {
        fallback: 'Clients who want sustained, guided transformation across all areas of life.',
      }),
      includes: [
        t('fullGrowthAccountabilitySystemIncludes1', {
          fallback: 'Deep Purpose Exploration – €7,500',
        }),
        t('fullGrowthAccountabilitySystemIncludes2', {
          fallback: 'Identity Integration Coaching – €6,400',
        }),
        t('fullGrowthAccountabilitySystemIncludes3', {
          fallback: 'Personal Alignment Strategy – €6,800',
        }),
        t('fullGrowthAccountabilitySystemIncludes4', {
          fallback: 'Emotional Baggage Processing – €6,800',
        }),
        t('fullGrowthAccountabilitySystemIncludes5', {
          fallback: 'Values-Based Decision Framework – €5,900',
        }),
      ],
      separately: 33400,
      price: 28000,
    },
  ];
};
