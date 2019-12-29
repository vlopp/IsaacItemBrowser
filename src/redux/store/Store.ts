import {searchItems} from "$root/searchItems";

export class Store {
    currentItems:string[] = searchItems();
    describedItem:string = "Undefined";
}
