import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import HeaderContainer from '../Header/Container';
import LoginContainer from '../Login/Container';
import history from '../../utils/history';
import theme from '../../styles/theme';
import React from 'react';

import styled from 'styled-components/macro';

const Placeholder = styled.h2`
  text-align: center;
`;

const Dashboard = () => <Placeholder>Dashboard</Placeholder>;
const SurveyNew = () => <Placeholder>SurveyNew</Placeholder>;
const Landing = () => <Placeholder>Landing</Placeholder>;

const App = ({ dark }) => (
  <Theme theme={theme(dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <HeaderContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={SurveyNew} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;
