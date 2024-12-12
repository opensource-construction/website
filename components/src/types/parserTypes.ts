// types.ts
export const validMaturities = ["sandbox", "incubation", "graduated"] as const;
export type Maturity = typeof validMaturities[number];
export type ContentType = 'project' | 'training' | 'post' | 'event';

interface BaseContent {
  title: string;
  description: string;
  slug: string;
  content: string;
}

export interface Project extends BaseContent {
  type: 'project';
  metadata: {
    featured: boolean;
    maturity: Maturity;
  };
  links: Array<{ url: string; label: string }>;
}

export type TagCategory = 'type' | 'tool' | 'cost' | 'mode';

export function isValidTrainingTag(tag: string): tag is TrainingTag {
  return /^(type|tool|cost|mode)::.+$/.test(tag);
}

export type TagValue = string;
export type TrainingTag = `${TagCategory}::${TagValue}`;

export interface Training extends BaseContent {
  type: 'training';
  title: string;
  description: string;
  author: string;
  image: string;
  links: {
    url: string;
    label: string;
  }[];
  tags: TrainingTag[];
  metadata: {
    level?: string;
    duration?: string;
  };
}

export interface Post extends BaseContent {
  type: 'post';
  metadata: Record<string, unknown>;
}

export type Content = Project | Training | Post | Event;

// contentDefaults in contentParser.ts or a separate file
export const contentDefaults = {
  project: {
    type: 'project',
    title: '',
    description: '',
    slug: '',
    content: '',
    metadata: {
      featured: false,
      maturity: 'sandbox',
    },
    links: [],
  },
  training: {
    type: 'training',
    title: '',
    description: '',
    slug: '',
    content: '',
    metadata: {
      level: 'beginner',
      duration: '1h',
    },
  },
  post: {
    type: 'post',
    title: '',
    description: '',
    slug: '',
    content: '',
    metadata: {},
  },
  event: {
    type: 'event' as const,
    title: '',
    description: '',
    slug: '',
    content: '',
    metadata: {
      start: new Date().toISOString(),
      status: 'TENTATIVE' as EventStatus
    }
  }
};


// parserTypes.ts

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

type EventStatus = 'TENTATIVE' | 'CONFIRMED' | 'CANCELLED';

interface EventMetadata {
  start: string;  // ISO date string
  duration?: Duration;
  end?: string;   // ISO date string
  location?: string;
  geo?: GeoLocation;
  status?: EventStatus;
  organizer?: Organizer;
  url?: string;
}

export interface Event extends BaseContent {
  type: 'event';
  metadata: EventMetadata;
}
