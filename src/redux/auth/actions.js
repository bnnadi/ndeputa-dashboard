const actions = {
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  login: obj => ({
        type: actions.LOGIN_REQUEST,
        payload: { obj }
  }),
  logout: () => {
    return(dispatch, getState) => {
      dispatch({
        type: actions.LOGOUT
      })
    }
  }
};
export default actions;
