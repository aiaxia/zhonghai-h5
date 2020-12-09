import { Router, Route, Switch } from 'dva/router';
import React from 'react';
import Index from './pages/index/index';
import Zsdetail from './pages/zsdetail/zsdetail';
import Introduce from './pages/introduce/introduce';
// import Detail from './pages/detail/detail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/zsdetail" exact component={Zsdetail} />
            <Route path="/introduce" component={Introduce} />
            {/* <Route path="/detail" component={Detail} /> */}
        </Switch>
    </Router>
  );
}

export default RouterConfig;
