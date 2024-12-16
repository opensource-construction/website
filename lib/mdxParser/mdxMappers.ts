import {
  ContentType,
  OscCluster,
  OscEvent,
  OscFaqs,
  OscPage,
  OscPost,
  OscProject,
  OscTraining,
  ContentLink,
  Maturity, TrainingTag, EventStatus,
  VALID_MATURITIES, EVENT_STATUSES, ContentValidator,
  Schemas
} from "./mdxSchema";

export type ContentTypeMap = {
  training: OscTraining;
  event: OscEvent;
  project: OscProject;
  post: OscPost;
  page: OscPage;
  cluster: OscCluster;
  faqs: OscFaqs;
};

type ContentValidatorMap = {
  [K in ContentType]: ContentValidator<ContentTypeMap[K]>;
};

function ensureString(value: any, defaultValue: string = ""): string {
  if (typeof value === "string") return value;
  return String(defaultValue);
}

function ensureBoolean(value: any): boolean {
  return Boolean(value);
}

function ensureDate(date: any): Date {
  if (date instanceof Date && !isNaN(date.getTime())) return date;
  if (typeof date === "string") {
    const parsed = new Date(date);
    if (!isNaN(parsed.getTime())) return parsed;
  }
  return new Date();
}

function ensureLinks(links: any): ContentLink[] {
  if (!Array.isArray(links)) return [];
  return links.filter(
    (link) =>
      typeof link === "object" &&
      typeof link?.url === "string" &&
      typeof link?.label === "string",
  );
}

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? email : undefined;
};

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
    ? (status as EventStatus)
    : "TENTATIVE";
}

export function mapContent<T extends ContentType>(
  type: T,
  raw: any,
  slug: string,
  content: string,
  defaultContent: ContentTypeMap[T],
): ContentTypeMap[T] {
  const transformedData = {
    ...defaultContent,
    type,
    slug,
    content,
    title: ensureString(raw?.title, defaultContent.title), //TODO: check if this needs special formatting
    description: raw?.description || undefined,
    metadata: metadataTransforms[type](raw, defaultContent),
  } as ContentTypeMap[T];

  return Schemas[type].parse(transformedData) as ContentTypeMap[T];
}

type MetadataTransformer = {
  [K in ContentType]: (
    raw: any,
    defaultContent: ContentTypeMap[K],
  ) => ContentTypeMap[K]["metadata"];
};

const metadataTransforms: MetadataTransformer = {
  project: (raw, defaultContent) => ({
    ...defaultContent.metadata,
    links: raw?.links || undefined,
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
    const eventStart = ensureDate(
      raw?.event?.start || defaultContent.metadata.start,
    );
    const isPast = eventStart.getTime() < Date.now();
    return {
      ...defaultContent.metadata,
      start: eventStart,
      isPast: eventStart.getTime() < Date.now(),
      duration: raw?.event?.duration || undefined,
      location: raw?.event?.location || undefined,
      geo: raw?.event?.geo
        ? {
          lat: Number(raw?.event?.geo?.lat),
          lon: Number(raw?.event?.geo?.lon),
        }
        : undefined,
      status: ensureEventStatus(raw?.event?.status),
      organizer: raw?.event?.organizer
        ? {
          name: ensureString(raw?.event?.organizer?.name),
          email: validateEmail(raw?.event?.organizer?.email),
        }
        : undefined,
      ...(raw?.event?.url ? { url: ensureString(raw?.event?.url) } : {}),
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
  page: (defaultContent) => ({
    ...defaultContent.metadata,
  }),
  post: (defaultContent) => ({
    ...defaultContent.metadata,
  }),
  faqs: (defaultContent) => ({
    ...defaultContent.metadata,
  }),
};

export const contentValidators: ContentValidatorMap = {
  project: (raw, slug, content, defaultContent) =>
    mapContent("project", raw, slug, content, defaultContent),

  training: (raw, slug, content, defaultContent) =>
    mapContent("training", raw, slug, content, defaultContent),

  event: (raw, slug, content, defaultContent) =>
    mapContent("event", raw, slug, content, defaultContent),

  post: (raw, slug, content, defaultContent) =>
    mapContent("post", raw, slug, content, defaultContent),

  page: (raw, slug, content, defaultContent) =>
    mapContent("page", raw, slug, content, defaultContent),

  cluster: (raw, slug, content, defaultContent) =>
    mapContent("cluster", raw, slug, content, defaultContent),

  faqs: (raw, slug, content, defaultContent) =>
    mapContent("faqs", raw, slug, content, defaultContent),
};
