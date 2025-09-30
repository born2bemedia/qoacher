'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/features/contact-form/ui';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';
import { FacebookIcon, InstagramIcon, XIcon } from '@/shared/ui/icons/fill/socials';
import { MailIcon } from '@/shared/ui/icons/outline/mail';
import { PhoneIcon } from '@/shared/ui/icons/outline/phone';

export const ContactMain = () => {
  const t = useTranslations('contactMain');
  return (
    <SectionLayout className="flex flex-row p-0 max-md:flex-col w-full max-md:p-0">
      <div className="w-1/2 pt-[100px] pr-[100px] pb-[100px] pl-[165px] flex flex-col gap-12 max-md:w-full max-md:px-[16px] max-md:py-[32px]">
        <FadeIn className="flex flex-col gap-3 pb-12 border-b-1 border-b-[#E9E9E9]">
          <Title as="h1" className="text-left text-[38px] max-md:text-[32px]">
            <span
              dangerouslySetInnerHTML={{
                __html: t('title', {
                  fallback: 'Personal Growth Starts <br/>with a Single Step',
                }),
              }}
            />
          </Title>
          <Text>
            {t('description', {
              fallback: 'Questions. Guidance. Next steps. We’re here when you’re ready.',
            })}
          </Text>
        </FadeIn>
        <FadeIn className="flex flex-col gap-6 pb-12 border-b-1 border-b-[#E9E9E9]">
          <Title as="h3" className="text-left text-[24px]">
            {t('otherWays', {
              fallback: 'Other Ways to Contact Us',
            })}
          </Title>
          <div className="flex items-center gap-6">
            <span className="flex max-w-[190px] w-full items-center gap-1.5">
              <PhoneIcon />
              <Link href="tel:+447447846750">
                <Text size="sm" weight={300}>
                  +447447846750
                </Text>
              </Link>
            </span>
            <span className="flex max-w-[190px] w-full items-center gap-1.5">
              <MailIcon />
              <Link href="mailto:info@qoacher.com">
                <Text size="sm" weight={300}>
                  info@qoacher.com
                </Text>
              </Link>
            </span>
          </div>
          {/* <div className="flex flex-row gap-6 max-md:flex-col">
            <div className="flex flex-col gap-[6px]">
              <Title className="text-left text-[16px] max-md:text-[16px]">
                {t('forBusinessCorrespondence', {
                  fallback: 'For Business Correspondence:',
                })}
              </Title>
              <Text className="text-left text-[14px]">
                {t('forBusinessCorrespondenceDescription', {
                  fallback: 'Registration address here',
                })}
              </Text>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Title className="text-left text-[16px] max-md:text-[16px]">
                {t('officeLocation', {
                  fallback: 'Office Location:',
                })}
              </Title>
              <Text className="text-left text-[14px]">
                {t('officeLocationDescription', {
                  fallback: 'Office address here',
                })}
              </Text>
            </div>
          </div> */}
        </FadeIn>
        <FadeIn className="flex gap-6">
          <Link
            href="https://www.facebook.com/qoachercom/ "
            className="w-[52px] h-[52px] flex items-center justify-center border-1 border-[#808080]"
          >
            <FacebookIcon />
          </Link>
          {/* <Link
            href="#"
            className="w-[52px] h-[52px] flex items-center justify-center border-1 border-[#808080]"
          >
            <YoutubeIcon />
          </Link> */}
          <Link
            href="https://www.instagram.com/qoacher/"
            className="w-[52px] h-[52px] flex items-center justify-center border-1 border-[#808080]"
          >
            <InstagramIcon />
          </Link>
          {/* <Link
            href="#"
            className="w-[52px] h-[52px] flex items-center justify-center border-1 border-[#808080]"
          >
            <LinkedinIcon />
          </Link> */}
          <Link
            href="https://x.com/SocialsSoc95967 "
            className="w-[52px] h-[52px] flex items-center justify-center border-1 border-[#808080]"
          >
            <XIcon />
          </Link>
        </FadeIn>
      </div>
      <div className="w-1/2 pt-[100px] pr-[100px] pb-[100px] pl-[100px] bg-black flex flex-col gap-12 max-md:w-full max-md:px-[16px] max-md:py-[32px]">
        <Title as="h2" size="3xl" className="text-left text-white">
          <span
            dangerouslySetInnerHTML={{
              __html: t('formTitle', {
                fallback: 'Send Us a Message',
              }),
            }}
          />
        </Title>
        <ContactForm
          fieldClassName="bg-black text-white border-[#323232]"
          buttonClassName="bg-white text-black border-white"
        />
      </div>
    </SectionLayout>
  );
};
