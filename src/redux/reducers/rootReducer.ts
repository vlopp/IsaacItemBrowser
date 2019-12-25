import { Store } from "$redux/store/Store";
import { searchItems } from "$root/searchItems";

export default function rootReducer(state = new Store(), action): Store {
  switch (action.type) {
    case "FILTER_ITEMS":
      return { ...state, currentItems: searchItems(...action.payload) };
    case "DESCRIBE_ITEM":
      return { ...state, describedItem: action.payload.itemName };
  }
  return state;
}
