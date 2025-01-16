import { defineCollection, z } from 'astro:content';
import { getImage } from "astro:assets";

const postCollection = defineCollection({
  integrations: [
    // Enable image optimization
    'astro:assets',
  ],
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string(),
    // cover: z.string(),
    // twitterImage: z.string(),
    cover: image(),
    twitterImage: image(),
    // twitterImage: image()
    // .transform((src) => {
    //   console.log("twitterImage src", src)
    //   const optimizedImage = getImage({
    //     src, // Path to the image
    //     width: 800, // Desired width
    //     height: 418, // Desired height
    //     format: "webp", // Modern image format for optimization
    //   }).catch(e => {
    //     console.error("twitterImage transformer error", e)
    //   });
    //   return optimizedImage;
    // }),
    coverAlt: z.string(),
    tags: z.array(z.string()),
    published: z.boolean(),
    // images: z.array(image().transform((src) => {
    //   console.log("post image transformer src", src)
    //   const optimizedImage = getImage({
    //     src, // Path to the image
    //     format: "webp", // Modern image format for optimization
    //   }).catch(e => {
    //     console.error("post image transformer error", e)
    //   });
    //   console.log("post image optimisedImage", optimizedImage)
    //   return optimizedImage;
    // }))
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