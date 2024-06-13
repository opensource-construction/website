import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta = {
  title: "Components/Organisms/Footer",
  component: Footer,
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
