import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import history from '../../utils/history';
import theme from '../../styles/theme';
import React from 'react';

import Header from '../Header/Component';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = ({ dark }) => (
  <ThemeProvider theme={theme(dark)}>
    <Router history={history}>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/surveys" component={SurveyNew} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    </Router>
  </ThemeProvider>
);

export default App;
