import { transformObjectTokens } from '@chzzk-gamble/util/src/shared/panda/transformObjectTokens';
import { PRIMITIVE_COLORS } from '../token/color/primitive';
import { defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
  ...transformObjectTokens(PRIMITIVE_COLORS)
})