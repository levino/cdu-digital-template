import { defineCollection, z } from "astro:content";
import { createDocsCollection } from "@levino/shipyard-docs";
import { glob } from "astro/loaders";

const docs = defineCollection(createDocsCollection("./docs"));

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
});

const berichte = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./berichte" }),
  schema: postSchema,
});

const antraege = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./antraege" }),
  schema: postSchema,
});

export const collections = { docs, berichte, antraege };
