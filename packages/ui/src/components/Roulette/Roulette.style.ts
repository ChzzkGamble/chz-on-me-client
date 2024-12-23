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

export const rouletteArrow = cva({
  base: {
    width: 0,
    height: 0,
    transform: 'translate(-50%, -25%)',
    borderLeft: '1rem solid transparent',
    borderRight: '1rem solid transparent', 
    borderTop: '2rem solid #333',
    position: 'absolute',
    top: 0,
    left: '50%',
    zIndex: 1
  },
});
