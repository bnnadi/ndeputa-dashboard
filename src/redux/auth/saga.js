import { all, call, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, clearToken, clearUser } from '../../helpers/utility';
import actions from './actions';
import authService from '../../services/auth';
import Log from '../../helpers/Log';

function* loginRequest({payload}) {
    try {
      const result = yield call(authService.login, payload)

      Log.info(result, 'Login Request');
      yield put({
        type: actions.LOGIN_SUCCESS,
        user: result.user,
        token: result.token
      });
    } catch (e) {
      Log.error(e, 'Login Request Error');
      yield put({
        type: actions.LOGIN_ERROR,
        e
      });
    }
}

function* loginSuccess(payload) {
  Log.info(payload.token, 'Login Success token');
  Log.info(payload.user, 'Login Success user');
    yield localStorage.setItem('token', payload.token);
    yield localStorage.setItem('user', JSON.stringify(payload.user));
    yield put(push('/'))
}

function* loginError({payload}) {
  Log.error(payload, 'Login Error');
}

function* logout() {
    yield call(authService.logout())
    clearToken();
    clearUser();
    yield put(push('/login'));

}
function* checkAuthorization() {
    const token = getToken().get('token');
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token,
        profile: 'Profile'
      });
    }
}
export default function* rootSaga() {
  yield all([
    takeEvery('CHECK_AUTHORIZATION',checkAuthorization),
    takeEvery('LOGIN_REQUEST',loginRequest),
    takeEvery('LOGIN_SUCCESS',loginSuccess),
    takeEvery('LOGIN_ERROR',loginError),
    takeEvery('LOGOUT',logout)
  ]);
}
