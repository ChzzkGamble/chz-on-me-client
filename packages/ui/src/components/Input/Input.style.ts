import { cva } from '../../../styled-system/css';

export const inputStyle = cva({
  base: {
    width: '100%',
    border: '1px solid',
    borderColor: 'light',
    color: 'dark',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
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
        rounded: '0.5rem',
        w: '60',
        px: '3',
        py: '1.5',
        fontSize: 'small',
        lineHeight: 'none'
      },
      md: {
        rounded: '0.625rem',
        w: '60',
        px: '4',
        py: '2',
        fontSize: 'body',
        lineHeight: 'none'
      },
      lg: {
        rounded: '0.75rem',
        w: '60',
        px: '6',
        py: '3',
        fontSize: 'large',
        lineHeight: 'none'
      }
    }
  },
  defaultVariants: {
    size: 'md'
  }
});
