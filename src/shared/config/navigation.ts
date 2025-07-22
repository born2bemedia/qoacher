import { useTranslations } from 'next-intl';

export const Navigation = () => {
  const t = useTranslations('navigation');

  return [
    {
      label: t('services', { fallback: 'Services' }),
      list: [
        {
          label: t('careerCoaching', { fallback: 'Career Coaching' }),
          href: '/career-coaching',
        },
        {
          label: t('personalCoaching', { fallback: 'Personal Coaching' }),
          href: '/personal-coaching',
        },
        {
          label: t('communicationAndRelationshipCoaching', {
            fallback: 'Communication and Relationship Coaching',
          }),
          href: '/communication-and-relationship-coaching',
        },
        {
          label: t('growthAndLongTermPlanning', {
            fallback: 'Growth and Long-Term Planning',
          }),
          href: '/growth-and-long-term-planning',
        },
      ],
    },
    {
      label: t('packages', { fallback: 'Packages' }),
      href: '/packages',
    },
    {
      label: t('programs', { fallback: 'Programs' }),
      href: '/programs',
    },
    {
      label: t('menu', { fallback: 'Menu' }),
      list: [
        {
          label: t('aboutTheProject', { fallback: 'About the Project' }),
          href: '/about-the-project',
        },
        {
          label: t('selfImprovement', { fallback: 'Self Improvement' }),
          href: '/self-improvement',
        },
        {
          label: t('contacts', { fallback: 'Contacts' }),
          href: '/contacts',
        },
      ],
    },
  ];
};
