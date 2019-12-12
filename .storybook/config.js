import { configure } from "@storybook/react";

configure(
  require.context("../stories", true, /\.stories\.(js|jsx|ts|tsx)$/),
  module
);
