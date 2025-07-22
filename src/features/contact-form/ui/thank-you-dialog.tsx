'use client';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';

export const ThankYouDialog = ({ onClose }: { onClose: () => void }) => {
  return (
    <section className="flex flex-col gap-6 text-center">
      <Text>
        Your request has been sent. Our coaches will get back to you shortly.
      </Text>
      <Button onClick={onClose} fullWidth>
        Continue
      </Button>
    </section>
  );
};
