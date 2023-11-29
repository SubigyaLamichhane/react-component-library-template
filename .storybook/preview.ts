import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: "dark",
      stylePreview: true,
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#18181A" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: "Light",
          class: [],
          color: "#ffffff",
          default: true,
        },
        {
          name: "Dark",
          // The class dark will be added to the body tag
          class: ["dark"],
          color: "#000000",
        },
      ],
    },
  },
};

export default preview;
