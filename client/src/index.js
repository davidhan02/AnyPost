import './styles/style.css';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import { FETCH_USER } from './actions/types';
import AppContainer from './components/App/Container';
import * as serviceWorker from './utils/serviceWorker';

const jsx = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

axios.get('/api/current_user').then(res => {
  store.dispatch({ type: FETCH_USER, payload: res.data });
  renderApp();
});

serviceWorker.unregister();
