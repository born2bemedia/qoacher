'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ContactFrame } from '@/features/contact-form/ui/contact-frame';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { BoxesIcon } from '@/shared/ui/icons/fill/boxes';
import { CartIcon } from '@/shared/ui/icons/fill/cart';
import { GearIcon } from '@/shared/ui/icons/fill/gear';
import { TodoIcon } from '@/shared/ui/icons/fill/todo';

const getButton = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: <GearIcon />,
    label: t('services', { fallback: 'Services' }),
    url: '/services',
  },
  {
    icon: <BoxesIcon />,
    label: t('packages', { fallback: 'Packages' }),
    url: '/packages',
  },
  {
    icon: <TodoIcon />,
    label: t('programs', { fallback: 'Programs' }),
    url: '/programs',
  },
];

export const EmptyCart = () => {
  const t = useTranslations('emptyCart');

  return (
    <section className="flex flex-col">
      <section className="flex h-[700px] flex-col gap-12 items-center justify-center px-[165px] py-[64px] max-md:px-3 max-md:py-8">
        <div className="flex flex-col gap-6 items-center">
          <CartIcon />
          <div className="flex flex-col gap-3">
            <Title size="3xl" weight={400}>
              {t('title', { fallback: 'The Cart Is Empty' })}
            </Title>
            <Text>
              {t('description', { fallback: 'Here’s how you can start your way forward:' })}
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-6 max-md:flex-col max-md:w-full">
          {getButton(t).map((item) => (
            <Link key={item.label} href={item.url} className="w-full">
              <Button className="max-md:w-full max-md:justify-center">
                {item.icon} {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </section>
      <ContactFrame
        title={t('needExtraSupport', { fallback: 'Need Extra Support?' })}
        description={t('needExtraSupportDescription', {
          fallback:
            'Don’t hesitate to contact us. We’re available 24/7 to help you move forward, overcome obstacles, and choose the right path for your growth.',
        })}
        imgUrl="/images/cart/form.jpg"
      />
    </section>
  );
};
