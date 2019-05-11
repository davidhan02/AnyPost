import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import React from 'react';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = props => (
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
);

export default App;
