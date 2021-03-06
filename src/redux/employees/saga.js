import { all, call, takeEvery, put } from 'redux-saga/effects';
import employeeActions from './actions';
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
    Log.error(e, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      e
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
    Log.error(e, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      e
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
    Log.error(e, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      e
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
    Log.error(e, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      e
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
    Log.error(e, 'Fetch employee Error');
    yield put({
      type: employeeActions.FETCH_ERROR,
      e
    });
  };
}
export default function* rootSaga() {
  yield all([
    takeEvery('FETCH_EMPLOYEES', fetchEmployees),
    takeEvery('CHANGE_EMPLOYEE', getEmployee),
    takeEvery('ADD_EMPLOYEE', addEmployee),
    takeEvery('EDIT_EMPLOYEE', editEmployee),
    takeEvery('DELETE__EMPLOYEE', deleteEmployee)
  ]);
}
