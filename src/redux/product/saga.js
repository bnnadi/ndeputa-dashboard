import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* fetchProducts() {
  yield takeEvery(actions.FETCH_PRODUCT, function*() {});
}
export function* addProduct() {
  yield takeEvery(actions.ADD_PRODUCT, function*() {});
}
export function* editProduct() {
  yield takeEvery(actions.EDIT_PRODUCT, function*() {});
}
export function* deleteProduct() {
  yield takeEvery(actions.DELETE__PRODUCT, function*() {});
}
export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
    fork(addProduct),
    fork(editProduct),
    fork(deleteProduct),
  ]);
}
