import { Map } from "immutable";
import employeeActions from "./actions";

const initState = new Map({
  employees: null,
  seectedId: null,
  editView: false
});

export default function employeeReducer(state = initState, action) {
  switch (action.type) {
    case employeeActions.FETCH_SUCCESS:
      return state.set("employees", action.employees)
    case employeeActions.CHANGE_EMPLOYEE:
      return state.set("seectedId", action.id).set("editView", false);
    case employeeActions.ADD_EMPLOYEE:
      return state
        .set("employees", action.employees)
        .set("seectedId", action.selectedId)
        .set("editView", true);
    case employeeActions.EDIT_EMPLOYEE:
      return state.set("employees", action.employees);
    case employeeActions.DELETE__EMPLOYEE:
      return state
        .set("employees", action.employees)
        .set("seectedId", action.seectedId);
    case employeeActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}
