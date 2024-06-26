/* eslint-disable storybook/prefer-pascal-case */

import { Button } from "./button";
import type { Meta, StoryObj } from "@storybook/react";

export const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  args: {
    children: "Button",
    type: "secondary",
  },
  argTypes: {},
};

export default meta;

/**
 * Represents a story object for the Button component.
 * This is inherited from the Button component,
 * and is used to define the stories below.
 */
type Story = StoryObj<typeof Button>;

/**
 * Represents the SecondaryButton story.
 */
export const Secondary: Story = {};

/**
 * Represents the SmallButton story.
 */
export const Small: Story = {
  args: {
    size: "small",
  },
};

/**
 * Represents the CardButton story.
 */
export const Card: Story = {
  args: {
    type: "card",
  },
};

/**
 * Represents the PrimaryButton story.
 */
export const Primary: Story = {
  args: {
    type: "primary",
  },
};

/**
 * Represents the ExternalButton story.
 */
export const External: Story = {
  args: {
    target: "https://example.com",
    type: "primary",
  },
};

/**
 * Represents the BackButton story.
 */
export const Back: Story = {
  args: {
    target: "/",
    label: "Go back",
    icon: "left",
  },
};

/**
 * Represents the SidebarOverlay story.
 */
export const SidebarOverlay: Story = {
  args: {
    type: "sidebar",
    target: () => {
      console.log("button fired");
    },
  },
};
