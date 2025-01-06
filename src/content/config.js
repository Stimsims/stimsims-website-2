import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string(),
    cover: image().refine((img) => img.width >= 300, {
      message: "Cover image must be at least 300 pixels wide!",
    }),
    coverAlt: z.string(),
    tags: z.array(z.string()),
    published: z.boolean()
  }),
});

// Define the products collection
const productCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().refine((img) => img.width >= 300, {
      message: "Product image must be at least 300 pixels wide!",
    }),
    coverAlt: z.string(),
    tags: z.array(z.string())
  }),
});

export const collections = {
  posts: postCollection,
  products: productCollection, // Add the products collection
};