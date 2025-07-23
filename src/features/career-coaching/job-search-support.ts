import { getTranslations } from 'next-intl/server';

export const JobSearchSupportProducts = async () => {
  const t = await getTranslations('jobSearchSupportProducts');

  return [
    {
      id: 'cv-cover-letter-review',
      title: t('cvCoverLetterReview', { fallback: 'CV & Cover Letter Review' }),
      description: t('cvCoverLetterReviewDescription', {
        fallback: 'Professional review and optimization for modern job markets.',
      }),
      price: 3800,
    },
    {
      id: 'linkedin-positioning-strategy',
      title: t('linkedinPositioningStrategy', { fallback: 'LinkedIn Positioning Strategy' }),
      description: t('linkedinPositioningStrategyDescription', {
        fallback:
          'Strategic profile setup to match career goals and attract the right opportunities.',
      }),
      price: 4500,
    },
    {
      id: 'personal-branding-strategy',
      title: t('personalBrandingStrategy', { fallback: 'Personal Branding Strategy' }),
      description: t('personalBrandingStrategyDescription', {
        fallback: 'Build a clear message across your documents and platforms.',
      }),
      price: 6900,
    },
    {
      id: 'job-market-navigation-session',
      title: t('jobMarketNavigationSession', { fallback: 'Job Market Navigation Session' }),
      description: t('jobMarketNavigationSessionDescription', {
        fallback: 'Understand where and how to search based on your profile.',
      }),
      price: 4200,
    },
    {
      id: 'job-application-planning',
      title: t('jobApplicationPlanning', { fallback: 'Job Application Planning' }),
      description: t('jobApplicationPlanningDescription', {
        fallback: 'Create a structured plan for targeted applications and follow-ups.',
      }),
      price: 4700,
    },
    {
      id: 'hidden-job-market-strategy',
      title: t('hiddenJobMarketStrategy', { fallback: 'Hidden Job Market Strategy' }),
      description: t('hiddenJobMarketStrategyDescription', {
        fallback: 'Techniques to access unadvertised roles through outreach and positioning.',
      }),
      price: 5600,
    },
  ];
};
