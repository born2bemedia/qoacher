import { getTranslations } from 'next-intl/server';

import { PackagesProducts } from '@/features/packages/packages';

import { Hero } from '@/shared/ui/components/organisms/hero';
import { PackagesLayout } from '@/shared/ui/components/templates/packages-layout';

import { PackageMore } from './components';

export default async function PackagesPage() {
  const t = await getTranslations('packages');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Complete Packages for <br/>Life’s Biggest Challenges',
        })}
        description={t('description', {
          fallback: 'Career. Balance. Relationships. Long-term change — in one structured plan.',
        })}
        imgUrl="/images/packages/hero.png"
      />
      <PackagesLayout packages={await PackagesProducts()} />
      <PackageMore />
    </main>
  );
}
