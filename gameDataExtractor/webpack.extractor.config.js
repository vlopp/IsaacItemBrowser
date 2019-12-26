const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = env => {


  return {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    devtool: "source-map",
    target: "node",
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: nodeExternals(),

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist")
    }
  };
};
