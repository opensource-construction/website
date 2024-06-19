import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
  args: {
    name: "example-checkbox",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Checkbox>;

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

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
  },
};
