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
    label: '라벨'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: '입력해주세요',
    label: '라벨'
  },
};

export const Medium: Story = {
  args: {
    size: 'md', 
    placeholder: '입력해주세요',
    label: '라벨'
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: '입력해주세요', 
    label: '라벨'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '입력해주세요',
    label: '라벨'
  },
};
