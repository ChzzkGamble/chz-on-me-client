import { css } from "_panda/css/css.mjs";

export const rouletteResultStyle = (zIndex: number) => css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex,
});