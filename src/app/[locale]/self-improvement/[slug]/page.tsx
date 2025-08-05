import { getArticleBySlug } from '@/features/articles-row/model/get-articles';

import { ArticleContent } from '../components/article-content';
import { ArticleHero } from '../components/article-hero';
import { WantToGear } from '../components/want-to-gear';

export default async function SelfImprovementPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = await getArticleBySlug(slug, locale);

  return (
    <>
      <ArticleHero
        title={article.title}
        subtitle={article.excerpt}
        category={article.category}
        imgUrl={`${process.env.NEXT_PUBLIC_CMS_URL}${article.image.url}`}
      />
      <ArticleContent content={article.content.root.children} />
      <WantToGear />
    </>
  );
}
