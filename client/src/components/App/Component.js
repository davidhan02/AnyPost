import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import HeaderContainer from '../Header/Container';
import history from '../../utils/history';
import theme from '../../styles/theme';
import React from 'react';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = ({ dark }) => (
  <Theme theme={theme(dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={SurveyNew} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;
