import { Map } from "immutable";
import actions from "./actions";

const initState = new Map({
  products: [],
  selectedId: null
});

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_PRODUCT:
      return state
        .set("selectedId", action.selectedId);
      case actions.FETCH_PRODUCT:
        return state.set("products", action.products);
    case actions.ADD_PRODUCT:
      return state
        .set("products", action.products)
        .set("selectedId", action.selectedId);
    case actions.EDIT_PRODUCT:
      return state.set("products", action.products);
    case actions.DELETE_PRODUCT:
      return state
        .set("products", action.products)
        .set("selectedId", action.selectedId);
    default:
      return state;
  }
}