import { clearErrorWithTimeout, setErrorWithTimeout } from '../actions/error';
import {
  SET_ERROR,
  SET_POST,
  SET_USER,
  LOGOUT_USER,
  SET_POST_LIST
} from '../actions/types';

export default store => next => action => {
  next(action);
  switch (action.type) {
    case SET_POST:
    case SET_USER:
    case LOGOUT_USER:
    case SET_POST_LIST:
      if (store.getState().error) store.dispatch(clearErrorWithTimeout());
      break;

    case SET_ERROR:
      store.dispatch(setErrorWithTimeout());
      break;

    default:
      break;
  }
};
