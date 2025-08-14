'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/components/atoms/button';
import { Title } from '@/shared/ui/components/atoms/title';
import { CheckList } from '@/shared/ui/icons/fill/check-list';
import { RepairGear } from '@/shared/ui/icons/fill/repair-gear';
import { TwoBox } from '@/shared/ui/icons/fill/two-box';

import { Link } from '@/i18n/navigation';

const getButtons = ({ t }: { t: ReturnType<typeof useTranslations> }) => [
  { label: t('allServices', { fallback: 'Services' }), icon: RepairGear, url: '/services' },
  { label: t('packages', { fallback: 'Packages' }), icon: TwoBox, url: '/packages' },
  { label: t('programs', { fallback: 'Programs' }), icon: CheckList, url: '/programs' },
];

export const OtherServices = () => {
  const t = useTranslations('orders');

  return (
    <section className="flex flex-col gap-10 border border-[rgba(128,128,128,0.15)] p-6">
      <Title as="h2" size="2xl" className="text-center uppercase">
        {t('explore')}
      </Title>
      <footer className="flex items-center gap-6 max-lg:flex-col">
        {getButtons({ t }).map(({ label, icon: Icon, url }) => (
          <Link key={label} href={url} className="w-full">
            <Button variant="support" fullWidth>
              <Icon />
              {label}
            </Button>
          </Link>
        ))}
      </footer>
    </section>
  );
};
