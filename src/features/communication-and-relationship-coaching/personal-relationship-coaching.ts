import { getTranslations } from 'next-intl/server';

export const PersonalRelationshipCoachingProducts = async () => {
  const t = await getTranslations('communicationAndRelationshipCoachingProducts');

  return [
    {
      id: 'relationship-clarity-session',
      title: t('relationshipClaritySession', { fallback: 'Relationship Clarity Session' }),
      description: t('relationshipClaritySessionDescription', {
        fallback:
          "Identify what's working, what's not, and what you want in your current or future relationships.",
      }),
      price: 650,
    },
    {
      id: 'dating-readiness-coaching',
      title: t('datingReadinessCoaching', { fallback: 'Dating Readiness Coaching' }),
      description: t('datingReadinessCoachingDescription', {
        fallback:
          'Work through emotional baggage, fears, and beliefs before entering or reentering dating.',
      }),
      price: 900,
    },
    {
      id: 'attachment-style-assessment-support',
      title: t('attachmentStyleAssessmentSupport', {
        fallback: 'Attachment Style Assessment & Support',
      }),
      description: t('attachmentStyleAssessmentSupportDescription', {
        fallback: 'Understand your attachment patterns and how they affect your relationships.',
      }),
      price: 700,
    },
    {
      id: 'rebuilding-after-breakup-divorce',
      title: t('rebuildingAfterBreakupDivorce', {
        fallback: 'Rebuilding After Breakup or Divorce',
      }),
      description: t('rebuildingAfterBreakupDivorceDescription', {
        fallback: 'Structured support for recovery, closure, and moving forward with clarity.',
      }),
      price: 1200,
    },
    {
      id: 'repeating-pattern-deconstruction',
      title: t('repeatingPatternDeconstruction', { fallback: 'Repeating Pattern Deconstruction' }),
      description: t('repeatingPatternDeconstructionDescription', {
        fallback:
          'Identify destructive personal relational cycles and rebuild healthier responses.',
      }),
      price: 1000,
    },
    {
      id: 'rebuilding-self-trust-toxic-relationships',
      title: t('rebuildingSelfTrustToxicRelationships', {
        fallback: 'Rebuilding Self-Trust After Toxic Relationships',
      }),
      description: t('rebuildingSelfTrustToxicRelationshipsDescription', {
        fallback:
          'Focused support to restore your judgment, boundaries, and emotional independence.',
      }),
      price: 1400,
    },
  ];
};
