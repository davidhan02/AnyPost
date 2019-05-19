import { SET_ERROR, CLEAR_ERROR } from './types';

const clearError = () => ({ type: CLEAR_ERROR });
const setError = error => ({ type: SET_ERROR, payload: error });

let timeout;

export const setErrorWithTimeout = error => dispatch => {
  dispatch(setError(error));
  clearTimeout(timeout);
  timeout = setTimeout(() => dispatch(clearError()), 5000);
};

export const clearErrorWithTimeout = () => dispatch => {
  dispatch(clearError());
  clearTimeout(timeout);
};
