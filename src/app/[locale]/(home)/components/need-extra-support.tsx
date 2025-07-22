'use client';
import { useTranslations } from 'next-intl';

import { ContactFrame } from '@/features/contact-form/ui/contact-frame';


export const NeedExtraSupport = () => {
  const t = useTranslations('needExtraSupport');

  return (
    <ContactFrame
      title={t('needExtraSupportTitle', {
        fallback: 'Need Extra Support?',
      })}
      description={t('needExtraSupportDescription', {
        fallback:
          'Don’t hesitate to contact us. We’re available 24/7 to help you move forward, overcome obstacles, and choose the right path for your growth.',
      })}
    />
  );
};
