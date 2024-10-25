// src/types.ts
import type { MarkdownHeading } from 'astro';

export interface PostData {
  title: string;
  description: string;
  pubDate: string;
  author: string;
  thumbnail: string;
}

export interface PostProps {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: PostData;
  render: () => Promise<{
    Content: any; // Use 'any' for now if the specific type is not available
    headings: MarkdownHeading[];
    remarkPluginFrontmatter: Record<string, any>;
  }>;
}