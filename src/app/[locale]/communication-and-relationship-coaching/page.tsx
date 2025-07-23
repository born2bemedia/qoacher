import { getTranslations } from 'next-intl/server';

import {
  ConflictCommunicationSkillsProducts,
  CouplesCoachingProducts,
  PersonalRelationshipCoachingProducts,
  SettingBoundariesProducts,
} from '@/features/communication-and-relationship-coaching';
import { ContactFrame } from '@/features/contact-form/ui/contact-frame';

import { Hero } from '@/shared/ui/components/organisms/hero';
import { Products } from '@/shared/ui/components/templates/products';

import { WantToGear } from './components/want-to-gear';
import { WhyYouNeed } from './components/why-you-need';

export default async function CommunicationAndRelationshipCoachingPage() {
  const t = await getTranslations('communicationAndRelationshipCoaching');

  return (
    <main>
      <Hero
        title={t('title', {
          fallback: 'Communication That Builds <br/>Clarity and Connection',
        })}
        description={t('description', {
          fallback:
            'Boundaries. Conflict. Expression. Get the tools to relate better and speak with confidence.',
        })}
        imgUrl="/images/communication-and-relationship-coaching/hero.png"
      />
      <WhyYouNeed />
      <Products
        title={t('personalRelationshipCoachingTitle', {
          fallback: 'Personal Relationship Coaching',
        })}
        products={await PersonalRelationshipCoachingProducts()}
      />
      <Products
        title={t('couplesCoachingTitle', {
          fallback: 'Couples Coaching',
        })}
        products={await CouplesCoachingProducts()}
      />
      <Products
        title={t('settingBoundariesTitle', {
          fallback: 'Setting Boundaries',
        })}
        products={await SettingBoundariesProducts()}
      />
      <Products
        title={t('conflictCommunicationSkillsTitle', {
          fallback: 'Conflict Communication Skills',
        })}
        products={await ConflictCommunicationSkillsProducts()}
      />
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
