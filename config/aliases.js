const path = require("path");

module.exports = {
  $root: path.resolve(__dirname, "..", "src"),
  $storybook: path.resolve(__dirname, "..", ".storybook"),
  $redux: path.resolve(__dirname, "..", "src", "redux"),
  $gameData: path.resolve(__dirname, "..", "src", "gameData"),
  $tests: path.resolve(__dirname, "..", "src", "tests"),
  $stories: path.resolve(__dirname, "..", "src", "stories")
};
