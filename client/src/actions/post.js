import axios from 'axios';
import { SET_POST_LIST, SET_POST_LOADING } from './types';

export const setPostLoading = () => ({
  type: SET_POST_LOADING
});

export const getPosts = () => async dispatch => {
  dispatch(setPostLoading);
  try {
    const posts = await axios.get('/api/posts/all');
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
