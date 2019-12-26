import path from "path";
import generateCustomDataTemplate from "./generateCustomDataTemplate";
import extract from "./extract";

/* Config */
const config = {
  resourceDirPath:
    "D:\\Apps\\The.Binding.of.Isaac.Afterbirth.Plus.Update.22\\The.Binding.of.Isaac.Afterbirth.Plus.Update.22\\resources",
  outputDir: path.resolve(__dirname, "..", "..", "src", "gameData"),
  customDataPath: path.resolve(__dirname, "..", "customData", "customData.json"),
  formatOutput: true
};

if (process.argv[2] === "--generateTemplate") {
  generateCustomDataTemplate(config);
} else {
  extract(config);
}
