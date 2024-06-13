import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { Navbar as NavbarComponent } from "./nav";

const meta = {
  title: "Components/Organisms/Navbar",
  component: NavbarComponent,
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof NavbarComponent>;

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
