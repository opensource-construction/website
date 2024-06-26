import { Card } from "./card";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * Metadata for the Card component story.
 *
 * @typedef {Object} Meta
 * @property {string} title - The title of the story.
 * @property {React.ComponentType} component - The Card component.
 * @property {Object} args - The arguments for the story.
 * @property {string} args.title - The title of the Card component.
 * @property {string} args.color - The color of the Card component.
 * @property {Object} argTypes - The argument types for the story.
 */

const CardMeta = {
  title: "Components/Molecules/Card",
  component: Card,
  args: {
    title: "Example Title",
    color: "slate-300",
  },
  argTypes: {},
} satisfies Meta;

export default CardMeta;

/**
 * Represents a story object for the Card component.
 */
type Story = StoryObj<typeof Card>;

/**
 * Default story for the card component.
 */
export const Default: Story = {};

/**
 * Represents an event card story.
 */
export const EventCard: Story = {
  args: {
    title: "Example Event",
    subtitle: "01/12/2024",
    type: "event",
    color: "white",
    slug: "example-event-slug",
  },
  parameters: {
    backgrounds: {
      default: "grey",
    },
  },
};

/**
 * Represents a story for the ProjectCard component.
 */
export const ProjectCard: Story = {
  args: {
    title: "Example Project",
    type: "project",
    slug: "example-project-slug",
  },
};

/**
 * Represents a story for the FAQ card component.
 */
export const FAQCard: Story = {
  args: {
    title: "Example Question",
    type: "faq",
    slug: "example-slug",
  },
};

/**
 * Represents a story for the Partner card component.
 */
export const PartnerCard: Story = {
  args: {
    title: "Example Partner",
    type: "partner",
    slug: "example-partner-slug",
  },
};
