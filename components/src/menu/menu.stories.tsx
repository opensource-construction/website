import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { Menu } from "./menu";

const meta = {
  title: "Components/Molecules/Menu",
  component: Menu,
  args: {
    items: [
      { name: "Example 1", target: "/example-1" },
      { name: "Example 2", target: "/example-2" },
      { name: "Example 3", target: "/example-3" },
      { name: "Example 4", target: "/example-4" },
      { name: "Example 5", target: "/example-5" },
    ],
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  parameters: {
    chromatic: {
      modes: {
        xsm: allModes["xsm"],
        md: allModes["md"],
        xl: allModes["xl"],
        "2xl": allModes["2xl"],
      },
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "xsm" },
    chromatic: { disableSnapshot: true },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: "md" },
    chromatic: { disableSnapshot: true },
  },
};
