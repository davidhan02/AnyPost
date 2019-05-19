import axios from 'axios';
import { SET_USER, SET_ERROR, SET_USER_LOADING, CLEAR_ERROR } from './types';

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const setUserLoading = () => ({
  type: SET_USER_LOADING
});

export const logoutUser = () => dispatch => {
  axios.get('/api/logout');
  dispatch({ type: SET_USER, payload: {} });
};

export const setUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: SET_USER, payload: res.data });
};

export const postLogin = formValues => async dispatch => {
  dispatch(setUserLoading());
  try {
    const user = await axios.post('/api/login', formValues);
    dispatch({
      type: SET_USER,
      payload: user.data
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
  }
};

export const postRegister = formValues => async dispatch => {
  dispatch(setUserLoading());
  try {
    const user = await axios.post('/api/register', formValues);
    dispatch({
      type: SET_USER,
      payload: user.data
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.response.data
    });
  }
};
