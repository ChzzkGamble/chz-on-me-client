import { cva } from '../../../styled-system/css';

export const inputLabelStyle = cva({
  base: {
    paddingInline: '0.5rem',
    width: '100%'
  }
});

export const inputStyle = cva({
  base: {
    width: 'full',
    bg: 'white',
    border: '1px solid',
    borderColor: 'light',
    color: 'dark',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    boxSizing: 'border-box',
    _placeholder: {
      color: 'light'
    },
    _hover: {
      borderColor: 'primary',
      _disabled: {
        borderColor: 'light',
        cursor: 'not-allowed'
      }
    },
    _focus: {
      borderColor: 'primary',
      boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)'
    },
    _disabled: {
      cursor: 'not-allowed'
    }
  },
  variants: {
    status: {
      error: {
        borderColor: 'red.500',
        _hover: {
          borderColor: 'red.600'
        },
        _focus: {
          borderColor: 'red.500',
          boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.1)'
        }
      },
      success: {
        borderColor: 'primary',
        _hover: {
          borderColor: 'primary'
        },
        _focus: {
          borderColor: 'primary',
          boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.1)'
        }
      }
    },
    size: {
      sm: {
        rounded: '0.75rem',
        h: '2.5rem',
        w: '80',
        px: '3',
        py: '3',
        textStyle: 'small',
        lineHeight: 'none'
      },
      md: {
        rounded: '1rem',
        h: '3.25rem',
        w: '80',
        px: '4',
        py: '4',
        textStyle: 'body',
        lineHeight: 'none'
      },
      lg: {
        rounded: '1rem',
        h: '4rem',
        w: '80',
        px: '5',
        py: '5',
        textStyle: 'large',
        lineHeight: 'none'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});
