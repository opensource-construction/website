import type { Meta, StoryObj } from "@storybook/react";
import { allModes } from "../../../.storybook/modes";
import { Navbar as NavbarComponent } from "./nav";
import { type MenuItem } from "../menu";

import { userEvent, within, expect } from "@storybook/test";

import logoSvg from "@/public/opensource_construction_logo.svg";

const navItems: MenuItem[] = [
  { name: "Open Source", target: "/#open-source" },
  { name: "Projects", target: "/#projects" },
  { name: "Events", target: "/#events" },
  { name: "Trainings", target: "/trainings" },
  { name: "About us", target: "/#who-is-behind-the-initiative" },
];

const meta = {
  title: "Components/Organisms/Navbar",
  component: NavbarComponent,
  args: {
    title: "opensource.construction",
    logo: logoSvg,
    menuItems: navItems,
  },
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

export const MobileOpen: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByTestId("hamburger-menu"));
  },
  parameters: {
    viewport: { defaultViewport: "xsm" },
    chromatic: { modes: { xsm: allModes["xsm"] } },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: "md" },
    chromatic: { disableSnapshot: true },
  },
};
