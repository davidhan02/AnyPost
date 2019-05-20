import axios from 'axios';
import { SET_POST_LIST, SET_POST_LOADING, SET_ERROR } from './types';

export const setPostLoading = () => ({
  type: SET_POST_LOADING
});

export const setError = err => ({
  type: SET_ERROR,
  payload: err.response.data
});

export const submitPost = (formValues, history) => async dispatch => {
  dispatch(setPostLoading);
  try {
    const post = await axios.post('/api/posts', formValues);
    history.push(`/a/${post.category}/${post.id}`);
  } catch (err) {
    dispatch(setError(err));
  }
};

export const getPosts = (category = '') => async dispatch => {
  dispatch(setPostLoading());
  try {
    const posts = await axios.get(`/api/posts/${category}`);
    dispatch({
      type: SET_POST_LIST,
      payload: posts.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const getPostsByUserId = userId => async dispatch => {
  dispatch(setPostLoading());
  try {
    const posts = await axios.get(`/api/user/${userId}`);
    dispatch({
      type: SET_POST_LIST,
      payload: posts.data
    });
  } catch (err) {
    dispatch(setError(err));
  }
};

export const submitVote = (postId, vote) => async dispatch => {
  const voteTypes = {
    '1': 'upvote',
    '0': 'unvote',
    '-1': 'downvote'
  };
  const voteType = voteTypes[vote];
  try {
    await axios.get(`/api/posts/${voteType}/${postId}`);
  } catch (err) {
    dispatch(setError(err));
  }
};
