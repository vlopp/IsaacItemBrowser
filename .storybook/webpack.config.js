const path = require("path");
const aliases = require("../config/aliases");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });
  Object.assign(config.resolve.alias, aliases);

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
