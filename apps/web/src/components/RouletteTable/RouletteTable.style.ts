import { cva } from "_panda/css/cva.mjs";

export const nameStyle = cva({
  base: {
    w: '10rem',
  },
});

export const nameTextStyle = cva({
  base: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

export const voteStyle = cva({
  base: {
    w: '2rem',
  },
});

export const percentageStyle = cva({
  base: {
    w: '4rem',
  },
});