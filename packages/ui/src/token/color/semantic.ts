import { PRIMITIVE_COLORS } from "./primitive";

export const SEMANTIC_COLORS = {
  primary: {
    value: PRIMITIVE_COLORS.forestGreen[300].value
  },
  secondary: {
    value: PRIMITIVE_COLORS.crimson[700].value
  },
  light: {
    value: PRIMITIVE_COLORS.gray[100].value
  },
  lightGray: {
    value: PRIMITIVE_COLORS.gray[300].value
  },
  gray: {
    value: PRIMITIVE_COLORS.gray[500].value
  },
  darkGray: {
    value: PRIMITIVE_COLORS.gray[700].value
  },
  dark: {
    value: PRIMITIVE_COLORS.gray[900].value
  },
  // success: PRIMITIVE_COLORS.green[300],
  // warning: PRIMITIVE_COLORS.red[500],
  // error: PRIMITIVE_COLORS.crimson[700],
  black: {
    value: PRIMITIVE_COLORS.black.value
  },
  white: {
    value: PRIMITIVE_COLORS.white.value
  }
} as const;
