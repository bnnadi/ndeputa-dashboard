import { Map } from "immutable";
import actions from "./actions";

const colors = ["#7ED321", "#de1b1b", "#511E78", "#ff9009", "#42a5f5"];
const initState = new Map({
  notes: [],
  colors,
  selectedId: null,
  seectedColor: null
});

export default function noteReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_NOTE:
      return state
        .set("selectedId", action.selectedId)
        .set("seectedColor", action.seectedColor);
    case actions.ADD_NOTE:
      return state
        .set("notes", action.notes)
        .set("selectedId", action.selectedId);
    case actions.EDIT_NOTE:
      return state.set("notes", action.notes);
    case actions.DELETE_NOTE:
      return state
        .set("notes", action.notes)
        .set("selectedId", action.selectedId);
    case actions.CHANGE_COLOR:
      return state
        .set("notes", action.notes)
        .set("seectedColor", action.seectedColor);
    default:
      return state;
  }
}