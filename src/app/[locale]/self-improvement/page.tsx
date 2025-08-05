import { getTranslations } from 'next-intl/server';

import { ArticlesRow } from '@/features/articles-row/ui/articles-row';
import { ContactFrame } from '@/features/contact-form/ui/contact-frame';

import { Hero } from '@/shared/ui/components/organisms/hero';

import { WantToGear } from './components/want-to-gear';

export default async function SelfImprovementPage() {
  const t = await getTranslations('selfImprovement');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Self‑Improvement <br/>Starts Here',
        })}
        description={t('description', {
          fallback: 'Articles. Guides. Insights. Practical steps for a stronger, clearer you.',
        })}
        imgUrl="/images/self-improvement/hero.png"
      />
      <ArticlesRow />
      <WantToGear />
      <ContactFrame
        title={t('needExtraSupport', {
          fallback: 'Need Extra Support?',
        })}
        description={t('needExtraSupportDescription', {
          fallback:
            'Don’t hesitate to contact us. We’re available 24/7 to help you choose the right service and take the next step with confidence.',
        })}
      />
    </main>
  );
}
