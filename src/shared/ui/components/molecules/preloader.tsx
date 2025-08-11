'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/utils/styles';

export const Preloader = () => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);
    setIsHidden(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setIsHidden(true), 500);
      }, 1500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isHidden) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-all duration-500 ease-in-out',
        isLoading ? 'visible opacity-100' : 'invisible opacity-0',
        !isVisible && 'translate-y-full'
      )}
    >
      <Image
        src="/preloader.gif"
        alt="preloader"
        width={200}
        height={200}
        className={cn(
          'transition-all duration-500 ease-in-out',
          isLoading ? 'scale-100' : 'scale-150 opacity-0',
          !isVisible && '-translate-y-full'
        )}
        unoptimized
      />
    </div>
  );
};
