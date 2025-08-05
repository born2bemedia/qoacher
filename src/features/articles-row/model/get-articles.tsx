export const getArticles = async (locale: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/articles?locale=${locale}`);
  const data = await response.json();
  console.log(data.docs);
  return data.docs;
};

export const getArticleBySlug = async (slug: string, locale: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/articles/?locale=${locale}&where[slug][equals]=${slug}`,
    {
      cache: 'no-store',
    }
  );
  const data = await response.json();
  console.log(data.docs[0]);
  return data.docs[0];
};
