import { all, call, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, clearToken, clearUser } from '../../helpers/utility';
import actions from './actions';
import appActions from '../app/actions';
import { authService } from '../../services/auth.service';

import Log from '../../helpers/Log';

function* loginRequest({payload}) {
    try {
      const result = yield call(authService.login, payload)

      yield put({
        type: actions.LOGIN_SUCCESS,
        user: result.user,
        token: result.token
      });
    } catch (e) {
      yield put({
        type: actions.LOGIN_ERROR,
        e
      });
    }
}

function* loginSuccess(payload) {
    yield localStorage.setItem('token', payload.token);
    if(payload.user)
      yield localStorage.setItem('user', JSON.stringify(payload.user));
    yield put(push('/dashboard'))
}

function* loginError({payload}) {
  Log.error(payload, 'Login Error');
  clearToken();
  clearUser();
  const flash = {
    show: true,
    type: 'error',
    message: 'Login Error',
    description: payload.errors
  };
  yield put({
    type: appActions.SHOW_FLASH,
    flash
  })
}

function* logout() {
    yield call(authService.logout())
    clearToken();
    clearUser();
    yield put(push('/'));

}
function* checkAuthorization() {
    const token = getToken();
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token
      });
    }
}
function* authorizationError() {
  clearToken();
  clearUser();
  const flash = {
    show: true,
    type: 'error',
    message: 'Authorization failed',
    description: ''
  };
  yield all([
    put({
      type: appActions.SHOW_FLASH,
      flash
    }),
    put(push('/'))
  ])
  // yield put();
  // yield put(push('/'));
}
export default function* rootSaga() {
  yield all([
    takeEvery('AUTHORIZATION_ERROR',authorizationError),
    takeEvery('CHECK_AUTHORIZATION',checkAuthorization),
    takeEvery('LOGIN_REQUEST',loginRequest),
    takeEvery('LOGIN_SUCCESS',loginSuccess),
    takeEvery('LOGIN_ERROR',loginError),
    takeEvery('LOGOUT',logout)
  ]);
}
