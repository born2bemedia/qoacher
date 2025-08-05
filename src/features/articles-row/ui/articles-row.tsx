import Image from 'next/image';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import { Button } from '@/shared/ui/components/atoms/button';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

import { getArticles } from '../model/get-articles';
import type { Article } from '../model/type';

export const ArticlesRow = async () => {
  const locale = await getLocale();
  const articles = await getArticles(locale);
  const t = await getTranslations('selfImprovement');

  return (
    <SectionLayout className="gap-12">
      <div className="flex gap-6 flex-wrap">
        {articles.map((article: Article) => (
          <Link
            href={`/self-improvement/${article.slug}`}
            key={article.id}
            className="w-[calc(50%-12px)] flex flex-col justify-between gap-12 p-6 border-1 border-[#E9E9E9] max-md:w-full max-md:p-3"
          >
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-[278px] object-cover mb-6 max-md:h-[174px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CMS_URL}${article.image.url}`}
                  alt={article.title}
                  fill
                />
                <div className="absolute top-3 left-3 py-3 px-6   bg-white">
                  <Title as="h3" className="text-[16px] max-md:text-[14px]">
                    {article.category}
                  </Title>
                </div>
              </div>
              <Title as="h3" className="text-[18px] max-md:text-[18px]">
                {article.title}
              </Title>
              <Text>{article.excerpt}</Text>
            </div>

            <Button className="px-[32px]">
              {t('readMore', {
                fallback: 'Read',
              })}
            </Button>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};
