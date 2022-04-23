const path = require('path');
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app"],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.stories\.(jsx?$|tsx?$)/, use: [{
        loader: '@stacker/storybook-webpack-auto-title-loader', options: {
          appendTitle: ({title, componentName}) => `${title}-${componentName}`
        }
      }], include: path.resolve(__dirname, '../src'),
    });
    return config;
  }
}
