import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import theme from '../reducers/theme';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ auth, theme }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
