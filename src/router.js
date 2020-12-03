import { Router, Route, Switch } from 'dva/router';
import React from 'react';
import Index from './pages/index/index';
// import Menu from './pages/menu/menu';
// import City from './pages/city/city';
// import Detail from './pages/detail/detail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Index} />
            {/* <Route path="/menu" exact component={Menu} />
            <Route path="/city" component={City} />
            <Route path="/detail" component={Detail} /> */}
        </Switch>
    </Router>
  );
}

export default RouterConfig;
