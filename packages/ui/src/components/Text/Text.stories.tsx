import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Text 컴포넌트는 다양한 크기와 색상을 지원하는 텍스트 요소입니다.

### 특징
- 다양한 크기(heading, title, subtitle, large, body, caption, tiny)를 지원합니다
- 여러 색상 변형을 제공합니다
`
      }
    }
  },
  argTypes: {
    size: {
      description: '텍스트의 크기를 결정합니다',
      control: 'select',
      options: ['heading', 'title', 'subtitle', 'large', 'body', 'caption', 'tiny']
    },
    color: {
      description: '텍스트의 색상을 결정합니다',
      control: 'select',
      options: ['primary', 'secondary', 'light', 'lightGray', 'gray', 'darkGray', 'dark', 'black', 'white']
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 텍스트입니다.',
  },
};

export const Heading: Story = {
  args: {
    size: 'heading',
    children: 'Heading 텍스트입니다.',
  },
};

export const Title: Story = {
  args: {
    size: 'title', 
    children: 'Title 텍스트입니다.',
  },
};

export const Subtitle: Story = {
  args: {
    size: 'subtitle',
    children: 'Subtitle 텍스트입니다.',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large 텍스트입니다.',
  },
};

export const Body: Story = {
  args: {
    size: 'body',
    children: 'Body 텍스트입니다.',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small 텍스트입니다.',
  },
};

export const Caption: Story = {
  args: {
    size: 'caption',
    children: 'Caption 텍스트입니다.',
  },
};

export const Tiny: Story = {
  args: {
    size: 'tiny',
    children: 'Tiny 텍스트입니다.',
  },
};

export const WithPrimaryColor: Story = {
  args: {
    color: 'primary',
    children: '기본 색상이 적용된 텍스트입니다.',
  },
};

export const WithSecondaryColor: Story = {
  args: {
    color: 'secondary',
    children: '보조 색상이 적용된 텍스트입니다.',
  },
};

export const WithLightColor: Story = {
  args: {
    color: 'light',
    children: '밝은 색상이 적용된 텍스트입니다.',
  },
};

export const WithLightGrayColor: Story = {
  args: {
    color: 'lightGray',
    children: '밝은 회색이 적용된 텍스트입니다.',
  },
};

export const WithGrayColor: Story = {
  args: {
    color: 'gray',
    children: '회색이 적용된 텍스트입니다.',
  },
};

export const WithDarkGrayColor: Story = {
  args: {
    color: 'darkGray',
    children: '어두운 회색이 적용된 텍스트입니다.',
  },
};

export const WithDarkColor: Story = {
  args: {
    color: 'dark',
    children: '어두운 색상이 적용된 텍스트입니다.',
  },
};

export const WithBlackColor: Story = {
  args: {
    color: 'black',
    children: '검은색이 적용된 텍스트입니다.',
  },
};

export const WithWhiteColor: Story = {
  args: {
    color: 'white',
    children: '흰색이 적용된 텍스트입니다.',
  },
};