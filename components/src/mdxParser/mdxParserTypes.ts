
// Constants
export const validMaturities = ["sandbox", "incubation", "graduated"] as const;
export type ContentType = "project" | "training" | "post" | "event";

export type Content = Project | Training | Post | Event;


// Base Types
interface BaseContent {
  title?: string;
  type: ContentType;
}

interface WithDescription {
  description: string;
}

interface WithSlug {
  slug: string;
}

interface WithContent {
  content: string;
}

interface WithLinks {
  links: Array<{ url: string; label: string }>;
}

// Project 
export interface Project extends BaseContent, WithDescription, WithSlug, WithContent, WithLinks {
  type: "project";
  metadata: ProjectMetadata;
}

interface ProjectMetadata {
  featured: boolean;
  maturity: Maturity;
}

export type Maturity = (typeof validMaturities)[number];

// Training
export interface Training extends BaseContent, WithDescription, WithSlug, WithContent, WithLinks {
  type: "training";
  author: string;
  image: string;
  tags: TrainingTag[];
  metadata: TrainingMetadata;
}

interface TrainingMetadata {
  level?: string;
  duration?: string;
}

// Event
export interface Event extends BaseContent, WithDescription, WithSlug, WithContent {
  type: "event";
  metadata: EventMetadata;
}

interface EventMetadata {
  start: string;
  duration?: Duration;
  end?: string;
  location?: string;
  geo?: GeoLocation;
  status?: EventStatus;
  organizer?: Organizer;
  url?: string;
  isPast: boolean;
  startDate: Date;
}

type EventStatus = "TENTATIVE" | "CONFIRMED" | "CANCELLED";

interface GeoLocation {
  lat: number;
  lon: number;
}

interface Organizer {
  name: string;
  email: string;
}

interface Duration {
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  weeks?: number;
}

export type TagCategory = "type" | "tool" | "cost" | "mode";
export type TrainingTag = `${TagCategory}::${string}`;



//TODO: for the time being use custom post -> Should be replaced with the below interface
export interface Post {
  metadata: Record<string, unknown>;
  slug: string;
  content: string;
  title?: string;
  description?: string;
}

// export interface Post extends BaseContent, WithDescription, WithSlug, WithContent {
//   type: "post";
//   metadata: Record<string, unknown>;
// }

// Defaults
export const contentDefaults = {
  project: {
    type: "project" as const,
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {
      featured: false,
      maturity: "sandbox" as Maturity,
    },
    links: [],
  },
  training: {
    type: "training" as const,
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
    },
  },
  post: {
    type: "post" as const,
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {},
  },
  event: {
    type: "event" as const,
    title: "",
    description: "",
    slug: "",
    content: "",
    metadata: {
      status: "TENTATIVE" as EventStatus,
      startDate: new Date(),
      start: Intl.DateTimeFormat("en-UK", {
        dateStyle: "short",
        timeStyle: "short",
        timeZone: "Europe/Zurich",
      }).format(new Date()),
      isPast: false,
    },
  },
}; export type ContentValidator<T extends Content> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: T
) => T;
export interface Parser<T> {
  (content: string, slug: string, metadata: unknown): T;
}

