import { promises as fsp } from "fs";
import path from "path";
import { wikiFetchAll, wikiFetchSingle } from "./fetchWikiData";
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
  const multiwordTags = new Set<string>();
  /* Merge the extracted tags with the tags provided in customData */
  const customData = JSON.parse(await fsp.readFile(customDataPath, "utf8"));
  for (const [encodedItemName, { tags: customTags }] of Object.entries(
    customData
  ) as any) {
    /* Handle multiword tags: split "yes mother set" into "yes", "yes mother", "yes mother set" */

    const subTags = [];
    for (const tag of customTags) {
      const singleWordsInTag = tag.split(" ");
      /* It's a multiword tag, generate subtags from it. */
      for (let j = 0; j < singleWordsInTag.length; j++) {
        subTags.push(
          singleWordsInTag.slice(0, singleWordsInTag.length - j).join(" ")
        );
      }
    }

    for (const customTag of subTags) {
      if (!tags[customTag]) tags[customTag] = [];
      if (!tags[customTag].includes(encodedItemName))
        tags[customTag].push(encodedItemName);
    }

    for (const multiWordTag of subTags.filter(
      tagPhrase => tagPhrase.split(" ").length >= 2
    ))
      multiwordTags.add(multiWordTag);
  }

  /* Transform the tags into an ordered array for future binsearches. */
  const tagsOrdered = [] as any[];
  for (const tag of Object.keys(tags).sort()) {
    tagsOrdered.push({ tag, items: tags[tag] });
  }

  const outputTagsStringified = formatOutput
    ? JSON.stringify({ multiwordTags: [...multiwordTags.keys()], tagList: tagsOrdered }, null, 2)
    : JSON.stringify(tagsOrdered);
  console.log(`Writing to ${path.resolve(outputDir, "tags.json")}`);
  await fsp.writeFile(
    path.resolve(outputDir, "tags.json"),
    outputTagsStringified
  );
}
