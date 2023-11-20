import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Tc5oeniUp55xYBmR8Oqrei/Continuous-Integration-(CI)?type=design&node-id=5465%3A177083&mode=design&t=1cSNZrnidHoHkLA2-1",
    },
  },
  argTypes: {
    highContrast: {
      control: "boolean",
    },
    disable: {
      control: "boolean",
    },
    asChild: {
      // dont show
      table: {
        disable: true,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["Components", "Button"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Edit profile",
  },
};
