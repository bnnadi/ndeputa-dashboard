import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import customerSagas from './customers/saga';
import employeeSagas from './employees/saga';
import productSagas from './product/saga';
import invoicesSagas from './invoice/saga';
// import mailSagas from './mail/saga';
import notesSagas from './notes/saga';
import todosSagas from './todos/saga';
// import organziationSaga from './organization/saga';
import userSaga from './user/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    customerSagas(),
    employeeSagas(),
    productSagas(),
    notesSagas(),
    todosSagas(),
    // organziationSaga(),
    invoicesSagas(),
    userSaga(),
  ]);
}
