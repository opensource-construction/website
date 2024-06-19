import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { TextField } from "./text-field";

const meta = {
  title: "Components/Molecules/TextField",
  component: TextField,
  args: {
    label: "Example label",
    type: "text",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof TextField>;

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

export const Required: Story = {
  args: {
    label: "Required example",
    variant: "required",
  },
};

export const Long: Story = {
  args: {
    label: "Long Text",
    placeholder: "Longform message...",
    sizeClass: "medium",
  },
};

export const Email: Story = {
  args: {
    label: "E-Mail address",
    placeholder: "john.doe@example.com",
    type: "email",
  },
};
