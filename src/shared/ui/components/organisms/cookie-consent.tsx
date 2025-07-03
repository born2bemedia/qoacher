'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { lsRead, lsWrite } from '@/shared/lib/utils/browser';
import { cn } from '@/shared/lib/utils/styles';
import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = lsRead('isCookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    lsWrite('isCookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => setIsVisible(false);

  return (
    <div
      className={cn(
        'fixed bottom-6 left-6 z-20 flex w-[350px] max-w-full flex-col gap-4 border border-[#E9E9E9] bg-white p-6 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.05)] max-md:w-[88%]',
        !isVisible && 'hidden',
      )}
    >
      <Text color="dark" weight={500} size="2xl">
        Cookie settings
      </Text>
      <Text size="sm">
        Cookies help us improve our website. By clicking &apos;Accept,&apos; you
        agree to our use of cookies for functionality, analytics, and
        personalized content. Learn more in our{' '}
        <Link href="/legal/cookie-policy" className="underline">
          Cookie Policy
        </Link>
        .
      </Text>
      <div className="flex items-center gap-6">
        <Button
          onClick={handleDecline}
          className="text-sm"
          variant="grey"
          fullWidth
        >
          Decline
        </Button>
        <Button onClick={handleAccept} className="text-sm" fullWidth>
          Accept
        </Button>
      </div>
    </div>
  );
};
