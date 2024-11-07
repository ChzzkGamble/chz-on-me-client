import { cva } from '_panda/css'

export const buttonStyle = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 'md',
    transition: 'all 0.2s',
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5
    }
  },
  variants: {
    variant: {
      primary: {
        bg: 'primary',
        color: 'white',
        _hover: {
          opacity: 0.8
        },
        _active: {
          opacity: 0.9
        }
      },
      secondary: {
        bg: 'lightGray',
        color: 'light',
        _hover: {
          opacity: 0.8
        },
        _active: {
          opacity: 0.9
        },
      },
      outline: {
        border: '1px solid',
        borderColor: 'light',
        color: 'light',
        _hover: {
          bg: 'rgba(230, 230, 230, 0.8)'
        },
        _active: {
          bg: 'rgba(230, 230, 230, 0.9)'
        }
      },
      ghost: {
        color: 'light',
        _hover: {
          bg: 'rgba(230, 230, 230, 0.8)'
        },
        _active: {
          bg: 'rgba(230, 230, 230, 0.9)'
        }
      }
    },
    size: {
      sm: {
        rounded: '0.625rem',
        minW: '8',
        px: '4',
        py: '2',
        textStyle: 'body',
        lineHeight: '1'
      },
      md: {
        rounded: '0.75rem',
        minW: '12',
        px: '5',
        py: '2.5',
        textStyle: 'large',
        lineHeight: '1'
      },
      lg: {
        rounded: '1rem',
        minW: '14',
        px: '6',
        py: '3',
        textStyle: 'subtitle',
        lineHeight: '1'
      }
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }
})

