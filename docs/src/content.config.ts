import { defineCollection } from "astro:content";
import { createDocsCollection } from "@levino/shipyard-docs";

const docs = defineCollection(createDocsCollection("./docs"));

export const collections = { docs };
