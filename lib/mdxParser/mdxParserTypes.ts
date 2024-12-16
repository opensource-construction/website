import { Content, CONTENT_TYPES, EVENT_STATUSES, TAG_CATEGORIES, VALID_MATURITIES } from "./mdxSchematas";

// Type Definitions
export type ContentType = (typeof CONTENT_TYPES)[number];
export type Maturity = (typeof VALID_MATURITIES)[number];
export type EventStatus = (typeof EVENT_STATUSES)[number];
export type TagCategory = typeof TAG_CATEGORIES[number];
export type TrainingTag = `${TagCategory}::${string}`;


export type ContentLink = {
  url: string;
  label: string;
};

// Validator and Parser Types
export type ContentValidator<T extends Content> = (
  raw: any,
  slug: string,
  content: string,
  defaultContent: T
) => T;

