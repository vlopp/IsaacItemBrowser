const path = require('path');

/* Config */
const config = {
  resourceDirPath: "D:\\Apps\\The.Binding.of.Isaac.Afterbirth.Plus.Update.22\\The.Binding.of.Isaac.Afterbirth.Plus.Update.22\\resources",
  outputDir: path.resolve(__dirname, '..', 'src', 'gameData'),
  customDataPath: path.resolve(__dirname, 'customData', 'customData.json'),
  formatOutput:true
};

if (process.argv[2] === '--generateTemplate'){
  require('./scripts/generateCustomDataTemplate')(config);
} else {
  require('./scripts/extract')(config);
}
