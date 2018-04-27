import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* addEmployee() {
  yield takeEvery(actions.ADD_EMPLOYEE, function*() {});
}
export function* editEmployee() {
  yield takeEvery(actions.EDIT_EMPLOYEE, function*() {});
}
export function* deleteEmployee() {
  yield takeEvery(actions.DELETE__EMPLOYEE, function*() {});
}
export default function* rootSaga() {
  yield all([fork(addEmployee), fork(editEmployee), fork(deleteEmployee)]);
}
