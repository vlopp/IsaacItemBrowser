import jsonTags from "$gameData/tags.json";
import jsonItems from "$gameData/items.json";

/* Rebinding for debugging, see https://github.com/webpack/webpack/issues/3957 and https://github.com/babel/babel/issues/1468 */
const tags = jsonTags;
const items = jsonItems;

export function tagBinsearch(
  phrase: string,
  mode: "leftmost" | "rightmost" = "leftmost"
) {
  let l = 0;
  let r = ((tags as unknown) as any[]).length - 1;

  while (l < r) {
    const mid = ~~((r + l) / 2);
    if (
      (mode === "leftmost" && tags[mid].tag.slice(0, phrase.length) < phrase) ||
      (mode === "rightmost" && tags[mid].tag.slice(0, phrase.length) <= phrase)
    ) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  const returnIndex = mode === "leftmost" ? l : l - 1;

  if (tags[returnIndex].tag.slice(0, phrase.length) === phrase) {
    return { index: returnIndex, value: tags[returnIndex].tag };
  } else {
    return { index: null, value: null };
  }
}

const allItems = Object.keys(items);
export function searchItems(...phrases): string[] {
  if (!phrases.length || (phrases.length === 1 && phrases[0] === ""))
    return allItems;

  const matchingItems = new Set<string>();

  for (const phrase of phrases) {
    const { index: leftIndex } = tagBinsearch(phrase);
    if (!leftIndex) return [];

    const { index: rightIndex } = tagBinsearch(phrase, "rightmost");

    for (let i = leftIndex; i <= (rightIndex as number); i++) {
      for (const item of tags[i].items) {
        matchingItems.add(item);
      }
    }
  }

  return [...matchingItems.keys()];
}
