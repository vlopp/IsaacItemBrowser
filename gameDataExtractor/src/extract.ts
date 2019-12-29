import { promises as fsp } from "fs";
import path from "path";
import {wikiFetchAll} from "./fetchWikiData";
import generateSprites from "./generateSprites";
import extractItemData from "./extractItemData";
import extractTags from "./extractTags";

export default async function({
  resourceDirPath,
  outputDir,
  customDataPath,
  formatOutput
}) {
  const spriteSheetOffsets = await generateSprites({
    resourceDirPath,
    outputDir
  });
  const itemsData = await extractItemData({
    resourceDirPath,
    spriteSheetOffsets
  });

  const wikiData = await wikiFetchAll(...Object.keys(itemsData));

  for (const encodedItemName of Object.keys(wikiData)) {
    itemsData[encodedItemName].longDescription = wikiData[encodedItemName];
  }

  const itemsDataStringified = formatOutput
    ? JSON.stringify(itemsData, null, 2)
    : JSON.stringify(itemsData);
  console.log(`Writing to ${path.resolve(outputDir, "items.json")}`);
  await fsp.writeFile(
    path.resolve(outputDir, "items.json"),
    itemsDataStringified
  );

  const tagDelimiter = /([\s-=,.])/;
  const tags = await extractTags(itemsData, tagDelimiter);

  /* Merge the extracted tags with the tags provided in customData */
  const customData = JSON.parse(await fsp.readFile(customDataPath, "utf8"));
  for (const [encodedItemName, { tags: customTags }] of Object.entries(
    customData
  ) as any) {
    for (const customTag of customTags) {
      if (!tags[customTag]) tags[customTag] = [];
      if (!tags[customTag].includes(encodedItemName))
        tags[customTag].push(encodedItemName);
    }
  }

  /* Transform the tags into an ordered array for future binsearches. */
  const tagsOrdered = [] as any[];
  for (const tag of Object.keys(tags).sort()) {
    tagsOrdered.push({ tag, items: tags[tag] });
  }

  const outputTagsStringified = formatOutput
    ? JSON.stringify(tagsOrdered, null, 2)
    : JSON.stringify(tagsOrdered);
  console.log(`Writing to ${path.resolve(outputDir, "tags.json")}`);
  await fsp.writeFile(
    path.resolve(outputDir, "tags.json"),
    outputTagsStringified
  );
}
