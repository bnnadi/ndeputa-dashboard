import { Map } from "immutable";
import actions from "./actions";

const initState = new Map({
  organizations: [],
  selectedId: null,
  seectedColor: null
});

export default function organizationReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_ORGANIZATION:
      return state
        .set("selectedId", action.selectedId)
        .set("seectedColor", action.seectedColor);
    case actions.ADD_ORGANIZATION:
      return state
        .set("organizations", action.organizations)
        .set("selectedId", action.selectedId);
    case actions.EDIT_ORGANIZATION:
      return state.set("organizations", action.organizations);
    case actions.DELETE_ORGANIZATION:
      return state
        .set("organizations", action.organizations)
        .set("selectedId", action.selectedId);
    case actions.CHANGE_COLOR:
      return state
        .set("organizations", action.organizations)
        .set("seectedColor", action.seectedColor);
    default:
      return state;
  }
}
