function encodeName(rawItemData) {
  const simpleReplacements = {
    "<3": "Less_Than_Three",
    "Cat-o-nine-tails": "Cat-O-Nine-Tails",
    "Humbleing_Bundle":"Humbling_Bundle",
    "E._Coli": "E_Coli",
    "Spiderbaby":"Spider_Baby",

  };

  switch (true) {
    case Object.keys(simpleReplacements).includes(rawItemData.name):
      return simpleReplacements[rawItemData.name];
    case rawItemData.name === "Cancer":
      if (rawItemData.type === "trinket") {
        return "Cancer_(Trinket)";
      } else return "Cancer";
    case rawItemData.name === "Odd Mushroom":
      if (rawItemData.gfx.includes("Thin")) {
        return "Odd_Mushroom_(Thin)";
      } else {
        return "Odd_Mushroom_(Large)";
      }
    default:
      return rawItemData.name.replace(/ /g, "_");
  }
}

export function parseItem(
    itemData,
    spriteSheetOffsets
) {
  return {
    id: itemData.type !== "trinket" ? parseInt(itemData.id) : parseInt(itemData.id) + 6666,
    readableName: itemData.name,
    encodedName: encodeName(itemData),
    type: itemData.type.replace(/^\w/, chr => chr.toUpperCase()),
    shortDescription: itemData.description,
    longDescription: {},
    offset: spriteSheetOffsets ? spriteSheetOffsets[itemData.gfx.toLowerCase()] : null
  };
}
