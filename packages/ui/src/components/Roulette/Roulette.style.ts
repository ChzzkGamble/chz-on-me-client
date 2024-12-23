import { cva } from "_panda/css";


export const rouletteWrapper = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    aspectRatio: '1/1',
    position: 'relative',
  },
});
