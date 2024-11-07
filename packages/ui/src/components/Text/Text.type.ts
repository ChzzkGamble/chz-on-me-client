import { HTMLAttributes } from "react";
import { SEMANTIC_COLORS } from "../../token";
import { SEMANTIC_TYPOGRAPHY } from "../../token/typography/semantic";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: keyof typeof SEMANTIC_TYPOGRAPHY;
  color?: keyof typeof SEMANTIC_COLORS;
}
