import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import history from '../utils/history';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
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
  }
}

export default App;
