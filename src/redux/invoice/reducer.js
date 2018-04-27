import { Map } from "immutable";
import invoiceActions from "./action";

const initState = new Map({
  invoices: [],
  seectedId: null,
  editView: false
});

export default function invoiceReducer(state = initState, action) {
  switch (action.type) {
    case invoiceActions.CHANGE_INVOICE:
      return state.set("seectedId", action.id).set("editView", false);
    case invoiceActions.ADD_INVOICE:
      return state
        .set("invoices", action.invoices)
        .set("seectedId", action.selectedId)
        .set("editView", true);
    case invoiceActions.EDIT_INVOICE:
      return state.set("invoices", action.invoices);
    case invoiceActions.DELETE__INVOICE:
      return state
        .set("invoices", action.invoices)
        .set("seectedId", action.seectedId);
    case invoiceActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}