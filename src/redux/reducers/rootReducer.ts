import { Store } from "$redux/store/Store";
import { searchItems } from "$root/searchItems";

export default function rootReducer(state = new Store(), action): Store {
  switch (action.type) {
    case "FILTER_ITEMS":
      const currentItems = searchItems(...action.payload);
      return {
        ...state,
        currentItems,
        describedItem:
          currentItems.length === 1 ? currentItems[0] : state.describedItem
      };
    case "DESCRIBE_ITEM":
      return { ...state, describedItem: action.payload.itemName };
  }
  return state;
}
