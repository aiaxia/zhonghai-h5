// import { Route, Router, Switch } from 'dva/router';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Index from './pages/index/index';
import Menu from './pages/menu/menu';
import City from './pages/city/city';
import Detail from './pages/detail/detail';

function RouterConfig({ history }) {
  return (
    // <Router history={history}>
    //   <Switch>
        <BrowserRouter>
          <Route path="/" exact component={Index} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/city" component={City} />
          <Route path="/detail" component={Detail} />
        </BrowserRouter>
    //   </Switch>
    // </Router>
  );
}

export default RouterConfig;
