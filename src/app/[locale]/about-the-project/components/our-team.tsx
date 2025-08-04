'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';
import { Checkmark } from '@/shared/ui/icons/outline';

export const OurTeam = () => {
  const t = useTranslations('aboutTheProjectOurTeam');

  return (
    <>
      <FadeIn>
        <SectionLayout
          className={cn('items-center flex-row gap-[124px] max-md:flex-col-reverse max-md:gap-16')}
        >
          <div className="flex w-1/2 flex-col gap-6 max-md:w-full">
            <Title as="h2" size="2xl">
              {t('title1', {
                fallback: 'Our team includes specialists in:',
              })}
            </Title>
            <div className="p-6 border-[#E9E9E9] border-1">
              <div className="mb-6 border-b border-[#E9E9E9] pb-6 flex items-center gap-2">
                <Checkmark />
                <Text>
                  {t('text1', {
                    fallback: 'Career transitions',
                  })}
                </Text>
              </div>

              <div className="mb-6 border-b border-[#E9E9E9] pb-6 flex items-center gap-2">
                <Checkmark />
                <Text>
                  {t('text2', {
                    fallback: 'Emotional resilience',
                  })}
                </Text>
              </div>
              <div className="mb-6 border-b border-[#E9E9E9] pb-6 flex items-center gap-2">
                <Checkmark />
                <Text>
                  {t('text3', {
                    fallback: 'Communication',
                  })}
                </Text>
              </div>
              <div className="mb-6 border-b border-[#E9E9E9] pb-6 flex items-center gap-2">
                <Checkmark />
                <Text>
                  {t('text4', {
                    fallback: 'Long-term growth',
                  })}
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <Checkmark />
                <Text>
                  {t('text4', {
                    fallback: 'etc:)',
                  })}
                </Text>
              </div>
            </div>
            <Text>
              {t('text5', {
                fallback:
                  'So no matter what area of life is in focus, you’ll work with someone who truly understands it.',
              })}
            </Text>
          </div>
          <Image
            className="h-[470px] w-1/2 object-cover max-md:w-full max-md:h-[358px]"
            src="/images/about-the-project/details1.png"
            alt="service"
            width={493}
            height={470}
            unoptimized
          />
        </SectionLayout>
      </FadeIn>
    </>
  );
};
