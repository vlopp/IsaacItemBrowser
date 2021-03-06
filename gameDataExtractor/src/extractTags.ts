export default async function (itemsData, tagDelimiterRegex = /([\s-=,\.])/) {
  const itemTags = {};

  for (const [encodedItemName, itemData] of Object.entries(itemsData)) {
    // @ts-ignore
    const tagSources = [itemData["readableName"], itemData["shortDescription"], itemData['type']];

    for (const tag of tagSources
      .map(source =>
        source
          .split(tagDelimiterRegex)
          .filter(x => !!x && !tagDelimiterRegex.test(x))
      )
      .flat()) {
      const tagToLower = tag.toLowerCase();

      if (!itemTags[tagToLower]) itemTags[tagToLower] = [];

      if (!itemTags[tagToLower].includes(encodedItemName))
        itemTags[tagToLower].push(encodedItemName);
    }
  }

  return itemTags;
}
