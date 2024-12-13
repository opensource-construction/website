// Constants as union types
export const VALID_MATURITIES = ["sandbox", "incubation", "graduated"] as const;
export const CONTENT_TYPES = ["project", "training", "post", "event", "page", "cluster"] as const;
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

type BaseMetadata = {
  links: ContentLink[];
};

// Metadata Types
type ProjectMetadata = BaseMetadata & {
  featured: boolean;
  maturity: Maturity;
};

type TrainingMetadata = BaseMetadata & {
  level: string;
  duration: string;
  author: string;
  image: string;
  tags: TrainingTag[];
};

type EventMetadata = BaseMetadata & {
  start: Date;
  duration?: {
    seconds?: number;
    minutes?: number;
    hours?: number;
    days?: number;
    weeks?: number;
  };
  end?: Date;
  location?: string;
  geo?: {
    lat: number;
    lon: number;
  };
  status: EventStatus;
  organizer?: {
    name: string;
    email: string;
  };
  url?: string;
  isPast: boolean;
};

type PageMetadata = BaseMetadata & {
  event?: Record<string, unknown>;
  project?: Record<string, unknown>;
};

// Base Content Type
type BaseContent = {
  title: string;
  type: ContentType;
  description: string;
  slug: string;
  content: string;
};

// Content Types
export type OscProject = BaseContent & {
  type: "project";
  metadata: ProjectMetadata;
};

export type OscTraining = BaseContent & {
  type: "training";
  metadata: TrainingMetadata;
};

export type OscEvent = BaseContent & {
  type: "event";
  metadata: EventMetadata;
};

export type OscPage = BaseContent & {
  type: "page";
  metadata: PageMetadata;
};

export type OscCluster = BaseContent & {
  type: "cluster";
  metadata: OscClusterMetadata;
}

export type OscClusterMetadata = {
  image?: string;
  links?: ContentLink[];
  partners?: OscClusterPartner[];
  tags?: string[];
}


export type OscClusterPartner = {
  url: string;
  name: string;
  log: string; // URL to logo
}


export type OscPost = {
  type: "post";
  metadata: Record<string, unknown>;
  slug: string;
  content: string;
  title?: string;
  description?: string;
};

export type Content = OscProject | OscTraining | OscPost | OscEvent | OscPage | OscCluster;

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
} as const;