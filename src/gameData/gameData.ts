import items from './items.json';
import tags from './tags.json';
import sprites from './sprites.png';

const itemNames = Object.keys(items);
// @ts-ignore
const {multiwordTags, tagList} = tags;
export {items, multiwordTags, tagList, sprites, itemNames};