'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { HorizontalLayout } from '@/shared/ui/components/templates/horizontal-layout';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const ForOngoingWorks = () => {
  const t = useTranslations('forOngoingWorks');

  return (
    <SectionLayout>
      <HorizontalLayout>
        <FadeIn className="flex flex-col gap-12">
          <section className="flex flex-col gap-6">
            <Title as="h2" size="3xl">
              {t('forOngoingWorksTitle', {
                fallback: 'For Ongoing Work and Bigger Goals',
              })}
            </Title>
            <Text>
              {t('forOngoingWorksDescription', {
                fallback:
                  'If your situation touches multiple areas — work, relationships, personal direction — our packages are built to support you with a structured, ongoing approach.',
              })}
            </Text>
          </section>
          <Button>{t('checkPackages', { fallback: 'Check Packages' })}</Button>
        </FadeIn>
        <Image
          className="h-[450px] w-1/2 object-cover max-md:w-full"
          src="/images/home/tiger-4.jpg"
          alt="tiger4"
          width={531}
          height={450}
          unoptimized
        />
      </HorizontalLayout>
    </SectionLayout>
  );
};
