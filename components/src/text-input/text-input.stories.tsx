import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { TextInput } from "./text-input";

const meta = {
  title: "Components/Atoms/TextInput",
  component: TextInput,
  args: {
    id: "example-id",
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
    id: "e-mail",
    name: "e-mail",
    placeholder: "john.doe@example.com",
    type: "email",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
