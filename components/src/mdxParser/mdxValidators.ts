import {
  Training,
  Event,
  Project,
  ContentType,
  Maturity,
  validMaturities,
  Content,
  TrainingTag,
} from "./mdxParserTypes";
import { ContentValidator } from "./mdxParserTypes";

export function validatePostMetadata(metadata: any) {
  return metadata || {};
}

export const validators = {
  project: validateProjectMetadata,
  training: validateTrainingMetadata,
  post: validatePostMetadata,
  event: validateEventMetadata,
};

/**
 * Validates and transforms raw training content into a structured format.
 *
 * @param raw - The raw training content to validate.
 * @param slug - The slug identifier for the training content.
 * @param content - The main content of the training.
 * @param defaultContent - The default content to fall back on if raw content is missing.
 * @returns The validated and structured training content.
 */
export const validateTraining: ContentValidator<Training> = (
  raw,
  slug,
  content,
  defaultContent,
) => ({
  ...defaultContent,
  title: raw?.title || defaultContent.title,
  description: raw?.description || defaultContent.description,
  slug,
  content,
  metadata: {
    ...defaultContent.metadata,
    level: raw?.metadata?.level || "beginner",
    duration: raw?.metadata?.duration || "1h",
    author: raw?.author || "",
    image: raw?.image || "",
    links: raw?.links || [],
    tags: Array.isArray(raw?.tags) ? raw.tags : [],
  },
});

export function validateTrainingMetadata(metadata: any) {
  return metadata || {};
}

/**
 * Validates and processes raw event data into a structured Event object.
 *
 * @param raw - The raw event data to validate and process.
 * @param slug - The slug identifier for the event.
 * @param content - The content of the event.
 * @param defaultContent - The default content to use if certain fields are missing in the raw data.
 * @returns A validated and structured Event object.
 */
export const validateEvent: ContentValidator<Event> = (
  raw,
  slug,
  content,
  defaultContent,
) => {
  const eventStart = new Date(raw?.event?.start || defaultContent.metadata.start);
  const isPast = eventStart.getTime() < Date.now();
  const formattedStart = Intl.DateTimeFormat("en-UK", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Europe/Zurich",
  }).format(eventStart);

  return {
    ...defaultContent,
    type: "event",
    title: raw?.title || defaultContent.title,
    description: raw?.description || defaultContent.description,
    slug,
    content,
    metadata: {
      ...defaultContent.metadata,
      duration: raw?.event?.duration || { hours: 1 },
      location: raw?.event?.location,
      geo: raw?.event?.geo,
      status: raw?.event?.status || "TENTATIVE",
      organizer: raw?.event?.organizer,
      url: raw?.event?.url,
      start: formattedStart,
      isPast: isPast,
    },
  };
};

export function validateEventMetadata(metadata: any) {
  return {
    duration: metadata?.duration,
    end: metadata?.end,
    location: metadata?.location,
    geo: metadata?.geo,
    status: metadata?.status || "TENTATIVE",
    organizer: metadata?.organizer,
    url: metadata?.url,
    isPast: new Date(metadata?.start).getTime() < Date.now(),
    startDate: metadata?.start ? new Date(metadata.start) : new Date(),
    start: metadata?.start
      ? Intl.DateTimeFormat("en-UK", {
        dateStyle: "short",
        timeStyle: "short",
        timeZone: "Europe/Zurich",
      }).format(new Date(metadata.start))
      : Intl.DateTimeFormat("en-UK", {
        dateStyle: "short",
        timeStyle: "short",
        timeZone: "Europe/Zurich",
      }).format(new Date()),
  };
}

/**
 * Validates and constructs a Project object by merging raw input data with default content.
 *
 * @param raw - The raw project data that needs to be validated and merged.
 * @param slug - The unique identifier for the project.
 * @param content - The main content of the project.
 * @param defaultContent - The default content to fall back on if raw data is incomplete.
 * @returns A validated and merged Project object.
 */
const validateProject: ContentValidator<Project> = (
  raw,
  slug,
  content,
  defaultContent,
) => ({
  ...defaultContent,
  title: raw?.title || defaultContent.title,
  description: raw?.description || defaultContent.description,
  slug,
  content,
  links: raw?.links || [],
  metadata: {
    ...defaultContent.metadata,
    featured: raw?.metadata?.featured || false,
    maturity: raw?.metadata?.maturity || "sandbox",
  },
});

export function validateProjectMetadata(metadata: any) {
  return {
    featured: !!metadata?.featured,
    maturity: parseMaturity(metadata?.maturity),
  };
}

function parseMaturity(maturity: any): Maturity {
  const cleanedMaturity = String(maturity || "")
    .trim()
    .toLowerCase();
  return validMaturities.includes(cleanedMaturity as Maturity)
    ? (cleanedMaturity as Maturity)
    : "sandbox";
}

/**
 * A record of content validators for different content types.
 * Each validator function takes raw content, a slug, processed content,
 * and default content, and returns the validated content.
 *
 * @type {Record<ContentType, ContentValidator<any>>}
 *
 * @property {ContentValidator<any>} training - Validator for training content.
 * @property {ContentValidator<any>} event - Validator for event content.
 * @property {ContentValidator<any>} project - Validator for project content.
 * @property {ContentValidator<any>} post - Validator for post content.
 *
 * The `post` validator function:
 * @param {any} raw - The raw content data.
 * @param {string} slug - The slug for the content.
 * @param {any} content - The processed content.
 * @param {any} defaultContent - The default content structure.
 * @returns {any} - The validated content with title, description, slug, content, and metadata.
 */
export const contentValidators: Record<ContentType, ContentValidator<any>> = {
  training: validateTraining,
  event: validateEvent,
  project: validateProject,
  post: (raw, slug, content, defaultContent) => ({
    ...defaultContent,
    title: raw?.title || "",
    description: raw?.description || "",
    slug,
    content,
    metadata: raw?.metadata || {},
  }),
};

/**
 * Validates the metadata of the given content.
 *
 * @template T - The type of the content.
 * @param raw - The raw metadata to be validated.
 * @param slug - The slug of the content.
 * @param content - The content to be validated.
 * @param defaultContent - The default content to fall back on if validation fails.
 * @param type - The type of the content.
 * @returns The validated content.
 */
export function validateMetadata<T extends Content>(
  raw: any,
  slug: string,
  content: string,
  defaultContent: T,
  type: ContentType,
): T {
  const validator = contentValidators[type];
  return validator(raw, slug, content, defaultContent);
}

export function isValidTrainingTag(tag: string): tag is TrainingTag {
  return /^(type|tool|cost|mode)::.+$/.test(tag);
}

