import { FETCH_USER } from '../actions/types';
import isEmpty from '../utils/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
