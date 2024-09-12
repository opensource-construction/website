import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { Button } from "./button";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    chromatic: {
      modes: {
        xsm: allModes["xsm"],
        md: allModes["md"],
      },
    },
  },
  args: {
    children: "Button",
    type: "secondary",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Secondary: Story = {};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Card: Story = {
  args: {
    type: "card",
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const External: Story = {
  args: {
    target: "https://example.com",
    type: "primary",
  },
};

export const Back: Story = {
  args: {
    target: "/",
    label: "Go back",
    icon: "left",
  },
};

export const SidebarOverlay: Story = {
  args: {
    type: "sidebar",
    target: () => {
      console.log("button fired");
    },
  },
};

export const Submit: Story = {
  args: {
    type: "submit",
    label: "Submit",
    children: undefined,
  },
};
