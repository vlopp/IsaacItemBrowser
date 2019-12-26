const fsp = require('fs').promises;
const extractItemData = require('./extractItemData');

module.exports = async function({ customDataPath,  resourceDirPath}) {
  const itemData = await extractItemData({resourceDirPath});

  const template = {};
  for(const encodedItemName of Object.keys(itemData)){
    template[encodedItemName] = {
      tags:[]
    }
  }

  await fsp.writeFile(customDataPath, JSON.stringify(template, null, 2));

};
