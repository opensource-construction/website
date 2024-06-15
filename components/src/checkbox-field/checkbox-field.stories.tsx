import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { CheckboxField } from "./checkbox-field";

const meta = {
  title: "Components/Molecules/CheckboxField",
  component: CheckboxField,
  args: {
    label: "Example label",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof CheckboxField>;

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

export const Disabled: Story = {
  args: {
    label: "Disabled example",
    variant: "disabled",
  },
};
