// import { employees } from './reducer';

function ascendingSort(employee1, employee2) {
  const name1 = employee1.name ? employee1.name.toUpperCase() : '~';
  const name2 = employee2.name ? employee2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const employeeActions = {
  FETCH_EMPLOYEES: 'FETCH_EMPLOYEES',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  ADD_EMPLOYEE: 'ADD_EMPLOYEE',
  EDIT_EMPLOYEE: 'EDIT_EMPLOYEE',
  DELETE__EMPLOYEE: 'DELETE__EMPLOYEE',
  CHANGE_EMPLOYEE: 'CHANGE_EMPLOYEE',
  EDIT_VIEW: 'EDIT_VIEW',
  changeEmployee: (id) => ({
    type: employeeActions.CHANGE_EMPLOYEE,
    id,
  }),
  fetchEmployees: () => ({
    type: employeeActions.FETCH_EMPLOYEES,
  }),
  addEmployee: (newEmployee) => ({
    type: employeeActions.ADD_EMPLOYEE,
    employee: newEmployee,
  }),
  editEmployee: (employee) => {
    return (dispatch, getState) => {
      const employees = getState().Employees.get('employees');
      const newEmployees = [];
      employees.forEach(emp => {
        if (emp.id === employee.id) {
          newEmployees.push(employee);
        } else {
          newEmployees.push(emp);
        }
      });
      dispatch({
        type: employeeActions.EDIT_EMPLOYEE,
        employees: newEmployees.sort(ascendingSort),
      });
    }
  },
  deleteEmployee: (id) => {
    return (dispatch, getState) => {
      const employees = getState().Employees.get('employees');
      const seectedId = getState().Employees.get('seectedId');
      const newEmployees = [];
      employees.forEach(emp => {
        if (emp.id === id) {
        } else {
          newEmployees.push(emp);
        }
      });
      dispatch({
        type: employeeActions.DELETE__EMPLOYEE,
        employees: newEmployees,
        seectedId: id === seectedId ? undefined : seectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: employeeActions.EDIT_VIEW,
    view,
  }),
};
export default employeeActions;