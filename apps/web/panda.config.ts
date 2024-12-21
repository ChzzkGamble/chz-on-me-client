import {tokens, semanticTokens, textStyles} from '@chz-on-me/ui'
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },

  syntax: 'object-literal',
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
