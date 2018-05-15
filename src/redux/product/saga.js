import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import actions from '../auth/actions';
import appActions from '../app/actions';
import productAction from './actions';
import {productService} from '../../services/product.service';
import Log from '../../helpers/Log';

export function* fetchProducts() {
  yield takeEvery(productAction.FETCH_PRODUCTS, function*() {
    Log.info('fetching..', 'product saga')
    try {
      const result = yield call(productService.getProducts);
      Log.info(result, 'Product Fetch');
      yield put({
        products: result,
      });
    } catch (e) {
      Log.error(e.message, 'Fetch product Error');
      yield put({
        type: productAction.FETCH_ERROR,
        error: e.response.data
      });
    };
  });
}
export function* addProduct() {
  yield takeEvery(productAction.ADD_PRODUCT, function*() {});
}
export function* editProduct() {
  yield takeEvery(productAction.EDIT_PRODUCT, function*() {});
}
export function* deleteProduct() {
  yield takeEvery(productAction.DELETE__PRODUCT, function*() {});
}
export function* fetchError() {
  yield takeEvery(productAction.FETCH_ERROR, function*(payload) {
    Log.error(payload, 'Fetch Error Method');
    if(!payload.error.isValid) {
      yield put({
        type: actions.AUTHORIZATION_ERROR
      })
    } else {
      const flash = {
        show: true,
        type: 'error',
        message: 'Fetch Error',
        description: payload.error.message
      };
      yield put({
        type: appActions.SHOW_FLASH,
        flash
      })
    } 
  });
}
export default function* rootSaga() {
  yield all([
    fork(fetchProducts),
    fork(addProduct),
    fork(editProduct),
    fork(deleteProduct),
    fork(fetchError)
  ]);
}
