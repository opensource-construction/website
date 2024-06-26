import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { TextInput } from "./text-input";

/**
 * Metadata for the TextInput component.
 *
 * @typedef {Object} TextInputMeta
 * @property {string} title - The title of the component.
 * @property {React.ComponentType} component - The TextInput component.
 * @property {Object} args - The arguments for the component.
 * @property {string} args.name - The name of the example.
 * @property {Object} argTypes - The argument types for the component.
 */

const TextInputMeta = {
  title: "Components/Atoms/TextInput",
  component: TextInput,
  args: {
    name: "example-name",
  },
  argTypes: {},
};

export default TextInputMeta;

/**
 * Represents a story object for the TextInput component.
 */
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

/**
 * Story configuration for the component with a placeholder.
 */
export const WithPlaceholder: Story = {
  args: {
    placeholder: "Example placeholder",
  },
};

/**
 * Represents a story with long text input.
 */
export const Long: Story = {
  args: {
    name: "Long Text",
    placeholder: "Longform message...",
    sizeClass: "medium",
  },
};

/**
 * Email story for the TextInput component.
 */
export const Email: Story = {
  args: {
    name: "e-mail",
    placeholder: "john.doe@example.com",
    type: "email",
  },
};

/**
 * Represents a story with required variant for the text input component.
 */
export const Required: Story = {
  args: {
    variant: "required",
  },
};

/**
 * Story configuration for the Disabled variant.
 */
export const Disabled: Story = {
  args: {
    variant: "disabled",
  },
};
