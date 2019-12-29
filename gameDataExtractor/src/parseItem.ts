//todo fix scapular, marked
function encodeName(itemName: string) {
  const specialNames = {
    "<3": "Less_Than_Three",
    "Cat-o-nine-tails": "Cat-O-Nine-Tails",
    "Humbleing_Bundle":"Humbling_Bundle",
    "E._Coli": "E_Coli",
    "Spiderbaby":"Spider_Baby",

  };

  return Object.keys(specialNames).includes(itemName)
    ? specialNames[itemName]
    : itemName.replace(/ /g, "_");
}

export function parseItem(
  { gfx, id, name, description, type },
  spriteSheetOffsets
) {
  return {
    id: type !== "trinket" ? parseInt(id) : parseInt(id) + 6666,
    readableName: name,
    encodedName: encodeName(name),
    type: type.replace(/^\w/, chr => chr.toUpperCase()),
    shortDescription: description,
    longDescription: {},
    offset: spriteSheetOffsets ? spriteSheetOffsets[gfx.toLowerCase()] : null
  };
}
