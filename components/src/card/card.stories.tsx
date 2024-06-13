import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Components/Molecules/Card",
  component: Card,
  args: {
    title: "Example Title",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Card>;

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

export const ProjectCard: Story = {
  args: {
    title: "Example Project",
    type: "project",
    color: "gray-500",
    slug: "example-project-slug",
  },
};

export const FAQCard: Story = {
  args: {
    title: "Example Question",
    type: "faq",
    color: "gray-500",
    slug: "example-slug",
  },
};

// TODO: add partner type
