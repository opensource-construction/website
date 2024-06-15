import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { Input } from "./input";

const meta = {
  title: "Components/Atoms/Input",
  component: Input,
  args: {
    id: "example-id",
    name: "example-name",
    placeholder: "Example placeholder",
  },
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Input>;

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

export const Email: Story = {
  args: {
    id: "e-mail",
    name: "e-mail",
    placeholder: "john.doe@example.com",
    type: "email",
  },
};

export const NoPlaceholder: Story = {
  args: {
    placeholder: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
