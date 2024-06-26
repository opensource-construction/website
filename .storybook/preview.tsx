import type { Preview } from "@storybook/react";

import "../app/globals.css";
import { corbert, glyphter } from "../components/src/tokens/fonts";
import React from "react";

/**
 * Represents the configuration for the Storybook preview.
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "transparent",
      values: [
        {
          name: "white",
          value: "#ffffff",
        },
        {
          name: "grey",
          value: "#f5f5f5",
        },
        {
          name: "primary",
          value: "#ffed00",
        },
      ],
    },
    viewport: {
      defaultViewport: "responsive",
      viewports: {
        xsm: { name: "x-small", styles: { width: "320px", height: "480px" } },
        sm: { name: "small", styles: { width: "640px", height: "900px" } },
        md: { name: "medium", styles: { width: "768px", height: "900px" } },
        lg: { name: "large", styles: { width: "1024px", height: "900px" } },
        xl: { name: "x-large", styles: { width: "1280px", height: "900px" } },
        "2xl": {
          name: "2x-large",
          styles: { width: "1536px", height: "900px" },
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <div
        className={`${corbert.className} ${glyphter.variable} selection:bg-primary-500 selection:bg-opacity-70`}
      >
        <Story {...context} />
      </div>
    ),
  ],
};

export default preview;
