import type { Meta, StoryObj } from "@storybook/react";
import { Section as SectionComponent } from "./section";

const meta = {
  title: "Components/Organisms/Section",
  component: SectionComponent,
  args: {
    children: "Example content",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof SectionComponent>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    color: "gray-500",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const WithTitle: Story = {
  args: {
    title: "Example Section Title",
  },
};

export const PrimaryFullWidthWithTitle: Story = {
  args: {
    title: "Example Title",
    fullWidth: true,
    color: "primary",
  },
};
