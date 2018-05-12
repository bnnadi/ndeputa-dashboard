import instance from './base';

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