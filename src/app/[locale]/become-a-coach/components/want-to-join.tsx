'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { CoacherForm } from '@/features/сoacher-form/form';

import { Button } from '@/shared/ui/components/atoms/button';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';

export const BecomeACoachWantJoin = () => {
  const t = useTranslations('becomeACoachWantJoin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FadeIn className="relative flex flex-col items-center justify-center gap-6 py-24 px-12 text-center max-md:px-4 max-md:py-12">
        <div className="z-10 text-center">
          <Title as="h2" size="3xl" color="light" className="leading-[1.4063]">
            {t('title', {
              fallback: 'Want to Join?',
            })}
          </Title>
        </div>

        <Button
          variant="light"
          className="z-10 text-sm border-none leading-[1.286] min-w-45 justify-center"
          onClick={() => setIsModalOpen(true)}
        >
          {t('apply', { fallback: 'Apply' })}
        </Button>

        <Image
          className="object-cover"
          src="/images/become-a-coach/want-join.jpg"
          alt="Want to Join?"
          unoptimized
          fill
        />
      </FadeIn>
      <CoacherForm isOpen={isModalOpen} onCloseAction={() => setIsModalOpen(false)} />
    </>
  );
};
