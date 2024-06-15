import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { TextInput } from "./text-input";

const meta = {
  title: "Components/Atoms/TextInput",
  component: TextInput,
  args: {
    name: "example-name",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof TextInput>;

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

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Example placeholder",
  },
};

export const Email: Story = {
  args: {
    name: "e-mail",
    placeholder: "john.doe@example.com",
    type: "email",
  },
};

export const Required: Story = {
  args: {
    variant: "required",
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
  },
};
