import {
  OscTraining,
  OscEvent,
  OscProject,
  ContentType,
  Maturity,
  VALID_MATURITIES,
  TrainingTag,
  Page,
  EventStatus,
  EVENT_STATUSES,
  ContentLink,
  OscPost,
} from "./mdxParserTypes";
import { ContentValidator } from "./mdxParserTypes";

type ContentTypeMap = {
  training: OscTraining;
  event: OscEvent;
  project: OscProject;
  post: OscPost;
  page: Page;
};

type ContentValidatorMap = {
  [K in ContentType]: ContentValidator<ContentTypeMap[K]>;
};

function ensureString(value: any, defaultValue: string = ""): string {
  if (typeof value === 'string') return value;
  return String(defaultValue);
}

function ensureBoolean(value: any): boolean {
  return Boolean(value);
}

function ensureDate(date: any): Date {
  if (date instanceof Date && !isNaN(date.getTime())) return date;
  if (typeof date === 'string') {
    const parsed = new Date(date);
    if (!isNaN(parsed.getTime())) return parsed;
  }
  return new Date();
}

function ensureLinks(links: any): ContentLink[] {
  if (!Array.isArray(links)) return [];
  return links.filter(link =>
    typeof link === 'object' &&
    typeof link?.url === 'string' &&
    typeof link?.label === 'string'
  );
}

function ensureTrainingTags(tags: any): TrainingTag[] {
  if (!Array.isArray(tags)) return [];
  return tags.filter(isValidTrainingTag);
}

function isValidTrainingTag(tag: string): tag is TrainingTag {
  return /^(type|tool|cost|mode)::.+$/.test(tag);
}

function parseMaturity(maturity: any): Maturity {
  const cleanedMaturity = String(maturity || "")
    .trim()
    .toLowerCase();
  return VALID_MATURITIES.includes(cleanedMaturity as Maturity)
    ? (cleanedMaturity as Maturity)
    : "sandbox";
}

function ensureEventStatus(status: any): EventStatus {
  return EVENT_STATUSES.includes(status as EventStatus)
    ? status as EventStatus
    : "TENTATIVE";
}

// Content Validators
export const validateEvent: ContentValidator<OscEvent> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: OscEvent,
): OscEvent => {
  const eventStart = ensureDate(raw?.event?.start || defaultContent.metadata.start);
  const isPast = eventStart.getTime() < Date.now();

  return {
    ...defaultContent,
    type: "event",
    title: ensureString(raw?.title, defaultContent.title),
    description: ensureString(raw?.description, defaultContent.description),
    slug,
    content,
    metadata: {
      ...defaultContent.metadata,
      start: eventStart,
      duration: raw?.event?.duration || { hours: 1 },
      location: ensureString(raw?.event?.location),
      geo: raw?.event?.geo ? {
        lat: Number(raw.event.geo.lat) || 0,
        lon: Number(raw.event.geo.lon) || 0,
      } : undefined,
      status: ensureEventStatus(raw?.event?.status),
      organizer: raw?.event?.organizer ? {
        name: ensureString(raw.event.organizer.name),
        email: ensureString(raw.event.organizer.email),
      } : undefined,
      url: ensureString(raw?.event?.url),
      isPast,
      links: ensureLinks(raw?.links),
    },
  };
};

export const validateProject: ContentValidator<OscProject> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: OscProject,
): OscProject => ({
  ...defaultContent,
  type: "project",
  title: ensureString(raw?.title, defaultContent.title),
  description: ensureString(raw?.description, defaultContent.description),
  slug,
  content,
  metadata: {
    ...defaultContent.metadata,
    links: ensureLinks(raw?.links),
    featured: ensureBoolean(raw?.metadata?.featured),
    maturity: parseMaturity(raw?.metadata?.maturity),
  },
});

export const validateTraining: ContentValidator<OscTraining> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: OscTraining,
): OscTraining => ({
  ...defaultContent,
  type: "training",
  title: ensureString(raw?.title, defaultContent.title),
  description: ensureString(raw?.description, defaultContent.description),
  slug,
  content,
  metadata: {
    ...defaultContent.metadata,
    level: ensureString(raw?.metadata?.level, "beginner"),
    duration: ensureString(raw?.metadata?.duration, ""),
    author: ensureString(raw?.author),
    image: ensureString(raw?.image),
    links: ensureLinks(raw?.links),
    tags: ensureTrainingTags(raw?.tags),
  },
});

export const validatePost: ContentValidator<OscPost> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: OscPost,
): OscPost => ({
  title: ensureString(raw?.title),
  description: ensureString(raw?.description),
  slug,
  content,
  metadata: raw?.metadata || {},
});

export const validatePage: ContentValidator<Page> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: Page,
): Page => ({
  ...defaultContent,
  type: "page",
  title: ensureString(raw?.title, defaultContent.title),
  description: ensureString(raw?.description, defaultContent.description),
  slug,
  content,
  metadata: {
    ...defaultContent.metadata,
    links: ensureLinks(raw?.links),
    event: raw?.metadata?.event || {},
    project: raw?.metadata?.project || {},
  },
});

// Export contentValidators with proper typing
export const contentValidators: ContentValidatorMap = {
  training: validateTraining,
  event: validateEvent,
  project: validateProject,
  post: validatePost,
  page: validatePage,
};

