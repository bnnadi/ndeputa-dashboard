const actions = {
    CHANGE_TIMESHEET: 'CHANGE_TIMESHEET',
    EDIT_TIMESHEET: 'EDIT_TIMESHEET',
    ALL_COMPLETED: 'ALL_COMPLETED',
    DELETE_COMPLETED: 'DELETE_COMPLETED',
  

    edittimesheet: (edittimesheet) => {
      return (dispatch, getState) => {
        const oldTodos = getState().Timesheets.get('todos');
        const todos = [];
        oldTodos.forEach(todo => {
          if (todo.id !== edittimesheet.id) {
            todos.push(todo);
          } else {
            todos.push(edittimesheet);
          }
        });
        dispatch({
          type: actions.CHANGE_TODO,
          todos,
        });
      };
    },
    changetimesheet: (id) => {
      return (dispatch, getState) => {
        const oldTodos = getState().Todos.get('todos');
        const todos = [];
        oldTodos.forEach(todo => {
          if (todo.id !== id) {
            todos.push(todo);
          }
        });
        dispatch({
          type: actions.CHANGE_TODO,
          todos,
        });
      };
    },
  };
  export default actions;