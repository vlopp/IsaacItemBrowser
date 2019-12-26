module.exports = function(
  { gfx, id, name, description, type },
  spriteSheetOffsets
) {
  const item = {};
  item.id = type !== "trinket" ? parseInt(id) : parseInt(id) + 6666;
  item.readableName = name;
  item.encodedName = name.replace(/ /g, "_");
  item.type = type;
  item.shortDescription = description;
  item.longDescription = {};
  item.offset = spriteSheetOffsets
    ? spriteSheetOffsets[gfx.toLowerCase()]
    : null;

  return item;
};
