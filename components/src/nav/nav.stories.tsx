import type { Meta, StoryObj } from "@storybook/react";
import { Navbar as NavbarComponent } from "./nav";

const meta = {
  title: "Components/Organisms/Navbar",
  component: NavbarComponent,
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof NavbarComponent>;

export const Default: Story = {};
