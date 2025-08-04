import { getTranslations } from 'next-intl/server';

export const ProgramsProducts = async () => {
  const t = await getTranslations('programsProducts');

  return [
    {
      id: 'buildingUnshakableBoundaries',
      title: t('buildingUnshakableBoundariesTitle', {
        fallback: 'Building Unshakable Boundaries: 10 Days to Take Back Your Life',
      }),
      description: t('buildingUnshakableBoundariesDescription', {
        fallback:
          'Weak or missing boundaries drain energy, create resentment, and leave you feeling out of control. This 10‑day program helps you set clear limits, say “no” without guilt, and take back control of your time, energy, and relationships — at your own pace.',
      }),
      includes: [
        t('buildingUnshakableBoundariesIncludes1', {
          fallback: 'Why Boundaries Matter More Than Ever',
        }),
        t('buildingUnshakableBoundariesIncludes2', {
          fallback: 'Spotting Boundary Violations',
        }),
        t('buildingUnshakableBoundariesIncludes3', {
          fallback: 'The Cost of Saying “Yes” Too Much',
        }),
        t('buildingUnshakableBoundariesIncludes4', {
          fallback: 'Defining Your Personal Non‑Negotiables',
        }),
        t('buildingUnshakableBoundariesIncludes5', {
          fallback: 'The Language of Boundaries',
        }),
        t('buildingUnshakableBoundariesIncludes6', {
          fallback: 'Handling Pushback and Manipulation',
        }),
        t('buildingUnshakableBoundariesIncludes7', {
          fallback: 'Emotional Boundaries',
        }),
        t('buildingUnshakableBoundariesIncludes8', {
          fallback: 'Boundaries at Work',
        }),
        t('buildingUnshakableBoundariesIncludes9', {
          fallback: 'Boundaries in Relationships',
        }),
        t('buildingUnshakableBoundariesIncludes10', {
          fallback: 'Making Boundaries a Habit',
        }),
      ],
      price: '4,200',
    },
    {
      id: 'breakingTheCycleOfOverthinking',
      title: t('breakingTheCycleOfOverthinkingTitle', {
        fallback: 'Breaking the Cycle of Overthinking: 10 Days to Clearer Decisions',
      }),
      description: t('breakingTheCycleOfOverthinkingDescription', {
        fallback:
          'Overthinking steals time, energy, and peace of mind — and it keeps people stuck. This 10‑day program helps you break the mental loops, make decisions faster, and free yourself from the constant “what ifs” that drain your life.',
      }),
      includes: [
        t('breakingTheCycleOfOverthinkingIncludes1', {
          fallback: 'What Overthinking Really Is',
        }),
        t('breakingTheCycleOfOverthinkingIncludes2', {
          fallback: 'Spotting the Triggers',
        }),
        t('breakingTheCycleOfOverthinkingIncludes3', {
          fallback: 'Decision Paralysis Explained',
        }),
        t('breakingTheCycleOfOverthinkingIncludes4', {
          fallback: 'The Cost of Endless “What Ifs”',
        }),
        t('breakingTheCycleOfOverthinkingIncludes5', {
          fallback: 'Interrupting the Thought Loop',
        }),
        t('breakingTheCycleOfOverthinkingIncludes6', {
          fallback: 'Separating Facts from Stories',
        }),
        t('breakingTheCycleOfOverthinkingIncludes7', {
          fallback: 'Setting Thinking Limits',
        }),
        t('breakingTheCycleOfOverthinkingIncludes8', {
          fallback: 'Replacing Rumination with Action',
        }),
        t('breakingTheCycleOfOverthinkingIncludes9', {
          fallback: 'Making Peace with Imperfect Decisions',
        }),
        t('breakingTheCycleOfOverthinkingIncludes10', {
          fallback: 'Living Beyond Overthinking',
        }),
      ],
      price: '3,500',
    },
  ];
};
