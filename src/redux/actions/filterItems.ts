import {searchItems} from "$root/searchItems";

export const filterItems = (...prefixes) => {
    return {type: 'FILTER_ITEMS', payload: prefixes}
}