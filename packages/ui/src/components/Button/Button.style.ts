import { cva } from '_panda/css'

export const buttonStyle = cva({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 'md',
    transition: 'all 0.2s',
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5
    },
    _placeholder: {
      color: 'light'
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
        rounded: '0.75rem',
        minW: '8',
        px: '6',
        py: '3',
        textStyle: 'body',
        lineHeight: 'none',
        _placeholder: {
          textStyle: 'body'
        }
      },
      md: {
        rounded: '1rem',
        minW: '12',
        px: '8',
        py: '4',
        textStyle: 'large',
        lineHeight: 'none',
        _placeholder: {
          textStyle: 'large'
        }
      },
      lg: {
        rounded: '1.25rem',
        minW: '14',
        px: '10',
        py: '5',
        textStyle: 'subtitle',
        lineHeight: 'none',
        _placeholder: {
          textStyle: 'subtitle'
        }
      }
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  }
})

