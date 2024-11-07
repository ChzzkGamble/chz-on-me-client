import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '입력해주세요',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: '입력해주세요',
  },
};

export const Medium: Story = {
  args: {
    size: 'md', 
    placeholder: '입력해주세요',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: '입력해주세요', 
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    placeholder: '입력해주세요',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    placeholder: '입력해주세요',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '입력해주세요',
  },
};
