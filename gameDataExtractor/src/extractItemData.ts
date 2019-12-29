import {promises as fsp} from "fs";
import xml2js from "xml2js-es6-promise";
import {parseItem} from "./parseItem";
import path from "path";

/* Extract from items.xml */
export default async function ({resourceDirPath, spriteSheetOffsets}) {
  const itemsXmlPath = path.resolve(resourceDirPath, "items.xml");
  const itemsXml = await fsp.readFile(itemsXmlPath, "utf8");
  const itemsJson = await xml2js(itemsXml);

  const {
    items: { passive, familiar, active, trinket }
  } = itemsJson;

  const itemsData = {};
  for (const item of [
    ...passive.map(x => {
      x.$.type = "passive";
      return x.$;
    }),
    ...familiar.map(x => {
      x.$.type = "familiar";
      return x.$;
    }),
    ...active.map(x => {
      x.$.type = "active";
      return x.$;
    }),
    ...trinket.map(x => {
      x.$.type = "trinket";
      return x.$;
    })
  ]) {
    const { encodedName, ...rest } = parseItem(item, spriteSheetOffsets);
    itemsData[encodedName] = rest;
  }

  return itemsData;
}
