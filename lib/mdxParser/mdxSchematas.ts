import { z } from "zod";
import { Content } from "./mdxParserTypes";

// Constants as union types
export const VALID_MATURITIES = ["sandbox", "incubation", "graduated"] as const;
export const CONTENT_TYPES = ["project", "training", "post", "event", "page", "cluster", "faqs"] as const;
export const EVENT_STATUSES = ["TENTATIVE", "CONFIRMED", "CANCELLED"] as const;
export const TAG_CATEGORIES = ["type", "tool", "cost", "mode"] as const;

// Type Definitions
export type ContentType = (typeof CONTENT_TYPES)[number];
export type Maturity = (typeof VALID_MATURITIES)[number];
export type EventStatus = (typeof EVENT_STATUSES)[number];
export type TagCategory = (typeof TAG_CATEGORIES)[number];
export type TrainingTag = `${TagCategory}::${string}`;

// Common Types
export type ContentLink = {
  url: string;
  label: string;
};

const ContentLinkSchema = z.object({
  url: z.string().url(),
  label: z.string(),
});

const BaseMetadataSchema = z.object({
  links: z.array(ContentLinkSchema),
});

// Metadata Types
const ProjectMetadataSchema = BaseMetadataSchema.extend({
  featured: z.boolean(),
  maturity: z.enum(VALID_MATURITIES),
});

const TrainingMetadataSchema = BaseMetadataSchema.extend({
  level: z.string(),
  duration: z.string(),
  author: z.string(),
  image: z.string(),
  tags: z.array(z.string()),
});

const EventMetadataSchema = BaseMetadataSchema.extend({
  start: z.date(),
  duration: z.object({
    seconds: z.number().optional(),
    minutes: z.number().optional(),
    hours: z.number().optional(),
    days: z.number().optional(),
    weeks: z.number().optional(),
  }).optional(),
  end: z.date().optional(),
  location: z.string().optional(),
  geo: z.object({
    lat: z.number(),
    lon: z.number(),
  }).optional(),
  status: z.enum(EVENT_STATUSES),
  organizer: z.object({
    name: z.string(),
    email: z.string().email(),
  }).optional(),
  url: z.string().url().optional(),
  isPast: z.boolean(),
});

const PageMetadataSchema = BaseMetadataSchema.extend({
  event: z.record(z.unknown()).optional(),
  project: z.record(z.unknown()).optional(),
});

// Base Content Type
const BaseContentSchema = z.object({
  title: z.string(),
  type: z.enum(CONTENT_TYPES),
  description: z.string(),
  slug: z.string(),
  content: z.string(),
});

// Content Types
export const OscProjectSchema = BaseContentSchema.extend({
  type: z.literal("project"),
  metadata: ProjectMetadataSchema,
});

const OscTrainingSchema = BaseContentSchema.extend({
  type: z.literal("training"),
  metadata: TrainingMetadataSchema,
});

const OscEventSchema = BaseContentSchema.extend({
  type: z.literal("event"),
  metadata: EventMetadataSchema,
});

const OscPageSchema = BaseContentSchema.extend({
  type: z.literal("page"),
  metadata: PageMetadataSchema,
});

const OscClusterSchema = BaseContentSchema.extend({
  type: z.literal("cluster"),
  metadata: z.object({
    image: z.string().optional(),
    links: z.array(ContentLinkSchema).optional(),
    partners: z.array(z.object({
      url: z.string().url(),
      name: z.string(),
      log: z.string().url(),
    })).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const OscPostSchema = BaseContentSchema.extend({
  type: z.literal("post"),
  metadata: z.record(z.unknown()),
});

const OscFaqsSchema = BaseContentSchema.extend({
  type: z.literal("faqs"),
  metadata: z.object({}),
});

export const ContentSchema = z.union([
  OscProjectSchema,
  OscTrainingSchema,
  OscEventSchema,
  OscPageSchema,
  OscClusterSchema,
  OscPostSchema,
  OscFaqsSchema,
]);

// Validator and Parser Types
export type ContentValidator<T extends Content> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: T
) => T;

export type Parser<T> = (
  content: string,
  slug: string,
  metadata: unknown
) => T;

// Default content with proper typing
export const contentDefaults: Record<ContentType, Content> = {
  project: {
    type: "project",
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {
      featured: false,
      maturity: "sandbox",
      links: [],
    },
  },
  training: {
    type: "training",
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {
      author: "",
      image: "",
      tags: [],
      level: "beginner",
      duration: "1h",
      links: [],
    },
  },
  post: {
    type: "post",
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {},
  },
  event: {
    type: "event",
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {
      status: "TENTATIVE",
      start: new Date(),
      isPast: false,
      links: [],
    },
  },
  page: {
    type: "page",
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {
      links: [],
      event: {},
      project: {},
    },
  },
  cluster: {
    type: "cluster",
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {
      image: "",
      links: [],
      partners: [],
      tags: [],
    },
  },
  faqs: {
    type: "faqs",
    title: "",
    slug: "",
    content: "",
    description: "",
    metadata: {},
  },
} as const;