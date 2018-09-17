import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routePaths from './shared/settings/routePaths';

import Home from './Home';
import Links from './Links';
import AboutUs from './AboutUs';

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route path={routePaths.HOME} component={Home} exact />
        <Route path={routePaths.ABOUT_US} component={AboutUs} exact />
      </Switch>
    </div>
  </Router>
);

export default App;
