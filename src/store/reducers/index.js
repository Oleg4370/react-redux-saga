import { combineReducers } from 'redux';
import { USER_LOGOUT } from '../actions';
import user from './user';

const appReducer = combineReducers({
  user
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
