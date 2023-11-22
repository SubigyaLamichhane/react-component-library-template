//@ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";
import "../../global.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Tc5oeniUp55xYBmR8Oqrei/Continuous-Integration-(CI)?type=design&node-id=5465%3A177083&mode=design&t=1cSNZrnidHoHkLA2-1",
    },
  },
  argTypes: {
    asChild: {
      // dont show
      table: {
        disable: true,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["Components", "Label", "autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => <Label {...args}>Button</Label>,
};
