import { useTranslations } from 'next-intl';

export const useAreYouCoach = () => {
  const t = useTranslations('areYouCoach');

  return {
    title: t('title', {
      fallback: 'Are You a Coach?',
    }),
    description: t('description', {
      fallback: 'Help people improve their lives! Join Qoacher.',
    }),
    linkTitle: t('linkTitle', {
      fallback: 'See How',
    }),
  };
};
