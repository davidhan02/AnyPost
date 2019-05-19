import axios from 'axios';
import { SET_POSTS, SET_POST_LOADING } from './types';

export const setPostLoading = () => ({
  type: SET_POST_LOADING
});

export const setPosts = () => async dispatch => {
  dispatch(setPostLoading);
  try {
    const posts = await axios.get('/api/posts/all');
    dispatch({
      type: SET_POSTS,
      payload: posts.data
    });
  } catch (err) {
    dispatch({
      type: SET_POSTS,
      payload: null
    });
  }
};
