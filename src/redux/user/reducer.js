import { Map } from "immutable";
import userAction from "./actions";

const initState = new Map({
  user: {}
});

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case userAction.FETCH_USER:
      return state.set("user", action.user);
    case userAction.ADD_USER:
      return state
        .set("user", action.user)
        .set("selectedId", action.selectedId);
    case userAction.EDIT_USER:
      return state.set("user", action.user);
    default:
      return state;
  }
}