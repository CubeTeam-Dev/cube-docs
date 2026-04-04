import { defineCollection } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "starlight-blog/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: (context) => {
      const schema = docsSchema({
        extend: (ctx) => blogSchema(ctx),
      });
      const resolvedSchema = typeof schema === "function" ? schema(context) : schema;
      return resolvedSchema.transform((data: any) => {
        if ("date" in data && data.date instanceof Date && data.date > new Date()) {
          data.draft = true;
        }
        return data;
      });
    },
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
