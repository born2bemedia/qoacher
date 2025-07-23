'use client';

import { useTranslations } from 'next-intl';

import type { CareerProduct } from '@/shared/lib/types/type';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

import { Button } from '../atoms/button';

export const Products = ({ title, products }: { title: string; products: CareerProduct[] }) => {
  const t = useTranslations('products');

  return (
    <SectionLayout className="gap-12">
      <FadeIn className="mx-auto flex w-full flex-col gap-3 text-center max-md:w-full">
        <Title as="h2" size="3xl" className="text-center">
          {title}
        </Title>
      </FadeIn>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <FadeIn key={product.id} className="flex flex-col justify-between gap-12 p-6 border-1 border-[#E9E9E9]">
            <div className="flex flex-col gap-6">
              <Title as="h3" size="2xl" className="text-left text-[18px] ">
                {product.title}
              </Title>
              <Text>{product.description}</Text>
              <Title className="text-[24px] mt-6">€{product.price}</Title>
            </div>
            <Button className="w-full text-center justify-center">
              {t('order', {
                fallback: 'Order Now',
              })}
            </Button>
          </FadeIn>
        ))}
      </div>
    </SectionLayout>
  );
};
