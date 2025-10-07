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
          <div className="flex items-center justify-between gap-20 max-lg:gap-6">
            <span className="flex w-1/2 max-md:w-full items-center gap-1.5">
              <PhoneIcon />
              <Link href="tel:+447447846750">
                <Text size="sm" weight={300}>
                  +447447846750
                </Text>
              </Link>
            </span>
            <span className="flex w-1/2 max-md:w-full items-center gap-1.5">
              <MailIcon />
              <Link href="mailto:info@qoacher.com">
                <Text size="sm" weight={300}>
                  info@qoacher.com
                </Text>
              </Link>
            </span>
          </div>
          <div className="flex flex-row gap-20 max-lg:gap-6 justify-between max-md:flex-col">
            <div className="flex w-1/2 max-md:w-full flex-col gap-[6px]">
              <Title className="text-left text-[16px] max-md:text-[16px]">
                {t('forBusinessCorrespondence', {
                  fallback: 'For Business Correspondence:',
                })}
              </Title>
              <Text className="text-left text-[14px]">
                2nd Floor College House, 17 King Edwards Road, Ruislip, London, United Kingdom, HA4
                7AE
              </Text>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.6616254242003!2d-0.4286821!3d51.574436399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766c5ef9eeaaab%3A0x58f9eeec566a9e8!2sHouse%2C%202nd%20Floor%2C%2017%20King%20Edwards%20Rd%2C%20London%2C%20Ruislip%20HA4%207AE%2C%20UK!5e0!3m2!1sen!2sua!4v1759837065717!5m2!1sen!2sua"
                width="215"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="max-md:w-full"
              />
            </div>
            <div className="flex w-1/2 max-md:w-full flex-col gap-[6px]">
              <Title className="text-left text-[16px] max-md:text-[16px]">
                {t('officeLocation', {
                  fallback: 'Office Location:',
                })}
                <br />
              </Title>
              <Text className="text-left text-[14px]">
                Office GI.1.07, 60 Grays Inn Rd, London, United Kingdom, WC1X 8LU
              </Text>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0!2d-0.119!3d51.521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aceb1c0ea1f%3A0x0!2s60%20Gray’s%20Inn%20Rd%2C%20London%20WC1X%208LU%2C%20UK!5e0!3m2!1sen!2sua!4v0000000000000"
                width="215"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-auto max-md:w-full"
              />
            </div>
          </div>
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
