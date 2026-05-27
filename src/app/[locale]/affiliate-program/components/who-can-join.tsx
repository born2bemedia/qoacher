'use client';

import { useTranslations } from 'next-intl';

import { Divider } from '@/shared/ui/components/atoms/divider';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const AffiliateProgramWhoCanJoin = () => {
  const t = useTranslations('affiliateProgramWhoCanJoin');

  const items = [
    {
      id: 'content-creators',
      title: t('contentCreators', {
        fallback: 'Content Creators',
      }),
      description: t('contentCreatorsDescription', {
        fallback: 'Bloggers, influencers, YouTubers, and podcast creators.',
      }),
    },
    {
      id: 'media-platforms',
      title: t('mediaPlatforms', {
        fallback: 'Media Platforms',
      }),
      description: t('mediaPlatformsDescription', {
        fallback: 'Websites, online magazines, communities, and educational platforms.',
      }),
    },
    {
      id: 'coaches-educators',
      title: t('coachesEducators', {
        fallback: 'Coaches & Educators',
      }),
      description: t('coachesEducatorsDescription', {
        fallback: 'Professionals sharing self-improvement, career, or relationship content.',
      }),
    },
    {
      id: 'community-owners',
      title: t('communityOwners', {
        fallback: 'Community Owners',
      }),
      description: t('communityOwnersDescription', {
        fallback: 'Newsletter creators, forum owners, and audience-based projects.',
      }),
    },
  ];

  return (
    <SectionLayout className="gap-12">
      <FadeIn>
        <Title as="h2" size="3xl" className="text-center">
          {t('title', {
            fallback: 'Who Can Join',
          })}
        </Title>
      </FadeIn>
      <FadeIn className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {items.map((item) => (
          <article key={item.id} className="border-light-gray flex flex-col gap-3 border p-6">
            <Title as="h3" size="lg" className="leading-[1.389]">
              {item.title}
            </Title>
            <Divider className="bg-light-gray" />
            <Text className="leading-[1.286]">{item.description}</Text>
          </article>
        ))}
      </FadeIn>
    </SectionLayout>
  );
};
