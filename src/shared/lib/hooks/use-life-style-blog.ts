import { useTranslations } from 'next-intl';

export const useLifeStyleBlog = () => {
  const t = useTranslations('homeLifeStyleBlog');

  return {
    title: t('title', {
      fallback: 'Have a Lifestyle Blog?',
    }),
    description: t('description', {
      fallback: 'See the Qoacher Affiliate Program.',
    }),
    linkTitle: t('linkTitle', {
      fallback: 'Check Now',
    }),
  };
};
