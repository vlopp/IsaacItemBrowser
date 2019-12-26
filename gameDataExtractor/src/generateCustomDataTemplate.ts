import {promises as fsp} from "fs";
import extractItemData from "./extractItemData";

export default async function ({customDataPath, resourceDirPath}) {
  const itemData = await extractItemData({resourceDirPath, spriteSheetOffsets:undefined});

  const template = {};
  for(const encodedItemName of Object.keys(itemData)){
    template[encodedItemName] = {
      tags:[]
    }
  }

  await fsp.writeFile(customDataPath, JSON.stringify(template, null, 2));

}
