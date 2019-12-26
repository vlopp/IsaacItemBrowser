const cheerio = require("cheerio");
const fetch = require("node-fetch");

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

const wikiFetchSingle = async itemName => {

  const response = await fetch(
    `https://bindingofisaacrebirth.gamepedia.com/${itemName.replace(/ /g, "_")}`
  );
  const text = await response.text();
  const $ = cheerio.load(text);

  const a = $("div.mw-parser-output>ul");

  const result = {};
  try {
    result["effects"] = await extract(a[0]);
  } catch (e) {
    result["effects"] = "";
  }
  try {
    result["notes"] = await extract(a[1]);
  } catch (e) {
    result["notes"] = "";
  }
  return { ...result };
};

const wikiFetchAll = async (...encodedItemNames) => {
  const data = {};
  console.log(`Fetching data for ${encodedItemNames.length} items. This might take a while.`);
  const fetchedData = await Promise.all(encodedItemNames.map(name => wikiFetchSingle(name)));
  console.log("Finished fetching data.");

  for (let i = 0; i < encodedItemNames.length; i++) {
    data[encodedItemNames[i]] = fetchedData[i];
  }

  return data;
}

module.exports = wikiFetchAll;