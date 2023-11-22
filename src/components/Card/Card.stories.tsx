import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Card> = {
  title: "Components/Card",

  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["Components", "Card", "autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    asChild: {
      // dont show
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: "select",
        options: ["1", "2", "3"],
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  render: (args) => (
    <Card {...args}>
      <div className="w-[200px] h-[200px] rounded-md border-dashed border-2 ">
        <span className="hidden">!</span>
      </div>
    </Card>
  ),
};
