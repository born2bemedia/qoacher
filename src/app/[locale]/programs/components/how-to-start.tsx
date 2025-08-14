'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const HowToStart = () => {
  const t = useTranslations('programsHowToStart');

  return (
    <>
      <FadeIn>
        <SectionLayout
          className={cn(
            'items-center flex-row flex-wrap gap-x-[96px] gap-y-[64px] max-md:flex-col max-md:gap-8'
          )}
        >
          <Title as="h2" size="4xl" className="text-center w-full">
            {t('programsHowToStartTitle', {
              fallback: 'How to Start',
            })}
          </Title>
          <div className="flex gap-[96px] max-[1150px]:flex-col max-md:gap-8 w-full">
            <div className="flex w-1/2 flex-col gap-6 max-[1150px]:w-full">
              <Title as="h3" size="2xl">
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('title', {
                      fallback:
                        'That’s it. No apps. No accounts. <br/>Just coaching that fits your life.',
                    }),
                  }}
                />
              </Title>
              <div className="p-6 border-[#E9E9E9] border-1">
                <Text className="mb-6 border-b border-[#E9E9E9] pb-6 text-[14px]">
                  <b
                    className="font-bold"
                    dangerouslySetInnerHTML={{
                      __html: t('text1', {
                        fallback: 'Choose a program',
                      }),
                    }}
                  />{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('text2', {
                        fallback: '– pick the topic you need most right now.',
                      }),
                    }}
                  />
                </Text>
                <Text className="mb-6 border-b border-[#E9E9E9] pb-6 text-[14px]">
                  <b
                    className="font-bold"
                    dangerouslySetInnerHTML={{
                      __html: t('text3', {
                        fallback: 'Pay',
                      }),
                    }}
                  />{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('text4', {
                        fallback: '– one simple, upfront payment.',
                      }),
                    }}
                  />
                </Text>
                <Text className="mb-6 border-b border-[#E9E9E9] pb-6 text-[14px]">
                  <b
                    className="font-bold"
                    dangerouslySetInnerHTML={{
                      __html: t('text5', {
                        fallback: 'Get the emails',
                      }),
                    }}
                  />{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('text6', {
                        fallback: '– lessons land in your inbox, no platforms or logins.',
                      }),
                    }}
                  />
                </Text>
                <Text>
                  <b
                    className="font-bold"
                    dangerouslySetInnerHTML={{
                      __html: t('text7', {
                        fallback: 'Ask for help anytime',
                      }),
                    }}
                  />{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t('text8', {
                        fallback: '– every email includes a link to reach your coach.',
                      }),
                    }}
                  />
                </Text>
              </div>
            </div>
            <Image
              className="h-[470px] w-1/2 max-[1150px]:w-full object-cover max-md:h-[358px]"
              src="/images/programs/how-to-start.png"
              alt="service"
              width={493}
              height={470}
              unoptimized
            />
          </div>
        </SectionLayout>
      </FadeIn>
    </>
  );
};
