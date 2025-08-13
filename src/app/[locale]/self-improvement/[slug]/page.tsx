import type { Metadata } from 'next';

import { getArticleBySlug } from '@/features/articles-row/model/get-articles';

import { ArticleContent } from '../components/article-content';
import { ArticleHero } from '../components/article-hero';
import { WantToGear } from '../components/want-to-gear';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const data = await getArticleBySlug(slug, locale);

  return {
    title: data.seo_title,
    description: data.set_description,
    openGraph: {
      title: data.seo_title,
      description: data.set_description,
      images: ['https://qoacher.com/meta.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo_title,
      description: data.set_description,
      images: ['https://qoacher.com/meta.jpg'],
    },
  };
}

export default async function SelfImprovementPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = await getArticleBySlug(slug, locale);

  console.log(article);

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
