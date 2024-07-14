import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().url().optional(),
        author: z.string(),
    })
})

const leetcode = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        difficulty: z.string(),
        tags: z.array(z.string()),
        pubDate: z.coerce.date().default(() => new Date()),
    })
})

export const collections = {articles, leetcode}