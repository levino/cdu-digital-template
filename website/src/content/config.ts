import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";

const memberSchema = z.object({
  person: reference("people"),
  amt: z.string(),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: ({ image }) =>
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      address: z.string().optional(),
      image: image().optional(),
      imageUrl: z.string().url().optional(), // External image URL fallback
    }),
});

const vorstand = defineCollection({
  loader: file("src/content/vorstand.yaml"),
  schema: memberSchema,
});

const fraktionGemeinde = defineCollection({
  loader: file("src/content/fraktion-gemeinde.yaml"),
  schema: memberSchema,
});

const fraktionKreistag = defineCollection({
  loader: file("src/content/fraktion-kreistag.yaml"),
  schema: memberSchema,
});

// News collection
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      author: z.string().optional(),
      category: z
        .enum(["Politik", "Veranstaltung", "Presse", "Sonstiges"])
        .default("Sonstiges"),
      image: image().optional(),
      excerpt: z.string().optional(),
    }),
});

// Events collection
const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    address: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["upcoming", "completed", "cancelled"]).default("upcoming"),
    organizer: z.string().optional(),
  }),
});

export const collections = {
  people,
  vorstand,
  "fraktion-gemeinde": fraktionGemeinde,
  "fraktion-kreistag": fraktionKreistag,
  news,
  events,
};
