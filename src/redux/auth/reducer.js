import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ token: null, user: null });

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return state.set('token', action.token).set('user', action.user);
    case actions.LOGIN_ERROR:
      return state.set('error', action.error);
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}
