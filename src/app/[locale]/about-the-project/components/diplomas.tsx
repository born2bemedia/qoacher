'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const Diplomas = () => {
  const t = useTranslations('aboutTheProjectDiplomas');

  return (
    <>
      <FadeIn>
        <SectionLayout className={cn('items-center flex-col gap-[48px]')}>
          <Title as="h2" size="2xl">
            {t('title1', {
              fallback: '47 diplomas & certifications',
            })}
          </Title>
          <div className="flex gap-6 flex-wrap max-md:w-full">
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo1.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo2.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo3.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo4.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo5.png"
                alt="diploma" 
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo6.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo7.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo8.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo9.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo10.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo11.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
            <div className="w-[calc(25%-18px)] p-6 border-[#E9E9E9] border-1 flex items-center justify-center max-md:w-[calc(50%-12px)]">
              <Image
                className="w-full h-auto"
                src="/images/about-the-project/logo12.png"
                alt="diploma"
                width={211}
                height={211}
                unoptimized
              />
            </div>
          </div>
        </SectionLayout>
      </FadeIn>
    </>
  );
};
