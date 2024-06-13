import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

const meta = {
  title: "Components/Molecules/Card",
  component: Card,
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
