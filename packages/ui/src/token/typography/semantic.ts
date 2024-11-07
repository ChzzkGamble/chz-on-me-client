import { PRIMITIVE_TYPOGRAPHY } from "./primitive";

export const SEMANTIC_TYPOGRAPHY = {
  heading: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.heading.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.bold.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.normal.value,
    }
  },
  title: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.title.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.semibold.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.normal.value,
    }
  },
  subtitle: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.subtitle.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.semibold.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.normal.value,
    }
  },
  large: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.large.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.semibold.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.normal.value,
    }
  },
  body: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.body.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.normal.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.normal.value,
    }
  },
  small: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.small.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.normal.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.normal.value,
    }
  },
  caption: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.caption.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.normal.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.normal.value,
    }
  },
  tiny: {
    value: {
      fontFamily: PRIMITIVE_TYPOGRAPHY.fonts.pretendard.value,
      fontSize: PRIMITIVE_TYPOGRAPHY.fontSizes.tiny.value,
      fontWeight: PRIMITIVE_TYPOGRAPHY.fontWeights.normal.value,
      lineHeight: PRIMITIVE_TYPOGRAPHY.lineHeights.dense.value,
    }
  }
} as const;
