'use client';

import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 p-[165px]">
      <Title color="light" size="5xl">
        Choose the Coaching <br /> That Fits Your Situation
      </Title>
      <Text>Career. Personal life. Relationships. Long-term growth.</Text>
    </section>
  );
};
