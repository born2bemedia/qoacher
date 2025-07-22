'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';

export const ThankYouDialog = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('contactForm');

  return (
    <section className="flex flex-col gap-6 text-center">
      <Text>
        {t('success_description', {
          fallback:
            'Your request has been sent. Our coaches will get back to you shortly.',
        })}
      </Text>
      <Button onClick={onClose} fullWidth>
        {t('continue', { fallback: 'Continue' })}
      </Button>
    </section>
  );
};
