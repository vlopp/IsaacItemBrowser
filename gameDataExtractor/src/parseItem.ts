function encodedName(rawItemData) {
  const simpleReplacements = {
    "<3": "Less_Than_Three",
    "Cat-o-nine-tails": "Cat-O-Nine-Tails",
    "Humbleing Bundle": "Humbling_Bundle",
    "E. Coli": "E_Coli",
    Spiderbaby: "Spider_Baby",
    "Tooth Picks": "Toothpicks",
    "Contract from Below": "Contract_From_Below",
    "BOGO Bombs": "Bogo_Bombs",
    "Pay To Play": "Pay_to_Play",
    "Maw Of The Void": "Maw_of_the_Void",
    "Spear Of Destiny": "Spear_of_Destiny",
    "Crown Of Light": "Crown_of_Light",
    "Dark Princes Crown": "Dark_Prince's_Crown",
    "BackStabber": "Backstabber",
    "Forever alone": "Forever_Alone",
    "???'s Only Friend": "%3F%3F%3F%27s_Only_Friend",
    "Lil Loki": "Lil%27_Loki",
    "Teleport!": "Teleport",
    "Shoop da Whoop!": "Shoop_Da_Whoop!",
    "We Need To Go Deeper!": "We_Need_to_Go_Deeper!",
    "Telepathy For Dummies": "Telepathy_for_Dummies",
    "D infinity": "D_Infinity",
    "???'s Soul": "%3F%3F%3F%27s_Soul",
    "Pay To Win": "Pay_to_Win",
    "Steven": "Steven_(Item)"
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

function readableName(rawItemData) {
  const simpleReplacements = {
    Spiderbaby: "Spider Baby"
  };

  switch (true) {
    case Object.keys(simpleReplacements).includes(rawItemData.name):
      return simpleReplacements[rawItemData.name];
    default:
      return rawItemData.name;
  }
}

export function parseItem(itemData, spriteSheetOffsets) {
  return {
    id:
      itemData.type !== "trinket"
        ? parseInt(itemData.id)
        : parseInt(itemData.id) + 6666,
    readableName: readableName(itemData),
    encodedName: encodedName(itemData),
    type: itemData.type.replace(/^\w/, chr => chr.toUpperCase()),
    shortDescription: itemData.description,
    longDescription: {},
    offset: spriteSheetOffsets
      ? spriteSheetOffsets[itemData.gfx.toLowerCase()]
      : null
  };
}
