import { cva } from '_panda/css'

export const buttonStyle = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 'md',
    fontWeight: 'medium',
    transition: 'all 0.2s',
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5
    }
  },
  variants: {
    variant: {
      solid: {
        bg: 'black',
        color: 'primary',
        _hover: {
          opacity: 0.8
        },
        _active: {
          opacity: 0.9
        }
      },
      outline: {
        border: '1px solid',
        borderColor: 'current',
        color: 'current',
        _hover: {
          bg: 'blackAlpha.50'
        },
        _active: {
          bg: 'blackAlpha.100'
        }
      },
      ghost: {
        color: 'current',
        _hover: {
          bg: 'blackAlpha.50'
        },
        _active: {
          bg: 'blackAlpha.100'
        }
      }
    },
    size: {
      sm: {
        h: '8',
        minW: '8',
        fontSize: 'sm',
        px: '3'
      },
      md: {
        h: '10',
        minW: '10',
        fontSize: 'md',
        px: '4'
      },
      lg: {
        h: '12',
        minW: '12',
        fontSize: 'lg',
        px: '6'
      }
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  }
})

