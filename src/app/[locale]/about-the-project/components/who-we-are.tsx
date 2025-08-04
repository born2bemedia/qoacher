'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/components/atoms/text';
import { Title } from '@/shared/ui/components/atoms/title';
import { FadeIn } from '@/shared/ui/components/templates/fade-in';
import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const WhoWeAre = () => {
  const t = useTranslations('aboutTheProjectWhoWeAre');
  const element = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  const text = t('text1', {
    fallback:
      'Qoacher is a team of 11 professionals with decades of combined experience in psychology, executive coaching, relationship dynamics, and personal development.',
  });

  const { scrollYProgress } = useScroll({
    target: element,
    offset: isMobile ? ['start 0.9', 'start 0.5'] : ['start 0.7', 'start start'],
  });

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  const words = text.split(' ');

  return (
    <>
      <div ref={element} className="p-[265px 0] max-md:p-[64px 0]">
        <FadeIn>
          <SectionLayout className={cn('items-center flex-col gap-[48px]')}>
            <Title as="h2" size="4xl" className="text-center">
              {t('title1', {
                fallback: 'Who We Are',
              })}
            </Title>

            <Text className="text-center text-[32px] flex flex-wrap justify-center gap-2 max-md:text-[24px]">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
              })}
            </Text>
          </SectionLayout>
        </FadeIn>
      </div>
    </>
  );
};

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const characters = word.split('');
  const amount = range[1] - range[0];
  const step = amount / word.length;
  return (
    <span className="relative">
      {characters.map((character, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return <Character key={i} character={character} range={[start, end]} progress={progress} />;
      })}
    </span>
  );
};

const Character = ({
  character,
  range,
  progress,
}: {
  character: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-[0.1]">{character}</span>
      <motion.span style={{ opacity }}>{character}</motion.span>
    </span>
  );
};
