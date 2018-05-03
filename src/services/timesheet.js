import instance from './base';
import { getToken } from '../helpers/utility';

const token = getToken().get('token');
console.log(token);

if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default {
    getTimesheets() {
        return instance.get('timesheets.json');
    },
    getTimesheet() {
        return instance.get('timesheet.json');
    },
    updateTimesheet() {
        return instance.get('timesheet.json');
    },
    deleteTimesheet() {
        return instance.get('timesheet/:id.json');
    }
};