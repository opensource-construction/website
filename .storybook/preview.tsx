import type { Preview } from "@storybook/react";

import "../app/globals.css";
import { corbert, glyphter } from "../components/src/tokens/fonts";

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
  },
  decorators: [
    (Story, context) => (
      <div
        className={`${corbert.className} ${glyphter.variable} selection:bg-osc-primary selection:bg-opacity-70`}
      >
        <Story {...context} />
      </div>
    ),
  ],
};

export default preview;
