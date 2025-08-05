import React from 'react';
import Link from 'next/link';

import { Title } from '@/shared/ui/components/atoms/title';

// Types for Payload CMS rich text blocks
export type RichTextChild = {
  type: 'link' | 'autolink' | 'text';
  text?: string;
  format?: number;
  fields?: {
    url: string;
  };
  children?: RichTextChild[];
};

export type RichTextBlock = {
  type: 'paragraph' | 'heading' | 'list';
  tag?: 'h2' | 'h3' | 'ul' | 'ol';
  children: RichTextChild[];
};

export type RenderBlockProps = {
  block: RichTextBlock;
  index: number;
};

export type RenderInlineProps = {
  child: RichTextChild;
  index: number;
};

/**
 * Renders inline rich text elements (links, bold text, etc.)
 */
const renderInline = ({ child, index }: RenderInlineProps): React.ReactNode => {
  // Handle autolink (automatically detected links)
  if (child.type === 'autolink') {
    return (
      <Link
        key={index}
        href={child.fields?.url || ''}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {child.children?.map((child, j) => renderInline({ child, index: j }))}
      </Link>
    );
  }

  // Handle manual links
  if (child.type === 'link') {
    return (
      <Link
        key={index}
        href={child.fields?.url || ''}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {child.children?.map((child, j) => renderInline({ child, index: j }))}
      </Link>
    );
  }

  // Handle bold text (format === 1 indicates bold)
  if (child.format === 1) {
    return <strong key={index}>{child.text}</strong>;
  }

  // Handle italic text (format === 2 indicates italic)
  if (child.format === 2) {
    return <span key={index}>{child.text}</span>;
  }

  // Handle bold and italic (format === 3 indicates both)
  if (child.format === 3) {
    return (
      <span key={index}>
        <strong>{child.text}</strong>
      </span>
    );
  }

  // Default case: plain text
  return child.text;
};

// Global counter to ensure unique keys across all blocks
let blockCounter = 0;

/**
 * Renders rich text blocks from Payload CMS
 */
export const renderBlock = ({ block }: Omit<RenderBlockProps, 'index'>): React.ReactNode => {
  // Generate a unique key using a global counter to ensure uniqueness
  const uniqueKey = `${block.type}-${block.tag || 'default'}-${blockCounter++}`;

  switch (block.type) {
    case 'paragraph':
      return (
        <p key={uniqueKey} className="mb-4 leading-relaxed text-left text-[14px]">
          {block.children.map((child, i) => renderInline({ child, index: i }))}
        </p>
      );

    case 'heading': {
      const headingContent = block.children.map((child) => child.text).join(' ');

      if (block.tag === 'h2') {
        return (
          <Title as="h2" key={uniqueKey} className="text-[20px] mt-12 mb-6">
            {headingContent}
          </Title>
        );
      }

      return (
        <Title as="h3" key={uniqueKey} className="text-[14px] font-semibold mb-3 mt-5">
          {headingContent}
        </Title>
      );
    }

    case 'list': {
      const listItems = block.children.map((item, i) => (
        <li key={`${uniqueKey}-item-${i}`} className="mb-0">
          <span className="text-left text-[14px]">
            {item.children?.map((child, j) => renderInline({ child, index: j }))}
          </span>
        </li>
      ));

      if (block.tag === 'ul') {
        return (
          <ul key={uniqueKey} className="list-disc list-inside mb-4 space-y-1 flex flex-col gap-2">
            {listItems}
          </ul>
        );
      }

      if (block.tag === 'ol') {
        return (
          <ol
            key={uniqueKey}
            className="list-decimal list-inside mb-4 space-y-1 flex flex-col gap-2"
          >
            {listItems}
          </ol>
        );
      }

      return null;
    }

    default:
      return null;
  }
};

/**
 * Renders an array of rich text blocks
 */
export const renderRichText = (blocks: RichTextBlock[]): React.ReactNode => {
  return blocks.map((block) => renderBlock({ block }));
};

/**
 * Type guard to check if a value is a valid rich text block
 */
export const isRichTextBlock = (value: unknown): value is RichTextBlock => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    'children' in value &&
    Array.isArray((value as RichTextBlock).children)
  );
};

/**
 * Type guard to check if a value is an array of rich text blocks
 */
export const isRichTextBlocks = (value: unknown): value is RichTextBlock[] => {
  return Array.isArray(value) && value.every(isRichTextBlock);
};
