import { defineCollection, z } from "astro:content";

const articulo = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.string().array(),
  }),
});

export const collections = { articulo };
