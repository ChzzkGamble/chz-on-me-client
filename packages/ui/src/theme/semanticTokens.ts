import { defineSemanticTokens } from "@pandacss/dev";
import { SEMANTIC_COLORS } from "../token";
import { transformObjectSemanticTokens } from "@chzzk-gamble/util/src/shared/panda/transformObjectSemanticTokens";

export const semanticTokens = defineSemanticTokens({
  ...transformObjectSemanticTokens(SEMANTIC_COLORS)
});
