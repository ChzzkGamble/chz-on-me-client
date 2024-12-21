import { cva } from "_panda/css";

export const listStyle = cva({
  base: {
    bg: 'white',
    p: '1rem',
    rounded: '1rem',
    border: '1px solid',
    borderColor: 'light',
    color: 'dark',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    boxSizing: 'border-box',
  },
});
