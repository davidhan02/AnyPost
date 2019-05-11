import './styles/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './utils/store';
import AppContainer from './components/App/Container';
import { Provider } from 'react-redux';
import * as serviceWorker from './utils/serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
