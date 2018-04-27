import { all, takeEvery, fork } from 'redux-saga/effects';
import invoiceActions from './action';

export function* addInvoice() {
  yield takeEvery(invoiceActions.ADD_INVOICE, function*() {});
}
export function* editInvoice() {
  yield takeEvery(invoiceActions.EDIT_INVOICE, function*() {});
}
export function* deleteInvoice() {
  yield takeEvery(invoiceActions.DELETE__INVOICE, function*() {});
}
export default function* rootSaga() {
  yield all([fork(addInvoice), fork(editInvoice), fork(deleteInvoice)]);
}