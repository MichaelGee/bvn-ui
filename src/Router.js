import React from 'react';
import Onboarding from 'components/pages/Onboarding';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={Onboarding}
          exact
          path='/'
        />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
