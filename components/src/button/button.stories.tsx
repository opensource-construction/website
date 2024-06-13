import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  args: {
    children: "Button",
    type: "secondary",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const External: Story = {
  args: {
    target: "https://openstreetmap.org",
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
