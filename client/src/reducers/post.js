import {
  SET_ERROR,
  SET_POST,
  SET_POST_LIST,
  SET_POST_LOADING,
  SET_COMMENT_LOADING
} from '../actions/types';

const initialState = {
  post: null,
  postList: null,
  postLoading: false,
  commentLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        post: action.payload,
        postLoading: false
      };
    case SET_POST_LIST:
      return {
        ...state,
        postList: action.payload,
        postLoading: false
      };
    case SET_POST_LOADING:
      return {
        ...state,
        postLoading: true
      };
    case SET_COMMENT_LOADING:
      return {
        ...state,
        commentLoading: true
      };
    case SET_ERROR:
      return {
        ...state,
        postLoading: false,
        commentLoading: false
      };
    default:
      return state;
  }
};
