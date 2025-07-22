import { useTranslations } from 'next-intl';

export const PolicyNavigation = () => {
  const t = useTranslations('policyNavigation');

  return [
    {
      label: t('termsOfUse', { fallback: 'Terms of Use' }),
      href: '/terms-of-service',
    },
    {
      label: t('privacyNotice', { fallback: 'Privacy Notice' }),
      href: '/privacy-notice',
    },
    {
      label: t('refundPolicy', { fallback: 'Refund Policy' }),
      href: '/refund-policy',
    },
    {
      label: t('cookiePolicy', { fallback: 'Cookie Policy' }),
      href: '/cookie-policy',
    },
  ];
};
