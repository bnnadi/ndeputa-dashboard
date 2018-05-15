import api from '../config';
import { getToken } from '../helpers/utility';

  
export const employeeService = {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  addPhone,
  updatePhone,
  addAddress,
  updateAddress,
  removePhone,
  removeAddress,
  deleteEmployee
};


function getEmployees() {
  const requestOptions = {
    method: 'GET',
    headers: getToken()
  };
  return fetch(api.url + 'employees.json', requestOptions)
};

    function getEmployee() {
      const requestOptions = {
        method: 'GET',
        headers: getToken()
      };
      return fetch(api.url + 'employee.json', requestOptions)
    };

    function addEmployee() {
      const requestOptions = {
        method: 'POST',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee.json', requestOptions)
    };

    function updateEmployee() {
      const requestOptions = {
        method: 'PUT',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee.json', requestOptions)
    };

    function addPhone(id) {
      const requestOptions = {
        method: 'POST',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee/'+id+'/addAddress.json', requestOptions)
    };

    function addAddress(id) {
      const requestOptions = {
        method: 'POST',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee/'+id+'/addAddress.json', requestOptions)
    };

    function updatePhone(id) {
      const requestOptions = {
        method: 'PUT',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee/'+id+'/updateAddress.json', requestOptions)
    };

    function updateAddress(id) {
      const requestOptions = {
        method: 'PUT',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee/'+id+'/updateAddress.json', requestOptions)
    };

    function removePhone(id) {
      const requestOptions = {
        method: 'PUT',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee/'+id+'/removeAddress.json', requestOptions)
    };

    function removeAddress(id) {
      const requestOptions = {
        method: 'PUT',
        headers: { ...getToken(), 'Content-Type': 'application/json' }
      };
      return fetch(api.url + 'employee/'+id+'/removeAddress.json', requestOptions)
    };

    function deleteEmployee(id) {
      const requestOptions = {
        method: 'DELETE',
        headers: getToken()
      };
      return fetch(api.url + 'employee/'+id+'.json', requestOptions)
    };
