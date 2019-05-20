import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import ErrorDisplayContainer from '../ErrorDisplay/Container';
import RegisterContainer from '../Register/Container';
import GlobalStyle from '../../styles/globalStyle';
import PrivateRoute from '../shared/PrivateRoute';
import PostFormContainer from '../PostForm/Container';
import HeaderContainer from '../Header/Container';
import LoginContainer from '../Login/Container';
import history from '../../utils/history';
import theme from '../../styles/theme';
import Body from '../Body';
import React from 'react';

const App = ({ dark }) => (
  <Theme theme={theme(dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <HeaderContainer />
        <ErrorDisplayContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <PrivateRoute path="/create" component={PostFormContainer} />
          <Route path="/" component={Body} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;
