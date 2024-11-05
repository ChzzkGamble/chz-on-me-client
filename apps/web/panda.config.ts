import {tokens, semanticTokens} from '@chzzk-gamble/ui'
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "../../packages/ui/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
