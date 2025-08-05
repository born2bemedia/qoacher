import { renderBlock, type RichTextBlock } from '@/features/articles-row/model/renderBlock';

import { SectionLayout } from '@/shared/ui/components/templates/section-layout';

export const ArticleContent = ({ content }: { content: RichTextBlock[] }) => {
  return (
    <SectionLayout>
      <div className="w-[840px] mx-auto max-md:w-full">
        {content.map((child) => renderBlock({ block: child }))}
      </div>
    </SectionLayout>
  );
};
