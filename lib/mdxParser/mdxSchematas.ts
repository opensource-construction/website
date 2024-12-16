import { z } from "zod";
export const VALID_MATURITIES = ["sandbox", "incubation", "graduated"] as const;
export const CONTENT_TYPES = ["project", "training", "post", "event", "page", "cluster", "faqs"] as const;
export const EVENT_STATUSES = ["TENTATIVE", "CONFIRMED", "CANCELLED"] as const;
export const TAG_CATEGORIES = ["type", "tool", "cost", "mode"] as const;


const ContentLinkSchema = z.object({
  url: z.string().url({
    message: "Invalid URL format. Must start with http:// or https://"
  }),
  label: z.string(),
});

const BaseMetadataSchema = z.object({
  links: z.array(ContentLinkSchema).default([]),
});

const BaseContentSchema = z.object({
  title: z.string().default(""),
  type: z.enum(CONTENT_TYPES),
  description: z.string().default(""),
  slug: z.string().default(""),
  content: z.string().default(""),
});

export const Schemas = {
  project: BaseContentSchema.extend({
    type: z.literal("project").default("project"),
    metadata: BaseMetadataSchema.extend({
      featured: z.boolean().default(false),
      maturity: z.enum(VALID_MATURITIES).default("sandbox"),
    }),
  }),

  training: BaseContentSchema.extend({
    type: z.literal("training").default("training"),
    metadata: BaseMetadataSchema.extend({
      author: z.string().default(""),
      image: z.string().default(""),
      tags: z.array(
        z.string().refine(
          (tag) => /^(type|tool|cost|mode)::.+$/.test(tag),
          (val) => ({
            message: `Invalid tag format: ${val}. Must be category::value where category is one of: type, tool, cost, mode`
          })
        )
      ).default([]),
    }),
  }),

  event: BaseContentSchema.extend({
    type: z.literal("event").default("event"),
    metadata: BaseMetadataSchema.extend({
      start: z.date().default(() => new Date()),
      status: z.enum(EVENT_STATUSES).default("TENTATIVE"),
      isPast: z.boolean().default(false),
      duration: z.object({
        seconds: z.number(),
        minutes: z.number(),
        hours: z.number(),
        days: z.number(),
        weeks: z.number(),
      }).partial().optional(),
      end: z.date().optional(),
      location: z.string().optional(),
      geo: z.object({
        lat: z.number(),
        lon: z.number(),
      }).optional(),
      organizer: z.object({
        name: z.string(),
        email: z.string().email(),
      }).optional(),
      url: z.string().url().optional(),
    }),
  }),

  page: BaseContentSchema.extend({
    type: z.literal("page").default("page"),
    metadata: BaseMetadataSchema.extend({
      event: z.record(z.unknown()).optional(),
      project: z.record(z.unknown()).optional(),
    }),
  }),

  cluster: BaseContentSchema.extend({
    type: z.literal("cluster").default("cluster"),
    metadata: BaseMetadataSchema.extend({
      image: z.string().optional(),
      partners: z.array(z.object({
        url: z.string().url(),
        name: z.string(),
        log: z.string().url(),
      })).default([]),
      tags: z.array(z.string()).default([]),
    }),
  }),

  post: BaseContentSchema.extend({
    type: z.literal("post").default("post"),
    metadata: z.record(z.unknown()).default({}),
  }),

  faqs: BaseContentSchema.extend({
    type: z.literal("faqs").default("faqs"),
    metadata: BaseMetadataSchema,
  }),
} as const;

export const contentDefaults = Object.fromEntries(
  Object.entries(Schemas).map(([key, schema]) => [
    key,
    schema.parse({
      type: key,
      metadata: {}
    })
  ])
) as Record<ContentType, Content>;

export type Content = z.infer<typeof Schemas[keyof typeof Schemas]>;
export type ContentType = Content["type"];
export type OscProject = z.infer<typeof Schemas.project>;
export type OscTraining = z.infer<typeof Schemas.training>;
export type OscEvent = z.infer<typeof Schemas.event>;
export type OscPage = z.infer<typeof Schemas.page>;
export type OscCluster = z.infer<typeof Schemas.cluster>;
export type OscPost = z.infer<typeof Schemas.post>;
export type OscFaqs = z.infer<typeof Schemas.faqs>;

