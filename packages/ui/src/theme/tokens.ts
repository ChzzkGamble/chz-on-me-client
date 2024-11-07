import { PRIMITIVE_COLORS } from '../token/color/primitive';
import { defineTokens } from "@pandacss/dev";
import { PRIMITIVE_TYPOGRAPHY } from '../token/typography/primitive';

export const tokens = defineTokens({
  colors: PRIMITIVE_COLORS,
  ...PRIMITIVE_TYPOGRAPHY
})
