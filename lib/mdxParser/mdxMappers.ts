import {
  Maturity,
  TrainingTag,
  EventStatus,
  ContentLink,
} from "./mdxParserTypes";
import { VALID_MATURITIES, EVENT_STATUSES, Schemas } from "./mdxSchematas";
import { ContentValidator } from "./mdxParserTypes";
import { ContentType, OscCluster, OscEvent, OscFaqs, OscPage, OscPost, OscProject, OscTraining } from "./mdxSchematas";

export type ContentTypeMap = {
  training: OscTraining;
  event: OscEvent;
  project: OscProject;
  post: OscPost;
  page: OscPage;
  cluster: OscCluster;
  faqs: OscFaqs
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
  const isValid = /^(type|tool|cost|mode)::.+$/.test(tag);
  if (!isValid) console.warn(`Invalid training tag format: ${tag}`);
  return isValid;
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

export function mapContent<T extends ContentType>(
  type: T,
  raw: any,
  slug: string,
  content: string,
  defaultContent: ContentTypeMap[T]
): ContentTypeMap[T] {
  const transformedData = {
    ...defaultContent,
    type, // Ensure type is explicitly set from parameter
    slug,
    content,
    title: ensureString(raw?.title, defaultContent.title),
    description: ensureString(raw?.description, defaultContent.description),
    metadata: metadataTransforms[type](raw, defaultContent)
  } as ContentTypeMap[T]; // Assert the transformed data matches expected type

  return Schemas[type].parse(transformedData) as ContentTypeMap[T];
}

type MetadataTransformer = {
  [K in ContentType]: (
    raw: any,
    defaultContent: ContentTypeMap[K]
  ) => ContentTypeMap[K]['metadata']
};

const metadataTransforms: MetadataTransformer = {
  project: (raw, defaultContent) => ({
    ...defaultContent.metadata,
    links: ensureLinks(raw?.links),
    featured: ensureBoolean(raw?.metadata?.featured),
    maturity: parseMaturity(raw?.metadata?.maturity),
  }),
  training: (raw, defaultContent) => ({
    ...defaultContent.metadata,
    duration: ensureString(raw?.metadata?.duration, ""),
    author: ensureString(raw?.author),
    image: ensureString(raw?.image),
    links: ensureLinks(raw?.links),
    tags: ensureTrainingTags(raw?.tags),
  }),
  event: (raw, defaultContent) => {
    const eventStart = ensureDate(raw?.event?.start || defaultContent.metadata.start);
    const isPast = eventStart.getTime() < Date.now();
    console.log("EVENT", raw)
    return {
      ...defaultContent.metadata,
      start: eventStart,
      isPast: eventStart.getTime() < Date.now(),
      duration: raw?.event?.duration || { hours: 0 },
      location: ensureString(raw?.event?.location),
      geo: (raw?.event?.geo || raw?.geo) ? {
        lat: Number(raw?.event?.geo?.lat) || 0,
        lon: Number(raw?.event?.geo?.lon) || 0,
      } : undefined,
      status: ensureEventStatus(raw?.event?.status),
      organizer: (raw?.event?.organizer) ? {
        name: ensureString(raw?.event?.organizer?.name),
        email: ensureString(raw?.event?.organizer?.email),
      } : undefined,
      ...(raw?.event?.url || raw?.url ? { url: ensureString(raw?.event?.url) } : {}),
      links: ensureLinks(raw?.links),
    };
  },
  cluster: (raw, defaultContent) => ({
    ...defaultContent.metadata,
    links: ensureLinks(raw?.links),
    image: ensureString(raw?.image),
    partners: raw?.partners || [],
    tags: raw?.tags || [],
  }),
  page: (raw, defaultContent) => ({
    ...defaultContent.metadata,
    links: ensureLinks(raw?.links),
    event: raw?.metadata?.event || {},
    project: raw?.metadata?.project || {},
  }),
  post: (raw, defaultContent) => ({
    ...defaultContent.metadata,
  }),
  faqs: (raw, defaultContent) => ({
    ...defaultContent.metadata,
  }),
};

export const contentValidators: ContentValidatorMap = {
  project: (raw, slug, content, defaultContent) =>
    mapContent('project', raw, slug, content, defaultContent),
  training: (raw, slug, content, defaultContent) =>
    mapContent('training', raw, slug, content, defaultContent),
  event: (raw, slug, content, defaultContent) =>
    mapContent('event', raw, slug, content, defaultContent),
  post: (raw, slug, content, defaultContent) =>
    mapContent('post', raw, slug, content, defaultContent),
  page: (raw, slug, content, defaultContent) =>
    mapContent('page', raw, slug, content, defaultContent),
  cluster: (raw, slug, content, defaultContent) =>
    mapContent('cluster', raw, slug, content, defaultContent),
  faqs: (raw, slug, content, defaultContent) =>
    mapContent('faqs', raw, slug, content, defaultContent),
};