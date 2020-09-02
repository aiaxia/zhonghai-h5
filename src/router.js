import { Route, Router, Switch } from 'dva/router';
import React from 'react';
import Index from './pages/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
