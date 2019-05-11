import { createStore, applyMiddleware, compose } from 'redux';
import auth from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ auth }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
