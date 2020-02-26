import path from "path";
import generateCustomDataTemplate from "./generateCustomDataTemplate";
import extract from "./extract";

/* Config */
const config = {
  resourceDirPath:
    "D:\\Steam\\steamapps\\common\\The Binding of Isaac Rebirth\\resources\\",
  outputDir: path.resolve(__dirname, "..", "..", "src", "gameData"),
  customDataPath: path.resolve(__dirname, "..", "customData", "customData.json"),
  formatOutput: true
};

if (process.argv[2] === "--generateTemplate") {
  generateCustomDataTemplate(config);
} else {
  extract(config);
}
