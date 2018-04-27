import { Map } from 'immutable';
import actions from './actions';

const colors = ['#7ED321', '#de1b1b', '#511E78', '#ff9009', '#42a5f5'];

const initState = new Map({
  timesheets: [],
  colors
});

export default function timesheetReducer(state = initState, action) {
  const timesheets = state.get('timesheets');
  const newtimesheets = [];
  switch (action.type) {
    case actions.CHANGE_TIMESHEET:
      return state.set('timesheets', action.timesheets);
    case actions.EDIT_TIMESHEET:
      timesheets.forEach(timesheet => {
        timesheet.completed = true;
        newtimesheets.push(timesheet);
      });
      return state.set('timesheets', newtimesheets);
    case actions.DELETE_COMPLETED:
      timesheets.forEach(todo => {
        if (todo.completed !== true) {
          newtimesheets.push(todo);
        }
      });
      return state.set('timesheets', newtimesheets);
    default:
      return state;
  }
}
