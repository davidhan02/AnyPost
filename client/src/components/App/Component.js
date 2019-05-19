import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import RegisterContainer from '../Register/Container';
import GlobalStyle from '../../styles/globalStyle';
import HeaderContainer from '../Header/Container';
import LoginContainer from '../Login/Container';
import history from '../../utils/history';
import Body from '../Body';
import theme from '../../styles/theme';
import React from 'react';

const App = ({ dark }) => (
  <Theme theme={theme(dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <HeaderContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/" component={Body} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;
