import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');

if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default {
    getEmployees() {
      return instance.get('employees.json')
    },
    getEmployee() {
      return instance.get('employee.json')
    },
    addEmployee() {
      return instance.post('employee.json')
    },
    updateEmployee() {
      return instance.put('employee.json')
    },
    addPhone(id) {
      return instance.post('employee/'+id+'/addAddress.json')
    },
    addAddress(id) {
      return instance.post('employee/'+id+'/addAddress.json')
    },
    updatePhone(id) {
      return instance.put('employee/'+id+'/updateAddress.json')
    },
    updateAddress(id) {
      return instance.put('employee/'+id+'/updateAddress.json')
    },
    removePhone(id) {
      return instance.put('employee/'+id+'/removeAddress.json')
    },
    removeAddress(id) {
      return instance.put('employee/'+id+'/removeAddress.json')
    },
    deleteEmployee(id) {
      return instance.delete('employee/'+id+'.json')
    },
 }