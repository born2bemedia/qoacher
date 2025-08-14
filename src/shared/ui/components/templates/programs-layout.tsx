'use client';

import { useTranslations } from 'next-intl';

import { addToCart } from '@/features/cart/api/add-to-cart';
import { useCartStore } from '@/features/cart/model/cart.store';

import type { Program } from '@/shared/lib/types/type';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

import { Checkmark } from '../../icons/outline';
import { Button } from '../atoms/button';

export const ProgramsLayout = ({ programs }: { programs: Program[] }) => {
  const t = useTranslations('programsLayout');

  const { setIsCartActive } = useCartStore();

  const priceFormatted = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    });
  };

  return (
    <SectionLayout className="gap-12">
      <div className="w-full grid grid-cols-2 max-lg:grid-cols-1 gap-6 mx-auto justify-center">
        {programs.map((program) => (
          <FadeIn
            key={program.id}
            className="w-full flex flex-col justify-between gap-12 p-6 border-1 border-[#E9E9E9]"
          >
            <div className="flex flex-col gap-6">
              <Title as="h2" className="text-left text-[32px] ">
                {program.title}
              </Title>
              <Text className="text-[14px] pb-6 border-b-1 border-[#E9E9E9] h-[120px]">
                {program.description}
              </Text>
              <Title as="h4" className="text-left text-[18px] ">
                {t('whatsInside', {
                  fallback: 'What’s Inside',
                })}
              </Title>
              <ul className="flex flex-col gap-3">
                {program.includes.map((include) => (
                  <li key={include} className="flex items-center gap-2">
                    <span className="w-[18px] h-[18px] flex items-center justify-center">
                      <Checkmark />
                    </span>
                    <Text className="text-[14px] w-[calc(100% - 26px)]">{include}</Text>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-[40px]">
              <Title className="text-[24px]">{priceFormatted(program.price)}</Title>
              <Button
                className="w-full text-center justify-center"
                onClick={() => {
                  addToCart(program);
                  setIsCartActive(true);
                }}
              >
                {t('joinProgram', {
                  fallback: 'Join Program',
                })}
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionLayout>
  );
};
