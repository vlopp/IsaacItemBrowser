import cheerio from "cheerio";
import fetch from "node-fetch";

/**
 * Fetch a resource, retry on unsuccessful tries.
 * @param url The resource to fetch.
 * @param retries Max of retries.
 * @param sleepBetweenRetries Milliseconds to sleep after a failed try.
 */
const fetchRetry = async (
  url: string,
  retries: number = 3,
  sleepBetweenRetries: number = 100,
  ...args
) => {
  if (args.length && (args[1].url || args[1].retries)) {
  }
  retries--;
  if (!retries) {
    return await fetch(url);
  } else {
    try {
      return await fetch(url);
    } catch (e) {
      console.log(`Can't fetch ${url}, ${retries} retries remaining...`);
      setTimeout(
        () => fetchRetry(url, retries, sleepBetweenRetries),
        sleepBetweenRetries
      );
    }
  }
};

/**
 * Extracts all text from a node and its children.
 * @param The element to extract text from.
 */
const extractText = elem => {
  if (elem.data) {
    return elem.data;
  }
  if (elem.children) {
    return elem.children.map(e => extractText(e)).join("");
  }
  return "";
};

/**
 * Extracts a section from the Isaac wiki.
 * @param elem The main <ul> element of the section.
 * @param indent Internal parameter for recursion.
 */
const extractSection = (elem, indent = -1) => {
  let acc = "";

  if (elem.name === "ul") indent++;

  if (elem.attribs && elem.attribs.class === "notitle tooltip") {
    /* Don't extract from item pupup tooltips. */
    try {
      /* Tooltips with icons */
      acc += elem.children[2].children[0].data;
    } catch {
      /* Tooltips without icons */
      acc += elem.childNodes[0].childNodes[0].data;
    }
  } else if (elem.childNodes && elem.childNodes.length) {
    for (const x of elem.childNodes) {
      acc += extractSection(x, indent);
    }
  } else if (elem.data) {
    acc += elem.data;
  }

  return (
    " ".repeat(indent) +
    acc.replace(/(?<!\s) {2,}(?!=\s)/g, " ").replace(/(\s)\1+?(.|,)/, "$1$2")
  );
};

/**
 * Extract wiki sections for an item.
 * @param itemName The item name to extract wiki sections for.
 */
export const wikiFetchSingle = async (
  itemName
): Promise<{ [sectionName: string]: string }> => {

  /*const response = await fetchRetry(
    `https://bindingofisaacrebirth.gamepedia.com/${itemName.replace(/ /g, "_")}`
  );*/

  // todo Implement proper fetch-retry.
  let response;
  while (!response) {
    try {
      response = await fetch(
        `https://bindingofisaacrebirth.gamepedia.com/${itemName.replace(
          / /g,
          "_"
        )}`
      );
    } catch (e) {
      await new Promise((r) => setTimeout(r, 150));
    }
  }

  const text = await response.text();
  const $ = cheerio.load(text);

  const ulElements = $("div.mw-parser-output>ul");
  const ulElementsIterable = Object.keys(ulElements)
    .filter(key => /^\d+$/.test(key))
    .map(key => ulElements[key]);

  const result = {};

  const sections = ["Effect", "Notes", "Interactions", "Trivia", "Tips"];
  for (const section of sections) {
    try {
      const sectionNode = ulElementsIterable.find(elem =>
        extractText(elem.prev.prev).includes(section)
      );
      if (!sectionNode) throw new Error(`No section named ${section} found.`);
      result[section] = await extractSection(sectionNode);
    } catch (e) {}
  }

  return { ...result };
};

/**
 * Bulk wiki section extraction.
 * @param encodedItemNames Item names to extract wiki sections for.
 */
export const wikiFetchAll = async (...encodedItemNames) => {
  const data = {};
  console.log(
    `Fetching data for ${encodedItemNames.length} items. This might take a while.`
  );
  const fetchedData = await Promise.all(
    encodedItemNames.map(name => wikiFetchSingle(name))
  );
  console.log("Finished fetching data.");

  for (let i = 0; i < encodedItemNames.length; i++) {
    data[encodedItemNames[i]] = fetchedData[i];
  }

  return data;
};
