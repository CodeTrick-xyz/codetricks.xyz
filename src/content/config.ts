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

export const collections = {articles}