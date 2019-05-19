import axios from 'axios';
import { SET_POST_LIST, SET_POST_LOADING } from './types';

export const setPostLoading = () => ({
  type: SET_POST_LOADING
});

export const getPosts = (category = '') => async dispatch => {
  dispatch(setPostLoading);
  try {
    const posts = await axios.get(`/api/posts/${category}`);
    dispatch({
      type: SET_POST_LIST,
      payload: posts.data
    });
  } catch (err) {
    dispatch({
      type: SET_POST_LIST,
      payload: null
    });
  }
};

export const getPostsByUserId = userId => async dispatch => {
  dispatch(setPostLoading);
  try {
    const posts = await axios.get(`/api/user/${userId}`);
    dispatch({
      type: SET_POST_LIST,
      payload: posts.data
    });
  } catch (err) {
    dispatch({
      type: SET_POST_LIST,
      payload: null
    });
  }
};
