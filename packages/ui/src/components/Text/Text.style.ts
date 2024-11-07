import { cva } from '_panda/css';

export const textStyles = cva({
  base: {
    fontFamily: 'Pretendard',
  },
  variants: {
    size: {
      heading: {
        textStyle: 'heading'
      },
      title: { 
        textStyle: 'title'
      },
      subtitle: {
        textStyle: 'subtitle'
      },
      large: {
        textStyle: 'large'
      },
      body: {
        textStyle: 'body'
      },
      small: {
        textStyle: 'small'
      },
      caption: {
        textStyle: 'caption'
      },
      tiny: {
        textStyle: 'tiny'
      },
    },
    color: {
      primary: {
        color: 'token(colors.primary)'
      },
      secondary: {
        color: 'token(colors.secondary)'
      },
      light: {
        color: 'token(colors.light)'
      },
      lightGray: {
        color: 'token(colors.lightGray)'
      },
      gray: {
        color: 'token(colors.gray)'
      },
      darkGray: {
        color: 'token(colors.darkGray)'
      },
      dark: {
        color: 'token(colors.dark)'
      },
      black: {
        color: 'token(colors.black)'
      },
      white: {
        color: 'token(colors.white)'
      }
    },
    noLineHeight: {
      true: {
        lineHeight: '1'
      }
    }
  },
  defaultVariants: {
    size: 'body'
  }
});
