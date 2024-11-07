import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Button 컴포넌트는 사용자 인터랙션을 위한 기본적인 버튼 요소입니다.

### 특징
- 다양한 크기(sm, md, lg)를 지원합니다
- 여러 스타일 변형(solid, outline, ghost)을 제공합니다

### 접근성
- 키보드 포커스가 가능합니다
- 스크린 리더와 호환됩니다
`
      }
    }
  },
  argTypes: {
    variant: {
      description: '버튼의 시각적 스타일을 결정합니다',
      control: 'select',
      options: ['solid', 'outline', 'ghost']
    },
    size: {
      description: '버튼의 크기를 결정합니다',
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    children: {
      description: '버튼 내부에 표시될 콘텐츠입니다',
      control: 'text'
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: '버튼',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: '기본적인 Solid 버튼입니다. 주요 액션에 사용됩니다.'
      }
    }
  }
};

export const Secondary: Story = {
  args: {
    children: '버튼',
    variant: 'secondary'
  }
};

export const Outline: Story = {
  args: {
    children: '버튼',
    variant: 'outline'
  },
  parameters: {
    docs: {
      description: {
        story: '테두리만 있는 버튼으로, 덜 강조되는 액션에 적합합니다.'
      }
    }
  }
};

export const Ghost: Story = {
  args: {
    children: '버튼',
    variant: 'ghost'
  },
  parameters: {
    docs: {
      description: {
        story: '배경이 없는 버튼으로, 가장 낮은 강조도를 가집니다.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    children: '버튼',
    size: 'sm'
  },
  parameters: {
    docs: {
      description: {
        story: '작은 크기의 버튼입니다. 공간이 제한적일 때 사용합니다.'
      }
    }
  }
};

export const Medium: Story = {
  args: {
    children: '버튼',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: '중간 크기의 버튼입니다. 가장 일반적으로 사용되는 크기입니다.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    children: '버튼',
    size: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: '큰 크기의 버튼입니다. 중요한 액션을 강조할 때 사용합니다.'
      }
    }
  }
};