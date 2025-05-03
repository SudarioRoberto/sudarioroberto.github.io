// src/content/config.ts - Define content collection schemas
import { z, defineCollection } from 'astro:content';

// Define schema for blog posts
const blogCollection = defineCollection({
  type: 'content', // Use content for Markdown files
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    featuredImage: z.string(),
    author: z.string().optional().default('MicroPig Research Team'),
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    externalUrl: z.string().optional(),
    isExternal: z.boolean().optional().default(false),
  }),
});

// Define schema for videos
const videoCollection = defineCollection({
  type: 'content', // Use content for Markdown files (not data type)
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    thumbnail: z.string(),
    videoId: z.string(), // YouTube or other platform ID
    duration: z.string(),
    presenter: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
  }),
});

// Export collections to register them
export const collections = {
  'blog': blogCollection,
  'videos': videoCollection,
};