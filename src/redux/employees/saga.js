import { all, call, takeEvery, put } from 'redux-saga/effects';
import employeeActions from './actions';
import actions from '../auth/actions';
import appActions from '../app/actions';
import employeeService from '../../services/employee';
import Log from '../../helpers/Log';

function* fetchEmployees() {
  Log.info('fetching..', 'employee saga')
  try {
    const result = yield call(employeeService.getEmployees);
    Log.info(result, 'Employee Fetch');
    yield put({
      type: employeeActions.FETCH_SUCCESS,
      employees: result,
    });
  } catch (e) {
    Log.error(e.message, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      error: e.response.data
    });
  };
}

function* getEmployee() {
  try {
    const result = yield call(employeeService.getEmployee);
    yield put({
      type: employeeActions.FETCH_SUCCESS,
      employees: result,
    });
  } catch (e) {
    Log.error(e.message, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      error: e.response.data
    });
  };
}

function* addEmployee() {
  try {
    const result = yield call(employeeService.addEmployee);
    yield put({
      type: employeeActions.FETCH_SUCCESS,
      employees: result,
    });
  } catch (e) {
    Log.error(e.message, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      error: e.response.data
    });
  };
}
function* editEmployee() {
  try {
    const result = yield call(employeeService.updateEmployee);
    yield put({
      type: employeeActions.FETCH_SUCCESS,
      employees: result,
    });
  } catch (e) {
    Log.error(e.message, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      error: e.response.data
    });
  };
}
function* deleteEmployee(payload) {
  try {
    const result = yield call(employeeService.deleteEmployee);
    yield put({
      type: employeeActions.FETCH_SUCCESS,
      employees: result,
    });
  } catch (e) {
    Log.error(e.message, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      error: e.response.data
    });
  };
}
function* fetchError(payload) {
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
}
export default function* rootSaga() {
  yield all([
    takeEvery('FETCH_EMPLOYEES', fetchEmployees),
    takeEvery('FETCH_ERROR', fetchError),
    takeEvery('CHANGE_EMPLOYEE', getEmployee),
    takeEvery('ADD_EMPLOYEE', addEmployee),
    takeEvery('EDIT_EMPLOYEE', editEmployee),
    takeEvery('DELETE__EMPLOYEE', deleteEmployee)
  ]);
}
