import type { Meta, StoryObj } from "@storybook/react";
import { Roulette } from "./Roulette";

const meta = {
  title: "Components/Roulette",
  component: Roulette,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Roulette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
            {
        "id": 1,
        "name": "짜장면",
        "vote": 3,
        "percentage": "50.00%"
    },
    {
        "id": 2,
        "name": "짬뽕",
        "vote": 2,
        "percentage": "33.33%"
    },
    {
        "id": 3,
        "name": "탕수육",
        "vote": 1,
        "percentage": "16.67%"
    }
    ],
    onChange: (index: number) => {
      console.log(index);
    },
    onEnd: () => {
      console.log('onEnd');
    },
    isSpinning: false,
  },
};
