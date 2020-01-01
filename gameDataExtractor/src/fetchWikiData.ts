import cheerio from "cheerio";
import fetch from "node-fetch";

/* Extracts all text from a node and its children. */

/**
 * Recursively extracts all text from a node and its children.
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

// todo fetch other categories besides effects and notes
const extract = (elem, indent = -1) => {
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
      acc += extract(x, indent);
    }
  } else if (elem.data) {
    acc += elem.data;
  }

  return " ".repeat(indent) + acc.replace(/(?<!\s) {2,}(?!=\s)/g, " ");
};

export const wikiFetchSingle = async itemName => {
  const response = await fetch(
    `https://bindingofisaacrebirth.gamepedia.com/${itemName.replace(/ /g, "_")}`
  );
  const text = await response.text();
  const $ = cheerio.load(text);

  const ulElements = $("div.mw-parser-output>ul");
  const ulElementsIterable = Object.keys(ulElements)
    .filter(key => /^\d+$/.test(key))
    .map(key => ulElements[key]);

  const result = {};

  const sections = ["Effect", "Notes", "Interactions", "Trivia"];
  for (const section of sections) {
    try {
      const sectionNode = ulElementsIterable.find(elem =>
        extractText(elem.prev.prev).includes(section)
      );
      if (!sectionNode) throw new Error(`No section named ${section} found.`);
      result[section] = await extract(sectionNode);
    } catch (e) {}
  }

  return { ...result };
};

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
