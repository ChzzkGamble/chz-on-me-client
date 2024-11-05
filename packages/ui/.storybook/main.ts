import type { StorybookConfig } from "@storybook/react-vite";

import path, { join, dirname } from "path";
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  core: {
    builder: getAbsolutePath("@storybook/builder-vite"),
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config, options) {
    config.resolve!.alias = {
      ...config.resolve!.alias,
      "_panda": path.resolve(__dirname, "../styled-system"),
    };
    return config;
  },
};
export default config;
